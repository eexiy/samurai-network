import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRef } from 'react';
import s from './ProfileData.module.css'




const ProfileDataForm = (props) => {

    const { fullName = '', lookingForAJob = false, lookingForAJobDescription = '', aboutMe = '',
        contacts = {
            facebook: null,
            instagram: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null,
            github: null,
            mainLink: null,
        } } = props.initialValues

    const hiddenFileInput = useRef()
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    }

    return (
        <div className={s.profileDataForm}>
            <Formik enableReinitialize={true}
                initialValues={{ fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts }}
                onSubmit={(values) => {
                    props.saveProfileInfo(values)
                    props.setEditMode(false)
                }}
            >
                {() => (
                    <Form>
                        <h2 className={s.profileDataFormTitle}>Edit information</h2>
                        <div className={s.profileDataFormInf}>
                            <div className={s.profileDataFormLeft}>
                                <div className={s.profileDataFormName}>
                                    <Field
                                        name={'fullName'}
                                        type={'text'}
                                    />
                                    <span></span>
                                    <label htmlFor="">Full name</label>
                                </div>
                                <div className={s.profileDataFormSkills}>
                                    <Field
                                        name={'lookingForAJobDescription'}
                                    />
                                    <span></span>
                                    <label htmlFor="">My professional skills</label>

                                </div>
                                <div className={s.profileDataFormAboutMe}>
                                    <Field
                                        name={'aboutMe'}
                                    />
                                    <span></span>
                                    <label htmlFor="">About me</label>
                                </div>
                                <div className={s.profileDataFormCheckBox}>
                                    <Field
                                        name={'lookingForAJob'}
                                        type={'checkbox'}
                                        id='lookingForAJob' />
                                    <label htmlFor={'lookingForAJob'}>
                                        <b> Looking for a job</b> </label>
                                </div>

                                <div>
                                    <button className={s.btnFile} onClick={handleClick}>
                                        <input
                                            style={{ display: 'none' }}
                                            ref={hiddenFileInput}
                                            type="file"
                                            onChange={props.onMainPhotoSelected}
                                        />
                                        Choose a photo
                                    </button>
                                </div>

                            </div>
                            <div className={s.profileDataFormRight}>
                                {
                                    Object.keys(props.profile.contacts).map(key => {
                                        return <div key={key} className={s.contacts}>
                                            <Field
                                                name={`contacts.${key}`}
                                            />
                                            <span></span>
                                            <label htmlFor="">{key}</label>
                                            <ErrorMessage name={`contacts.${key}`} component="div" />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <button className={s.btnSave} type='submit'>Save</button>
                        <button onClick={props.deactivateEditMode} className={s.btnCancel}>Cancel</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileDataForm