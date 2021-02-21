const { spawn } = require('child_process');

exports.commands = (function () {
    return {
        pythonExample: function (client) {
            var dataFromPipe;
            // spawn new child process to call the python script
            const python = spawn('python', ['./scripts/example.py']);
            // collect data from script
            python.stdout.on('data', function (data) {
                dataFromPipe = data.toString();
            });
            // in close event we are sure that stream from child process is closed
            python.on('close', (code) => {
                //Deserialize for STDOUT
                console.log(JSON.parse(dataFromPipe));
                //Client object is available in scope, send message if needed
                //client.say(channel, `@${tags.username}, Got "pythonExample" command`);
            });
        }
    };
})();