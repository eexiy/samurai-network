import s from './Users.module.css'
// import { Navigate } from 'react-router-dom'
import Paginator from '../../common/Preloader/Paginator/Paginator'
import User from './User'

const Users = ({ isAuth, totalUsersCount, pageSize, currentPage, onPageChange, ...props }) => {

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
                    props.users.map(user => <User
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