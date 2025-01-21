import React from 'react';
import UserForm from './components/UserForm';
import ItineraryForm from './components/IternaryForm';
import BudgetForm from './components/BudgetForm';
import Recommendations from './components/Recommendations';
import WeatherTraffic from './components/WeatherTraffic';
import Notification from './components/Notifications';
import SignIn from './components/SignIn';
import SignUp from './SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './components/authConfig'; // Create this file for MSAL config

const App = () => {
    const handleUserSubmit = (userData) => {
        console.log('User  Data:', userData);
    };

    const handleIternaryCreate = (iternaryData) => {
        console.log('Itinerary Data:', iternaryData);
    };

    const handleBudgetSubmit = (budget) => {
        console.log('Budget:', budget);
    };

    return (
        <GoogleOAuthProvider clientId="http://548193554124-24js3hcs76ngnqkvvg84fo6rfailjili.apps.googleusercontent.com">
            <MsalProvider instance={msalConfig}>
                <div>
                    <h1>Smart AI Itinerary Planner</h1>
                    <SignIn />
                    <SignUp />
                    <UserForm Form onSubmit={handleUserSubmit} />
                    <ItineraryForm onCreate={handleIternaryCreate} />
                    <BudgetForm onBudgetSubmit={handleBudgetSubmit} />
                    <Recommendations recommendations={['Visit the Eiffel Tower', 'Explore the Louvre']} />
                    <WeatherTraffic weather="Sunny, 25°C" traffic="Light traffic" />
                    <Notification message="Your itinerary has been created!" />
                </div>
            </MsalProvider>
        </GoogleOAuthProvider>
    );
};

export default App;