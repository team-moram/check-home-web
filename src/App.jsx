import './App.css'
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <div className={"default-layout"}>
          <Outlet/>
      </div>
    </>
  )
}

export default App
