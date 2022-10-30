import s from './ProfileData.module.css'
import ProfileStatus from '../ProfileStatus'

const ProfileData = (props) => {

    return (
        <div className={s.profileData}>
            <h1 className={s.profileDataName}>{props.profile.fullName}</h1>
            <div>
                <ProfileStatus
                    status={props.status}
                    profile={props.profile}
                    updateStatus={props.updateStatus}
                />
            </div>
            
            {props.isOwner && <button className={s.profileDataBtn} onClick={props.activateEditMode}>Edit profile</button>}

            <div className={s.profileDataList}>
                <div className={s.profileDataListTitle}>
                    <h4>Looking for a job:</h4>
                    <span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
                </div>
                <div className={s.profileDataListTitle}>
                    <h4>Professional skills:</h4>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
                <div className={s.profileDataListTitle}>
                    <h4>About Me:</h4>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileData