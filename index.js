const StreamrClient = require('streamr-client');
const net = require('net');

const client = new StreamrClient({});

let server = net.createServer((socket) => {
  let sub;

  socket.on('data', (data) => {
    let stream = JSON.parse(data.toString('utf8'));
    sub = client.subscribe(
      stream,
      (message, metadata) => {
        socket.write(`${JSON.stringify(message)}\r\n`);
      }
    );
  });

  socket.on('error', (err) => {
    console.error(`Fatal error: ${err}`);
  });

  socket.on('close', (had_error) => {
    socket.destroy();
    client.unsubscribe(sub);
  });
});

server.listen(18292, '127.0.0.1');