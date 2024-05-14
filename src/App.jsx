// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {LoginPage, HomePage, ContactUs, AboutUs} from './components/pages';
import Navbar from './components/navbar';
import styled from 'styled-components';

const Layout = styled.div``

const LayoutMain = styled.main`
  // padding: 0 5%;
`

function App() {
  return (
    <Layout className='App'>
    <Navbar/>
      <LayoutMain>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='contactUs' element={<ContactUs />} />
            <Route path='aboutUs' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </LayoutMain>
    </Layout>
  );
}

export default App;
