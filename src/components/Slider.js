import React, { useState } from 'react'

export const Slider = () => {
    const [counter, setCounter] = useState(0)
    const images = ['Coffee_American.png', 'Coffee_Latte.png', 'Coffee_capuccino.png',
        'Coffee_Espresso.png', 'Coffee_Large.png']
    const handleNext = () => {
        const isValidCounter = counter >= images.length - 1 ? setCounter(0) : setCounter(counter + 1)
        return isValidCounter
    }
    const handleback = () => {
        const isValidCounter = counter <= 0 ? setCounter(images.length - 1) : setCounter(counter - 1)
        return isValidCounter
    }
    /*
     const handleBack = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter - 1;
      if (newCounter === -1) {
        return prevCounter - 4;
      } else {
        return newCounter;
      }
    });
  };
    */
    console.log(images.length - 1)
    return (
        <div>
            <div>
                <img src={`/images/${images[counter]}`} alt={images[counter]} />
            </div>
            <div>
                <button onClick={handleback}>atras </button>
                <button onClick={handleNext}> adelante </button>
            </div>
        </div>
    )
}
