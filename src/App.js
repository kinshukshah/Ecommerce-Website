import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import { Switch,Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

import { auth,createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null,
    }
  }
  unSubsrcibeFromAuth=null;
  componentDidMount(){
    this.unSubsrcibeFromAuth=auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          });
          


        });
        
      }else{
        this.setState({currentUser:userAuth});

      }


    })
  }
  componentWillUnmount(){
    this.unSubsrcibeFromAuth();
  }
  render(){
    return (
    <div>
     <Header currentUser={this.state.currentUser} />
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shops' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>

  );
}
  }

export default App;
