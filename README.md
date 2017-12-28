# ZigZag Boilerplate

This boilerplate use :
- ES6 & HTML templating (optionnal) via webpack
- sass via gulp
- linters & prettier
- yarn (or npm)

This template requires
[Node.js](https://nodejs.org/) v6+,
[Webpack](http://webpack.github.io/docs/),
and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) to run.

```sh
$ npm i -g gulp webpack
```

### installation
```
$ git clone https://github.com/adrienZ/zigzag-boilerplate.git
$ cd zigzag-boilerplate
$ npm run hello
```

### commands

```
$ npm run build #production
```
```
$ npm run start #dev
```

### linters
- editorconfig : http://editorconfig.org/
- linter-sass-lint : `apm install linter-sass-lint`
- linter-eslint :
	- Atom : `apm install linter-eslint`
	- Sublime Text package : `SublimeLinter-contrib-eslint`

### TODO
- [ ] get rid of gulp
- [x] use ejs instead of html
- [x] precss ? postcss-smart-import ? eslint-import-resolver-webpack ?
- [ ] use img loader
- [ ] add alias for non code ressources
- [ ] LINTERS
- [ ] complete useless infos in package.json
- [ ] tell why this boilerplate is awesome
- [ ] split logics of js / sass / media
- [x] HTML: less <head> more `html-webpack-plugin` (favicon, title)
- [ ] easy deploy on github pages
- [ ] git user release system
- [ ] use webpack devserver core ip instead of new dependecy
- [ ] Sass structure
- [ ] pre-commit hooks
