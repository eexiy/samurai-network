import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer.ts';
import Sidebar from './Sidebar';

class SideBarContainer extends React.Component {

    render() {
        return <Sidebar {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logout })(SideBarContainer);