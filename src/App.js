import logo from './logo.svg';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './component/js/Home'
import About from './component/js/About'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
