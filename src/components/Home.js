import React from 'react'
import { MdGroups } from "react-icons/md";
import './Home.css'
import { TbTargetArrow } from "react-icons/tb";
import img1 from './images/farm.jpg'

function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
 
  <div className="carousel-inner carousel-slide ">
    <div className="carousel-item active">
      <img src={img1} style={{filter:"brightness(60%)",width:"100%"}} alt="..."/>
    </div>
    <div className="carousel-item">
    <div className='carousel-caption'>
      <h1>hello</h1>
    </div>
      <img src="https://kids.earth.org/wp-content/uploads/2022/04/Untitled-1024-%C3%97-768px-17-900x675.jpg" className="d-block  h-5" style={{filter:"brightness(60%)",width:"35%"}} alt="..."/>
    </div>
    
    <div className="carousel-item">
      <img src="https://www.thestatesman.com/wp-content/uploads/2019/03/Farm-India.jpg"  style={{filter:"brightness(30%)",width:"35%"}} className="d-block h-5" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container">
            <div className="mt-5 mb-5 row row-cols-1 row-cols-sm-2 mt row-cols-md-1 row-cols-lg-3">
                <div className="col mb-5" style={{maxHeight:"400px"}}>
              <div className="card mt-5 shadow ">
                  <div className="card-body">
                  <h4 className='text-success' >About Us <span><MdGroups /></span></h4>
                     <p style={{minHeight:"125px"}}>
                     IFTR is a non-governmental (research) organization founded in the  year 2002,
                      to empower people in rural areas, especially, women to adopt modern development 
                      and stand on their own legs.
                     </p>
                  </div>
              </div>
          </div>
          <div className="col mb-5" style={{maxHeight:"400px"}}>
              <div className="card mt-5 shadow ">
                  <div className="card-body">
                  <h4  className='text-success'>Mission<TbTargetArrow /></h4>
                     <p  style={{minHeight:"125px"}}>
                     Design, Develop and Disseminate Technologies for the Masses for Sustainable happiness.

                     </p>
                  </div>
              </div>
          </div>
          <div className="col mb-5" style={{maxHeight:"400px"}}>
              <div className="card mt-5 shadow ">
                  <div className="card-body">
                     <h4 className='text-success'>Vision</h4>
                     <p  style={{minHeight:"125px"}}>
                     IFTR aims to help maintain the society self-sustainably by carrying out programmes of social/rural importance for providing livelihood, income generation, and upliftment of poor through various means. 

                     </p>
                  </div>
              </div>
          </div>
</div>
</div>
</div>
  )}




export default Home
