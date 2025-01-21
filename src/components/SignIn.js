import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import { useMsal } from '@azure/msal-react';

const SignIn = () => {
    const { instance } = useMsal();

    const handleGoogleSuccess = (response) => {
        console.log('Google Response:', response);
        // Handle user data and authentication
    };

    const handleGoogleFailure = (error) => {
        console.error('Google Login Failed:', error);
        // Provide feedback to the user
    };

    const handleFacebookResponse = (response) => {
        console.log('Facebook Response:', response);
        // Handle user data and authentication
    };

    const handleMicrosoftLogin = () => {
        const loginRequest = {
            scopes: ["User .Read"]
        };

        instance.loginPopup(loginRequest)
            .then(response => {
                console.log('Microsoft Response:', response);
                // Handle user data and authentication
            })
            .catch(error => {
                console.error('Microsoft Login Failed:', error);
                // Provide feedback to the user
            });
    };

    return (
        <div>
            <h2>Sign In</h2>
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                style={{ margin: '10px' }} // Optional styling
            />
            <FacebookLogin
                appId="593054866756509"
                autoLoad={false}
                fields="name,email,picture"
                callback={handleFacebookResponse}
                style={{ margin: '10px' }} // Optional styling
            />
            <button onClick={handleMicrosoftLogin} style={{ margin: '10px' }}>
                Sign in with Microsoft
            </button>
        </div>
    );
};

export default SignIn;