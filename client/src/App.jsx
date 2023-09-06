import Login from './pages/Login/Login';
import Register from './pages/register/register';
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'; 
function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>

  );
}

export default App;
