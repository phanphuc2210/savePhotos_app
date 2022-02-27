import { ErrorMessage } from "formik"
import { FormFeedback, FormGroup, Input, Label } from "reactstrap"


function InputField(props) {

    const {
        field, form,
        type, label, placeholder, disabled,
    } = props
    const { name, value, onChange, onBlur} = field
    const {errors, touched} = form
    const showError = errors[name] && touched[name]

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Input
                id={name}
                {...field}

                type={type || 'text'}
                disabled={disabled || false}
                placeholder={placeholder}

                invalid={showError}
            />

            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>
    )
}

export default InputField