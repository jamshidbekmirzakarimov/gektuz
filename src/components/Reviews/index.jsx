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
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const preventModalClose = (e) => {
    e.stopPropagation();
  };

  const openModal = () => {
    setShowModal(true);
  };

   useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

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
                  <h3 className="swipe-title">
                    {languages[lang].Sharhlar.sharh_subtitle}
                  </h3>
                  <h4 className="swipe-subtitle">
                    {languages[lang].Sharhlar.sharh_name}
                  </h4>
                  <h5 className="swipe-desc" onClick={openModal}>
                    {" "}
                    {languages[lang].Sharhlar.sharh_desc}
                  </h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-lis">
                  <h3 className="swipe-title">
                    {languages[lang].Sharhlar.sharh_subtitle}
                  </h3>
                  <h4 className="swipe-subtitle">
                    {languages[lang].Sharhlar.sharh_name}
                  </h4>
                  <h5 className="swipe-desc" onClick={openModal}>
                    {" "}
                    {languages[lang].Sharhlar.sharh_desc}
                  </h5>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-lis">
                  <h3 className="swipe-title">
                    {languages[lang].Sharhlar.sharh_subtitle}
                  </h3>
                  <h4 className="swipe-subtitle">
                    {languages[lang].Sharhlar.sharh_name}
                  </h4>
                  <h5 className="swipe-desc" onClick={openModal}>
                    {" "}
                    {languages[lang].Sharhlar.sharh_desc}
                  </h5>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlayvideo" onClick={closeModal}>
          <div className="modal-player" onClick={preventModalClose}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <ReactPlayer
              url="https://www.youtube.com/watch?si=giY85rjgJ6cVccJ0&v=M1P-9gPqu34&feature=youtu.be"
              controls={true}
              playing={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
