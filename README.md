# query-parser-express

Convert query strings to numbers and boolean for express/connect applications.

# Быстрый старт

```javascript

const queryParser = require('query-parser-express');
const express = require('express'),

app.use(queryParser(
    {
        parseBoolean: true,  // default true
        parseNumber: true,   // default true
    }
));

// { int: '4', double: '4.5', e: '60', booleanTrue: 'true', booleanFalse: 'false', object: { int:'4' } }
console.log(req.query);
// => { int: 4, double: 4.5, e: 60, booleanTrue: true, booleanFalse: false, object: { int:4 } }

```

