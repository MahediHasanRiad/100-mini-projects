import { useState } from "react";
import Input from "./component/UI/input";
import Gender from "./component/UI/gender";
import Country from "./component/UI/country";

const initialValue = {
  name: "",
  email: "",
  address: "",
  city: "",
  postCode: "",
  country: "",
  gender: '',
  birthDate: '',
  aggrement: false,
};

const focused = {
  name: false,
  email: false,
  address: false,
  city: false,
  postCode: false,
  country: false,
  gender: false,
  birthDate: false,
}

function App() {
  const [value, setValue] = useState({...initialValue});
  const [focus, setFocus] = useState({...focused});
  const [error, setError] = useState({...initialValue})
  const [hasError, setHasError] = useState(false)


  const inputHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  };
  /** aggrement handler */
  const checkHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.checked
    })
    
  }
  /** focused handler */
  const focusHandler = e => {
    setFocus({
      ...focus,
      [e.target.name]: true
    })
  };

  /** form validation start */
  const formValidation = () => {
    const { name, email, address, city, postCode, country, gender, birthDate } = value
    const error = {}

    if(!name){
      error.name = 'Envalid Name...'
    }
    if(!email){
      error.email = 'Envalid Email...'
    }
    if(!address){
      error.address = 'Envalid Address...'
    }
    if(!city){
      error.city = 'Envalid City...'
    }
    if(!postCode){
      error.postCode = 'Envalid PostCode...'
    }
    if(!gender){
      error.gender = 'Envalid Gender...'
    }
    if(!country){
      error.country = 'Envalid Country...'
    }
    if(!gender){
      error.gender = 'Envalid Gender...'
    }
    if(!birthDate){
      error.birthDate = 'Envalid BirthDate...'
    }

    return {
      error,
      isValid: Object.keys(error).length === 0
    }
  }
  /** form validation end */

  /** blur handler */
  const blurHandler = e => {
    const { error } = formValidation()
    if(error[e.target.name] && focus[e.target.name]){
      setError({
        ...error,
        [e.target.name]: error[e.target.name]
      })
      setHasError(true)
    }else{
      setError({
        ...error,
        [e.target.name]: ''
      })
      setHasError(false)
    }
  };

  /** submit Button */
  const submitBtn = e => {
    e.preventDefault()

    const { isValid } = formValidation()
    if(isValid){
      setValue(value)
      setError({...initialValue})
      console.log(value)
    }else{
      setError({...error})
      console.log(error)
    }
  }

  return (
    <section className="w-50 m-auto">
      <section className="d-flex">
        <Input
          labelText="Name: "
          id="name"
          name="name"
          inputValue={value.name}
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.name}
        />
        <Input
          labelText="Email: "
          id="email"
          name="email"
          inputValue={value.email}
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.email}
        />
      </section>
      <section>
        <Input
          labelText="Address: "
          id="address"
          name="address"
          inputValue={value.address}
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.address}
        />
      </section>
      <section className="row">
        <Input
          labelText="City: "
          id="city"
          name="city"
          inputValue={value.city}
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.city}
        />
        <Input
          labelText="PostCode: "
          id="postCode"
          name="postCode"
          inputValue={value.postCode}
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.postCode}
        />
        <Country
          id='country'
          name='country'
          inputValue={value.country}
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.country}
        />
      </section>
      <section className="d-flex">
        <h6 className="m-2">Gender</h6>
        <Gender
          labelText="Male"
          id="male"
          name="gender"
          value='male'
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.gender}
        />
        <Gender
          labelText="Female"
          id="female"
          name="gender"
          value='female'
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.gender}
        />
      </section>
      <section>
        <h5 className="m-2">Date of Birth: </h5>
        <Input
          className="form-control"
          type="date"
          id="birthDate"
          name="birthDate"
          inputValue={value.birthDate}
          inputHandler={inputHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          error={error.birthDate}
        />
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="aggrement"
            name="aggrement"
            checked={value.aggrement}
            onChange={checkHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            error={error.aggrement}
          />
          <label htmlFor="aggrement" className="form-check-label px-2">
            Are your Agree ???
          </label>
        </div>
      </section>
      <button className="btn btn-success" disabled={!value.aggrement || hasError} type="submit" onClick={submitBtn}>Submit</button>
    </section>
  );
}

export default App;
