import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Results from "./Results";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disease: "",
      results: [],
      isLoaded: false,
      url: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    if (data.disease !== "") {
      var site =
        "https://clinicaltrials.gov/api/query/study_fields?expr=" +
        this.state.disease +
        "&fields=InterventionName&min_rnk=1&max_rnk=500&fmt=json";
      this.setState({
        url: site,
      });

      fetch(site)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            results: json.StudyFieldsResponse.StudyFields,
          });
        });
    } else {
      alert(
        "Παρακαλώ πληκτρολογήστε μία ασθένεια για να ολοκληρωθεί η αναζήτηση!"
      );
    }
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    var { isLoaded, results } = this.state;
    let intervention = [];
    let Nstudies = [];
    if (isLoaded === true) {
      results.map((postDetail, index) => {
        var prevValue = null;
        postDetail.InterventionName.map((value2) => {
          var interventionFound = false;
          if (prevValue !== value2) {
            intervention.map((value1, index1) => {
              if (value1 === value2 && !interventionFound) {
                Nstudies[index1] = Nstudies[index1] + 1;
                interventionFound = true;
              }
            });
            if (interventionFound === false) {
              intervention.push(value2);
              Nstudies.push(1);
            }
            prevValue = value2;
          }
        });
      });

      return (
        <Results
          medicine={intervention}
          studies={Nstudies}
          disease1={this.state.disease}
        />
      );
    } else {
      return (
        <div className="searchform">
          <h3>
            Πληκτρολογήστε την ασθένεια για την οποία επιθυμείτε να αναζητήσετε
            τα 5 κορυφαία φάρμακα:
          </h3>
          <br></br>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Πληκτρολογήστε..."
              name="disease"
              onChange={this.handleInputChange}
            />
            <br></br>
            <Button variant="primary" type="submit">
              Αναζήτηση
            </Button>
          </Form>
        </div>
      );
    }
  }
}
export default Search;
