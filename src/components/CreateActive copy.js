import React, { Component } from "react";
import ActiveMessage from './ActiveMessage'
import "../style/common.css";
import "../style/CreateActive.css";

class CreateActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMessage: {
        activeName: "", //活动名
        bond: true, //是否缴纳保证金
        bondTypeIs: "按比例支付", //保证金支付类型
        bondTo: null, //保证金去向是否转履约保证金
        bondNum: "", //保证金比例或数额
        deduction: "", //违约扣款比例
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
            check: false
          },
          {
            id: "b",
            fun: "信用支付",
            check: false
          }
        ]
      }
    };
  }

  //处理input
  handleInput = e => {
    // e.persist();
    let type = e.target.type; //input类型
    let name = e.target.name; //字段名
    let value = e.target.value; //输入值
    // console.log(type, name, value, typeof value);
    let activeMessage = this.state.activeMessage;
    //text类型
    if (type === "text") {
      activeMessage[name] = value;
    } else if (type === "radio") {
      //radio类型
      activeMessage[name] = Boolean(Number(e.target.value));
    } else if (type === "select-one") {
      //select-one类型
      activeMessage[name] = e.target.value;
    } else if (type === "number") {
      //number类型
      activeMessage[name] = e.target.value;
    }
    this.setState({
      activeMessage
    });
  };
  //处理保证金支付方式
  handlePayFun = index => {
    let activeMessage = this.state.activeMessage;
    activeMessage.payFun[index].check = !activeMessage.payFun[index].check;
    this.setState({
      activeMessage
    });
  };
  //提交
  submit = () => {
    let activeMessage = this.state.activeMessage;
    //验证活动名
    if (activeMessage.activeName === "") {
      alert("活动名不能为空！");
      this.refs.activeName.focus();
      return false;
    }
    if (activeMessage.bond) {
      if (!this.state.activeMessage.bondNum) {
        alert("保证金不能为空");
        return false;
      }
      if (!activeMessage.payFun[0].check && !activeMessage.payFun[1].check) {
        alert("保证金支付方式不能为空");
        return false;
      }
      if (activeMessage.bondTo === null) {
        alert("保证金去向不能为空");
        return false;
      }
      if (!activeMessage.deduction) {
        alert("违约扣款比例不能为空");
        return false;
      }
    }
    alert("提交成功！查看控制台输出");
    console.log(activeMessage);
  };

  render() {
    return (
      <div>
        <div>
          <div className="itemname">新增定向挂牌</div>
          <hr />
          {/* 活动名称 */}
          <label className="inputTitle" htmlFor="activeName">
            活动名称
          </label>
          <input
            maxLength="20"
            placeholder="请输入"
            type="text"
            name="activeName"
            onChange={this.handleInput}
            value={this.state.activeMessage.activeName}
            className="activeName"
            id="activeName"
            ref="activeName"
          />
        </div>
        <div className="itemname">保证金规则</div>
        <hr />
        <label className="inputTitle" htmlFor="">
          保证金金额
        </label>
        {/* 是否缴纳保证金 */}
        <input
          onChange={this.handleInput}
          value={1}
          checked={this.state.activeMessage.bond}
          name="bond"
          id="bondok"
          type="radio"
        />
        <label className="checkName" htmlFor="bondok">
          缴纳保证金
        </label>
        <input
          onChange={this.handleInput}
          checked={!this.state.activeMessage.bond}
          value={0}
          name="bond"
          id="bondno"
          type="radio"
        />
        <label className="checkName" htmlFor="bondno">
          不缴纳保证金
        </label>
        {/* 缴纳保证金相关 */}
        <div
          className={
            this.state.activeMessage.bond ||
            this.state.activeMessage.bond === "true"
              ? "havebond"
              : "nobond"
          }
        >
          {/* 选择保证金支付类型 */}
          <div>
            <select
              name="bondTypeIs"
              id="bondTypeIs"
              value={this.state.activeMessage.bondTypeIs}
              onChange={this.handleInput}
            >
              {this.state.activeMessage.bond
                ? this.state.activeMessage.bondType.map(item => {
                    return (
                      <option key={item.aid} value={item.value}>
                        {item.value}
                      </option>
                    );
                  })
                : ""}
            </select>
          </div>
          <label className="inputTitle">
            {this.state.activeMessage.bondTypeIs === "按比例支付"
              ? "保证金比例"
              : "保证金金额"}
          </label>
          <input
            value={this.state.activeMessage.bondNum}
            type="text"
            onChange={this.handleInput}
            name="bondNum"
            id="bondNum"
          />
          {this.state.activeMessage.bondTypeIs === "按比例支付" ? "%" : ""}
          {/* 保证金支付方式 */}
          <div>
            <label className="inputTitle" htmlFor="">
              保证金支付方式
            </label>
            {this.state.activeMessage.payFun.map((item, index) => {
              return (
                <span key={item.id}>
                  <input
                    onChange={this.handlePayFun.bind(this, index)}
                    id={item.id}
                    name="payFun"
                    type="checkBox"
                    checked={item.check}
                    value={item.fun}
                  />
                  <label className="checkName" htmlFor={item.id}>
                    {item.fun}
                  </label>
                </span>
              );
            })}
          </div>
          {/* 保证金去向 */}
          <div>
            <label className="inputTitle">保证金去向</label>
            <input
              onChange={this.handleInput}
              value={1}
              name="bondTo"
              id="bondTook"
              type="radio"
            />
            <label className="checkName" htmlFor="bondTook">
              转履约保证金
            </label>
            <input
              onChange={this.handleInput}
              value={0}
              name="bondTo"
              id="bondTono"
              type="radio"
            />
            <label className="checkName" htmlFor="bondTono">
              不转履约保证金
            </label>
          </div>
        </div>
        {/* 违约扣款比例 */}
        <label className="inputTitle">违约扣款比例</label>
        <input
          className="deduction"
          type="number"
          maxLength="4"
          name="deduction"
          value={this.state.activeMessage.deduction}
          onChange={this.handleInput}
        />
        %
        <div>
          <button onClick={this.submit}>提交</button>
          <button onClick={this.props.history.goBack.bind(this)}>返回</button>
        </div>
      </div>
    );
  }
}

export default CreateActive;
