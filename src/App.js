import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import PopularsPage from './pages/PopularsPage';
import SingleMovie from './pages/SingleMovie';
import "./assets/styles/main.scss"

import Header from './containers/Header';
import Search from './pages/Search';
import Person from './pages/Person';

function App({match}) {
  return (
    <Router>

      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/populars" component={PopularsPage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route exact path="/person/:id" component={Person} />
      </Switch>
    </Router>
  );
}

export default App;