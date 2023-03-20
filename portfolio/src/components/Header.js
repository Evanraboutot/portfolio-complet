import React from 'react';

import Logo from '../assets/Logo-Evan.svg';


const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <div className='max-w [20px]'>
            <img src={Logo} alt='' />
            </div>
          {/* boutton */}

        </div>
      </div>
    </header>
  );
};


export default Header;
