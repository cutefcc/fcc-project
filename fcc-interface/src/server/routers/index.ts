const Router = require('@koa/router');

const router = new Router();

export const route = app => {
  router.get(['/', 'courses'], async (ctx, next) => {
    ctx.body = '服务端成功';
  });
  app.use(router.routes()).use(router.allowedMethods());
};
