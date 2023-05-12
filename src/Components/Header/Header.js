import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/FirebaseContext';
import {
  getAuth,
  signOut
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

function Header() {
  const auth=getAuth()
  const {user,setUser}=useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/create')
  }

  const login = (e) =>{
    e.preventDefault();
    navigate('/login')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span  onClick={login}>{user ? user.displayName : 'Login'}</span>
          <hr />
        </div>
        { user &&  <span onClick={()=>{
          signOut(auth).then(() => {
            console.log('user logged out')
            setUser('')
            navigate('/login')
          }).catch((error) => {
            console.log(error);
          });
        }} >Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleSubmit} >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
