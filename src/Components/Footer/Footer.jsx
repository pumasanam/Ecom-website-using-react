import "./Footer.css";
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
const Footer = () => {
  return (
    <>
      <div className="footer">
            <div className="footer_list">
                <span className="logo">LAMA.</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit quidem dicta illum eveniet perferendis cupiditate ad et earum maxime placeat eius, nam ut assumenda numquam necessitatibus. Expedita, et eius.</p>

                <div className="social_link">
                    <div className="s_links fb"><AiFillFacebook/></div>
                    <div className="s_links ins"><AiFillInstagram/></div>
                    <div className="s_links twi"><AiFillTwitterCircle/></div>
                </div>
            </div>

            <div className="footer_list">
                <h6>Useful Links</h6>

                <ul>
                    <li>Home</li>
                    <li>Men Fashion</li>
                    <li>Women Fashion</li>
                    <li>Cart</li>
                </ul>
            </div>

            <div className="footer_list">
                <h6>Contact</h6>

                <div className="footer_span">
                   <span>622 Dixie path, south tobinchester 98336</span>
                   <span> +12344566</span>
                    <span>contact@gmail.com</span>
                </div>
            </div>
      </div>
    </>
  );
};

export default Footer;
