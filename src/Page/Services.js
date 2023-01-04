import React from 'react'
import { FaHouseDamage } from 'react-icons/fa'
import { GiH2O, GiPaddles } from 'react-icons/gi'
import { GiSailboat } from 'react-icons/gi'
import './service.css'

const Services = () => {
    return (

    
  <section id="blog" class="blog-area pt-125 pb-130">
    <div class="container">
        <div class="row">
            <div class="section-title text-center">
                <h1 class="title">Our service</h1>
                <h4>Destinasi wisata petualangan terbaik bagi kamu yang menyukai tantangan ekstrim. Pacu adrenalin untuk mengarungi ganasnya Air Sungai Cianten bersama pemandu yang berpengalaman dan nikmati pemandangan yang indah disepanjang Sungai.</h4>
            </div>
            <div class="col-sm-12 col-md-4 text-center">
                <h2><FaHouseDamage/></h2>
                <h2 className='h2'>Fasilitas</h2>  
                    <div class="blog-content">
                        <h4 class="blog-title">Apa aja sih fasilitasnya?</h4>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Peralatan Lengkap</li>
                                <li class="list-group-item">Saung</li>
                                <li class="list-group-item">Transport Trip</li>
                                <li class="list-group-item">Camping Ground</li>
                                <li class="list-group-item">P3K</li>
                                <li class="list-group-item">Dokumentasi</li>
                                <li class="list-group-item">Toilet</li>
                                <li class="list-group-item">Guide</li>
                            </ul>
                    </div> 
            </div>
        <div class="col-sm-12 col-md-4  text-center">
                <h2> <GiPaddles/></h2>
                <h2>Sarana Latihan dan Belajar</h2>
                    <div class="blog-content">
                        <h4 class="blog-title">Training Sector</h4>
                        <h6>Penyedia jasa latihan dan pembelajaran Arung Jeram bagi FAJI Depok dan Mahasiswa Pencinta Alam</h6>
                        <h6>Latihan yang disediakan terdiri dari:</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Rafting</li>
                            <li class="list-group-item">Kayaking</li>
                            <li class="list-group-item">Self Rescue</li>
                        </ul>
                </div> 
            </div>
            <div class="col-sm-12 col-md-4 text-center">
                <h2> <GiSailboat/></h2>
                <h2>Guide and Rescue</h2>
                    <div class="blog-content">
                        <h4 class="blog-title">Pedamping Berpengalaman</h4>
                        <h6>Para rafter tidak perlu khawatir!! Muara Cianten Adventure sudah pasti mempunyai Tour Guide yang berlisensi arung jeram serta dapat menemani anda dengan aman dan sudah pasti menyenangkan! </h6>
                        <h4> Rescue</h4>
                        <h6>Setiap pengarungan yang di wadahi Muara Cianten Rafting sudah pasti adanya team rescue dan tim inilah yang menjadi tim pengeman anda ketika berarung jeram!</h6>
                    </div>
                </div> 
        </div>
    </div>     
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="section-title text-center pb-25">
                    <h2 class="title">Paket Tersedia</h2>
                    <p>Perjalanan Menarik Yang Bisa Anda Nikmati!</p>
                    </div> 
            </div>
        </div> 
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-8 col-sm-9">
                <div class="single-blog mt-30">
                    <div class="blog-image">
                        <img src="assets/images/rafting9.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title">Paket 1 Cihuy</h4>
                        <h5>perorang Rp.250.000</h5>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item">APD</li>
                            <li class="list-group-item">Pengarungan 12 KM</li>
                            <li class="list-group-item">Guide</li>
                            <li class="list-group-item">P3k</li>
                            <li class="list-group-item">All Fasilitas</li>
                            <li class="list-group-item">Dokumentasi</li>
                            <li class="list-group-item">Kelapa Muda</li>
                            <li class="list-group-item">Rescue</li>
                            <li class="list-group-item">Makan Siang</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <div class="col-lg-4 col-md-8 col-sm-9">
                <div class="single-blog mt-30">
                    <div class="blog-image">
                        <img src="assets/images/rafting1.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title">Sarana Latihan dan Pembelajaran</h4>
                        <h5>perorang Rp.150.000</h5>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">APD</li>
                            <li class="list-group-item">Pengarungan 4 KM</li>
                            <li class="list-group-item">Guide</li>
                            <li class="list-group-item">P3k</li>
                            <li class="list-group-item">All Fasilitas</li>
                            <li class="list-group-item">Kelapa Muda</li>
                            <li class="list-group-item">Rescue</li>
                            
                        </ul>
                    </div>
                </div> 
            </div>
        </div>          
    </div>
</section>
  )
}

export default Services