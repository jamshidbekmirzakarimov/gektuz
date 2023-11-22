import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import ReactPlayer from "react-player/youtube";
const Reviews = () => {
  const [lang, setLang] = useLocalization();

  return (
    <>
      <section className="swiper-section" id="reviews">
        <div data-aos="flip-up" className="container">
          <h2 className="Reviews-title">
            {languages[lang].Sharhlar.sharh_title}
          </h2>
          <div className="Revievs-wrapper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card-lis">
                  <iframe
                    className="card-iframe"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/M1P-9gPqu34"
                    title="O’zbekistondagi eng taniqli va katta qurilish loyihalar bilan ishlab kelayotgan Revent kompaniyasi!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h4 className="swipe-subtitle">
                    <span className="swipe-subtitle-author">
                      {languages[lang].Sharhlar.sharh_company_auth1}{" "}
                    </span>{" "}
                    {languages[lang].Sharhlar.sharh_name1}
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-lis">
                  <iframe
                    className="card-iframe"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/FFeHfzBaC48"
                    title="Smartlife rahbari Ibrohimjon Eminovni bizneslarni tizimlashtirgandan so’ng fikrlari!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h4 className="swipe-subtitle">
                    <span className="swipe-subtitle-author">
                      {languages[lang].Sharhlar.sharh_company_auth2}{" "}
                    </span>{" "}
                    {languages[lang].Sharhlar.sharh_name2}
                  </h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-lis">
                  <iframe
                    className="card-iframe"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/SveDmJMQlNM"
                    title="Hammaga mashhur Yuksalish maktabi rahbari Muhammadali Eshonqulovni biz haqlarida fikrlari!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h4 className="swipe-subtitle">
                    <span className="swipe-subtitle-author">
                      {languages[lang].Sharhlar.sharh_company_auth3}{" "}
                    </span>{" "}
                    {languages[lang].Sharhlar.sharh_name3}
                  </h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-lis">
                  <iframe
                    className="card-iframe"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/u-5b_kpTUwc"
                    title="22 ноября 2023 г."
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h4 className="swipe-subtitle">
                    <span className="swipe-subtitle-author">
                      {languages[lang].Sharhlar.sharh_company_auth4}{" "}
                    </span>{" "}
                    {languages[lang].Sharhlar.sharh_name4}
                  </h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-lis">
                  <iframe
                    className="card-iframe"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/gIpS-8CeRu0"
                    title="©️Asror Iskandarovning bizning xizmatlar haqida fikrlari!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h4 className="swipe-subtitle">
                    <span className="swipe-subtitle-author">
                      {languages[lang].Sharhlar.sharh_company_auth5}{" "}
                    </span>{" "}
                    {languages[lang].Sharhlar.sharh_name5}
                  </h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-lis">
                  <iframe
                    className="card-iframe"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/yidXF2fjBXk"
                    title="Avlod 21 rahbari Axrolxo’ja Raxmatxo’jayev biz haqida fikrlari!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h4 className="swipe-subtitle">
                    <span className="swipe-subtitle-author">
                      {languages[lang].Sharhlar.sharh_company_auth6}{" "}
                    </span>{" "}
                    {languages[lang].Sharhlar.sharh_name6}
                  </h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
