# tweak

```sh
git clone https://github.com/xen0bit/tweak.git
cd tweak
npm install
```

Will check if process.env.TWITCH_OAUTH_TOKEN exists. If it is not configured, defaults to read-only mode and connects to channel "emadgg"

index.js: Main wrapper for recieving messages and matching to commands

commands.js: Handlers for external library calls.

Included is an example for '!pythonexample', which will spawn a child process for running a python script and JSON is used to serialize/deserialize through STDOUT

Not limited to python, anything that writes to STDOUT in a serialized format can be hooked.