const { createParamDecorator } = require("@nestjs/common");

const AllData = createParamDecorator((key, ctx) => {
  const data = Object.assign({}, ctx.query, ctx.body, ctx.params);
  return key ? data[key] : data;
});
module.exports = { AllData };
