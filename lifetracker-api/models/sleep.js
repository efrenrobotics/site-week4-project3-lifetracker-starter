const db = require("../db");
const { BadRequestError } = require("../utils/errors");
const config = require("../config");

class Sleep {
  /**
   * Get all rows associated with the userID
   *
   * Throws BadRequest if no rows associate with userID
   *
   * @param {Integer} userID
   * @returns rows[]
   */
  static getSleepRows = async (userID) => {
    console.log(`userID : ${userID}`);
    const sqlGetRows = `SELECT * FROM sleep WHERE user_id = $1`;
    const rowRes = await db.query(sqlGetRows, [userID]);
    if (rowRes.rowCount > 0) {
      return rowRes.rows;
    } else {
      throw new BadRequestError(`no data corresponding to userID`);
    }
  };

  /**
   *
   * @param {*} start_time
   * @param {*} end_time
   * @param {*} userID
   * @returns
   */
  static createSleepEntry = async (start_time, end_time, userID) => {
    // const userID = this.fetchUserIDbyUsername(username);
    const sqlQuery = `INSERT INTO sleep (start_time, end_time, user_id)
        VALUES ($1, $2, $3) RETURNING *`;
    const sleepRes = await db.query(sqlQuery, [start_time, end_time, userID]);
    return sleepRes;
  };

  static fetchUserIDbyUsername = async (username) => {
    const sqlQueryFindUser = `SELECT * FROM users WHERE username = $1`;
    const userResult = await db.query(sqlQueryFindUser, [username]);
    const user = userResult.rows[0];
    return user.userID;
  };
}

module.exports = Sleep;
