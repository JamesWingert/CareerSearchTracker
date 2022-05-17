import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(403).send('A token is required for authentication');
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };

    next();
  } catch (error) {
    return res.status(401).send('Invalid Token');
  }
};

export default auth;

// const auth = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers['x-access-token'];

//   if (!token) {
//     return res.status(403).send('A token is required for authentication');
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRETT);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send('Invalid Token');
//   }
//   return next();
// };

// export default auth;

// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//     const userId = decodedToken.userId;
//     if (req.body.userId && req.body.userId !== userId) {
//       throw 'Invalid user ID';
//     } else {
//       next();
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error('Invalid request!')
//     });
//   }
// };
