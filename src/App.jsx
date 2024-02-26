// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {LoginPage, HomePage} from './components/pages';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Layout = styled.div``
function App() {
  return (
    <Layout className='App'>
      <Navbar></Navbar>
      <BrowserRouter>
         <Routes>
           <Route path='login' element={<LoginPage />} />
           <Route path='home' element={<HomePage />} />
         </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
