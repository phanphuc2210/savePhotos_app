import Banner from "components/Banner"
import PhotoForm from "features/Photo/components/PhotoForm"
import { addPhoto, updatePhoto } from "features/Photo/photoSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { randomNumber } from "utils/common"
import styles from "./AddEdit.module.scss"

function AddEditPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const { photoId } = useParams()
    const isAddMode = !photoId
    // console.log(photoId);

    const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId))

    const initialValues = isAddMode
        ? {
            title: '',
            categoryId: null,
            photo: ''
        }
        : editedPhoto


    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Form submit: ', values)

            setTimeout(() => {
                if(isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999)
                    }
                    dispatch(addPhoto(newPhoto))
                } else {
                    dispatch(updatePhoto(values))
                }

                navigate(-1)
                resolve(true)
            }, 2000)
        })
    }

    return (
        <div className={styles.photoEdit}>
            <Banner title="Pick your amazing photo 😎"/>

            <div className={styles.photoEdit__form}>
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default AddEditPage