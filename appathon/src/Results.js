import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Results2 from "./Results2";
import $ from "jquery";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIsLoaded: false,
    };
  }
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

  handleOnButtonSubmit = (event) => {
    var medValue = event.target.value;
    var self = this;
    var site =
      "https://clinicaltrials.gov/api/query/study_fields?expr=" +
      medValue +
      "&fields=Condition&min_rnk=1&max_rnk=1000&fmt=json";
    $(document).ready(function () {
      $.ajax({
        type: "GET",
        async: true,
        url: "http://localhost:8080/MedServletNew/MedServlet",
        data: {
          dataFromJquery: site,
        },
        success: function (responseData) {
          self.setState({
            dataIsLoaded: true,
            items: responseData.StudyFieldsResponse.StudyFields,
          });
        },
        error: function (error) {
          alert("An error existed on jquery: " + error);
        },
      });
    });
  };
  render() {
    var { dataIsLoaded, items } = this.state;
    let disease2 = this.props.disease1;
    let Nstudies = [];
    let condition = [];
    if (dataIsLoaded === true) {
      items.map((postDetail, index) => {
        var prevValue = null;
        postDetail.Condition.map((value2) => {
          var conditionFound = false;
          if (prevValue !== value2) {
            condition.map((value1, index1) => {
              if (value1 === value2 && !conditionFound) {
                Nstudies[index1] = Nstudies[index1] + 1;
                conditionFound = true;
              }
            });
            if (conditionFound === false) {
              condition.push(value2);
              Nstudies.push(1);
            }
            prevValue = value2;
          }
        });
      });
      return (
        <Results2
          condition2={condition}
          studies2={Nstudies}
          disease3={disease2}
        />
      );
    } else {
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
                <th>
                  Πατήστε για αναζήτηση άλλων ασθενειών που χρησιμοποιείται το
                  εκάστοτε φάρμακο
                </th>
              </tr>
            </thead>
            <tbody>
              {InterventionName.slice(0, 5).map((value, index) => (
                <tr class="table-info">
                  <td>{index + 1}</td>
                  <td>{InterventionName[index]}</td>
                  <td>{Nofstudies[index]}</td>
                  <td>
                    {" "}
                    <button
                      value={InterventionName[index]}
                      onClick={this.handleOnButtonSubmit}
                    >
                      {InterventionName[index]}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
export default Results;
