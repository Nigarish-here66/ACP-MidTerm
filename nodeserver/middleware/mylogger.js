// /server/middleware/myLogger.js
const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
  };
  
  module.exports = myLogger;
  