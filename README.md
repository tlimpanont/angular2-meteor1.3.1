### Getting started without migration steps
```
git clone https://github.com/tlimpanont/angular2-meteor1.3.1.git
```
Use this project as a base project. Move your source codes (.ts, .css etc.) to this base project.
For example:
```
client/
  *.ts
  index.html
  collections
    *.ts
  server
    *.ts
```

## Situation
You're already working on a Meteor 1.2.^ Angular2 project
## Goal
Upgrade your current project to Meteor 1.3.^

### My steps of conversion

1. upgrade your Meteor globally ``` meteor update ```
2. create starting Meteor project based on meteor 1.3.^ 
``` 
mkdir myUpgradeProject; 
cd myUpgradeProject; 
meteor create .
```
3. replace the content of .meteor/packages with
```
# Meteor packages used by this project, one per line.
# Check this file (and the other files in this directory) into your repository.
#
# 'meteor add' and 'meteor remove' will edit this file for you,
# but you can also edit it by hand.

meteor-base             # Packages every Meteor app needs to have
mobile-experience       # Packages for a great mobile UX
mongo                   # The database Meteor supports right now
session                 # Client-side reactive dictionary for your app
jquery                  # Helpful client-side library
tracker                 # Meteor's client-side reactive programming library

es5-shim                # ECMAScript 5 compatibility for older browsers.
ecmascript              # Enable ECMAScript2015+ syntax in app code

insecure                # Allow all DB writes from clients (for prototyping)
angular2-compilers
standard-minifier-css
barbatus:ng2-minifier-js
barbatus:angular2-runtime
```
4. Make sure you have the right node deps in your package.json
```
"dependencies": {
    "angular2": "^2.0.0-beta.12",
    "angular2-meteor": "^0.5.2",
    "angular2-meteor-auto-bootstrap": "^0.5.0",
    "meteor-node-stubs": "^0.2.3"
  }
```
don't forget to do ``` meteor npm install ```

5. Create a *tsonfig.json* in the root of your project
```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5"
  },
  "files": [
    "./typings/main.d.ts"
  ]
}
```

6. Make sure you have the definitions
```
npm install typings -g
$ typings install es6-promise
$ typings install es6-shim --ambient
$ typings install meteor --ambient

```
after the install you should have a typings folder

7. create a *main.d.ts* file in the typings folder and add

```
/// <reference path="../node_modules/angular2/animate.d.ts" />
/// <reference path="../node_modules/angular2/bootstrap.d.ts" />
/// <reference path="../node_modules/angular2/bootstrap_static.d.ts" />
/// <reference path="../node_modules/angular2/common.d.ts" />
/// <reference path="../node_modules/angular2/compiler.d.ts" />
/// <reference path="../node_modules/angular2/core.d.ts" />
/// <reference path="../node_modules/angular2/http.d.ts" />
/// <reference path="../node_modules/angular2/i18n.d.ts" />
/// <reference path="../node_modules/angular2/instrumentation.d.ts" />
/// <reference path="../node_modules/angular2/router.d.ts" />
/// <reference path="../node_modules/angular2/testing.d.ts" />
/// <reference path="../node_modules/angular2/testing_internal.d.ts" />
/// <reference path="../node_modules/angular2/upgrade.d.ts" />
/// <reference path="main/ambient/es6-shim/index.d.ts" />
/// <reference path="main/ambient/meteor/index.d.ts" />
/// <reference path="main/definitions/es6-promise/index.d.ts" />
```


