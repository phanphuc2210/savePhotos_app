import { FormGroup, Input, Label } from "reactstrap"


function InputField(props) {

    const {
        field, form,
        type, label, placeholder, disabled,
    } = props
    const { name, value, onChange, onBlur} = field

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Input
                id={name}
                {...field}

                type={type || 'text'}
                disabled={disabled || false}
                placeholder={placeholder}
            />
        </FormGroup>
    )
}

export default InputField