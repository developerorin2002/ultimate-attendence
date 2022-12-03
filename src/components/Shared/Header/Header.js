import React from 'react';
import logoImg from '../../Assets/Images/logo.png'
const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-2">
                        <img src={logoImg} className="w-100 img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;