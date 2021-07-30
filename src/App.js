import './App.css';
import UserLoggedIn from './components/Footer';
import {Fragment} from 'react'
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProductListView from './components/ProductListView';
import Searchbar from './components/Searchbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const productList = [
    {'id':1,'name':'chicken mcdo','price':172.00},
    {'id':2,'name':'sisig','price':200.00},
    {'id':3,'name':'tapa','price':120.00},
    {'id':4,'name':'pasta','price':150.00}
  ]
  return (
    <div className="App">
      <Router>         
        <Switch>
          <Route exact path="/login">
              <Login></Login>
          </Route>
          <Route exact path="/">
            <ProductListView productList={productList}></ProductListView>
          </Route>      
          <Route>
              404 Page Not Found
          </Route>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
