import { Children } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/register/register';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home'
import Rightbar from './components/Rightbar/Rightbar';
import {createBrowserRouter,RouterProvider, Outlet, Navigate} from 'react-router-dom'; 
function App() {
  const currentUser = true;
  const Layout =()=>
  {
    return(
      <>
      <Navbar/>
      <div style={{display:'flex'}}>
        <Leftbar/>
        <div style={{flex:6}}>
        <Outlet/>

        </div>
        <Rightbar/>
      </div>
      </>
    )
  }
  const ProtectedRoute= ({children})=>
  {
    if (!currentUser) {
      return <Navigate to='/login'/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element:
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute> ,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);
  return (
   <>
   <RouterProvider router={router}/>
   </>

  );
}

export default App;
