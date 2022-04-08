import React,{ useContext } from 'react';
import { ThemeContext } from '../App';

export default function Child(){

  const theme = useContext(ThemeContext);

  return(
   <div style={theme} className="p-4">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!</div>
   </div>
  )
}