import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopAppBar from './components/UI//TopAppBar/TopAppBar';
import './App.css';

const Home = lazy(() => import('./containers/Home/Home'));
const People = lazy(() => import('./containers/People/People'));
const Person = lazy(() => import('./components/Person/Person'));
const Movies = lazy(() => import('./containers/Movies/Movies'));
const Movie = lazy(() => import('./components/Movie/Movie'));
const Planets = lazy(() => import('./containers/Planets/Planets'));
const Planet = lazy(() => import('./components/Planet/Planet'));
const NotFound = lazy(() => import('./containers/NotFound/NotFound'));

//Setting Suspense fallback to null since visible loading spinner is handled through Redux actions
function App() {
  return (
    <Router>  
      <div className="App">
        <TopAppBar />
        <Suspense fallback={null}>      
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/people" component={People} />
            <Route path="/person/:id" component={Person} />
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/planets" component={Planets} />
            <Route path="/planet/:id" component={Planet} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
