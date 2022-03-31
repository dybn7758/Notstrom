import React from 'react';
import {Checkmark} from 'react-ionicons';

export default class RelatedTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [[1, 'testing', 1], [1, 'testing', 2]],
    }
  }


  render() {
    return (
      <div>Comparing
        <table>
        <thead>
        <tr>
          <th>Product 1</th>
          <th>Category</th>
          <th>Product 2</th>
        </tr>
        {this.state.data.map((value, index) => {
          console.log(value, index, 'outside');
          for (var x = 0; x < this.state.data; x++) {
            console.log(this.state.data[x]);
            return <th key={index}>{value}<Checkmark/></th>
          }
        })}
        </thead>
      </table>
      </div>
    )
  }
}