import React, { Component } from "react";
import ActiveMessage from "./ActiveMessage";
import Load from "./Load"; //模拟预加载

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMessage: null
    };
  }
  //模拟请求数据
  getData() {
    return {
      activeName: `哈哈哈${this.props.match.params.id}`, //活动名
      bond: true, //是否缴纳保证金
      bondTypeIs: "按比例支付", //保证金支付类型
      bondTo: true, //保证金去向是否转履约保证金
      bondNum: "20", //保证金比例或数额
      deduction: "50", //违约扣款比例
      bondType: [
        //保证金支付类型列表
        {
          aid: "a",
          value: "按比例支付"
        },
        {
          aid: "b",
          value: "指定数额支付"
        }
      ],
      payFun: [
        //保证金支付方式
        {
          id: "a",
          fun: "线上-平台账户支付",
          check: true
        },
        {
          id: "b",
          fun: "信用支付",
          check: true
        }
      ]
    };
  }
  //加载完成后
  componentDidMount() {
    setTimeout(() => {
      let res = this.getData();
      this.setState({
        activeMessage: res
      });
    }, 1000);
  }
  //返回
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <h2 className="edit-title">{this.props.match.params.id}编辑</h2>
        {/* 拿到接口数据后挂载ActiveMessage组件 */}
        {this.state.activeMessage ? (
          <ActiveMessage
            handle="edit"
            activeMessage={this.state.activeMessage}
            back={this.back}
          />
        ) : (
          <Load />
        )}
        {/* <ActiveMessage handle="edit" activeMessage={this.state.activeMessage} /> */}
      </div>
    );
  }
}

export default Edit;
