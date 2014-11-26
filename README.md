#Sprawn

### Promises and external commands!

This library wraps child_process.spawn() and handles it with promises.

```
$ npm install sprawn
```

### API

`var sprawn = require('sprawn');`

#### `sprawn.exec(cmd, args)`

Execute `cmd` with an array `args` and return a promise. Resolves if the
process returns 0, reject otherwise.


#### `sprawn.resolve(cmd, args)`

Execute `cmd` with an array `args` and return a promise. Resolves when
the process ends.
