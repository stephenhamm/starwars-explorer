import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TopAppBar from './components/UI//TopAppBar/TopAppBar';

const Home = lazy(() => import('./containers/Home/Home'));
const People = lazy(() => import('./containers/People/People'));
const Movies = lazy(() => import('./containers/Movies/Movies'));
const Planets = lazy(() => import('./containers/Planets/Planets'));
const NotFound = lazy(() => import('./containers/NotFound/NotFound'));

function App() {
  return (
    <Router>  
      <div className="App">
        <TopAppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/People" component={People} />
            <Route path="/Movies" component={Movies} />
            <Route path="/Planets" component={Planets} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
