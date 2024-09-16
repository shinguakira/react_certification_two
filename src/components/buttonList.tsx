
import { useState } from "react";
import { ButtonNameList } from "../interface/questionsApiResponse";
const ButtonList: React.FC<{ items: string[] }> = ({ items }) => {
    // State to store selected answers for each question
    const [selectedAnswer, setSelectedAnswer] = useState<{ [key: string]: string }>({});

    // Handler for selecting an answer
    const handleSelect = (questionId: string, answer: string): void => {
        setSelectedAnswer(() => ({
            [questionId]: answer,
        }));
    }
    return (
        <>
            <div>taitle</div>
            {items.map((option: string, index) => (
                <div>
                    <button key={option} className="options" value={option} >
                        {option}
                    </button>
                </div>
            ))}
        </>
    );
};
export default ButtonList;
