import React, { useState } from 'react'

const Paket = () => {

  const [fasilitas, setFasilitas] = useState([
    {
      id: 1,
      value: ""
    }
  ]);

  const [paket, setPaket] = useState({
    nama: '',
    jarak: '',
    waktu: '',
    tarif: '',
  });

  const onUpdateValue = (val, id, index) => {
    // const updated = [...fasilitas];
    // updated[index].value = val;
    // setFasilitas(updated[index]);

    // setFasilitas([fasilitas,
    //   [index],
    //   {
    //     id: id,
    //     value: val
    //   }
    // ])

    // setFasilitas(fasilitas => ({
    //   ...fasilitas,
    //   [index]: val
    // })
    // )

    let newArr = [...fasilitas];
    newArr[index].value = val
    setFasilitas(newArr);
  }

  const onSaveData = async () => {
    const newObjData = {
      nama: paket.nama,
      jarak: paket.jarak,
      waktu: paket.waktu,
      tarif: paket.tarif,
      fasilitas: fasilitas
    };

    try {
      const response = await fetch("http://localhost:3001/paket", {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObjData)
      });

      const receive = await response.json();
      if (receive.status === "success") {
        alert("Data berhasil disimpan!");
        setPaket({
          nama: "",
          jarak: "",
          waktu: "",
          tarif: ""
        });
        setFasilitas([
          {
            id: 1,
            value: ""
          }
        ])
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form class="row g-3">
      <div class="col-12">
        <label class="form-label">Paket</label>
        <input onChange={(e) => setPaket({ ...paket, nama: e.target.value })} type="text" class="form-control" placeholder="Cihuy" value={paket.nama} />
      </div>
      <div class="col-md-4">
        <label class="form-label">Jarak</label>
        <input onChange={(e) => setPaket({ ...paket, jarak: e.target.value })} type="number" class="form-control" placeholder="Kilo" value={paket.jarak} />
      </div>
      <div class="col-md-4">
        <label class="form-label">Waktu</label>
        <input onChange={(e) => setPaket({ ...paket, waktu: e.target.value })} type="number" class="form-control" placeholder="Menit" value={paket.waktu} />
      </div>
      <div class="col-md-4">
        <label class="form-label">Tarif</label>
        <input onChange={(e) => setPaket({ ...paket, tarif: e.target.value })} type="number" class="form-control" placeholder="100000" value={paket.tarif} />
      </div>

      {fasilitas.map((val, key) => {
        return (
          <div class="input-group mb-3" style={{ padding: '0px 14px' }} key={key}>
            <input type="text" class="form-control" placeholder="Fasilitas" aria-label="Recipient's username" aria-describedby="basic-addon2" value={fasilitas[key].value} onChange={(e) => onUpdateValue(e.target.value, val.id, key)} />
            {val.value &&
              <button disabled={key > 1} type='button' className="btn btn-primary input-group-text" id="basic-addon2" onClick={() => setFasilitas([...fasilitas, { id: fasilitas.length + 1, value: "" }])}>Tambah</button>
            }
          </div>
        )
      })}

      <div class="col-12">
        <button onClick={onSaveData} type="button" class="btn btn-primary">Simpan</button>
      </div>
    </form >
  )
}

export default Paket
