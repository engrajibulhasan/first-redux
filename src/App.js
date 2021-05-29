
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CounterPage from "./components/CounterPage/CounterPage";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
//ACTION ->It describe What you want to do
/*
const increment =()=>{
  return{
    type:'INCREMENT' //type is actually the name of the action
  }
}
const decrement =()=>{
  return{
    type:'DECREMENT' //type is actually the name of the action
  }
}
*/

//Reducer ->Reducer describe how your actions transform in state (Its modify state based on Action)
/*
const counter=(state=0,action)=>{
  switch (action.type) {
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
      default:
        break;
  }
}
let store=createStore(counter);
*/


/*
store.subscribe(()=>console.log(store.getState())); //display it
*/


//Dispatch ->Dispatch transfer the action to the Reducer
/*
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
*/



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/counter">
          <CounterPage/>
        </Route>
        <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
