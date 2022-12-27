import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaHouseDamage } from 'react-icons/fa'
import { GiPaddles } from 'react-icons/gi'
import { GiSailboat } from 'react-icons/gi'
import './service.css'

const Services = () => {
  return (

    
  <section id="blog" class="blog-area pt-125 pb-130">
    <div class="container">
        <div class="row">
            <div class="section-title text-center">
                <h2 class="title">Our service</h2>
            </div>
            <div class="col text-center">
                <h2><FaHouseDamage/>Fasilitas</h2>
                <p>-Saung/ Gazebo
                   -Transport Trip
                   -
                </p>
                <div class="single-blog mt-30">
                    <div class="blog-image">
                        <img src="assets/images/mcr1.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title"><a href="#">Sarana Latihan dan Pembelajaran</a></h4>
                        <span>July 26, 2022</span>
                        <p>asdiajsdasdasjdiajsdoasdklasdkjasdgasyugdjk askdgakjsdkjasdjkasjkdsa asdjbaskjdbaskjdbaskjdbaskdbsa asdjabsdkjasbdkasbdasdkjb
                        </p>
                    </div>
                </div> 
            </div>
            <div class="col text-center">
                <h2> <GiPaddles/>Sarana Latihan dan Belajar</h2>
                <div class="single-blog mt-30">
                    <div class="blog-image">
                        <img src="assets/images/mcr2.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title"><a href="#">Arung Jeram</a></h4>
                        <span>July 26, 2022</span>
                        <p>adalah olaharaga extreme yang menyenangkan dan bisa sebagai media pembelajaran untuk melatih diri!</p>
                    </div>
                </div> 
            </div>
            <div class="col text-center">
                <h2> <GiSailboat/>Guide and Rescue</h2>
                <div class="single-blog mt-30">
                    <div class="blog-image">
                        <img src="assets/images/mcr2.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title"><a href="#">Arung Jeram</a></h4>
                        <span>July 26, 2022</span>
                        <p>adalah olaharaga extreme yang menyenangkan dan bisa sebagai media pembelajaran untuk melatih diri!</p>
                    </div>
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
                        <img src="assets/images/mcr2.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title"><a href="#">Arung Jeram</a></h4>
                        <span>July 26, 2022</span>
                        <p>adalah olaharaga extreme yang menyenangkan dan bisa sebagai media pembelajaran untuk melatih diri!</p>
                    </div>
                </div> 
            </div>
            <div class="col-lg-4 col-md-8 col-sm-9">
                <div class="single-blog mt-30">
                    <div class="blog-image">
                        <img src="assets/images/mcr1.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title"><a href="#">Sarana Latihan dan Pembelajaran</a></h4>
                        <span>July 26, 2022</span>
                        <p>asdiajsdasdasjdiajsdoasdklasdkjasdgasyugdjk askdgakjsdkjasdjkasjkdsa asdjbaskjdbaskjdbaskjdbaskdbsa asdjabsdkjasbdkasbdasdkjb
                        </p>
                    </div>
                </div> 
            </div>
            <div class="col-lg-4 col-md-8 col-sm-9">
                <div class="single-blog mt-30">
                    <div class="blog-image">
                        <img src="assets/images/mcr6.jpg" alt="Blog"/>
                    </div>
                    <div class="blog-content">
                        <h4 class="blog-title"><a href="#">Tour Guide</a></h4>
                        <span>July 26, 2022</span>
                    </div>
                </div> 
            </div>
        </div>          
    </div>
</section>
  )
}

export default Services