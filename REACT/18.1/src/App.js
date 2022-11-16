import React from 'react'
import './App.css';
// import axios from 'axios'
import { BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import { GlobalProvider } from './context/Global';
// https://6373a9b9348e94729912f2b1.mockapi.io/crudMock/:endpoint

function App() {

  return (
    <div className="App">
      <GlobalProvider>
      <Router>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/add' element={<AddItem />} />
         <Route path='/edit/:id' element={<EditItem />} /> 
      </Routes>
      </Router>
      </GlobalProvider>
    </div>
  )
  
}

export default App

//  const [selectedListing, setselectedListing] = useState("");
// const params = useParams()
  
// useEffect(()=>{
//   const ListingId = params.id
//   const selectedItem = listings.find(item=>item.id===ListingId)
// })