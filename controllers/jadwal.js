const conn = require("../config/db");

exports.getJadwalById = (req, res) => {
  const id = req.params.id;
  try {
    conn.query("SELECT id, DATE_FORMAT(jadwal, '%Y-%m-%d %H:%i:%s') AS jadwal, status FROM jadwal WHERE id_paket = ?", [id], (err, data) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      });

      console.log(data)

      return res.status(200).json({
        status: "success",
        data
      })
    })
  } catch (error) {
    console.log(error)
  }
}

exports.addJadwal = (req, res) => {
  const { id_paket, jadwal } = req.body;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Data kosong!'
    });
  } else {
    try {
      jadwal.forEach(date => {
        const values = [id_paket, date, 0];
        conn.query("INSERT INTO jadwal(id_paket, jadwal, status) VALUES(?)", [values], (err, data) => {
          if (err) return res.status(500).json({
            status: 'error',
            message: err
          });
        });
      });

      return res.status(200).json({
        status: 'success',
        message: 'Data jadwal berhasil disimpan'
      })
    } catch (error) {
      console.log(error)
    }
  }
}
