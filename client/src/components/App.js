import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
//import history from "../history";
import Header from "./Header";
// 267231408253-2paoellq3a3t2negpb9182srt3anlp4f.apps.googleusercontent.com
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact="exact" component={StreamList} />
          <Route path="/streams/new" exact="exact" component={StreamCreate} />
          <Route path="/streams/edit" exact="exact" component={StreamEdit} />
          <Route
            path="/streams/delete"
            exact="exact"
            component={StreamDelete}
          />
          <Route path="/streams/show" exact="exact" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
