import React from 'react'
import './chat.css'

const Chat = () => {
  return (
    <div class="container content">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">Chat</div>
            <div class="card-body height3">
              <ul class="chat-list">
                <li class="in">
                  <div class="chat-img">
                    <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                  </div>
                  <div class="chat-body">
                    <div class="chat-message">
                      <h5>Jimmy Willams</h5>
                      <p>Raw denim heard of them tofu master cleanse</p>
                    </div>
                  </div>
                </li>
                <li class="out">
                  <div class="chat-img">
                    <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                  </div>
                  <div class="chat-body">
                    <div class="chat-message">
                      <h5>Serena</h5>
                      <p>Next level veard</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat