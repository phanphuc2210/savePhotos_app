import productApi from 'api/productApi';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
import SignIn from 'features/Auth/pages/SignIn';
import Photo from 'features/Photo';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './App.css';
import { Button } from 'reactstrap';


// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);


function App() {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const fetchProductList = async() => {
      try {
        const params = {
          _page: 1,
          _limit: 10
        }
        const response = await productApi.getAll(params)
        console.log(response);
        setProductList(response.data)
      } catch(error) {
        console.log('Failed to fetch froduct list: ', error);
      }
    }

    fetchProductList()
  }, [])

  //Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        //user logs out, handle something here
        console.log('User is not logged in');
        return
      }

      // console.log('Logged in user: ', user.displayName);

      // const token = await user.getIdToken()
      // console.log('Logged in user token', token);
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const handleButtonClick = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10
      }
      const response = await productApi.getAll(params)
      console.log(response);
    } catch(error) {
      console.log('Failed to fetch froduct list: ', error);
    }
  }

  return (
    <div className="App">
      <Header />

      <Button onClick={handleButtonClick}>Fetch Api</Button>

      <Routes>
        <Route path='/' element={<Navigate to='/photos'/>}/>

        <Route path="/photos/*" element={<Photo/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
