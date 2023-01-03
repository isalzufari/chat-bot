import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toRupiah } from '../../Utils/utils';

const Reservasi = () => {
  let { id } = useParams();

  const [detailReservasi, setdetailReservasi] = useState([]);
  const [usersReserved, setusersReserved] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/reserved/detail/${id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        setdetailReservasi(res.data.reservasi[0]); setusersReserved(res.data.users); console.log(res.data)
      })
  }, []);

  const changePayment = () => {
    fetch(`http://localhost:3001/reserved/detail/${id}/payment`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        if (res.status === "success") {
          alert("Berhasil diubah!")
        }
      })
  }

  return (
    <>
      <h3>Reservasi {id}</h3>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h4>Nama: {detailReservasi.nama}</h4>
              <p>Alamat: {detailReservasi.alamat}</p>
              <p>Total Pembayaran: {toRupiah(detailReservasi.total_pembayaran)}</p>
              <p>Status Pembayaran: {detailReservasi.status_pembayaran ? "Sudah" : "Belum"} Bayar</p>
              <button onClick={() => changePayment()} className="btn btn-primary">Ubah Status</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h4>Paket: {detailReservasi.nama_paket}</h4>
              <p>Jarak: {detailReservasi.jarak} Km</p>
              <p>Waktu: {detailReservasi.waktu} Menit</p>
              <p>Tarif: {toRupiah(detailReservasi.tarif)}</p>
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <div className="card">
            <div className="card-body">
              <h5>Bukti Pembayaran</h5>
              <img src={"http://localhost:3001/images/" + detailReservasi.bukti_pembayaran} class="img-fluid" alt=""></img>
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <div className="card">
            <div className="card-body">
              <h5>Data Reservasi</h5>
              <div className="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Tempat Lahir</th>
                      <th scope="col">Tanggal Lahir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersReserved.map((val, key) => (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{val.nama}</td>
                        <td>{val.tpt_lahir}</td>
                        <td>{new Date(val.tgl_lahir).toLocaleDateString("id")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservasi