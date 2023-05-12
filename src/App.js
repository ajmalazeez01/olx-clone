import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router , Routes , Route, Navigate} from 'react-router-dom'
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'
import Post from './store/PostContext'
import Home from './Pages/Home';
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import ViewPost from "./Pages/ViewPost"


import { AuthContext  } from './store/FirebaseContext';


function App() {
  const auth=getAuth()
  const {user, setUser} =useContext(AuthContext)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
       
        console.log('logged in');
      }
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/signup' element={user? <Navigate to='/'/> :<Signup />}/>
          <Route path='/login' element={user? <Navigate to='/'/> :<Login />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/view' element={<ViewPost />}/>


        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
