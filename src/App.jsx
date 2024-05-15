import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorLayout from "./layouts/Error"
import RootLayout from "./layouts/Root"
import HomePage from "./pages/HomePage"

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      errorElement:<ErrorLayout/>,
      children:[
        {index:true,
        element:<HomePage/>},
        {path:'/experience',
          element:<h1>This is experience page</h1>
        }
        
      ]
    }
  ])
  return (
    <RouterProvider  router={router}/>
  )
}

export default App
