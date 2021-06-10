import React from "react";

export default class LogInOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let message = this.props.body.token ? "Sign out" : "Sign in";

    let path = this.props.body.token ? "/logout" : "/login";

    return (
      <div>
        <a href={this.props.uri + path}>{message}</a>
        <a
          style={{ marginLeft: "24px" }}
          href={this.props.uri + "/step-up-start"}
        >
          Send Singing Telegram
        </a>
      </div>
    );
  }
}
