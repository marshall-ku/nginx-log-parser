# Nginx Log Parser

WIP...

## Example

```javascript
const parser = new NginxLogParser(
    '$remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"'
);

const parsed = parser.parse(
    '127.0.0.1 - - [29/Jan/2021:00:12:41 +0900] "POST / HTTP/2.0" 200 47 "https://marshall-ku.com/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36"'
);

/*

Result of console.log(parsed)

{
  remote_addr: '127.0.0.1',
  remote_user: '-',
  time_local: '29/Jan/2021:00:12:41 +0900',
  request: 'POST / HTTP/2.0',
  status: '200',
  body_bytes_sent: '47',
  http_referer: 'https://marshall-ku.com/',
  http_user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36'
}

*/
```
