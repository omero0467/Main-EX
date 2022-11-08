import './box3.css'
import styled from 'styled-components'
// import Box4 from './box4'

// const styleObj = {
//     backgroundColor: 'pink',
//     width: '50vmin',
//     height: '30vmin',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
// }


const Box4 =styled.div`
background-color: violet;
width: 30vmin;
height: 10vmin;
display: flex;
margin: 10px 0;
align-items: center;
justify-content: center;
` 

function Box3() {
    return(
        // <div className='box3'>
        <div>
            <Box4></Box4>
            <Box4></Box4>
        </div>
    )
}

export default Box3