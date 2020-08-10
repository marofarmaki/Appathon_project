import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class Results extends Component {
  sortByNrOfStudies() {
    var y = this.props.studies;
    var x = this.props.medicine;
    for (var i = 0; i <= y.length - 1; i++) {
      for (var j = i + 1; j <= y.length; j++) {
        if (y[j] > y[i]) {
          var temp = y[j];
          y[j] = y[i];
          y[i] = temp;
          var temp1 = x[j];
          x[j] = x[i];
          x[i] = temp1;
        }
      }
    }
    return [x, y];
  }

  render() {
    var InterventionName = this.props.medicine;
    var Nofstudies = this.props.studies;
    this.sortByNrOfStudies();
    return (
      <div className="result">
        <h2>Αποτελέσματα</h2>
        <h5>Ταξινόμηση φαρμάκων βάσει τον αριθμό των κλινικών μελετών:</h5>
        <Table>
          <thead class="thead-dark">
            <tr>
              <th>A/A</th>
              <th>Φάρμακο</th>
              <th>Αριθμός Μελετών</th>
            </tr>
          </thead>
          <tbody>
            {InterventionName.slice(0, 5).map((value, index) => (
              <tr class="table-info">
                <td>{index + 1}</td>
                <td>{InterventionName[index]}</td>
                <td>{Nofstudies[index]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Results;
