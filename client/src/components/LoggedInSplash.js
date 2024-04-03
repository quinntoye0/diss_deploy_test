import React from 'react'
import '../App.css';
import './LoggedInSplash.css'
import './SplashScreen.css'
import { Button } from './Button';


function LoggedInSplash() {

    return (
    <div className='logged-splash-container'>

        <h1>My Groups</h1>
        <Button buttonStyle='btn--outline' path='/create-group'>Create Group</Button>

    </div>
    )
}

export default LoggedInSplash



//   const [apiResponse, setApiResponse] = useState('');
//   const [dbResponse, setDbResponse] = useState('');

//   useEffect(() => {
//     // Fetch API data
//     fetch("http://localhost:9000/testAPI")
//       .then(res => res.text())
//       .then(response => setApiResponse(response));
    
//     // Fetch DB data
//     fetch("http://localhost:9000/testDB")
//       .then(res => res.text())
//       .then(response => setDbResponse(response));
//   }, []);
