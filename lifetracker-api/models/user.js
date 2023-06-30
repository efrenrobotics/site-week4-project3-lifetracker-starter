/* User Authentication Model */
const bcrypt = require("bcrypt");
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const config = require("../config");

class User {
  /**
   * authenticate user and assing access token
   *
   * Throws Unauthorized Error if user not found
   *
   * @param {String} email
   * @param {String} password
   * @return user
   */
  static login = async (email, password) => {
    // check that user exists in database
    const userExists = await this.fetchUserByEmail(email);
    if (userExists) {
      const isValidUser = await bcrypt.compare(password, userExists.password);
      if (isValidUser) {
        return userExists;
      }
    }
    throw new UnauthorizedError("Invalid username or password");
  };

  /**
   * Create a registered user and add user to database
   *
   * Throws BadRequest if duplicate email
   *
   * @param {String} username
   * @param {String} password
   * @param {String} first_name
   * @param {String} last_name
   * @param {String} email
   * @returns user
   */
  static register = async (
    username,
    password,
    first_name,
    last_name,
    email
  ) => {
    // handle invalid email format
    if (email.indexOf("@") > 1) {
      throw new BadRequestError(`invalid email format`);
    }
    // handle email or username exists in database
    const userExists = await this.fetchUserByEmail(email);
    const usernameExists = await this.fetchUserByUsername(username);
    if (userExists || usernameExists) {
      throw new BadRequestError(`username or email already in use`);
    }

    // encrypt password
    // generate salt for password encryption
    const saltRounds = config.BCRYPT_WORK_FACTOR;
    const salt = await bcrypt.genSalt(saltRounds);

    // hash the password/apply hash and salt to password
    const hashPassword = await bcrypt.hash(password, salt);

    // insert new user to users table
    const createdUserQuery = `
            INSERT INTO users (username, password, first_name, last_name, email)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`;

    // assign params to value array
    const values = [username, hashPassword, first_name, last_name, email];
    // crate user in table
    const user = (await db.query(createdUserQuery, values)).rows[0];
    return user;
  };

  /**
   * Find and return a user from data using their email
   *
   * @param {String} email
   * @returns user
   */
  static fetchUserByEmail = async (email) => {
    // handle invalid email
    const sqlQueryFindUser = `
        SELECT * FROM users
        WHERE email = $1`;

    // query the user from db
    const userResult = await db.query(sqlQueryFindUser, [email.toLowerCase()]);
    //store user data from query
    const user = userResult.rows[0];
    return user;
  };

  /**
   * Find and return a user from data using their email
   *
   * @param {String} username
   * @returns user
   */
  static fetchUserByUsername = async (username) => {
    const sqlQueryFindUser = `
        SELECT * FROM users
        WHERE username = $1`;

    // query the user from db
    const userResult = await db.query(sqlQueryFindUser, [username]);

    //store user data from query
    const user = userResult.rows[0];
    return user;
  };
}

module.exports = User;
