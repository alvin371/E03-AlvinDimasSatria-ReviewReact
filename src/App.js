import logo from './logo.svg';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './component/js/Home'
import About from './component/js/About'
import Result from './component/js/Result';
import ErrorPage from './component/js/ErrorPage';
import News from './component/js/News';
import { useLocation } from 'react-router';
function App() {
  function NoMatch() {
    let location = useLocation();
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/news" exact component={News} />
        <Route path="/review" exact component={Result} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
