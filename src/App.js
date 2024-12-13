import Login from "./components/auth/login";
//import Register from "./components/auth/register";

//import Header from "./components/header";
import Feeds from "./components/feeds";
import Share from "./components/share";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,},
   
    {
      path: "/feeds",
      element: <Feeds />,
    },
    {
      path: "/share",
      element: <Share />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
    
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
