import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <h1>ByteStore</h1>
          <Link to="#" className="link info">
            Tentang Kami
          </Link>
          <Link to="#" className="link info">
            Blog
          </Link>
          <Link to="#" className="link info">
            Karir
          </Link>
        </div>
        <div className="middle">
          <h1>Layanan Pelanggan</h1>
          <Link to="#" className="link info">
            Pusat Bantuan
          </Link>
          <Link to="#" className="link info">
            Syarat dan ketentuan
          </Link>
          <Link to="#" className="link info">
            Kebijakan Privasi
          </Link>
        </div>
        <hr />
        <div className="right">
          <h1>BYTESTORE</h1>
          <span>Ikuti Kami</span>
          <div className="sosialMediaIcon">
            <img src="/fbIcon.svg" alt="" />
            <img src="/linkedInIcon.svg" alt="" />
            <img src="/youtubeIcon.svg" alt="" />
            <img src="/instagramIcon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
