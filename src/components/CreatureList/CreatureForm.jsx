// Remember to import axios in each component that uses it
import axios from 'axios';

function CreatureForm ( { creatureName, setCreatureName, creatureOrigin, setCreatureOrigin, fetchCreatureList } ) {
    
    const submitForm = (event) => {
        event.preventDefault();
        axios.post('/creature', {
            name: creatureName,
            origin: creatureOrigin
        }).then((response) => {
            // Clear our input fields
            setCreatureName('');
            setCreatureOrigin('');
            // Update our list of creatures
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        <>
            <form onSubmit={submitForm}>
                Name: 
                <input type="text"
                    value={creatureName}
                    onChange={(event) => setCreatureName(event.target.value)} />
                <br />
                Origin: 
                <input type="text"
                    value={creatureOrigin}
                    onChange={(event) => setCreatureOrigin(event.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default CreatureForm;