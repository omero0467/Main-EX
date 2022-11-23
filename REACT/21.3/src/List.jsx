import React, { Component } from 'react'
import axios from "axios";


export default class List extends Component {

    state = {
        countries:[]
    }
    

    abortController = new AbortController();
    componentDidMount(){
        (async () => {
               

            const { data } = await axios.get("https://restcountries.com/v3.1/all",{signal:this.abortController.signal});
            this.setState(
              { countries: data.map((item) => item.name.common).sort() }
            );
          })();
    }

    componentWillUnmount(){
        console.log("aborted");
        this.abortController.abort()
    }

  render() {

    return (

      <div>
        {this.state.countries.map((item)=><div> 
            {item}
        </div>)}
      </div>
    )
  }
}
