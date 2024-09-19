import { Questions } from '../interface/apiResponse';

const PullDownList: React.FC<{options:string[]}> = ({options}) => {
  return (
    <>
      <label>taitle</label>
      <select>
        <option>select categories</option>
        {options.map((option,index) => (
          <option key={String(index)} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
export default PullDownList;
