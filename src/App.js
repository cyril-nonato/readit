import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyles } from './App.styles'
import { ThemeProvider } from 'styled-components'
import { theme1, theme2 } from './theme/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUpPage from './pages/sign-up-page/sign-up-page.component'
import SignInPage from './pages/sign-in-page/sign-in-page.component'
import NavigationContainer from './components/navigation/navigation.container'
import HomePageContainer from './pages/home-page/home-page.container'
import { votesCheckRequest } from './redux/votes/votes.actions'
import { selectThemeStyle } from './redux/theme/theme.selector'
import { changeCurrentTheme } from './redux/theme/theme.actions'
import NotFoundPage from './pages/not-found-page/not-found-page.component'
import { selectAuthUserCreds } from './redux/auth/auth.selector'
import Loading from './components/loading/loading.component'

const CreatePostPageContainer = lazy(() => import('./pages/create-post-page/create-post-page.container'))
const SubReaditPage = lazy(() => import('./pages/sub-readit-page/sub-readit-page.component'))
const UpdatePostPageContainer = lazy(() => import('./pages/update-post-page/update-post-page.container'))
const UserPostsPageContainer = lazy(() => import('./pages/user-posts-page/user-posts-page.container'))
const SignOutContainer = lazy(() => import('./components/sign-out/sign-out.container'))
const CreateSubReaditPageContainer = lazy(() => import('./pages/create-sub-readit-page/create-sub-readit-page.container'))

function App() {

  const theme = useSelector(selectThemeStyle);
  const userCreds = useSelector(selectAuthUserCreds);
  const dispatch = useDispatch();

  // Initialize live votes changes on users vote
  useEffect(() => {
    if (userCreds) {
      dispatch(votesCheckRequest(userCreds))
    }
  }, [dispatch, userCreds]);

  const handleTheme = (type) => {
    if (type === false) {
      // Light
      dispatch(changeCurrentTheme(theme1))
    } else {
      // Dark
      dispatch(changeCurrentTheme(theme2))
    }
  }

  return (
    <main className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <NavigationContainer handleTheme={handleTheme} />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path='/login' component={SignInPage} />
              <Route path='/register' component={SignUpPage} />
              <Route path='/logout' component={SignOutContainer} />
              <Route path='/r' component={SubReaditPage} />
              <Route path='/create-subReadit' component={CreateSubReaditPageContainer} />
              <Route exact path='/create-post' component={CreatePostPageContainer} />
              <Route exact path='/update-post/:subReadit/:id' component={UpdatePostPageContainer} />
              <Route exact path='/your-posts' component={UserPostsPageContainer} />
              <Route exact path='/' component={HomePageContainer} />
              <Route path="/:anything" component={NotFoundPage} />
            </Switch>
          </Suspense>
        </ThemeProvider>
      </Router>
    </main>
  );
}

export default App;
