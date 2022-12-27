import React from 'react'
import './contact.css'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="row">
          <h1>Kontak Kami</h1>
          <p>Jalan Raya Cidokom, Gobang, Kec Cibungbulang, Kabupaten Bogor, Jawabarat 16630
          Telp :0895613977361
          Email : muaraaciantenadventure@gmail.com
          Rekening BCA : 123456767</p>
          </div>
          <div class="col-sm-6">
            <div class="contact-form pt-30">
              <div class="mb-3">
                <label class="form-label">Nama</label>
                <input type="email" class="form-control" placeholder="nama"/>
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="email@gmail.comm"/>
                <label class="form-label">Pesan</label>
                <input type="email" class="form-control" placeholder="pesan"/>
              </div>
              <div class="mb-3">
              <button type="submit" class="btn btn-primary mb-3">Send</button>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="contact-map mt-60">
              <div class="gmap-canvas">
                  <iframe class="gmap_iframe"src="https://www.google.com/maps/embed/v1/place?q=Muara+Cianten+Adventure,+Jalan+Raya+Cidokom,+Gobang,+Bogor+Regency,+West+Java,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
              </div>
            </div>
          </div> 
        </div> 
      </div> 
       <div class= "container">
       <div class="d-flex justify-content-end">
         <div class="icon-content text-center">
           <ul>
           <li><a href="https://www.facebook.com/profile.php?id=100084487713640" target="_blank" rel="nofollow"><FaTwitter/></a></li>
           <li><a href="https://www.facebook.com/profile.php?id=100084487713640" target="_blank" rel="nofollow"><FaInstagram/></a></li>
           <li><a href="https://www.facebook.com/profile.php?id=100084487713640" target="_blank" rel="nofollow"><FaFacebook/></a></li>
           </ul>
         </div>
       </div>
     </div>
     </>
  )
}

export default Contact