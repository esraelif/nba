import React from 'react';
import logo from '../Assets.js/nba-logo.png'

const Header = () => {
    return (<>
        <div className='logo'>
            <img src={logo} alt="nba-logo" />
            <h1>NBA LEGENDS</h1>
        </div>
        {/* <div className="title">
            
        </div> */}
    </>
    );
}

export default Header;
