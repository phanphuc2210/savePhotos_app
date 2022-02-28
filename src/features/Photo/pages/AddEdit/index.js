import Banner from "components/Banner"
import PhotoForm from "features/Photo/components/PhotoForm"
import { addPhoto } from "features/Photo/photoSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styles from "./AddEdit.module.scss"

function AddEditPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate() 

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Form submit: ', values)

            setTimeout(() => {
                dispatch(addPhoto(values))

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
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default AddEditPage