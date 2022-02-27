import RandomPhoto from "components/RandomPhoto"
import { FormGroup, Label } from "reactstrap"

function RandomPhotoField(props) {
    const { field, form, label } = props
    const { name, value, onBlur } = field

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
        </FormGroup>
    )
}

export default RandomPhotoField
