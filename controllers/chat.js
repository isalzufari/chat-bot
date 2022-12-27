// import conn from "../config/db.js";
const conn = require("../config/db")

exports.getChat = (req, res, next) => {
  const send = req.body.send;
  // GLOBAL
  globalThis.id_reservasi;
  globalThis.nama_reservasi;
  globalThis.alamat_reservasi;

  globalThis.nama_paket;
  globalThis.jarak_paket;
  globalThis.waktu_paket;
  globalThis.tarif_paket;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }

  if (send === "/pesan") {
    return res.status(200).json({
      status: "success",
      data: `Hallo! Selamat datang di Muara Ciante Adventure, saya chat bot yang akan membantu kalian dalam proses reservasi! /pesan (menampilkan pilihan menu) /reservasi (memesan paket yang tersedia) /lihatpaket (menampilkan menu paket) /cekjadwal (cek jadwal tersedia)`
    });
  } else if (send === "/lihatpaket") {
    conn.query("SELECT paket.id, paket.nama, paket.jarak, paket.waktu, paket.tarif, fasilitas.fasilitas  FROM paket INNER JOIN fasilitas ON paket.id_fasilitas = fasilitas.id", (err, data) => {
      if (err) return res.status(500).json({
        status: 'error',
        message: err
      })

      const objIds = data.reduce((a, { id, nama, jarak, waktu, tarif, fasilitas }) => {
        a[id] = a[id] || { id, fasilitas: [] };
        return {
          ...a, ...{
            [id]: {
              id,
              nama,
              jarak,
              waktu,
              tarif,
              fasilitas: a[id].fasilitas.concat(fasilitas)
            }
          }
        }
      }, {})

      const mergedArray = Object.values(objIds);
      console.log(mergedArray);

      return res.status(200).json({
        status: "success",
        data: mergedArray
      });
    })

  } else if (send === "/cekjadwal") {
    return res.status(200).json({
      status: "success",
      data: `Silahkan input jadwal manual dengan format: yyyy-mm-dd-hh:mm WIB Contoh: 2022-06-21-8.00 WIB Jika waktu tidak tersedia maka bot akan mengirmkan notifikasi waktu tidak tersedia Jika waktu tersedia maka bot akan mengirmkan notifikasi waktu tersedia`
    });

  } else if (send.includes("/reservasi")) {
    const data = send.split("#");
    const reserved = data[1];

    if (reserved === "kelompok") {
      const arrUsers = data.slice(2);
      let nama = arrUsers[0];
      let tpt_lahir = arrUsers[1];
      let tgl_lahir = arrUsers[2];

      if (nama && tpt_lahir && tgl_lahir) {
        try {
          conn.query("SELECT LAST_INSERT_ID() AS id", (err, data) => {
            if (err) return res.status(500).json({
              status: 'error',
              message: err
            });

            id_reservasi = data[0].id;
            let users = []

            // Make Array of Object of multiple users
            for (let i = 0; i < arrUsers.length; i++) {
              if (i > 0 && i < 2) {
                users.push({
                  nama: arrUsers[0],
                  tpt_lahir: arrUsers[1],
                  tgl_lahir: arrUsers[2],
                })
              } else if (i > 3 && i < 5) {
                users.push({
                  nama: arrUsers[3],
                  tpt_lahir: arrUsers[4],
                  tgl_lahir: arrUsers[5],
                })
              } else if (i > 6 && i < 8) {
                users.push({
                  nama: arrUsers[6],
                  tpt_lahir: arrUsers[7],
                  tgl_lahir: arrUsers[8],
                })
              }
            }

            // Insert Database Users
            try {
              for (let i = 0; i < users.length; i++) {
                const values = [id_reservasi, users[i].nama, users[i].tpt_lahir, users[i].tgl_lahir]
                // console.log(values)
                try {
                  conn.query("INSERT INTO users (id_reservasi, nama, tpt_lahir, tgl_lahir) VALUES(?)", [values], (err, data) => {
                    if (err) return res.status(500).json({
                      status: 'error',
                      message: err
                    });
                  });
                } catch (error) {
                  console.log(error)
                }
              }

              // Update Total Pembayaran
              try {
                let total_pembayaran = tarif_paket * users.length;

                conn.query("UPDATE reservasi SET total_pembayaran = ? WHERE id = ?", [total_pembayaran, id_reservasi], (err, data) => {
                  if (err) return res.status(500).json({
                    status: 'error',
                    message: err
                  })
                });

                let review = `Review Pesanan Anda\nAtas nama: ${nama_reservasi}\nAlamat: ${alamat_reservasi}\nPaket: ${nama_paket} \nJarak: ${jarak_paket}Km - ${Math.floor(waktu_paket / 60)} jam\n Tarif: Rp ${tarif_paket} Perorang \nPeserta: ${users.length} orang\n Total Pembayaran: Rp ${tarif_paket * users.length} \nPembayaran dikirm ke rekening BCA a.n dnaowdawd 231231. \n Segera transfer dan kirim bukti foto pembayaran untuk menyelesaikan reservasi anda Atau batalkan reservasi dengan input /batalreservasi Jika mengirim bukti pembayaram, Maka bot akan mengirim notifikasi reservasi akan segara diproses`;

                return res.status(200).json({
                  status: "success",
                  data: review
                });
              } catch (error) {
                console.log(error)
              }
            } catch (error) {
              console.log(error)
            }
          });
        } catch (error) {
          console.log(error)
        }
      } else {
        return res.status(200).json({
          status: "success",
          data: `Masukkan data nama, alamat dan paket sesuai dengan format: /reservasi#atasnama#nama#alamat#kodepaket.namapaket Contoh: /reservasi#atasnama#Wahyu ward#Jakarta#1.Cihuy Atau batalkan reservasi dengan input /batalreservasi Jika masukan salah, Maka bot akan mengirim ulang pesan masukan data reservasi atas data nama, alamat dan paket`
        });
      }
    } else if (reserved === "atasnama") {
      const nama = data[2];
      const alamat = data[3];
      const id_paket = data[4].split(".")[0];

      nama_reservasi = nama; // Atas Nama Reservasi (Info /batalreservasi)
      alamat_reservasi = alamat; // Review

      if (nama && alamat && id_paket) {

        conn.query("SELECT * FROM paket WHERE id = ?", [id_paket], (err, data) => {
          if (err) return res.status(500).json({
            status: 'error',
            message: err
          })

          if (data.length === 0) {
            return res.status(200).json({
              status: "success",
              data: `Paket tidak tersedia!`
            });
          } else {
            nama_paket = data[0].nama;
            jarak_paket = data[0].jarak;
            waktu_paket = data[0].waktu;
            tarif_paket = data[0].tarif;

            const values = [id_paket, nama, alamat];
            conn.query("INSERT INTO reservasi (id_paket, nama, alamat) VALUES(?)", [values], (err, data) => {
              if (err) return res.status(500).json({
                status: 'error',
                message: err
              })

              if (!err) {
                conn.query("SELECT LAST_INSERT_ID() AS id", (err, data) => {
                  id_reservasi = data[0].id;
                });
              }

              return res.status(200).json({
                status: "success",
                data: `Status: Reserved. Silahkan input data kelompok minimal 3 orang dengan format:/reservasi#kelompok#nama#tempat_lahir#tanggal_lahir Contoh: /reservasi#kelompok#Wahyu#Bogor#1999-06-21#Zafira#Depok#2000-01-06#Ijul#Bogor#1998-07-17 Atau batalkan reservasi dengan input /batalreservasi Jika masukan tidak sesuai, maka bot akan mengirim kembali notifikasi masukan data peserta`
              });
            });
          }
        })
      } else {
        return res.status(200).json({
          status: "success",
          data: `Masukkan data nama, alamat dan paket sesuai dengan format: /reservasi#atasnama#nama#alamat#kodepaket.namapaket Contoh: /reservasi#atasnama#Wahyu ward#Jakarta#1.Cihuy Atau batalkan reservasi dengan input /batalreservasi Jika masukan salah, Maka bot akan mengirim ulang pesan masukan data reservasi atas data nama, alamat dan paket`
        });
      }
    } else {
      return res.status(200).json({
        status: "success",
        data: `Masukkan data nama, alamat dan paket sesuai dengan format: /reservasi#atasnama#nama#alamat#kodepaket.namapaket Contoh: /reservasi#atasnama#Wahyu ward#Jakarta#1.Cihuy Atau batalkan reservasi dengan input /batalreservasi Jika masukan salah, Maka bot akan mengirim ulang pesan masukan data reservasi atas data nama, alamat dan paket`
      });
    }

  } else if (send === "/batalreservasi") {
    try {
      conn.query("DELETE FROM reservasi WHERE id=?", [id_reservasi], (err, data) => {
        if (err) return res.status(500).json({
          status: 'error',
          message: err
        });

        return res.status(200).json({
          status: "success",
          data: `Resevasi atas nama: ${nama_reservasi} Berhasil dihapus!`
        });
      });
    } catch (error) {
      return res.status(200).json({
        status: "error",
        data: error
      });
    }

    // return res.status(200).json({
    //   status: "success",
    //   data: `Reservasi anda berhasil dibatalkan! Selamat datang di Muara Ciante Adventure, saya chat bot yang akan membantu kalian dalam proses reservasi! /start (menampilkan pilihan menu) /reservasi (memesan paket yang tersedia) /lihatpaket(menampilkan menu paket) /cekjadwal (cek jadwal tersedia)`
    // });
  } else {
    // "SELECT * FROM chat WHERE send LIKE CONCAT('%', ?, '%') ",
    console.log(send);
    conn.query(
      "SELECT * FROM chat WHERE send LIKE CONCAT('%', ?, '%') ",
      [send], (err, data, fields) => {
        if (err) return res.status(500).json({
          status: 'error',
          message: err
        })

        let receive;
        if (data[0]?.receive) {
          receive = data[0].receive;
        } else {
          receive = "Keyword tidak tersedia :)"
        }
        console.log(data)

        return res.status(200).json({
          status: "success",
          data: receive
        });
      });
  }
}
