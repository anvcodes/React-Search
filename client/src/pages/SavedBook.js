import React from 'react';
import SavedBooks from "../components/SavedBooks";


class Saved extends React.Component{


  render() {
    return (
      
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">My Saved Books</h1>
              
            </div>
        </div>
        <SavedBooks/>
      </div>
  );
  }
}

export default Saved;