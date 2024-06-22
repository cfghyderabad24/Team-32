import './App.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Register from './components/Register';
import Newsletter from './components/Newsletter';
import Notifications from './components/Notifications';
import AboutUs from './components/AboutUs';
import LoginFarmer from './components/LoginFarmer';
import LoginVolunteer from './components/LoginVolunteer';
import SignUp from './components/SignUp';
import Feedback from './components/Feedback';
import Admin from './components/Admin';
import Pageforadmin from './components/Pageforadmin';

import Home from './components/Home';
function App() {
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<RootLayout/>,
        children:
        [
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/admin',
            element:<Admin/>
          },
          {
            path:'/loginfarmer',
            element:<LoginFarmer/>
          },
          {
            path:'/registering',
            element:<Register/>
          },
          {
            path:'/loginvolunteer',
            element:<LoginVolunteer/>
          },
          {
            path:'/signup',
            element:<SignUp/>
          },
          {
            path:'/newsletter',
            element:<Newsletter/>
          },
          {
            path:'/notifications',
            element:<Notifications/>
          },
          {
            path:'/aboutus',
            element:<AboutUs/>
          },
          {
            path:'/feedback',
            element:<Feedback/>
          }
        ]
      },
      
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
