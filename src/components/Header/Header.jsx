// Props are passed into our function component as an arguement
// function Header (props) {

//     return (
//         <header>
//             <h1 style={{color: props.textColor}}>
//                 {props.headerText}
//             </h1>
//             <h2>{props.someOtherThing}</h2>
//         </header>
//     );
// }

// Destructuring - different way to write the above code:

// const { textColor, headerText, someOtherThing } = props;
function Header({ textColor, headerText, someOtherThing }) {

    return (
        <header>
            <h1 style={{color: textColor}}>
                {headerText}
            </h1>
            <h2>{someOtherThing}</h2>
        </header>
    );
}

export default Header;


