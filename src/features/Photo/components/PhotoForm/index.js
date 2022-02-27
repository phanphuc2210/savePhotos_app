import { Button, FormGroup, Label } from "reactstrap"
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import Images from "constants/images"
import { FastField, Form, Formik } from "formik";
import InputField from "custom-field/InputField";
import SelectField from "custom-field/SelectField";
import RandomPhotoField from "custom-field/RandomPhotoField";


function PhotoForm(props) {

    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log("Submit", values)}
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

                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default PhotoForm