or the compile and bundle process for our `src/client` code.

&nbsp;

```js
mode: process.env.NODE_ENV || 'development',
```

This tells Webpack whether it's in `development` or some other mode, typically `production`. Are we goofing around on our local machines tinkering with a new feature and we want verbose error messages that trace back in source code where the problem occured? Or are we debugging a problem after we deploy our site and wonder why it crashed after we let our friend touch it? Webpack will have different types of outputs depending on this. Note that it defaults to `development` unless we set `NODE_ENV` as an environment variable to `production`. This is typically set for us on Heroku by default.

&nbsp;

```js
devtool: 'inline-source-map',
```

This _attempts_ to help you when developing your React app. Remember we're going through several "layers" before running our code in the browser. TypeScript React down to JavaScript React down to JavaScript DOM using `React.createElement();` and into the browser. That's a bunch of steps in between what you write and what you see running! This attempts to map back to your original source code what error or what is running the browser.

&nbsp;

```js
module: { ... },
resolve: { ... },
output: { ... },
```

Don't stress about the guts of these properties, just focus on their general purpose.

-   `module` lets us specify what to do with certain file extensions. If Webpack encounters a `.ts` extension, we provide rules, loaders, and options for it to do certain tasks when building them.
-   `resolve` this deals with how modules are "resolved." As in if we write `import 'lodash'` in ES2015, the resolve options can change where webpack goes to look for 'lodash' for us. You probably won't mess with this much.
-   `output` is where we output our bundle to, which is `public/js/app.js`.

&nbsp;

## 🔐 Closing Remarks

There are a lot of moving parts even in this _barebones_ boilerplate! This is why we provide it to you, the student, as a jumping off point. We want you to focus on coding your server code and React code. Not mess with configuration files and project setup. Keep in mind **this is not the be-all-end-all** boilerplate. You can learn what features you miss from things like `NextJS`, `GatsbyJS`, and `Create React App` and figure out how to add them to this one to make it your go-to starter.

Code, code, and code. Build shit and deploy. Get projects up and running, conceptually finished, and no matter how dumb. You will always learn something new. Challenge yourself to use different CSS Kits and libraries. Try other database connectors. Try React libraries like Redux. Even if you aren't getting paid for it, it's still valuable experience for you. So happy hacking, and have some fun!
