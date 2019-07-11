import React from "react";
import Article from "./Article.js";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        {this.props.articles &&
          this.props.articles.map((item, key) => (
            <Article item={item} key={key} />
          ))}
      </div>
    );
  }
}

export default Main;
