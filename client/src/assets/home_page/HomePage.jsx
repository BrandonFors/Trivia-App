import React, { useEffect, useState } from "react";
import "./HomePage.css";
import CategoryWidget from "./CategoryWidget";
import { useParams, useNavigate } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function HomePage(){
    const navigate = useNavigate();

    const categoryList = [
        "Random",
        "General Knowledge",
        "History",
        "Geography",
        "Sports",
        "Art",
        "Celebrities",
        "Entertainment: Video Games",
        "Entertainment: Music",
        "Entertainment: Film",
        "Entertainment: Comics"

    ]


    const chooseCategory = (category) => {
        // Pass data through URL or global state (e.g., Context)
        navigate(`/trivia/${category}`);
    };

    return(
        <div>
            <h1><LightbulbIcon fontSize="large"></LightbulbIcon>Trivia</h1>
            <div className="trivia-container">
                <h2>Select A Category</h2>
                <div className="button-container">
                    
                    {categoryList.map((category, index) => {
                    return (
                    <CategoryWidget 
                        key = {index}
                        category={category} 
                        chooseCategory = {chooseCategory}
                        ></CategoryWidget>);
                    })}
                </div>
            </div>
        </div>
    )

}
export default HomePage;