import clsx from "clsx"
import { Button } from "reactstrap"
import styles from "./RandomPhoto.module.scss"

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000)
    return `https://picsum.photos/id/${randomId}/300/300`
}

function RandomPhoto(props) {

    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, className} = props

    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl()
            onImageUrlChange(randomImageUrl)
        }
    }

    return (
        <div className={clsx(styles.randomPhoto, className)}>
            <div className={clsx(styles.randomPhoto__button)}> 
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>

            <div className={clsx(styles.randomPhoto__photo)}>
                {imageUrl && <img src={imageUrl} alt="Ooops... not found. Please click button again."/>}
            </div>

        </div>
    )
}

export default RandomPhoto