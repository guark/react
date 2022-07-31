const path = require('path');
const { useGuarkLockFile, checkBeforeBuild } = require('guark/build')

checkBeforeBuild()

class GuarkLockPlugin {
	apply(compiler) {
		compiler.hooks.done.tap('Guark', useGuarkLockFile);
	}
}

module.exports = function override(config, env)
{
	config.output.path = process.env.GUARK_BUILD_DIR;
	config.plugins.push(new GuarkLockPlugin)
	return config
}