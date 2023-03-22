// Source in our stylesheet
// 'import' is similar to require on the server
import './App.css';
// useState updates the DOM when a variable changes
// Moved to Buttons.jsx
import { useState } from 'react';
// Importing components
import CreatureList from '../CreatureList/CreatureList.jsx'
import Header from '../Header/Header.jsx'
import Buttons from '../Buttons/Buttons.jsx'
import InputExample from '../InputExample/InputExample.jsx'

// App is a component
function App () {
  // Our functions and variables will go here
  // This is how we previously declared variables:
  // let counter = 0;

  // const [firstName, setFirstName] = useState('Chris');
  const [headerText, setHeaderText] = useState('Welcome to React!!!');

  return (
    // This looks like HTML but is really JSX
    <div>
      {/* headerTextProp is the name of our prop */}
      {/* headerText is the value we are assigning to the prop */}
      <Header 
      textColor="salmon"
      headerText={headerText}
      someOtherThing={'Cake'} />

      {/* <Buttons />
      Commented out these two lines to learn about Props
      <InputExample /> */}

      <CreatureList />
    </div>
  );
}

export default App
