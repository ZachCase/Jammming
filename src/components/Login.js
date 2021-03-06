import React from 'react';
import '../stylesheets/Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className='Login'>
                <h2 className='Login__header'>Please Log-in with Spotify to Begin</h2>
                <a href={this.props.authorizeUserUrl} className='Login__button'>
                    <i className='fa fa-spotify fa-fw'></i>Log-in to Spotify
                </a>
            </div>
        );
    }
}

export default Login;