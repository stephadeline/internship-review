import React, { Component } from "react";
import Tabletop from "tabletop";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: ""
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1PYoOZN24pnNVfJzWzzxKjJ1AwRtRuMJO6_7m0aSTtuk",
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { data } = this.state;
    let filteredReview = data.filter(review => {
      return (
        review.company
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <div className="topper">
          <header>
            <h1 className="App-title">Review your internship</h1>
          </header>
          <p>Scroll to read all reviews or type in a publication</p>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        <div id="all-reviews">
          {filteredReview.map(obj => {
            return (
              <div key={obj.date_submitted} className="review row">
                <div className="col-sm-3 sidebar-detail">
                  <p>
                    <span class="label-bold">Date submitted: </span>
                    {obj.date_submitted}
                  </p>
                  <p>
                    <span class="label-bold">Company name: </span>
                    {obj.company}
                  </p>
                  <p>
                    <span class="label-bold">Position: </span> {obj.title}
                  </p>
                  <p>
                    <span class="label-bold">Location: </span> {obj.city}
                  </p>
                </div>
                <div className="col-sm-9">
                  <p className="label-bold">
                    How was the application or hiring process?
                  </p>
                  <p>{obj.q1}</p>
                  <p className="label-bold">
                    How was your experience with colleagues and your supervisor?
                  </p>
                  <p>{obj.q2}</p>
                  <p className="label-bold">
                    What kind of support were provided for interns?
                  </p>
                  <p>{obj.q3}</p>
                  <p className="label-bold">Other thoughts?</p>
                  <p>{obj.q4}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Review;
