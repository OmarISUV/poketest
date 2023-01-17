import jwt from "jsonwebtoken";

/**
 * Middleware to validate auth token
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const middleware = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const SECRET = process.env.TOKEN_SECRET;
  let tokenInfo = null;
  if (token == null) return response.sendStatus(401);
  try {
    tokenInfo = jwt.verify(token, SECRET);
  } catch (err) {
    return response.sendStatus(403);
  }
  request.tokenInfo = tokenInfo;
  return next();
};

export { middleware };
