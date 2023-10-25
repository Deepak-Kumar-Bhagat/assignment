
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import Main from './components/Main';
import Product from './components/Product';
import Customer from './components/Customer';
import Income from './components/Income';
import Promote from './components/Promote';
import Help from './components/Help';
import Protect from './ProtectedRoutes/Protect';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route element={<Protect/>}>
          <Route exact path="/home" element={<Main/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/customer" element={<Customer/>}/>
          <Route exact path="/income" element={<Income/>}/>
          <Route exact path="/promote" element={<Promote/>}/>
          <Route exact path="/help" element={<Help/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
