import React , {useState, useEffect} from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import logoAnimation from "../assets/logo-animation.json";
import AnimatedDeskAnimation from "../assets/animated-desk.json";




const Loader = () => {

        return (
            <Player
            className='loader-animation'
              autoplay={true}
              loop={true}
              controls={false}
              src={logoAnimation}
              style={{ height: '300px', width: '300px' }}
            ></Player>
        )

  };
  
  const AnimatedDesk = () => {

    return (
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src={AnimatedDeskAnimation}
          style={{ height: '400px', width: '100%' }}
        ></Player>
    )

};

export  {AnimatedDesk, Loader};

  