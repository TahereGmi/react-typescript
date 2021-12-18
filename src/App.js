import React, { memo } from 'react'
import DataProvider, { Consumer } from './context/DataProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss'


const App = memo(() => {
  return (
    <DataProvider>
          {/* <Consumer>
            {props => {
              const { cart, setCart } = props
              return <div>
                {cart.item}
                <button onClick={() => setCart({ item: 'test2' })}>click here!</button>
              </div>
            }}
          </Consumer> */}

      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    </DataProvider>
  )
})

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App
