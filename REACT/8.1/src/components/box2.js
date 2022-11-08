// import Box3 from './box3'
import styled from 'styled-components'
import './box2.css'


// const styleObj = {
//     backgroundColor: '#61dafb',
//     width: '55vmin',
//     height: '35vmin',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }


const Box3 =styled.div`
background-color: pink;
width: 50vmin;
height: 30vmin;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
` 

function Box2() {
    return(
        // <div className='box2'>
        <div>
            <Box3></Box3>
        </div>
    )
}

export default Box2