import React from 'react';
import DeleteStudent from './DeleteStudent';
import SubmitStudent from './SubmitStudent';
import UpdateStudent from './UpdateStudent';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <DeleteStudent /> 
            <SubmitStudent />
            <UpdateStudent />
        </div>
    );
}

export default Home;
