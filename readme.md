# cani [![Build Status](https://travis-ci.org/hemanth/node-cani.svg?branch=master)](https://travis-ci.org/hemanth/node-cani)

>Can I read/write/execute this file/path?


## Install

```sh
$ npm install --save cani
```

## Usage

##### Node.js

```js
var cani = require('cani');

if( cani.write("/usr/bin") ) {
	console.log("/usr/bin is writeable");
}
```
## Properties:

`cani.read`  ->  Returns `true` if readable else `false`

`cani.write` ->  Returns `true` if writeable else `false`

`cani.exec`  ->  Returns `true` if executeable else `false`

## License

MIT © [Hemanth.HM](http://h3manth.com)
