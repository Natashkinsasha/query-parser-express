module.exports = function (options) {
    options = Object.assign({
            parseBoolean: true,
            parseNumber: true
        }, options);
    return function (req, res, next) {
        try{
            req.query = parse(req.query, options);
        } catch(error){
            return next(error);
        }
        return next();
    };
};

function parse(query, options) {
    var newQuery = query;
    newQuery = options.parseNumber?parseNumber(newQuery):newQuery;
    newQuery = options.parseBoolean?parseBoolean(newQuery):newQuery;
    return newQuery;
}
function parseBoolean(obj) {
    return Object.keys(obj).reduce(function (result, key) {
        var value = obj[key];
        var parsedValue = value === 'true' ? true : value === 'false' ? false : value;
        if (typeof parsedValue === 'boolean') {
            result[key] = parsedValue;
        } else if (value.constructor === Object) {
            result[key] = parseBoolean(value);
        } else {
            result[key] = value;
        }
        return result;
    }, {});
}

function parseNumber(obj) {
    return Object.keys(obj).reduce(function (result, key) {
        var value = obj[key];
        var parsedValue = +value;
        if (typeof value === 'string' && !isNaN(parsedValue)) {
            result[key] = parsedValue;
        } else if (value.constructor === Object) {
            result[key] = parseNumber(value);
        } else {
            result[key] = value;
        }
        return result;
    }, {});
}


