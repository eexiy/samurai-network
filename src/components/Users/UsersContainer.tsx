import React from "react"
import { connect } from "react-redux";
// @ts-ignore
import Users from "./Users.tsx";
// @ts-ignore
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers, } from "../../redux/usersReducer.ts";
import Preloader from "../../common/Preloader/Preloader";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";
import { UserType } from "../../types/types";

type PropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    isAuth: boolean
    users: Array<UserType>
    followingInProgress: Array<number>

    unfollow: () => void
    follow: () => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <Preloader />
                    : null
            }

            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                isAuth={this.props.isAuth} />
        </>
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//         isAuth: state.auth.isAuth
//     }
// }


// MSTP with selectors
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}


export default connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    toggleFollowingProgress, requestUsers
})(UsersContainer)