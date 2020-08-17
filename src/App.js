import React from 'react';
import './App.css';
import { HomePage } from './homepage/homepage.component';
import { Switch,Link, Route} from 'react-router-dom';

const Hats = (props) => {
  console.log("Hats", props)
  return (
    <div>
    <button onClick={() => props.history.push('/')}>Home</button>
      <h1>Hats</h1>
    </div>
)};

function App() {
  return (
   <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/hats/:hatId" component={Hats} />
   </div>
  );
}

export default App;

/* <Link to='/'>Home</Link> */

/* <Switch>
<Route path="/" component={HomePage} />
<Route path="/hats" component={Hats} />
</Switch> */

/* <Route exact path="/" component={HomePage} />
   <Route exact path="/hats" component={Hats} /> */

/* <div className="App">
 <HomePage />
</div> */
