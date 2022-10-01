import React from "react";
import { array } from "./data";

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header>
            <h1>About</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              saepe.
            </h3>
          </header>
          <main>
            <img
              src="https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg"
              alt=""
            />
            <div className="sidebar">
              <div className="buttons">
                <button
                  className={this.state.index === 0 ? "active" : ""}
                  onClick={(event) =>
                    this.setState({
                      index: 0
                    })
                  }
                >
                  History
                </button>
                <button
                  className={this.state.index === 1 ? "active" : ""}
                  onClick={(event) =>
                    this.setState({
                      index: 1
                    })
                  }
                >
                  Vision
                </button>
                <button
                  className={this.state.index === 2 ? "active" : ""}
                  onClick={(event) =>
                    this.setState({
                      index: 2
                    })
                  }
                >
                  Goal
                </button>
              </div>
              <div className="text">
                <h3>{array[this.state.index].name}</h3>
                <p>{array[this.state.index].text}</p>
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}
export default Tabs;
