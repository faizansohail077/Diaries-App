import React,{FC,lazy,Suspense} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {RootState} from '../rootReducer'


// const Auth = lazy(() => import('../store/auth/Auth'));
// const Home = lazy(()=>import('../store/home/Home'))

const App: FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated)
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Suspense fallback={<p>Loading</p>}>
            {isLoggedIn ? '':''}
          </Suspense>
        </Route>


      </Switch>
        </Router>
  )
  
}
export default App;

