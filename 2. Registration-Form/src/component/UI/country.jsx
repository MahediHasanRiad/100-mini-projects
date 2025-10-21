import { Error, SelectField } from "../style/select";

function Country({
  id,
  name,
  inputValue,
  inputHandler,
  focusHandler,
  blurHandler,
  error
}) {
  return (
    <div className="col my-4">
      <SelectField
        name={name}
        id={id}
        className="form-select"
        value={inputValue}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        error={error}
      >
        <option value="">Select your country...</option>
        <option value="bangladesh">Bangladesh</option>
        <option value="india">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="nepal">Nepal</option>
      </SelectField>
      {error && <Error>Pls Select your {name}</Error>}
    </div>
  );
}

export default Country;
