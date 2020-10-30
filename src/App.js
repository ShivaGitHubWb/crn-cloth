import React from 'react';
import './App.css';
import { Switch, Route , Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'; 
// const HatsPage = () =>
// (
//   <div>
//       <h1>HATS PAGE</h1>
//   </div>
// )
const HomePage1 = (props) =>
{
  console.log(props);
  return ( <div>
      {/* <Link to="/topics">Topics</Link> */}
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>HOME PAGE 1</h1>
  </div>
  );
}
const TopicsList = (props) =>
{
  console.log(props);
  return (<div>
      <h1>TOPICS LIST</h1>
      <Link to={`${props.match.url}/13`}>Link to 13</Link>
      <Link to={`${props.match.url}/15`}>Link to 15</Link>
      <Link to={`${props.match.url}/17`}>Link to 17</Link>
  </div>
  );
}
const TopicDetail = (props) =>
{
  console.log(props);
  return (
  <div>
      <h1>TOPIC DETAIL PAGE : {props.match.params.topicId}</h1>
  </div>
  );
}

class App extends React.Component {

  constructor(){

    super();

    this.state = {
      currentUser:null 

    }
  }

  unsubscribeFromAuth = null
componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

    this.setState({currentUser:user});

    console.log(user);
  }
  );
  
}

componentWillUnmount() {

this.unsubscribeFromAuth();

}

  render(){
    return (
      <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
    
    
    
        {/* <Switch> */}
          {/* <Route  path='/' component={HomePage} /> */}
          {/* <Route path='/' component={HomePage1} />
          <Route exact path='/topics' component={TopicsList} />
          <Route path='/topics/:topicId' component={TopicDetail} /> */}
          {/* <Route path='/hats' component={HatsPage} /> */}
          {/* <HomePage /> */}
        {/* </Switch>     */}
      </div>
      );

  }


}

export default App;
