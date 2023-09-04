import {Routes, Route} from 'react-router-dom'
import Layouts from './components/Layouts';
import Public from './components/Public';
import Login from './features/auth/Login';
import Register from './features/Register';
function App() {
  return (
    <Routes>
        <Route path='/' element={<Layouts />} >
          <Route index element={<Public />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

      </Route>
    </Routes>
  );
}

export default App;
