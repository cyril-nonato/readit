import React from 'react';
import { GlobalStyles } from './App.styles'
import { ThemeProvider } from 'styled-components'
import { theme1 } from './theme/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import NavigationContainer from './components/navigation/navigation.container';
import SignOutContainer from './components/sign-out/sign-out.container';
import HomePageContainer from './pages/home-page/home-page.container';

function App() {
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
            <Route exact path='/' component={HomePageContainer} />
            <Route path='/r/popular' component={HomePageContainer} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
