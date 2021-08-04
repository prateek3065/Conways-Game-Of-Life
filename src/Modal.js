import React from 'react-dom'
import ReactDom from 'react-dom'
import './style.css'
/*
const MODAL_STYLES={
    position: 'fixed',
    top:'40%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    width:'600px',
    padding: '50px',
    boxshadow: '0 5px 30px rgba(0,0,0,.3)',
    animation: 'fadeInAnimation ease 3s',
    backgroundColor: 'lightgreen',
    transition:'0.5s',
    opacity: 1,
    zindex: 1000,
    overflow:'scroll'
} */
const OVERLAY_STYLES={
  position: 'fixed',
  top: 0,
  left: 0,
  right:0,
  bottom:0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  zindex:1000
}
export default function Modal({open,setIsOpen,children}) {
    if(!open)
    return null
   function handleMclick()
   {
     setIsOpen(false)
   }
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES}></div>
        <div className='MODAL_STYLES'>
            {children}
            
            <button onClick={()=>handleMclick()}>Close</button>
        </div>  </>,
        document.getElementById('portal')
       
    )
}

/*
<p>The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>
            <p>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
            <p>Any live cell with two or three live neighbours lives on to the next generation.</p>
            <p>Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
            <p>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
*/
//changes