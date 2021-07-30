import './App.css';
import Login from './components/Login';
import ProductListView from './components/ProductListView';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';

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
              <PageNotFound></PageNotFound>
          </Route>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
