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

exports.getDetailReservasi = (req, res) => {
  const id = req.params.id;
  console.log(id)

  try {
    conn.query("SELECT reservasi.nama, reservasi.alamat, reservasi.total_pembayaran, reservasi.status_pembayaran, paket.nama as nama_paket, paket.jarak, paket.waktu, paket.tarif, DATE_FORMAT(jadwal.jadwal, '%Y-%m-%d %H:%i:%s') AS jadwal FROM reservasi INNER JOIN paket ON reservasi.id_paket = paket.id INNER JOIN jadwal ON reservasi.id_jadwal = jadwal.id WHERE reservasi.id = ?", [id], (err, reservasi) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      });

      conn.query("SELECT * FROM users WHERE id_reservasi = ?", [id], (err, users) => {
        if (err) return res.status(500).json({
          status: 'error',
          message: err
        });

        const mergedArray = {
          reservasi,
          users
        }

        // const detailResevasi = Object.assign({}, ...mergedArray)
        // const merged = mergedArray.reduce((r, c) => ({ ...r, ...c }), {})

        // console.log(merged)

        return res.status(200).json({
          status: "success",
          data: mergedArray
        });
      });
    });
  } catch (error) {
    console.log(error)
  }
}