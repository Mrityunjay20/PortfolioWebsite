import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorLayout from "./layouts/Error"
import RootLayout from "./layouts/Root"
import ExperiencePage from "./pages/ExperiencePage"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"

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
          element:<ExperiencePage/>
        },
        {
          path:'/projects',
          element:<ProjectsPage/>
        }
        
      ]
    }
  ])
  return (
    <RouterProvider  router={router}/>
  )
}

export default App
