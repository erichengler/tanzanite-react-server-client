import { useState } from 'react';

function Buttons () {

  let firstName = 'Chris';

  //      name     function           default
  const [counter, setCounter] = useState(0);

  // Function to increase click counter
  let increaseClickCounter = () => {
    // Do not modify state directly, like this:
    // counter += 1;

    // Instead, function must be called to change a variable
    setCounter(counter + 1);

    // ! Counter isn't changed yet in console !
    // ! When in doubt, trust what's on the page !
    console.log(counter);
  }

  // Function to decrease click counter
  let decreaseClickCounter = () => {
    setCounter(counter - 1);
    console.log(counter);
  }

    return (
        <div>
            <p>Hello World! -{firstName}</p>
            <p>You clicked {counter} times!</p>
            <button onClick={increaseClickCounter}>Increase</button>
    
            {/* TODO: Add a Decrease button */}
            <button onClick={decreaseClickCounter}>Decrease</button>
        </div>
    );
}

export default Buttons;