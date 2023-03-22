import { useState } from 'react';

function InputExample () {
    // We are binding the variable to an input
    const [firstName, setFirstName] = useState('Chris');
    return (
        <>
            <h2>Input Example:</h2>
            <p>You have typed: {firstName}</p>
            <input 
                value={firstName} 
                // This event happens when the field changes
                // Without this, changing text in input field doesn't work
                onChange={(e) => setFirstName(e.target.value)}
                type="text" 
            />
        </>
    );
}

export default InputExample;