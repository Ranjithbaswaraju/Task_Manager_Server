const { body, validationResult, header } = require("express-validator");

exports.signupValidator = [
  body("name")
    .isLength({ min: 3, max: 30 })
    .trim()
    .isString()
    .withMessage("require name"),

  body("username")
    .isLength({ min: 3, max: 10 })
    .trim()
    .isString()
    .withMessage("required username"),
  body("email")
    .isLength({ min: 3, max: 30 })
    .trim()
    .isEmail()
    .withMessage("required Email"),
  body("password")
    .isLength({ min: 3, max: 30 })
    .isAlphanumeric()
    .withMessage("require password"),

  //now erite the middle ware

  (req, res, next) => {
    const results = validationResult(req); //we will get errors
    console.log(results.isEmpty()); //checking while the array is empty

    if (!results.isEmpty()) {
      //middlewares error exported to the app.js
      const err = {
        statusCode: 400,
        message: "validation error",
        errors: results.errors,
      };
      next(err);
    }
    next();
  },
];

exports.loginValidator = [
  body("email").trim().isEmail().withMessage("required Email"),
  body("password").isString().withMessage("required password"),

  (req, res, next) => {
    const results = validationResult(req);
    if (!results.isEmpty()) {
      const err = {
        statusCode: 400,
        message: "validation error",
        errors: results.errors,
      };
      next(err);
    }
    next();
  },
];

exports.editProfileValidator=[
   body("name").optional()
    .isLength({ min: 3, max: 30 })
    .trim()
    .isString()
    .withMessage("require name"),

  body("username").optional()
    .isLength({ min: 3, max: 10 })
    .trim()
    .isString()
    .withMessage("required username"),
  body("email").optional()
    .isLength({ min: 3, max: 30 })
    .trim()
    .isEmail()
    .withMessage("required Email"),
  body("password").optional()
    .isLength({ min: 3, max: 30 })
    .isAlphanumeric()
    .withMessage("require password"),
]

exports.tokenValidator = [
  header("Authorization").isString().withMessage("required token"),
];

exports.validateMiddleware = (req, res, next) => {
  const results = validationResult(req);
  if (!results.isEmpty()) {
    const err = {
      statusCode: 400,
      message: "validation error",
      errors: results.errors,
    };
    next(err);
  }
  next();
};
