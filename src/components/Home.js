import "./Home.css";
import BiminivisionLogo from "../images/biminivision-logo.png";
import Icl from "../images/ICLs@300x.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [slideClass, setSlideClass] = useState('');

    const words = ['READERS', 'GLASSES', 'CONTACTS'];

    useEffect(() => {
        // Automatically toggle words at regular intervals
        const interval = setInterval(() => {
            setSlideClass('slide-up');
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Adjust as needed

        // Cleanup
        return () => clearInterval(interval);
    }, []);

  return (
    <>
      {/* Header starts here */}
      <header>
        <nav>
          <ul className="links">
            <li className="about">
              <span>
                <Link to="/about">About</Link>
              </span>
              <span>
                <MdKeyboardArrowDown className="arrowDown" />
              </span>
            </li>
            <li className="procedures">
              <span>
                <Link to="/procedures">Procedures</Link>
              </span>
              <span>
                <MdKeyboardArrowDown className="arrowDown" />
              </span>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="espanol">español</Link>
            </li>
          </ul>
          <ul className="logo">
            <li>
              <Link to="/">
                <img
                  src={BiminivisionLogo}
                  width={100}
                  height={100}
                  quality={100}
                  alt="biminivision"
                  className="imgLogo"
                />
              </Link>
            </li>
          </ul>
          <ul className="contact">
            <li>
              <span className="phone">
                <FaPhoneAlt />
              </span>
              <span>(201) 221-2020</span>
            </li>
            <li className="scheduleNowBtn">
              <Link to="/schedule-now">SCHEDULE NOW</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Header ends here */}

      {/* Free starts here */}
      <section className="free">
        <video id="backgroundVideo" autoPlay muted className="video">
          <source
            src={require("../videos/pexels_videos_1918465_(2160p).mp4")}
          />
        </video>
        <div className="nextVideoDetails">
        <h1 >
                    BE FREE FROM <span className='elementor-heading-title slide-up'>{words[currentWordIndex]}</span>
                </h1>
          <h3>SCHEDULE COMPLETELY ONLINE, NO PHONE CALLS NECESSARY</h3>
          <div className="free-innerDiv">
            <span>
              <Link to="download-app">DOWNLOAD OUR APP</Link>
            </span>
            <span>
              <Link to="vision-correction-assessment">
                TAKE THE VISION CORRECTION ASSESSMENT
              </Link>
            </span>
            <span>
              <Link to="schedule-consultant">SCHEDULE A CONSULTANT</Link>
            </span>
          </div>
        </div>
      </section>
      {/* Free ends here */}

      {/* Search for vision correction starts here */}
      <section className="visionCorrectionSearch">
        <h1>
          Your Search for Vision Correction & Eye Surgery in South Florida Ends
          Here.
        </h1>
        <div className="firstDiv">
          <p>
            Dr. Hirabayashi and Dr. Virdi share a passion for vision correction
            surgery and started Bimini Vision in sunny Fort Myers to free
            patients from glasses.
          </p>
          <p>Vision Correction is all we do! </p>
          <p>We offer every modern vision correction solution including:</p>
        </div>
        <div className="proceduresList">
          <ul>
            <li>
              <Link to="/icl" className="img">
                <div>
                  <img src={Icl} className="img" alt="" />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/icl" className="img">
                <div>
                  <img src={Icl} alt="alternate images" className="img" />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/icl" className="img">
                <div>
                  <img src={Icl} alt="alternate images" className="img" />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/icl" className="img">
                <div>
                  <img src={Icl} alt="alternate images" className="img" />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/icl" className="img">
                <div>
                  <img src={Icl} alt="alternate images" className="img" />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/icl" className="img">
                <div>
                  <img src={Icl} alt="alternate images" className="img" />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* Search for vision correction ends here */}
    </>
  );
}
