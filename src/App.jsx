import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const App =() =>(
    <>
        <h1 className="heading_style" >List of series and movies </h1>
        {Sdata.map( (val,index )=>{
      console.log(index);
      return(
            <Cards key={val.id}
                   sname = {val.sname}
                   imgsrc= {val.imgsrc}
                   title ={val.title}
                   links= {val.links}
                                                
                   />
                   );    
})}
  </>

);

export default App ;