import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Jadwal = () => {
  let { id } = useParams();

  const [jadwal, setJadwal] = useState([]);
  const [saveJadwal, setSaveJadwal] = useState(["2023-01-05 10:00:00"]);
  const [save, setSave] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/jadwal/${id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => { setJadwal(res.data); console.log(res.data) })
  }, [save]);

  const onUpdateValue = (val, index) => {
    let newArr = [...saveJadwal];
    newArr[index] = val
    setSaveJadwal(newArr);
  }

  const onSaveData = async () => {
    setSave(true);
    const newData = {
      id_paket: id,
      jadwal: saveJadwal
    }

    try {
      const response = await fetch("http://localhost:3001/jadwal", {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData)
      });

      const receive = await response.json();
      if (receive.status === "success") {
        alert("Data berhasil disimpan!");
        setSaveJadwal(["2023-01-05 10:00:00"]);
        setSave(false)
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h4>Jadwal Paket {id}</h4>
          <div className="card p-3 mt-3">
            <div className="row">
              {jadwal.map((e, key) => (
                <div key={key} className="col-6" style={{ marginBottom: 12 }}>
                  <div className={`card ${e.status === 1 ? 'text-bg-secondary' : 'text-bg-light'}`}>
                    <div className="card-body">
                      <p>ID: {e.id}</p>
                      <p>{e.jadwal}</p>
                      <p>Status {e.status === 1 ? "Booked" : "Ready"}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="col-6">
          <h4>Tambah Jadwal</h4>
          <div className="card mt-3">
            <div className="card-body">
              <form class="row g-3">
                <div class="col-12">
                  {saveJadwal.map((val, key) => {
                    return (
                      <div class="input-group mb-3" style={{ padding: '0px 14px' }} key={key}>
                        <input type="datetime-local" class="form-control" placeholder="Jadwal" aria-label="Recipient's username" aria-describedby="basic-addon2" value={saveJadwal[key]} onChange={(e) => onUpdateValue(e.target.value, key)} />
                        {val &&
                          <button type='button' className="btn btn-primary input-group-text" id="basic-addon2" onClick={() => setSaveJadwal([...saveJadwal, "2023-01-05 10:00:00"])}>Tambah</button>
                        }
                      </div>
                    )
                  })}
                </div>
                <div class="col-12">
                  <button onClick={onSaveData} type="button" class="btn btn-primary">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jadwal