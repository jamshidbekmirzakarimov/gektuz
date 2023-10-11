import React, { useState, useEffect } from "react";
import "./Modal.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import InputMask from "react-input-mask";

const App = () => {
  const [lang, setLang] = useLocalization();
  const [firstName, setFirstName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCheckModal, setShowCheckModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowModal(true);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const preventModalClose = (e) => {
    e.stopPropagation();
  };

  const handleSendMessage = () => {
    const bot = {
      TOKEN: "5804908423:AAH5Pg79BuEHjxnjPTsmZyIfJmE8EeGXkvA",
      chatID: "-1001855468600",
      message: `Full Name: ${firstName}, 
Company Name: ${companyName}, 
Phone Number: ${telNumber}`,
    };

    const apiUrl = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: bot.chatID,
        text: bot.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message sent:", data);

        setFirstName("");
        setTelNumber("");
        setCompanyName("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
    setShowCheckModal(true);
    closeModal();
  };

  const handleCheckCloseModal = () => {
    setShowCheckModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={preventModalClose}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={languages[lang].modal.input_name}
            />
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={languages[lang].Contact.contact_form_lastname}
            />
            <InputMask
              mask="+\9\9\8\ (99) 999-99-99"
              maskChar=" "
              required={true}
              onChange={(e) => setTelNumber(e.target.value)}
              value={telNumber}
              placeholder={languages[lang].Contact.contact_form_tel}
            />
            <button onClick={handleSendMessage}>{languages[lang].modal.modal_btn}</button>
          </div>
        </div>
      )}
      {showCheckModal && (
        <div className="contact-modal">
          <div className="conatact-modal-box">
            <div className="contact-modal-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="96px"
                height="96px"
              >
                <linearGradient
                  id="I9GV0SozQFknxHSR6DCx5a"
                  x1="9.858"
                  x2="38.142"
                  y1="9.858"
                  y2="38.142"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#21ad64" />
                  <stop offset="1" stop-color="#088242" />
                </linearGradient>
                <path
                  fill="url(#I9GV0SozQFknxHSR6DCx5a)"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                />
                <path
                  d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z"
                  opacity=".05"
                />
                <path
                  d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z"
                  opacity=".07"
                />
                <path
                  fill="#fff"
                  d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"
                />
              </svg>
            </div>
            <h3 className="conatact-modal-title">
              {languages[lang].Contact.contact_form_modal_title}
            </h3>
            <p>{languages[lang].Contact.contact_form_modal_subtitle}</p>
            <button className="contact-modal-btn" onClick={handleCheckCloseModal}>
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
