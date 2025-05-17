import validator from "express-validator";

export const loginValidator = [
  validator.body("email").isEmail(),
  validator.body("password").isString().isStrongPassword({
    minLength: 6,
  }),
].map((val) => val.notEmpty());

export const signupValidator = [
  validator.body("name").isString().isLength({
    min: 3,
  }),
  validator.body("email").isEmail(),
  validator.body("password").isString().isStrongPassword({
    minLength: 6,
  }),
  validator.body("username").isString().isLength({
    min: 3,
  }),
].map((val) => val.notEmpty());
