import React, { useState, useEffect } from 'react';

const Throttling = () => {
    const [count, setCount] = useState(0);

    const handleMouseMove = () => {
        setCount(prevCount => prevCount + 1);
        
    };

    useEffect(() => {
        window.addEventListener('mousemove', updatw);
        return () => {
            window.removeEventListener('mousemove', updatw);
        };
    }, []);

    const throttl=(func,timeout)=>{
        let timer=null;
return function(...arge){
    if(!timer) {
        timer=  setTimeout(() => {
            timer=null;
                func(...arge)
            }, timeout);
        }
    }

    }

    const updatw= throttl(handleMouseMove,400)




    return (
        <div>
            <p>Mouse moved: {count} times</p>
        </div>
    );
};

export default Throttling;
