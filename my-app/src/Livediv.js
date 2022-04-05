import React from 'react';

export default function Livediv(props){

   let ticStat;

   if(props.ticket > 20){
     ticStat = "Satışta";
   }
   else if(props.ticket > 1){
    ticStat = "Az Kaldı";
  }
  else{
    ticStat = "Tükendi";
  }
  

   return(
         <div className="fac fjc flex-col">
         {props.name}
         <br />
         {props.place}
         <br />
         {props.ticket}
         <br />
         {ticStat}
         </div>
   
   )
}