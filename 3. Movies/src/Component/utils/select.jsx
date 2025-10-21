import { SelectField, OptionField } from '../Style/select'

function Select({ id, name, value, inputHandler }) {
  return (
    <div>
      <SelectField name={name} id={id} value={value} onChange={inputHandler}>
        <OptionField value="">Year</OptionField>
        <OptionField value="2000">2000</OptionField>
        <OptionField value="2012">2012</OptionField>
        <OptionField value="2010">2010</OptionField>
      </SelectField>
    </div>
  )
}
 
export default Select
