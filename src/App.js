import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import GlobalStyle from './globalStyles';
import { Navbar, Create, Edit, BlogDetails, Footer } from './components';
import Scroll from './components/Scroll';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Scroll />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        {/* <Route path="/blogs/edit/:blogId">
          <Edit />
        </Route> */}
        <Route exact path="/blogs/edit/:id" component={Edit} />
        {/* <Route exact path="/blogs/edit/:blogId" component={Edit} /> */}
        <Route exact path="/blogs/:id" component={BlogDetails} />
        {/* <Route exact path="/blogs/:blogId" component={BlogDetails} /> */}
        {/* <BlogDetails />
        </Route> */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
