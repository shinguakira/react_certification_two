import { useEffect, useState } from 'react';
import '../App.css';
import PullDownList from '../components/pullDownList';
import { ApiResponse, Questions } from '../interface/apiResponse';

const QuestionsPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionList, setQuestionList] = useState<Questions[]>([]);

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
          setQuestionList(a[0]);
        }
        console.log(Array.isArray(a));
        console.log(a);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <label>taitle</label>
      <PullDownList options={questionList} />
      <select>
        <option>select options</option>
        {questionList.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
export default QuestionsPage;
