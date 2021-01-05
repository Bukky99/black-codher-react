import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';


const About = () => {
    return (
    <div className="aboutStyle">  
            <Link to="/">Home</Link>
            <h1>Welcome to the Bookcase Application</h1>
            <p>The following application was created by Bukola Omojowo.
                This bookcase app displays a list of books that a user can save tp a local bookcase.
            </p>
            <p>Click on the "Add +" button to add a book to your bookcase.
                Use the search bar to find the latest boks by name, author or description.
            </p>
    </div>
    );
}

export default About