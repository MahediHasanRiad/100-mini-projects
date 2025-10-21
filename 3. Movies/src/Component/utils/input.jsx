import { InputField } from "../Style/input";

function Input({ id, name, value, inputHandler }) {
  return (
    <div>
      <InputField
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={inputHandler}
        placeholder="Search..."
      />
    </div>
  );
}

export default Input;
