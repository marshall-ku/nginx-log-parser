export default class NginxLogParser {
    private variables: string[] = [];
    private formatRegex: RegExp;

    constructor(format: string) {
        const variableRegex = /\$(\w+)/;
        const splitted = format.split(" ");
        const delimiters: string[] = [];
        const specialCharacters = /(\[|\]|\(|\))/;

        splitted.forEach((part) => {
            const findVariable = part.match(variableRegex);

            part = part.replace(specialCharacters, "\\$1");

            if (findVariable) {
                this.variables.push(findVariable[1]);

                part = part.replace(findVariable[0], "(.+?)");
            }

            delimiters.push(part);
        });

        this.formatRegex = new RegExp(`^${delimiters.join(" ")}$`);
    }

    parse(line: string) {
        const matches = line.match(this.formatRegex);
        if (!matches) return;

        const result: { [key: string]: string } = {};

        matches.shift();

        matches.forEach((value, i) => {
            const variable = this.variables[i];
            result[variable] = value;
        });

        return result;
    }
}
