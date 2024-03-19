// import {useLocation} from 'react-router-dom'
import '../App.css';
import './LoggedInSplash.css'
import './SplashScreen.css'


function LoggedInSplash() {

    // const location=useLocation()


    return (
    <div className='logged-splash-container'>

        <h1>TEsting logged in page</h1>

        {/* <h1>hello {location.state.id} - YOU ARE LOGGED IN!</h1> */}

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
