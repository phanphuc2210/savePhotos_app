import clsx from "clsx"
import { Button } from "reactstrap"
import styles from "./PhotoCard.module.scss"

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick } = props

    const handleEditClick = () => {
        if (onEditClick)
            onEditClick(photo)
    }

    const handleRemoveClick = () => {
        if (onRemoveClick)
            onRemoveClick(photo)
    }

    return (
        <div className={clsx(styles.photo)}>
            <img src={photo.photo} alt={photo.title}/>

            <div className={clsx(styles.photo__overlay)}>
                <h3 className={clsx(styles.photo__title)}>{photo.title}</h3>

                <div className={clsx(styles.photo__actions)}>
                    <div>
                        <Button outline size="sm" color="light" onClick={handleEditClick}>
                            Edit
                        </Button>
                    </div>

                    <div>
                        <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard