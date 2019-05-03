import React from 'react';
import Counter from '../Containers/displayCounter'
import AddCounter from '../Containers/addCounter';
import RemoveCounter from '../Containers/removeCounter';

const App = () => {
  return (
    <div className="container">
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
      </div>
      </div>
  )
}
export default App;
