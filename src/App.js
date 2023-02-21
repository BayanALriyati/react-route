
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/Navbar';
import Todo  from './components/Todo';
import Register  from './components/Register';
import Login  from './components/Login';
import React from 'react';
import { Routes , Route} from 'react-router-dom';

function App() {  
    return(
       <div>
         <Navbar />
         <Routes>
         <Route path='/Todo' component={<Todo/>} element={<Todo/>}/>
         <Route path='/Register' component={<Register/>} element={<Register/>}/>
         <Route path='/Login' component={<Login/>} element={<Login/>}/>
         </Routes>
       </div>
    );
  }


export default App;
