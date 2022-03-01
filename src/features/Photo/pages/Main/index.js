import Banner from "components/Banner"
import Images from 'constants/images';
import PhotoList from "features/Photo/components/PhotoList";
import {removePhoto} from "features/Photo/photoSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";


function Mainpage(props) {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const navigate = useNavigate()
    // console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photo/${photo.id}`
        navigate(editPhotoUrl)
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo)
        const removePhotoId = photo.id
        dispatch(removePhoto(removePhotoId))
    }

    return (
        <div className="photo-main">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG}/>

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    )
}

export default Mainpage