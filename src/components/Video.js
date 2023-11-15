import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

  
 export default function Video ({ url }) {
    const videoRef = useRef();
  
    useEffect(() => {    
      videoRef.current?.load();
    }, [url]);
  
    return (
      <video ref={videoRef} /*autoPlay*/ loop>
        <source src={url} />
      </video>
    );
  }