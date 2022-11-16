import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ListGroup,ListGroupItem,Button } from "reactstrap";
import { GlobalContext } from '../context/Global';

function List() {
    const { listings, removeListing,} = useContext(GlobalContext)
    console.log(listings);
    if (listings.length===0){   
 return <h4>No Listings</h4>
} 
return (
  <ListGroup className='mt-4'>
  {listings.map((item)=>{
    return (<ListGroupItem className='d-flex justify-content-between'>
      <span>{item.title}</span>
  <div className="ml-auto">
      <Link className='btn btn-warning mr-1' to={`/edit/${item.id}`}>Edit</Link>
      <Button onClick={()=>removeListing(item.id)} color='danger'>Delete</Button>
  </div>
  </ListGroupItem>)
  })}
</ListGroup>
)
}

export default List