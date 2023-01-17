import { client as PrismaClient } from "../config/prisma.mjs";
/**
 * Middleware to validate is Master
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const middleware = (key) => {
  return async (request, response, next) => {
    const { key: username } = request.tokenInfo;
    const user = await PrismaClient.user.findUnique({
      where: { username: username },
      include: {
        rol: true,
      },
    });
    if (!user) return response.send("Trainer not found");
    if (user.rol.key !== key) return response.send(`Not ${key}`);
    return next();
  };
};
export { middleware };
