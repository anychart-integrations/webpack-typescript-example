[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://www.anychart.com)
# Webpack / TypeScript / AnyChart example

This example shows how to use Anychart library within the [TypeScript](http://www.typescriptlang.org/) project using [webpack](https://webpack.js.org) bundler.

## Running

Clone this repository:

```
$ git clone git@github.com:anychart-integrations/webpack-typescript-example.git
```

Navigate to the example directory:

```
$ cd webpack-typescript-example
```

To install dependencies run this command:

```
$ npm install
```

To bundle project run following command, it runs webpack with it's config (see package.json):

```
$ npm start
```

Now you may open dist/index.html file to see result.


## Package directory

```
webpack-typescript-example/
    dist/
        bundle.js           # bundled javascript file
        index.html          # html example file
    index.ts                # main TypeScript code
    package.json            # package file
    webpack.config.js       # webpack config
    tsconfig.json           # typescript config
    README.md
    LICENSE
```

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)
* [Webpack & TypeScript guide](https://webpack.js.org/guides/webpack-and-typescript)

## License
AnyChart Webpack TypeScript integration sample includes two parts:
- code of the integration sample that allows to use Javascript library (in this case, AnyChart) with Webpack and TypeScript. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/anychart-integrations/webpack-typescript-example/blob/master/LICENSE)
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/)

If you have any questions regarding licensing - please contact us. <sales@anychart.com>
[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Integrations/webpack-typescript-example?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)
