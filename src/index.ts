import http, { IncomingMessage, ServerResponse } from "http";
import os from "os";

const port = process.env.PING_LISTEN_PORT? process.env.PING_LISTEN_PORT : 3000;

const myServer = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method == "GET"){
        if (req.url == "/ping") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify({...req.headers, "hostname": os.hostname()}));
            console.log(`hostname: ${os.hostname()}`);
            res.end();
        }
        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.write(JSON.stringify({}));
            res.end();
        }
    };
});

 myServer.listen(port, () => {
    console.log("Server is running on port " + port + ". Go to http://localhost:" + port + "/");
 });
