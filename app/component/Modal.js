import React from "react";
import { IoIosPaperPlane } from "react-icons/io";
import { ImEmbed2 } from "react-icons/im";
import { PiGifFill } from "react-icons/pi";

const Modal = ({ setModel, giff, title, link, embed_url }) => {
  return (
    <>
      <div>
        <div className="modal">
          <div className="modal-content">
            <img src={giff} alt="" className="giff" />
            <div className="text-content">
              <h3>{title}</h3>

              <div className="share-content share">
                <a href={link} target={"_blank"} >
                  <IoIosPaperPlane />
                  <span>Share</span>
                </a>
              </div>

              <div className="share-content embed">
                <a href={embed_url} target={"_blank"} >
                  <ImEmbed2 />
                  <span>Embed</span>
                </a>
              </div>

              <div className="share-content share">
                <a href={link} target={"_blank"} >
                  <PiGifFill />
                  <span>Giffy</span>
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className="overlay" onClick={() => setModel(false)} ></div>
      </div>
    </>
  );
};

export default Modal;
