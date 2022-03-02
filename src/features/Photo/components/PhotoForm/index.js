import { Button, FormGroup, Label, Spinner } from "reactstrap"
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup"
import InputField from "custom-field/InputField";
import SelectField from "custom-field/SelectField";
import RandomPhotoField from "custom-field/RandomPhotoField";


function PhotoForm(props) {

    const {initialValues, isAddMode} = props

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),

        categoryId: Yup.number()
            .required('This field is required')
            .nullable(),

        photo: Yup.string().required('This field is required'),

        // photo: Yup.string().when('categoryId', {
        //     is: 1,
        //     then: Yup.string().required('This field is required'),
        //     otherwise: Yup.string().notRequired(),
        // })
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                // do something here
                const {values, errors, touched, isSubmitting } = formikProps
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
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>
                                {isSubmitting && <Spinner size="sm"/>}
                                {isAddMode ? 'Add to album' : 'Update your photo'}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default PhotoForm