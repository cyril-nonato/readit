import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from './App.styles'
import { ThemeProvider } from 'styled-components'
import { theme1 } from './theme/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import NavigationContainer from './components/navigation/navigation.container';
import SignOutContainer from './components/sign-out/sign-out.container';
import HomePageContainer from './pages/home-page/home-page.container';
import { selectAuthUserCreds } from './redux/auth/auth.selector';
import { votesCheckRequest } from './redux/votes/votes.actions';
import CreatePostPageContainer from './pages/create-post-page/create-post-page.container';
import SubReaditPostsPageContainer from './pages/sub-readit-posts-page/sub-readit-posts-page.container';

function App() {
  const userCreds = useSelector(selectAuthUserCreds);
  const dispatch = useDispatch();

  useEffect(() => {
    if(userCreds) {
      dispatch(votesCheckRequest())
    }
  
  }, [userCreds, dispatch]);

  return (

    <div className="App">
      <Router>
        <ThemeProvider theme={theme1}>
          <GlobalStyles />
          <NavigationContainer />
          <Switch>
            <Route path='/login' component={SignInPage} />
            <Route path='/register' component={SignUpPage} />
            <Route path='/logout' component={SignOutContainer} />
            <Route path='/create-post' component={CreatePostPageContainer} />
            <Route path='/r/:subReadit' component={SubReaditPostsPageContainer} />
            <Route exact path='/' component={HomePageContainer} />
            <Route exact path='/:homeParams' component={HomePageContainer} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
