import React, { Component } from "react";
import ActiveList from "./components/ActiveList"; //活动列表
import CreateActive from "./components/CreateActive"; //创建活动
import Edit from "./components/Edit"; //编辑活动
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          {/* 活动列表 */}
          <Route path="/activelist" component={ActiveList} />
          {/* 创建活动 */}
          <Route path="/createactive" component={CreateActive} />
          {/* 编辑活动 */}
          <Route path="/edit/:id" component={Edit} />
          {/* 重定向 */}
          <Redirect to="/activelist" />
        </Router>
      </div>
    );
  }
}

export default App;
