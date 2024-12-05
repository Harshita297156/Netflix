import React from "react";
import Heading from "./Heading";
import Images from "./Images";

function Cards(props){
    //console.log(props);
    return(
      <>
      <div className='Cards'>
      <div className='Card'>
        <Images imgsrc={props.imgsrc} />
      <div className='card__info'> <span className='card__category'> {props.title} </span>
      <Heading sname={props.sname}/>
      <a href={props.links} target='_blank'><button> Watch Now </button> </a>
      </div>
      </div>
      </div>
      </>
  );
  }

  export default Cards;