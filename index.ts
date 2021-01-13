import { createParamDecorator } from "@nestjs/common";

export const QUERY = 1 << 0;
export const BODY = 1 << 1;
export const PARAMS = 1 << 2;

// @AllData() data
// @AllData(['', BODY|QUERY]) data
// @AllData('name') data
// @AllData(['name', BODY|QUERY]) data
export const AllData: (
  key?: string | [string, number]
) => any = createParamDecorator((key: string | [string, number], ctx) => {
  const data = Object.assign({}, ctx.query, ctx.body, ctx.params);
  if (!key) return data;

  if (Array.isArray(key)) {
    const [k, flags] = key;
    const data = {};
    if (flags & QUERY) Object.assign(data, ctx.query);
    if (flags & BODY) Object.assign(data, ctx.body);
    if (flags & PARAMS) Object.assign(data, ctx.params);
    return k ? data[k] : data;
  }

  return data[key];
});
