import "./Newsletter.css";
import {BiRightArrow} from 'react-icons/bi'
const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
            <div className="news">
                <span>Newsletter</span>
                <span>Get timely updates from your favorite products</span>

                <div className="news_input_info">
                    <input type="text" placeholder="You Email" />
                    <button><BiRightArrow/></button>
                </div>
            </div>

        
      </div>
    </>
  );
};

export default Newsletter;
