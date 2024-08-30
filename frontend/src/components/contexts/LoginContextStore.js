import React, { useState, createContext } from 'react';

export const logincontextprovider = createContext();

function LoginContextStore({ children }) {
    const [farmerloginstatus, setFarmerLoginStatus] = useState(false);
    const [adminloginstatus, setAdminLoginStatus] = useState(false);
    const [volunteerloginstatus, setVolunteerLoginStatus] = useState(false);

    const changestatusfarmer = () => {
        setFarmerLoginStatus(!farmerloginstatus);
    };
    const changestatusadmin = () => {
        setAdminLoginStatus(!adminloginstatus);
    };
    const changestatusvolunteer = () => {
        setVolunteerLoginStatus(!volunteerloginstatus);
    };

    return (
        <logincontextprovider.Provider value={{ farmerloginstatus, changestatusfarmer, adminloginstatus, changestatusadmin, volunteerloginstatus, changestatusvolunteer }}>
            {children}
        </logincontextprovider.Provider>
    );
}

export default LoginContextStore;