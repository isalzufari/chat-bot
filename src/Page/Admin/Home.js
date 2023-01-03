import React, { useState, useEffect } from 'react'
import { toRupiah } from '../../Utils/utils'
import { Link } from 'react-router-dom'

const Home = () => {
  const [reserved, setReserved] = useState([])
  const [paket, setPaket] = useState([])
  const [usersReserved, setUsersReserved] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/reserved", {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => { setReserved(res.data); console.log(res.data) })

    fetch("http://localhost:3001/paket", {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => { setPaket(res.data); console.log(res.data) })
  }, []);

  const getUsersReserved = (id) => {
    fetch(`http://localhost:3001/reserved/${id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => { setUsersReserved(res.data); console.log(res.data) })
  }

  const deleteUsersReserved = (id) => {
    console.log(id)
    fetch(`http://localhost:3001/reserved/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.status)
        console.log(reserved);
        const rmReserved = reserved.filter(reserve => reserve.id !== id);
        setReserved(rmReserved);
      })
  }

  const deletePaket = (id) => {
    console.log(id)
    fetch(`http://localhost:3001/paket/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.status)
        const rmPaket = paket.filter(e => e.id !== id);
        setPaket(rmPaket);
      })
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
                      <th scope="col">Action</th>
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
                        <td><button onClick={() => deleteUsersReserved(val.id)} type='button' className='btn btn-danger'>Hapus</button></td>
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
        <div className="col-12 col-md-6 mt-3">
          <div className="card">
            <div className="card-body">
              <h5>Paket</h5>
              <Link to="paket">Tambah</Link>
              <div className="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Jarak</th>
                      <th scope="col">Waktu</th>
                      <th scope="col">Tarif</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paket.map((val, key) => (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{val.nama}</td>
                        <td>{val.jarak} Km</td>
                        <td>{val.waktu} Menit</td>
                        <td>{toRupiah(val.tarif)}</td>
                        <td><button onClick={() => deletePaket(val.id)} type='button' className='btn btn-danger'>Hapus</button></td>
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
