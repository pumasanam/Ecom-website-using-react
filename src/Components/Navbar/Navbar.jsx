import React, {useState} from 'react';
import "./Navbar.css";
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im'

const Navbar = () => {
  const [icons, setIcons] = useState(false);

  const toggleIcon =()=>{
    setIcons(!icons)
  }
  return (
    <>
      <div className="nav_container">
        <div className="wrapper">
            <div className="nav_left">
                <div className="language">
                    <span style={{cursor:'pointer', fontSize:'14px'}}>EN</span>
                    <div className="search_container" style={{display:'flex', alignItems:'center'}}>
                      <input type="text" style={{border:'none', outline:'none'}} />
                      <AiOutlineSearch style={{color:'gray', fontSize:'16px'}}/>
                    </div>
                </div>
            </div>
            {/* nav left */}

            <div className="nav_Center" style={{textAlign:'center'}}>
                <h1 style={{fontWeight:'bold'}}>LAMA.</h1>
            </div>

            {/* nav center */}

            <div className={icons ? 'nav_right active': 'nav_right'} style={{display:'flex', justifyContent:'flex-end'}}>
              <div className="round">0</div>
              <div className="menuItem" style={{fontSize:'14px', cursor:'pointer'}}>
                  Register
              </div>

              <div className="menuItem" style={{fontSize:'14px', cursor:'pointer'}}>
                  Sign In
              </div>

              <AiOutlineShoppingCart className='menuItem' style={{fontSize:'2rem', cursor:'pointer'}}/>
            </div>
            {/* nav right */}

            <div className="toggleIcon" onClick={toggleIcon}>
              {icons ? <ImCross style={{fontSize:'1.5rem', cursor:'pointer'}}/>: <FaBars style={{fontSize:'1.5rem', cursor:'pointer'}}/>}
              
              
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
