
import React, { useState } from "react";
import "../styles.css"; // Import the CSS file

const ButtonList: React.FC<{ items: string[] }> = ({ items }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<{ [key: string]: string }>({});

    const handleSelect = (questionId: string, answer: string): void => {
        setSelectedAnswer(prevState => {
            const newState = { ...prevState };
            if (newState[questionId] === answer) {
                delete newState[questionId]; // Deselect if already selected
            } else {
                newState[questionId] = answer; // Select if not already selected
            }
            console.log("Updated State:", newState); // Log the updated state
            return newState;
        });
    }

    return (
        <>
            <div>title</div>
            {items.map((option: string, index) => (
                <div key={`${option}-${index}`}>
                    <button
                        className={`options ${selectedAnswer[String(index)] === option ? 'selected' : ''}`}
                        value={option}
                        onClick={() => handleSelect(String(index), option)}
                    >
                        {option}
                    </button>
                </div>
            ))}
            <button onClick={() => console.log("Button clicked!")}>Click me</button>
        </>
    );
};

export default ButtonList;

