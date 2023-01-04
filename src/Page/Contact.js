import React from 'react'
import './contact.css'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaDirections } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'

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
    <div class= "container text-center">
      <div className='row'>
        <div class="col-sm-12 col-md-4 ">
          <div className='contact-title'>
            <h5>Contact</h5>
            <div className='contact-icon text-center'>
              <a href='/'target="_blank" rel="nofollow"><FaWhatsapp/></a>
              <h5>0813-1594-9119</h5>
            </div>
          </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div className='contact-title'>
          <h5>Directions</h5>
          <div className='contact-icon text-center'>
            <a href='https://www.google.com/maps/embed/v1/place?q=Muara+Cianten+Adventure,+Jalan+Raya+Cidokom,+Gobang,+Bogor+Regency,+West+Java,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'target="_blank" rel="nofollow"><FaDirections/></a>
          <h5>Muara Cianten Adventure</h5>
          <h5>Jalan Raya Cidokom</h5>
          <h5>Bogor</h5>
          <h5>Jawa Barat</h5>
          <h5>Indonesia</h5>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div className='contact-title'>
          <h5>Business Hours</h5>
          <div className='contact-icon text-center'>
          <a href='/'target="_blank" rel="nofollow"><FaClock/></a>
          <h5>MON: 8:00 AM - 7:00 PM</h5>
          <h5>TUE: 8:00 AM - 7:00 PM</h5>
          <h5>WED: 8:00 AM - 7:00 PM</h5>
          <h5>THU: 8:00 AM - 7:00 PM</h5>
          <h5>FRI: 7:00 AM - 8:00 PM</h5>
          <h5>SAT: 7:00 AM - 8:00 PM</h5>
          <h5>SUN: 7:00 AM - 8:00 PM</h5>
          </div>
        </div>
      </div>
      </div>
      <div class="d-flex flex-row-reverse justify-content-center">
        <ul className='d-flex flex-row-reverse'>
          <li><a href="https://www.facebook.com/profile.php?id=100084487713640" target="_blank" rel="nofollow"><FaTwitter/></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100084487713640" target="_blank" rel="nofollow"><FaInstagram/></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100084487713640" target="_blank" rel="nofollow"><FaFacebook/></a></li>
        </ul> 
      </div>
     </div>
     </>
  )
}

export default Contact