import React, {  useEffect, useState} from "react";
import axios from "axios";

import './App.css';
// import { render } from "@testing-library/react";

const App = () => {

    const [state,setState] = useState();

   // useEffect is used because when first time page reloads we want to see the quotes
    useEffect( () => {
        fetchadvice();
      },[]);

      async function fetchadvice  ()  {
       
         try {
            const result = await axios.get("https://api.adviceslip.com/advice")
             const data = result.data.slip.advice;
            setState(data);
         }
         catch(error) {
            console.log(error);
         }

    }



   
    
        const advice = state;
        return(
            <div className="app">
                 <div className="card">
                     <h1 className="heading">{advice}</h1>
                     <button className="btn" onClick={fetchadvice}>
                        <span>New Quote</span>
                     </button>
                 </div>
            </div>
        );


}

export default App;