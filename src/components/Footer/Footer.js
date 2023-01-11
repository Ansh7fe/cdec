import { LinkedIn } from "@material-ui/icons";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import React from "react";
import "./footer.css";

export default function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="first-1">
          <div className="first-5">
            The centre for distant learning (CDEC), established at the ICT
            Centre, MNIT Jaipur, aims to impart quality education, in the
            easiest manner, with equitable access to learners across the nation
          </div>
          <img src="images/cdec.png" alt="" className="first" />
          <div className="first-2">
            <span>connect with us :</span>
            <div class="images">
              <a href="#">
                <img src="images/INSTAGRAM.png" className="insta" />
              </a>
              <a href="#">
                <img src="images/Vector.png" className="facebook" />
              </a>
              <a href="#">
                <img src="images/Vector(1).png" className="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88787.09781777443!2d75.78996933524299!3d26.857592645057334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66fe2879c7f%3A0xdfc843bf9b6f869a!2sMalaviya%20National%20Institute%20of%20Technology%20Jaipur%20(MNIT)!5e0!3m2!1sen!2sin!4v1668872851497!5m2!1sen!2sin"
            width="200"
            height="200"
            allowfullscreen
            loading="lazy"
            className="embed"
          />
        </div>
        <div className="cont-right">
          <div className="contact">Contact:</div>
          <div class="grid">
            <img src="images/location.png" width={40} height={40} className="list" />
            <div className="list">
              MNIT Prabha Bhawan, Naya Bass, Jhalana Gram, Malviya Nagar,
              Jaipur, Rajasthan 302017
            </div>
            <LinkedIn />
            <a href="#" className="mail">
              <div className="list">cdec@mnit.ac.in</div>
            </a>
            <AccessTimeIcon />
            <div className="list">TIMINGS : 10:00AM - 06:00PM</div>
          </div>
        </div>
      </div>
      <div className="container-1">
        <div>&#169;Copyright | 2022 CDEC MNIT Jaipur | All Rights Reserved. Privacy</div>
        <div>Policy Terms of Service</div>
      </div>
    </footer>
  );
}