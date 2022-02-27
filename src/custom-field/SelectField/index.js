import { FormGroup, Label } from "reactstrap"
import Select from 'react-select';


function SelectField(props) {
    const { field, options, label, placeholder, disabled } = props;
    const { name, value } = field;
  
    const selectedOption = options.find(option => option.value === value);
  
    const handleSelectedOptionChange = (selectedOption) => {
      const selectedValue = selectedOption ? selectedOption.value : selectedOption;
  
      const changeEvent = {
        target: {
          name: name,
          value: selectedValue
        }
      };
      field.onChange(changeEvent);
    }
  
    return (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
  
        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
  
          placeholder={placeholder}
          isDisabled={disabled || false}
          options={options}
  
        />
      </FormGroup>
    );
  }
  

export default SelectField