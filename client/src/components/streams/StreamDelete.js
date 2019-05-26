import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    //  this.props.match.params.id;
  }
  renderActions = () => {
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui approve button primary"
        >
          DELETE
        </button>
        <Link to="/" className="ui cancel button red">
          Cancel
        </Link>
      </>
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "are you sure you want to delete this stream";
    }
    return `sure you want to delete stream with title: ${
      this.props.stream.title
    }`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
        onDisplay={this.renderContent()}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  //  console.log({ stateStream: state });
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
