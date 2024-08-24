import { Questions } from '../interface/apiResponse';

const PullDownList = (options: Questions[]) => {
  return (
    <>
      <label>taitle</label>
      <select>
        <option>select options</option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};
export default PullDownList;
