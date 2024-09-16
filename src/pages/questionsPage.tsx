import { useEffect, useState } from 'react';
import '../App.css';
import PullDownList from '../components/pullDownList';
import { ApiResponse, Questions } from '../interface/apiResponse';
import { difficality, questionsContent } from '../constants/constants';
import { QuestionsInfo, questionsApiResponse } from '../interface/questionsApiResponse';
import axios from 'axios';
import ButtonList from '../components/buttonList';
import {shuffle,toArray} from 'lodash';

const QuestionsPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryList, setCategoryList] = useState<Questions[]>([]);
  const [questionList, setQuestionList] = useState<QuestionsInfo[]>([]);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  // State to store selected answers for each question
  const [selectedAnswer, setSelectedAnswer] = useState<{ [key: string]: string }>({});
  
  // Handler for selecting an answer
  const handleSelect = (questionId: string, answer: string) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  }

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        const a: ApiResponse = Object.values(data);
        if (Array.isArray(a)) {
          setCategoryList(a[0]);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    //fetching questions


    // const result=fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple')
    // .then((response) => {
    //   console.log("fail");
    //   console.log(response)
    //   if (!response.ok) {
    //     throw new Error('Network');
    //   }
    // })
    // .then((data) => {
    //   const a: questionsApiResponse = Object.values(data);
    //   if (Array.isArray(a)) {
    //     setQuestionList(a);
    //   }
    //   console.log(Array.isArray(a));
    //   console.log(a);
    // })
    // .catch((error) => {
    //   setError(error);
    //   setLoading(false);
    // });
  }, []);
  return (
    <>
      <label>taitle</label>
      <PullDownList options={categoryList} />
      <select>
        <option>select options</option>
        {difficality.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <button>Create</button>
      {questionList.map((option) => (
        <label>{option.category}</label>
      ))}


      <div className="quiz-container">
        {questionsContent.map((question) => (
          <div key={question.question} className="question-block">
            <h3>{question.question}</h3>
            <div className="options">
              {question.incorrect_answers.map((option) => (
                <button
                  key={option}
                >
                  {option}
                </button>
              ))}
              <button key="1">
                {question.correct_answer}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="quiz-container">
        {questionsContent.map((question) => (
          <ButtonList items={Array.from(shuffle<string>([question.correct_answer, ...question.incorrect_answers])) as string[]  }></ButtonList>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
export default QuestionsPage;
