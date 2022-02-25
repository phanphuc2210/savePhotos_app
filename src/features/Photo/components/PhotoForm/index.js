import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import Select from 'react-select';
import Images from "constants/images"


function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Eg: Wow nature ..."
                    type="text"
                />
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Category</Label>

                <Select
                    id="categoryId"
                    name="categoryId"
                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Photo</Label>

                <div>
                    <Button type="button" outline color="primary">Random a photo</Button>
                </div>

                <div>
                    <img width="200px" height="200px" src={Images.COLORFUL_BG}  alt="colorful photo"/>
                </div>
            </FormGroup>

            <FormGroup>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    )
}

export default PhotoForm