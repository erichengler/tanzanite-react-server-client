import axios from 'axios';

// Use curly brackets to destructure what is being passed through the function
// Value inside curly brackets must match value from .map in CreatureList
function CreatureItem ({ creature, fetchCreatureList }) {

    // This same pattern can be used for update (marking something as complete)
    const removeCreature = (event) => {
        console.log( `removeCreature ${creature.id}` );
        // Pass in the id of the creature to delete
        axios.delete( `/creature/${creature.id}` ).then((response) => {
            // Fetch the creature list
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in removeCreature ${error}`);
            alert('Something went wrong!');
        });
    }

    // This is called conditional rendering. Creature 'a' will be crossed off
    // This is much easier after creating a CreatureItem component
    const getDecoration = () => {
        if( creature.name === 'a' ) {
            return 'line-through';
        } else {
            return 'none';
        }
    }

    return (
        <>
            {/* What we want to render */}
            {/* the style 'text-decoration' in CSS is 'textDecoration' in React */}
            <li style={{ textDecoration: getDecoration() }}>
                {creature.name} from {creature.origin}
                <button onClick={ (event) => removeCreature(event) }>Delete</button>
            </li>
        </>
    );
}

export default CreatureItem;