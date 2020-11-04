import React from 'react';
import Lottie from 'react-lottie'
import * as loading from './8815-loading-animation.json'


const BigLoading = () => {
    
  
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loading.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
  
    return (
        <div>
        <Lottie options={defaultOptions}
                height={400}
                width={400} />
        </div>
    )
}


export default BigLoading