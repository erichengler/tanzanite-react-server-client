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

// App is a component
function App () {
  // Our functions and variables will go here
  // This is how we previously declared variables:
  // let counter = 0;

  return (
    // This looks like HTML but is really JSX
    <div>
      {/* To render our components on the DOM */}
      <Header />

      <Buttons />

      <CreatureList />
    </div>
  );
}

export default App
