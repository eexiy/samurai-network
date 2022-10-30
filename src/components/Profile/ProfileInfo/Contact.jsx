import s from './ProfileInfo.module.css'
import {
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLink,
    AiOutlineTwitter,
    AiOutlineYoutube
} from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'
import { TfiWorld } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'

const Contact = ({ contacts }) => {
    return (
        <div className={s.profile__contact} >
            <NavLink className={s.contactIcon} to={`//${contacts.facebook}`} target="_blank">
                <AiOutlineFacebook />
            </NavLink>
            <NavLink className={s.contactIcon} to={`//${contacts.github}`} target="_blank">
                <AiOutlineGithub />
            </NavLink>
            <NavLink className={s.contactIcon} to={`//${contacts.instagram}`} target="_blank">
                <AiOutlineInstagram />
            </NavLink>
            <NavLink className={s.contactIcon} to={`//${contacts.mainLink}`} target="_blank">
                <AiOutlineLink />
            </NavLink>
            <NavLink className={s.contactIcon} to={`//${contacts.twitter}`} target="_blank">
                <AiOutlineTwitter />
            </NavLink>
            <NavLink className={s.contactIcon} to={`//${contacts.vk}`} target="_blank">
                <SlSocialVkontakte />
            </NavLink>
            <NavLink className={s.contactIcon} to={`//${contacts.youtube}`} target="_blank">
                <AiOutlineYoutube />
            </NavLink>
            <NavLink className={s.contactIcon} to={`//${contacts.website}`} target="_blank">
                <TfiWorld />
            </NavLink>
        </div>
    )
}

export default Contact