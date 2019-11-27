import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyles } from './App.styles'
import { ThemeProvider } from 'styled-components'
import { theme1, theme2 } from './theme/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import NavigationContainer from './components/navigation/navigation.container';
import SignOutContainer from './components/sign-out/sign-out.container';
import HomePageContainer from './pages/home-page/home-page.container';
import CreatePostPageContainer from './pages/create-post-page/create-post-page.container';
import SubReaditPage from './pages/sub-readit-page/sub-readit-page.component'
import { votesCheckRequest } from './redux/votes/votes.actions'
import { selectThemeStyle } from './redux/theme/theme.selector'
import { changeCurrentTheme } from './redux/theme/theme.actions'
import UpdatePostPageContainer from './pages/update-post-page/update-post-page.container'

function App() {
  const theme = useSelector(selectThemeStyle);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(votesCheckRequest())
  }, [dispatch]);
  console.log(theme);
  const handleTheme = (type) => {
    if(!type) {
      // Light
      console.log('nay');
      dispatch(changeCurrentTheme(theme1))
    } else {
      // Dark
      console.log('ye');
      dispatch(changeCurrentTheme(theme2))
    }
  }

  return (

    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <NavigationContainer handleTheme={handleTheme} />
          <Switch>
            <Route path='/login' component={SignInPage} />
            <Route path='/register' component={SignUpPage} />
            <Route path='/logout' component={SignOutContainer} />
            <Route path='/r' component={SubReaditPage} />
            <Route exact path='/create-post' component={CreatePostPageContainer} />
            <Route exact path='/update-post/:id' component={UpdatePostPageContainer} />
            <Route exact path='/:homeParams' component={HomePageContainer} />
            <Route exact path='/' component={HomePageContainer} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
