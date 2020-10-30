import React from 'react';
import './App.css';
import { Switch, Route , Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>
(
  <div>
      <h1>HATS PAGE</h1>
  </div>
)
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

function App() {
  return (
  <div>
      <switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
      </switch>



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

export default App;
