const args = require('yargs').argv;
const spawn = require('child_process').spawn;

if (!args.port || !args.host) {
	console.error("port and host args required!");
	return;
}

// args passed by guark parent process
process.env.PORT = args.port
process.env.HOST = args.host

spawn(args.pkg || "yarn", ["start"], {
	shell: true,
	cwd: process.cwd(),
	env: process.env,
	stdio: [process.stdin, process.stdout, process.stderr],
	encoding: 'utf-8',
});
