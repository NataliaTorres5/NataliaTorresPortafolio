import React, { useState, useEffect } from 'react'
import './Languages.css'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'


/*Repositories*/
import Git from '../../img/languages/GIT.png'
import Github from '../../img/languages/GitHub.png'
import API from '../../img/languages/API.png'
import Postman from '../../img/languages/API.png'

/*Lenguajes*/
import PosSQL from '../../img/languages/PostgreSQL.png'
import CSSl from '../../img/languages/CSS.png'
import Express from '../../img/languages/ExpressJS.png'
import htmllang from '../../img/languages/HTML.png'
import JaSc from '../../img/languages/JavaScript.png'
import Mongo from '../../img/languages/MongoDB.png'



/*FrameWorks*/
import REACT from '../../img/languages/REACT.png'
import Redux from '../../img/languages/Redux.png'
import Node from '../../img/languages/NodeJs.png'
import Bootstrap from '../../img/languages/Bootstrap.png'

/*Comming Soon*/

import Angular from '../../img/languages/Angular.png'
import Net from '../../img/languages/net.png'
import CSharp from '../../img/languages/CSharp.png'

function Languages() {

  /*<div className="container csstransforms">
        <div className="component">
          <button className="Languages" onClick={toggleMenu} id="cn-button">Lenguajes</button>
          <div className="L-toggle" id="L-toggle">
            <ul>
              <li style={{ '--i': 0 }} >
                <img src={PosSQL} alt="" />
              </li>
              <li style={{ '--i': 1 }} >
                <img src={CSSl} alt="" />
              </li>
              <li style={{ '--i': 2 }} >
                <img src={Express} alt="" />
              </li>
              <li style={{ '--i': 3 }} >
                <img src={htmllang} alt="" />
              </li>
              <li style={{ '--i': 4 }} >
                <img src={JaSc} alt="" />
              </li>
              <li style={{ '--i': 5 }} >
                <img src={Mongo} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
*/


  const [Ltoggle, setLToggle] = useState(false);
  const wrapper = document.getElementById("L-toggle");
  function toggleMenu() {
    setLToggle(!Ltoggle);
  }

  useEffect(() => {
    if (wrapper) {
      if (Ltoggle)
        wrapper.classList.add("opened-nav");
      else
        wrapper.classList.remove("opened-nav");
    }
  }, [Ltoggle]);



  return (
    <div className='Desplegable'>
   <div id="carouselExampleControls" class="carousel slide" data-coreui-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={PosSQL} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <p>
  <a class="btn btn-primary" data-coreui-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-coreui-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
</div>



    </div>
  )
}

export default Languages