import Header from 'components/Header';
import NotFound from 'components/NotFound';
import Photo from 'features/Photo';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
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
