const conn = require("../config/db");

exports.getReserved = (req, res) => {
  try {
    conn.query("SELECT * FROM reservasi", (err, data) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      });

      return res.status(200).json({
        status: "success",
        data: data
      });
    });
  } catch (error) {
    console.log(error)
  }
}

exports.getUsers = (req, res) => {
  try {
    conn.query("SELECT * FROM users WHERE id_reservasi = ?", [req.params.id], (err, data) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      });

      return res.status(200).json({
        status: "success",
        data: data
      });
    });
  } catch (error) {
    console.log(error)
  }
}

exports.deleteReserved = (req, res) => {
  try {
    conn.query("DELETE FROM reservasi WHERE id = ?", [req.params.id], (err, data) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      });

      return res.status(200).json({
        status: "success",
      });
    });
  } catch (error) {
    console.log(error)
  }
}