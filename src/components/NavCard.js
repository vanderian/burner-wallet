import React from 'react';
import Ruler from "./Ruler";
import { Scaler } from "dapparatus";

export  default ({title, goBack, darkMode}) => {
  return (
      <div className="row">

        <div style={{position:'absolute',right:10,fontSize:42,top:0,cursor:'pointer',zIndex:1,padding:3}} onClick={()=>{console.log("CLICKED");goBack()}}>
          <i style={{color:darkMode?"#dddddd":"#000000"}} className="fas fa-times" />
        </div>

        <div style={{textAlign:"center",width:"100%",fontSize:22,marginBottom:10}}>
          <Scaler config={{startZoomAt:400,origin:"50% 50%",adjustedZoom:1}}>
            {title}
          </Scaler>
        </div>

        <Ruler />

      </div>
  )
};
