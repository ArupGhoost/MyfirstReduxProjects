import React from 'react';
import './MyfirstRedux.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './Actions/indexaction';

const MyfirstRedux = () => {
  
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

    return (
        <>
        <div className='container'>
          <h1 title='Redux'>React Redux</h1>

          <div className='quantitiy'>
             <a className='quantity_minus' title='Decrement' onClick={() =>{
                
       
               dispatch(decNumber());
               
               }}><span> - </span></a>
             <input name='quantity' type='text' className='quantity_input' value={myState} />
             <a className='quantity_plus' title='Increment'
               onClick={() =>{
                 
                  dispatch(incNumber())
                 
              }}><span> + </span></a>
          </div>
          </div>  
        </>
    )
}

export default MyfirstRedux
