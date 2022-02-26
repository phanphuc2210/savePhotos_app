import { FormGroup, Label } from "reactstrap"
import Select from 'react-select';

function SelectField(props) {

    const {
        field, form,
        label, placeholder, options, disabled,
    } = props
    const { name, value, onChange, onBlur} = field
    const selectedOption = options.find(option => option.value = value)

    console.log(options);
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption
        console.log(selectedOption);
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Select
                id={name}
                {...field}
                // value={selectedOption}
                onChange={handleSelectedOptionChange}

                isDisabled={disabled || false}
                placeholder={placeholder}
                options={options}
            />
        </FormGroup>
    )
}

export default SelectField