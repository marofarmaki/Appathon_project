import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class Results2 extends Component {
  sortByNrOfStudies() {
    var x = this.props.studies2;
    var y = this.props.condition2;
    var z = this.props.disease3;
    for (var q = 0; q <= x.length; q++) {
      if (y[q] == z) {
        y[q] = "-";
        x[q] = "-1";
      }
    }
    for (var i = 0; i <= x.length - 1; i++) {
      for (var j = i + 1; j <= x.length; j++) {
        if (x[j] > x[i]) {
          var temp = x[j];
          x[j] = x[i];
          x[i] = temp;
          var temp1 = y[j];
          y[j] = y[i];
          y[i] = temp1;
        }
      }
    }
    return [y, x];
  }

  render() {
    var condition = this.props.condition2;
    var Nstudies = this.props.studies2;
    this.sortByNrOfStudies();
    return (
      <div className="result">
        <h2>Αποτελέσματα</h2>
        <h5>Ταξινόμηση ασθενειών βάσει τον αριθμό των κλινικών μελετών:</h5>
        <Table>
          <thead class="thead-dark">
            <tr>
              <th>A/A</th>
              <th>Ασθένεια</th>
              <th>Αριθμός Μελετών</th>
            </tr>
          </thead>
          <tbody>
            {condition.slice(0, condition.length - 1).map((value, index) => (
              <tr className="table-info">
                <td>{index + 1}</td>
                <td>{condition[index]}</td>
                <td>{Nstudies[index]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Results2;
