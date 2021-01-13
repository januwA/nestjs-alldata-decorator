"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllData = exports.PARAMS = exports.BODY = exports.QUERY = void 0;
const common_1 = require("@nestjs/common");
exports.QUERY = 1 << 0;
exports.BODY = 1 << 1;
exports.PARAMS = 1 << 2;
// @AllData() data
// @AllData(['', BODY|QUERY]) data
// @AllData('name') data
// @AllData(['name', BODY|QUERY]) data
exports.AllData = common_1.createParamDecorator((key, ctx) => {
    const data = Object.assign({}, ctx.query, ctx.body, ctx.params);
    if (!key)
        return data;
    if (Array.isArray(key)) {
        const [k, flags] = key;
        const data = {};
        if (flags & exports.QUERY)
            Object.assign(data, ctx.query);
        if (flags & exports.BODY)
            Object.assign(data, ctx.body);
        if (flags & exports.PARAMS)
            Object.assign(data, ctx.params);
        return k ? data[k] : data;
    }
    return data[key];
});
