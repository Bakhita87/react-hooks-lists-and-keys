import React from "react";
import ColorList from "./ColorList";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";

function App() {
  return(
    <div>
      <h1>Project List</h1>
      <ProjectList Projects={Projects} />
      <ColorList />
      <NavBar/>
      <ProjectList/>
      <ProjectItem/>
    </div>
  );
};




  
   
  


export default App;
