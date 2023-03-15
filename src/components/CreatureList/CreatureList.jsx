// We must import useState in each component we want to use it
import { useState, useEffect } from 'react';

// We must import axios in each component we want to use it
import axios from 'axios';


// Components always correspond to something on the DOM
function CreatureList () {
    const [listOfCreatures, setListOfCreatures] = useState([
        {
            id: 1,
            name: 'Unicorn',
            origin: 'Norway'
        }
    ]);

    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            // Update the array, React does the rest!
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }

    // ! Don't do this to call function, it will potentially mess up React's timing !
    // fetchCreatureList();
    useEffect(() => {
        // At this point, React is ready!
        fetchCreatureList();
    }, []); // ! Remember the empty Array !

    // All components return what you want them to display
    return (
        <div>
            <h2>Creature List</h2>
            {
                // This turns our Array into a string
                // ! For testing data only !
                // ! Can delete/comment out after .map below !
                // JSON.stringify(listOfCreatures)
            }
            <ul>
                {
                    listOfCreatures.map((creature) => (
                        // What we want to render
                        <li key={creature.id}>
                            {creature.name} from {creature.origin}</li>
                    ))
                }
            </ul>
        </div>
    );
};

// All components must export
export default CreatureList;