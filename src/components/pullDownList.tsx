import { Questions } from '../interface/apiResponse';

const PullDownList: React.FC<Questions[]> = ({options}) => {
  return (
    <>
      <label>taitle</label>
      <select>
        <option>select categories</option>
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
