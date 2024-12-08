import "server-only"

import connection from "./db";

export const executeQuery = async (sql, values = []) => {
  try {
    const [rows] = await connection.execute(sql, values);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
  }
};

export const executeNonQuery = async (sql, values = []) => {
  try {
    await connection.execute(sql, values);
    return true
  } catch (error) {
    console.error('Database non-query error:', error);
    return false
  }
};
