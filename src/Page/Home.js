import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-item active">
            <img src="assets/images/rafting3.jpg" class="d-block w-100" alt="Responsive image" height="500"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Muara Cianten Adventure</h5>
              <p>Rasakan  Adrenalin  Petualangan  Bersama  Kami.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="assets/images/rafting4.jpg" class="d-block w-100" alt="Responsive image" height="500"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Muara Cianten Adventure</h5>
              <p>Perjalanan dan pengalaman yang tidak terlupakan.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="assets/images/rafting8.jpg" class="d-block w-100" alt="Responsive image" height="500"/>
            <div class="carousel-caption d-none d-md-block ">
              <h5>Muara Cianten Adventure</h5>
              <p>Tempat belajar dan berkembang.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div class="section-title text-center">
          <h2 class="title">Mau Arung Jeram di Muara Cianten Adventure aja Cuy!</h2>
          <p>
            LETS GET WET AND TRY NEW EXPERIENCES JOURNEY ADVENTURE WITH US!!
          </p>
        </div>
        <div class="container-fluid p-5 bg-dark text-white text-center">
          <h1>MENGAPA MUARA CIANTEN ADVENTURE?</h1>
          <p></p> 
        </div>
      </div>
      
      <section id="about" class="about-area pt-125 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-content mt-50">
                        <h5 class="about-title">FASILITAS</h5>
                        <p>Muara Cianten Rafting dengan fasilitas yang sangat memanjakan para traveler terutama yang ingin melakukan Arung Jeram. dengan menikmati pengarungan dengan panjang 12km serta didukung dengan saung yang rindang, pelayanan yang sangat baik. sudah pastinya para Rafter sangat senang!!</p>
                        
                        <h5 class="about-title">SARANA LATIHAN</h5>
                        <p>Bukan cuma fasilitas saja! Muara Cianten Rafting bisa menjadi sarana latihan bagi anak Mahasiswa Pencinta Alam dan Komunitas Arung jeram Lainnya. Sebagai wadah untuk belajar dan mengembangkan ilmu pasti sangat menarik bukan!</p>
                    </div> 
                </div>
                
                <div class="col-xl-5 offset-xl-1 col-lg-6">
                    <div class="about-skills pt-25">
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">TRUST</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="100"></div>
                                </div>
                            </div>
                        </div> 
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">SAFETY</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="100"></div>
                                </div>
                            </div>
                        </div> 
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">DEVELOPMENT</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="100"></div>
                                </div>
                            </div>
                        </div> 
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">SECURITY</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="100"></div>
                                </div>
                            </div>
                        </div> 
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">SPEED</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="100"></div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

    <div class="section-title2 text-center">
      <h2 class="title">Yuk Cek Langsung Lokasinya!!!</h2>
      <p>LETS GET WET AND TRY NEW EXPERIENCES JOURNEY ADVENTURE WITH US!!</p>
    </div>
      <div class="container-contact">
        <div class="gmap_canvas">
            <iframe class="gmap_iframe1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=muaracianten&amp;t=k&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          <a href="https://mcpedls.com/"></a>
        </div>
      </div>
    </>
  )
}

export default Home