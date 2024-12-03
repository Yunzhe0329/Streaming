const conn = require("./conn");
module.exports = {
  get: async function () {
    const conn = await conn.getDBConnection();
    if (conn == null) {
      return null;
    } else {
      try {
        const sql = "SELECT * FROM video";
        const result = await conn.query(sql);
        conn.release();
        return result;
      } catch (e) {
        console.error("Error getting users : ", e);
        conn.release();
        return null;
      }
    }
  },
};
