import { Option, Label } from "../Style/options";
import { OptionWrapper } from "../Style/wrapper";

function Quiz({
  num,
  question,
  name,
  id,
  option1,
  option2,
  option3,
  option4,
  selectOption
}) {
  return (
    <section>
      <h2>{num} <b>.</b> {question}</h2>
      <OptionWrapper>
        <Option
          type="radio"
          id={`${id}-option1`}
          name={name}
          value={option1}
          onClick={() => selectOption(option1)}
        />
        <Label htmlFor={`${id}-option1`}>{option1}</Label>
      </OptionWrapper>
      <OptionWrapper>
        <Option
          type="radio"
          id={`${id}-option2`}
          name={name}
          value={option2}
          onClick={() => selectOption(option2)}
        />
        <Label htmlFor={`${id}-option2`}>{option2}</Label>
      </OptionWrapper>
      <OptionWrapper>
        <Option
          type="radio"
          id={`${id}-option3`}
          name={name}
          value={option3}
          onClick={() => selectOption(option3)}
        />
        <Label htmlFor={`${id}-option3`}>{option3}</Label>
      </OptionWrapper>
      <OptionWrapper>
        <Option
          type="radio"
          id={`${id}-option4`}
          name={name}
          value={option4}
          onClick={() => selectOption(option4)}
        />
        <Label htmlFor={`${id}-option4`}>{option4}</Label>
      </OptionWrapper>
    </section>
  );
}

export default Quiz;
