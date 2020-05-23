import React, {Fragment} from 'react';
import Header from "./components/Header"
import Formulario from "./components/Formulario"

import './App.css';

function App() {
  return (
    <Fragment>
     <Header/>
     <div className="container mt-5 ">
       <div className="row">
        <div className="col-12">
        <Formulario/>
        </div>
       </div>
     </div>

    </Fragment>
  );
}

export default App;
