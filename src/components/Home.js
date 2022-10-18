import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>This is home for {user?.email}</h2>
        </div>
    );
};

export default Home;