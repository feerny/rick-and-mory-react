import React from 'react';
import Header from '../layout/Header'
import Main from '../layout/Main'

function Home(props) {
    return (
        <div>
            <Header title='Rick And Morty' />
            <Main />
        </div>
    );
}

export default Home;