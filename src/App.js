import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer.ts';
import Preloader from './common/Preloader/Preloader';
import SideBarContainer from './components/Sidebar/SideBarContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.tsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) return <Preloader />

    return (
      <div className='app__wrapper'>
        <div className='app__sideBar'>
          <SideBarContainer />
        </div>
        <div className='app__wrapper-content'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path='/messages/*' element={<DialogsContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/login/*' element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
