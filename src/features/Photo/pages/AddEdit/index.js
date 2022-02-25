import Banner from "components/Banner"
import PhotoForm from "features/Photo/components/PhotoForm"
import styles from "./AddEdit.module.scss"

function AddEditPage() {
    return (
        <div className={styles.photoEdit}>
            <Banner title="Pick your amazing photo 😎"/>

            <div className={styles.photoEdit__form}>
                <PhotoForm/>
            </div>
        </div>
    )
}

export default AddEditPage