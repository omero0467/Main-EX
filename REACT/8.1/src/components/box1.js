// import Box2 from "./box2"
import styled from 'styled-components'
import './box1.css'

// const styleObj = {
//     backgroundColor: 'limegreen',
//     width: '60vmin',
//     height: '40vmin',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }



const Box2 =styled.div`
background-color: #61dafb;
width: 55vmin;
height: 35vmin;
display: flex;
align-items: center;
justify-content: center;
` 

function Box1() {
    return(
        // <div className='box1'>
        <div>
            <Box2></Box2>
        </div>
    )
}

export default Box1