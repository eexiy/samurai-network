// @ts-ignore
import s from './Users.module.css'
// @ts-ignore
import Paginator from '../../common/Preloader/Paginator/Paginator.tsx'
import User from './User'
import { UserType } from '../../types/types'
import React, { FC } from 'react'

type PropsType = {
    isAuth: boolean
    pageSize: number
    currentPage: number
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    onPageChange: (pageNumber: number) => void
    unfollow: () => void
    follow: () => void
}

const Users: FC<PropsType> = ({ isAuth, totalUsersCount, pageSize, currentPage, onPageChange, users, ...props }) => {

    return (
        <div className={s.users}>
            <div className={s.users__paginator}>
                <Paginator
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            </div>
            <div className={s.usersCard}>
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />)
                }
            </div>

        </div>
    )
}

export default Users;