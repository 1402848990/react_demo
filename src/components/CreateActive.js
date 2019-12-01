import React, { Component } from "react";
import ActiveMessage from "./ActiveMessage";
import "../style/common.css";
import "../style/CreateActive.css";

class CreateActive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //返回
  back = () => {
    this.props.history.goBack();
  };
  render() {
    //挂载创建ActiveMessage组件
    return <ActiveMessage handle="create" back={this.back} />;
  }
}

export default CreateActive;
