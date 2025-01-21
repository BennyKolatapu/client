import React from 'react';

const Login = () => {
    const handleLogin = (provider) => {
        window.open(`/auth/${provider}`, "_self");
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={() => handleLogin('google')}>Login with Google</button>
            <button onClick={() => handleLogin('facebook')}>Login with Facebook</button>
            <button onClick={() => handleLogin('microsoft')}>Login with Microsoft</button>
        </div>
    );
};

export default Login;