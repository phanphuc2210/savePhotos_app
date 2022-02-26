import { Button, FormGroup, Input, Label } from "reactstrap"
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import Images from "constants/images"
import { FastField, Form, Formik } from "formik";
import Select from 'react-select';
import InputField from "custom-field/InputField";
import SelectField from "custom-field/SelectField";

console.log(PHOTO_CATEGORY_OPTIONS);

function PhotoForm(props) {

    const initialValues = {
        title: '',
        categoryId: null,
    }

    return (
        <Formik
            initialValues={initialValues}
        >
            {formikProps => {
                // do something here
                const {values, errors, touched} = formikProps
                console.log({values, errors, touched});

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />  

                        {/* <FormGroup>
                            <Label for="categoryId">Category</Label>

                            <Select
                                id="categoryId"
                                name="categoryId"
                                placeholder="What's your photo category?"
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                        </FormGroup> */}

                        <FormGroup>
                            <Label >Photo</Label>

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
            }}
        </Formik>
    )
}

export default PhotoForm