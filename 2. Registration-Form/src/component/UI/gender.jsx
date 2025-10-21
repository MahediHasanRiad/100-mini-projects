import { Error, InputField } from "../style/input";

function Gender({ id, labelText, name, value, inputHandler, focusHandler, blurHandler, error }) {
  return (
    <div className="form-check m-2">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <InputField
        className="form-check-input"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        error={error}
      />
      {error && <Error>Pls, Select your {name}</Error>}
    </div>
  );
}

export default Gender;
