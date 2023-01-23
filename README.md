# package-user-agent

> Get a [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) header object based on the package.json

## Install

```sh
npm install package-user-agent
```

## Usage

```js
import getPackageUserAgent from 'package-user-agent';

const packageUserAgent = await getPackageUserAgent();
// => {'User-Agent': 'package-user-agent (https://github.com/knutkirkhorn/package-user-agent)'}
```
