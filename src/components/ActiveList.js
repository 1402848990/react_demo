import React, { Component } from "react";
import Load from "./Load"; //模拟预加载
import { Link } from "react-router-dom";
import "../style/ActiveList.css";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //模拟数据请求
  getActiveList = () => {
    setTimeout(() => {
      let res = [
        {
          id: 1420,
          name: "测试11",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 6,
          auditStatus: 9,
          activityStatusName: "已结束",
          createdByName: "shopper",
          createdAt: "2019-11-26 22:06:27",
          isPayDeposit: 1,
          depositRate: 1,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: null,
          isTransferDeposit: 1,
          depositDeductRate: 1,
          activityStartTime: "2019-11-25 22:06:10",
          activityEndTime: "2019-11-27 22:06:13",
          startAt: "2019-11-25 22:06:10",
          endAt: "2019-11-27 22:06:13",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 1408,
          name: "测试",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 6,
          auditStatus: 9,
          activityStatusName: "已结束",
          createdByName: "shopper",
          createdAt: "2019-11-26 13:48:41",
          isPayDeposit: 1,
          depositRate: 1,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: null,
          isTransferDeposit: 1,
          depositDeductRate: 1,
          activityStartTime: "2019-11-25 13:48:20",
          activityEndTime: "2019-11-27 13:48:24",
          startAt: "2019-11-25 13:48:20",
          endAt: "2019-11-27 13:48:24",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 1376,
          name: "合同待生效－罚没",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 6,
          auditStatus: 9,
          activityStatusName: "已结束",
          createdByName: "shopper",
          createdAt: "2019-11-20 16:39:57",
          isPayDeposit: 1,
          depositRate: 0.5,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: null,
          isTransferDeposit: 1,
          depositDeductRate: 0.5,
          activityStartTime: "2019-11-20 16:39:38",
          activityEndTime: "2019-11-20 16:45:00",
          startAt: "2019-11-20 16:39:38",
          endAt: "2019-11-20 16:45:00",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 1275,
          name: "复制-测试",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 6,
          auditStatus: 9,
          activityStatusName: "已结束",
          createdByName: "shopper",
          createdAt: "2019-11-18 15:54:44",
          isPayDeposit: 1,
          depositRate: 0.55,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: null,
          isTransferDeposit: 1,
          depositDeductRate: 1,
          activityStartTime: "2019-11-10 19:34:06",
          activityEndTime: "2019-11-19 19:34:09",
          startAt: "2019-11-10 19:34:06",
          endAt: "2019-11-19 19:34:09",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 1269,
          name: "有鱼定向挂牌1",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 4,
          auditStatus: 9,
          activityStatusName: "进行中",
          createdByName: "shopper",
          createdAt: "2019-11-18 15:22:10",
          isPayDeposit: 1,
          depositRate: 0.3,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: null,
          isTransferDeposit: 1,
          depositDeductRate: 1,
          activityStartTime: "2019-11-18 15:21:28",
          activityEndTime: "2019-11-30 15:21:30",
          startAt: "2019-11-18 15:21:28",
          endAt: "2019-11-30 15:21:30",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "jam",
          contractMobile: "13245678989",
          supervisorName: "jam",
          supervisorMobile: "13245678989",
          activityAssignTo: "buyer",
          buyers: null,
          depositType: 1
        },
        {
          id: 1088,
          name: "定向－运具",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 6,
          auditStatus: 9,
          activityStatusName: "已结束",
          createdByName: "shopper",
          createdAt: "2019-11-14 17:38:28",
          isPayDeposit: 1,
          depositRate: 0.1,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: 1,
          isTransferDeposit: 0,
          depositDeductRate: 0.5,
          activityStartTime: "2019-11-14 17:38:14",
          activityEndTime: "2019-11-15 17:38:16",
          startAt: "2019-11-14 17:38:14",
          endAt: "2019-11-15 17:38:16",
          transferType: "2",
          transferTemplateId: "197",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 959,
          name: "复制-测试",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 0,
          auditStatus: 0,
          activityStatusName: "待提交",
          createdByName: "shopper",
          createdAt: "2019-11-12 18:18:57",
          isPayDeposit: 1,
          depositRate: 0.55,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: null,
          isTransferDeposit: 1,
          depositDeductRate: 1,
          activityStartTime: "2019-11-10 19:34:06",
          activityEndTime: "2019-11-12 19:34:09",
          startAt: "2019-11-10 19:34:06",
          endAt: "2019-11-12 19:34:09",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 906,
          name: "测试",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 0,
          auditStatus: 0,
          activityStatusName: "待提交",
          createdByName: "shopper",
          createdAt: "2019-11-11 19:34:33",
          isPayDeposit: 1,
          depositRate: 0.55,
          isPlatformPayDeposit: 1,
          isCreditPayDeposit: null,
          isTransferDeposit: 1,
          depositDeductRate: 1,
          activityStartTime: "2019-11-10 19:34:06",
          activityEndTime: "2019-11-12 19:34:09",
          startAt: "2019-11-10 19:34:06",
          endAt: "2019-11-12 19:34:09",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 858,
          name: "复制-测试1244",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 6,
          auditStatus: 9,
          activityStatusName: "已结束",
          createdByName: "shopper",
          createdAt: "2019-11-10 15:47:33",
          isPayDeposit: 0,
          depositRate: null,
          isPlatformPayDeposit: null,
          isCreditPayDeposit: null,
          isTransferDeposit: 0,
          depositDeductRate: 0,
          activityStartTime: "2019-11-09 14:24:30",
          activityEndTime: "2019-11-14 14:24:32",
          startAt: "2019-11-09 14:24:30",
          endAt: "2019-11-14 14:24:32",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        },
        {
          id: 857,
          name: "测试1244",
          type: "3",
          shopId: 2100038003,
          shopCode: "2100038003",
          shopName: "气电集团广东销售公司",
          status: 6,
          auditStatus: 9,
          activityStatusName: "已结束",
          createdByName: "shopper",
          createdAt: "2019-11-10 14:24:46",
          isPayDeposit: 0,
          depositRate: null,
          isPlatformPayDeposit: null,
          isCreditPayDeposit: null,
          isTransferDeposit: 0,
          depositDeductRate: 0,
          activityStartTime: "2019-11-09 14:24:30",
          activityEndTime: "2019-11-14 14:24:32",
          startAt: "2019-11-09 14:24:30",
          endAt: "2019-11-14 14:24:32",
          transferType: "2",
          transferTemplateId: "208",
          transferTemplateName: null,
          contractName: "1",
          contractMobile: "1",
          supervisorName: "1",
          supervisorMobile: "1",
          activityAssignTo: "all",
          buyers: null,
          depositType: 1
        }
      ];
      this.setState({
        activeList: res
      });
    }, 600);
  };
  componentDidMount() {
    this.getActiveList();
  }
  //渲染
  renderActiveList = () => {
    if (this.state.activeList) {
      return (
        <div>
          <div>
            <Link to="/createactive">
              <button className="btn-create">创建活动</button>
            </Link>
          </div>
          {/* 项目列表 */}
          <table className="tb-projectlist" cellSpacing="0" cellPadding="0">
            <thead>
              <tr className="tb-head">
                <th width="10%">活动ID</th>
                <th width="10%">活动名称</th>
                <th width="30%">活动时间</th>
                <th width="10%">活动状态</th>
                <th width="10%">审批状态</th>
                <th width="20%">创建时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {this.state.activeList.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{`${item.activityStartTime}~${item.activityEndTime}`}</td>
                    <td>{item.activityStatusName}</td>
                    <td>{item.auditStatus}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <Link to={`/edit/${item.id}`}>
                        <button>编辑</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Load />;
    }
  };
  render() {
    return <div>{this.renderActiveList()}</div>;
  }
}

export default ProjectList;
