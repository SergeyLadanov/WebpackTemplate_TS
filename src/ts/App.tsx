import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SwitchTheme from '../components/SwitchTheme';



function App()
{
    return (
        <div>
            <SwitchTheme/>
            <Navbar/>
            

            <div className="row">
            <div className="col-md-12">
                Text example
            </div>
        </div>
        <p></p>
        </div>

    );
}

export default App;