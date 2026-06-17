const jwt = require("jsonwebtoken");

/**
 * Generate JWT Token
 * @param {string} userId - MongoDB user _id
 */
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d", // token valid for 7 days
    }
  );
};

module.exports = generateToken;