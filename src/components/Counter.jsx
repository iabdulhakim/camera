import React, { useEffect } from 'react'

const Counter = () => {
    useEffect(() => {
        console.log("Counter ishladi!");
          
        return () => {
            console.log("Counter DOM dan olindi")
    }; 
    }, []);


  return (
    <div>0</div>
  )
}

export default Counter;