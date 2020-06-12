# Guark React
Guark React.js Template.

# How To Create A Template?

See vue template as a example:
https://github.com/guark/vue

## guark dev
When you run `guark dev` guark change the working directory to `ui/`, then guark runs `yarn serve --port N --host 127.0.0.1` this command should start React server with spesfic port that guark provided in `--port` argument, after the server started successfully you should call `useGuarkLockFile` function to inform guark that react server has been started successfully.

# guark build
guark runs `yarn build`, you will have a env variable `process.env.GUARK_BUILD_DIR` in your process you should build your template to that directory. after that you should copy the content of `res/static`

**Note**: you can use npm instead of yarn in guark commands: `guark build --pkg npm`

See vue template as a example:
- https://github.com/guark/vue/blob/master/ui/vue.config.js
- https://github.com/guark/vue/blob/master/ui/guark-setup.yaml

You can open a PR.
