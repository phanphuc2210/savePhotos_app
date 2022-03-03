import productApi from 'api/productApi';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
import Photo from 'features/Photo';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';


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

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/photos'/>}/>

        <Route path="/photos/*" element={<Photo/>}/>
        <Route path="/sign-in" element={<h1>Sign in</h1>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
