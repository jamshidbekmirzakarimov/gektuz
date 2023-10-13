import React from 'react'
import "./AboutUs.css"
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import Worker1 from "../../assets/images/worker1.webp"
import Worker2 from "../../assets/images/worker2.webp"
import Worker3 from "../../assets/images/worker3.webp"
import Worker4 from "../../assets/images/worker4.webp"
import Worker5 from "../../assets/images/worker5.webp"
import Worker6 from "../../assets/images/worker6.JPG"
const AboutUs = () => {
  const [lang, setLang] = useLocalization();
  return (
    <>
      <section className='AboutUs-section' id='aboutus'>
        <div className="container">
          <h2 className='AboutUs-section-title'>{languages[lang].About.about_title}</h2>
          <div className='AboutUs-wrapper'>
            <div className='AboutUs-box'>
              <div className='AboutUs-img-box'>
              <img className='AboutUs-img' src={Worker1} alt="" />
              <h3 className='AboutUs-user-title'>Davranov Fazliddin</h3>
              <p className='AboutUs-user-subtitle'>Rahbar, moliyachi</p>
              </div>
            </div>
            <div className='AboutUs-box'>
              <div className='AboutUs-img-box'>
              <img className='AboutUs-img' src={Worker2} alt="" />
              <h3 className='AboutUs-user-title'>Shoxrux</h3>
               <p className='AboutUs-user-subtitle'>Moliyachi</p>
              </div>
                <div className='AboutUs-img-box'>
              <img className='AboutUs-img' src={Worker6} alt="" />
              <h3 className='AboutUs-user-title'>Shaxzod Sharopov</h3>
              <p className='AboutUs-user-subtitle'>Moliyachi</p>
              </div>
               <div className='AboutUs-img-box'>
              <img className='AboutUs-img' src={Worker3} alt="" />
              <h3 className='AboutUs-user-title'>Muxsinov Shaxzod</h3>
               <p className='AboutUs-user-subtitle'>Marketolog</p>
              </div>
         
              <div className='AboutUs-img-box'>
              <img className='AboutUs-img' src={Worker5} alt="" />
              <h3 className='AboutUs-user-title'>Yaxyoyev Sunnatilo</h3>
               <p className='AboutUs-user-subtitle'>Grafik Dizayner</p>
              </div>
              <div className='AboutUs-img-box-girl'>
              <img className='AboutUs-img' src={Worker4} alt="" />
              <h3 className='AboutUs-user-title'>Dinara</h3>
               <p className='AboutUs-user-subtitle'>Sotuv menejeri</p>
              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
