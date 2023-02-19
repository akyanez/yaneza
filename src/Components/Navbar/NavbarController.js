// // Create a new Navbar component named something like NavBarController. 
// //While calling the navbar controller component pass in the "Type" as prop. 
// //Type should be a state and should change depending on the user status.

// import React, {useEffect, useState, Suspense} from 'react';
// import { useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';   
// import "./Navbar.css";
// // import NavLogo from "./nav-images/NavLogo.png";
// // import homeImage from "./images/office.jpg";

// function NavBarController(props) {
//     //useState Hook
//     const [pageName, setPageName] = useState("");
//     function handleClick(event) {
//         // Event.target.value is grabbing the value of the <li> tag
//         setPageName(event.target.value);
//     }
//     // useEffect Hook
//     useEffect(() => {
//         routeChange(); 
//     }, [pageName]) 

//     // Routing user to site page
//     let navigate = useNavigate();
//     function routeChange() {
//     // Under the hood stuff
//     let path = '/' + pageName.replace(/\s+/g, '');
//     navigate(path);
//     }

//     return (
//         props.type===1?<HomeNavbar/>
//         :props.type===2?<NavbarForRest/>
//     )
// }
//     const navBarItems = ['About','Work','Contact','Resume','Play']; //Play


// export default Navbar;

// <NavBarController type={1}></NavBarController> 

// Let NavBarController handle whichever navbar you want to display 
//out of your three navbars (where type will be 1,2 or 3).

// Your NavBarController will return something like this:


