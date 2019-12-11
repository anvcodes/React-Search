import React from 'react';
import Form from './Form';

class JumboTron extends React.Component{
    render(){
        return(

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Google Book Search</h1>
              <Form/>
            </div>
        </div>
        
        )
    }
}

export default JumboTron;