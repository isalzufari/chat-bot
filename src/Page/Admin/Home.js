import React, { useState, useEffect } from 'react'
import { toRupiah } from '../../Utils/utils'

const Home = () => {
  const [reserved, setReserved] = useState([])
  const [usersReserved, setUsersReserved] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/reserved", {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => { setReserved(res.data); console.log(res.data) })
  }, []);

  const getUsersReserved = (id) => {
    console.log(id)
    fetch(`http://localhost:3001/reserved/${id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => { setUsersReserved(res.data); console.log(res.data) })
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5>Reservasi</h5>
              <div className="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Total Pembayaran</th>
                      <th scope="col">Status Pembayaran</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reserved.map((val, key) => (
                      <tr onClick={() => getUsersReserved(val.id)} key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{val.nama}</td>
                        <td>{val.alamat}</td>
                        <td>{toRupiah(val.total_pembayaran)}</td>
                        <td>{val.status_pembayaran > 0 ? "Sudah" : "Belum"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
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

export default Home
