import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import HappyClient from '../HappyClient/HappyClient';
import Contack from '../contack/Contack';
import Fotter from '../Footer/Fotter';
import Topsalary from '../Topseler/Topsalary';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
         <div>
            <Brands></Brands>
         </div>
         <div>
            <Topsalary></Topsalary>
         </div>
         <div className='mt-[200px]'>
            <HappyClient></HappyClient>
         </div>
         <div className='mt-[200px]'>
           <Contack></Contack>
         </div>
         <div className='mt-[200px]'>
           <Fotter></Fotter>
         </div>
        </div>
    );
};

export default Home;