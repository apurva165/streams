import React from "react";
import { fetchStream, editStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    //console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    //  console.log({ props: this.props });
    return (
      <div>
        <h3>Edie A streas</h3>
        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //  console.log({ ownProps });
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
