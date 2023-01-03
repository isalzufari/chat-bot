const conn = require("../config/db");

exports.getPaket = (req, res) => {
  try {
    conn.query("SELECT * FROM paket", (err, data) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      });

      return res.status(200).json({
        status: "success",
        data
      })
    })
  } catch (error) {
    console.log(error)
  }
}

exports.addPaket = (req, res) => {
  const { nama, jarak, waktu, tarif, fasilitas } = req.body;
  const id_fasilitas = Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(10).substring(0, 5);

  console.log(req.body)

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Data kosong!'
    });
  } else {
    try {
      const values = [id_fasilitas, nama, jarak, waktu, tarif];
      conn.query("INSERT INTO paket (id_fasilitas, nama, jarak, waktu, tarif) VALUES(?)", [values], (err, data) => {
        if (err) return res.status(500).json({
          status: 'error',
          message: err
        });

        try {
          for (let i = 0; i < fasilitas.length; i++) {
            const values = [id_fasilitas, fasilitas[i].value]
            conn.query("INSERT INTO fasilitas(id, fasilitas) VALUES(?)", [values], (err, data) => {
              if (err) return res.status(500).json({
                status: 'error',
                message: err
              });
            });
          }

          return res.status(200).json({
            status: 'success',
            message: 'Data paket berhasil disimpan'
          })
        } catch (error) {
          console.log(error)
        }
      });
      // res.send("Okeee")
    } catch (error) {
      console.log(error);
    }
  }
}

exports.deletePaket = (req, res) => {
  const id = req.params.id;
  try {
    conn.query("DELETE FROM paket WHERE id=?", [id], (err, data) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      });

      return res.status(200).json({
        status: "success",
        data: `Paket dengan ID: ${id} Berhasil dihapus!`
      });
    });
  } catch (error) {
    console.log(error)
  }
}