import Preloader from '../../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/avaLogo.jpg'
import ProfileData from './ProfileData/ProfileData'
import { useState } from 'react'
import ProfileDataForm from './ProfileData/ProfileDataForm'
import Contact from './Contact'

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.profileLeft}>
                <img className={s.profile__infoAva} src={props.profile.photos.large || userPhoto} alt="" />
                <Contact contacts={props.profile.contacts} />
            </div>
            <div>
                <ProfileData
                    activateEditMode={() => setEditMode(true)}
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                {editMode && <ProfileDataForm
                    setEditMode={setEditMode}
                    saveProfileInfo={props.saveProfileInfo}
                    initialValues={props.profile}
                    profile={props.profile}
                    isOwner={props.isOwner}
                    onMainPhotoSelected={onMainPhotoSelected}
                    deactivateEditMode={() => setEditMode(false)}
                />
                }
            </div>
        </div>
    )
}


export default ProfileInfo