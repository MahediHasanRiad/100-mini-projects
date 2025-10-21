import { InputField, Error } from "../style/input";

function Input({ labelText, type = 'text', id, name, value, inputHandler, focusHandler, blurHandler, error }) {
  return (
    <div className="m-2 w-100 col">
      <label htmlFor={id} className="form-label">{labelText}</label>
      <InputField
        className="form-control"
        type= {type}
        id={id}
        name={name}
        value={value}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        error={error}
      />
      {error && <Error>Pls, Enter your {name}</Error>}
    </div>
  );
}

export default Input;
