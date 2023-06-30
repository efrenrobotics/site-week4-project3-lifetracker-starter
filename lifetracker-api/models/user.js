const bcrypt = require("bcrypt");
const db = require("../db");
const config = require("../config");

const { UnauthorizedError, BadRequestError } = require("../utils/errors");

class User {
  static register = async (
    username,
    password,
    first_name,
    last_name,
    email
  ) => {
    try {
      // handle email exists in db
      // const user = await this.fetchUserByEmail(email);
      // if (user) {
      //   throw new Error("Email already exists");
      // }

      // encrypt password
      const saltRounds = config.BCRYPT_WORK_FACTOR;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPassword = await bcrypt.hash(password, salt);

      // create a user
      const createUserQuery = `
        INSERT INTO users (username, password, first_name, last_name, email)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;

      // assign params to value array
      const values = [username, hashPassword, first_name, last_name, email];
      const result = await db.query(createUserQuery, values);

      // created a new user in users table
      const createdUser = result.rows[0];

      return createdUser;
    } catch (err) {
      console.error("Unable to register user", err);
      throw new BadRequestError(err);
    }
  };

  static login = async (email, password) => {
    // see if email exists in db
    // const emailExists = this.fetchUserByEmail(email);
    // console.log("found user email in database", emailExists);
    // if (!emailExists) throw UnauthorizedError;
  };

  // search db for givenUser and return if exists
  static fetchUserByEmail = async (email) => {
    // select user using email from table
    const sqlQueryFindUser = `
        SELECT * FROM users
        WHERE email = $1
    `;
    // query the user from the db
    const result = await db.query(sqlQueryFindUser, [email]);
    // store user data from query
    const user = result.rows[0];
    return user;
  };
}

module.exports = User;
