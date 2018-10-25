# streamr-socket-bridge

Launch server with `npm start`.

The socket address is localhost:18292.

The Streamr stream ID and authentication key needs to be sent initially in this format:

```json
{
  "stream": "streamid",
  "authKey": "authKey"
}
```