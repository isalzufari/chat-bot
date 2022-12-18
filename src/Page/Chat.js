import React, { useState } from 'react'
import './chat.css'
import { convertMinutesToHours } from '../Utils/utils'

const Chat = () => {
  const [formData, setFormData] = useState({
    send: 'Hai'
  });

  const [dataChat, setDataChat] = useState([
    {
      receive: { data: "Haiii!" }
    }
  ]);

  const handleSend = async (e) => {
    const send = formData.send;
    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "send": send })
      });

      const receive = await response.json();

      setDataChat([...dataChat, {
        send: send,
        receive: receive,
      }]);

      setFormData({ send: "" })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container content">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">Chat</div>
            <div className="card-body height3">
              <ul className="chat-list">

                {dataChat.map((val, key) => {
                  return (
                    <>
                      {val.send && <li className="out" key={key}>
                        <div className="chat-img">
                          <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                        </div>
                        <div className="chat-body">
                          <div className="chat-message">
                            <h5>Aku</h5>
                            <p>{val.send}</p>
                          </div>
                        </div>
                      </li>}

                      {Array.isArray(val.receive.data) ?
                        <li className="in">
                          <div className="chat-img">
                            <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                          </div>
                          <div className="chat-body">
                            <div className="chat-message">
                              <h5>Bot</h5>
                              {val.receive.data.map((paket, key) => (
                                <>
                                  <h6 key={key}>Paket {paket.id}</h6>
                                  <ul>
                                    <li>Nama: {paket.nama}</li>
                                    <li>Jarak : {paket.jarak} Km - {convertMinutesToHours(paket.waktu)} Jam</li>
                                    <li>Fasilitas: {paket.nama}</li>
                                    <li>Tarif: {paket.tarif}</li>
                                  </ul>
                                </>
                              ))}
                            </div>
                          </div>
                        </li>
                        :
                        <li className="in">
                          <div className="chat-img">
                            <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                          </div>
                          <div className="chat-body">
                            <div className="chat-message">
                              <h5>Bot</h5>
                              <p>{val.receive.data}</p>
                            </div>
                          </div>
                        </li>
                      }
                    </>
                  )
                })}
              </ul>
            </div>
            <div class="input-group mb-3" style={{ padding: '0px 14px' }}>
              <input type="text" class="form-control" value={formData.send} onChange={(e) => setFormData({ ...formData, send: e.target.value })} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button type='button' className="btn btn-primary input-group-text" id="basic-addon2" onClick={handleSend} disabled={!formData.send}>Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat