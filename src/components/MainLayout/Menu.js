import React from 'react';
import { connect } from 'dva';
import { Menu, Icon, Layout } from 'antd';
import { Route, Switch } from 'dva/router';

import zbjkZtfx from '../../routes/zbjk/zbjk_ztfx';
import zbjkZyzbfx from '../../routes/zbjk/zbjk_zyzbfx';
import zbjkQsfx from '../../routes/zbjk/zbjk_qsfx';
import zbjkYwjg from '../../routes/zbjk/zbjk_ywjg';
import zbjkQtfx from '../../routes/zbjk/zbjk_qtfx';

import zdyjGjzb from '../../routes/zdyj/zdyj_gjzb';
import zdyjPzlzb from '../../routes/zdyj/zdyj_pzlzb';
import zdyjGmlzb from '../../routes/zdyj/zdyj_gmlzb';
import zdyjLpl from '../../routes/zdyj/zdyj_lpl';
import zdyjGfxyw from '../../routes/zdyj/zdyj_gfxyw';

const SubMenu = Menu.SubMenu;
/* eslint class-methods-use-this: ["error",
{ "exceptMethods": ["renderMenu", "componentDidMount"] }] */
class MSMenu extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };

  componentDidMount() {
  }
  onCollapse = (collapsed) => {
    // 修复收起的时候不会弹出子菜单
    if (collapsed) {
      this.ms_left.style.overflow = 'visible';
    } else {
      this.ms_left.style.overflow = 'auto';
    }
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  onSelect({ item, key }) {
    this.props.dispatch({
      type: 'main/go',
      payload: {
        href: `/menu/${item.props.groupdata.key}_${key}`,
      },
    });
  }

  renderMenu() {
    const menudata = [
      {
        key: 'zbjk',
        label: '指标监控',
        icon: 'user',
        children: [
          { key: 'ztfx', label: '总体分析', href: '' },
          { key: 'zyzbfx', label: '重要指标分析', href: '' },
          { key: 'qsfx', label: '趋势分析', href: '' },
          { key: 'ywjg', label: '业务结构', href: '' },
          { key: 'qtfx', label: '其他指标分析', href: '' },
        ],
      },
      {
        key: 'zdyj',
        label: '自动预警',
        icon: 'team',
        children: [
          { key: 'gjzb', label: '关键指标预警', href: '' },
          { key: 'pzlzb', label: '品质类指标预警', href: '' },
          { key: 'gmlzb', label: '规模类指标预警', href: '' },
          { key: 'lpl', label: '理赔类指标预警', href: '' },
          { key: 'gfxyw', label: '高风险业务类指标预警', href: '' },
        ],
      },
      {
        key: 'gyfx',
        label: '归因分析',
        icon: 'team',
        children: [
          { key: 'mqpfl', label: '满期赔付率分析', href: '' },
          { key: 'ycpfl', label: '预测赔付率分析', href: '' },
          { key: 'lnzpfl', label: '历年制赔付率分析', href: '' },
        ],
      },
      {
        key: 'pflyc',
        label: '赔付率预测',
        icon: 'team',
        children: [
          { key: 'pflyc', label: '赔付率预测', href: '' },
          { key: 'bjjy', label: '比较检验', href: '' },
        ],
      },
      {
        key: 'lhmn',
        label: '量化模拟',
        icon: 'team',
        children: [
          { key: 'yzxsmn', label: '因子系数的情景模拟', href: '' },
          { key: 'xywmn', label: '新业务模拟', href: '' },
          { key: 'jyycmb', label: '简易预测模板', href: '' },
        ],
      },
      {
        key: 'ywsx',
        label: '业务筛选',
        icon: 'team',
        children: [
          { key: 'ywxf', label: '业务细分', href: '' },
          { key: 'ywjk', label: '业务监控', href: '' },
          { key: 'zhsx', label: '组合筛选', href: '' },
        ],
      },
      {
        key: 'ghbb',
        label: '固化报表',
        icon: 'team',
        children: [
          { key: 'ghbb', label: '固化报表', href: '' },
        ],
      },
    ];
    const children = [];
    for (let i = 0, j = menudata.length; i < j; i += 1) {
      const groupdata = menudata[i];
      const subItems = [];
      const subItemsData = groupdata.children || [];
      for (let n = 0, m = subItemsData.length; n < m; n += 1) {
        const itemdata = subItemsData[n];
        subItems.push(<Menu.Item
          groupdata={groupdata}
          key={itemdata.key}
        >{itemdata.label}</Menu.Item>);
      }
      children.push(
        <SubMenu
          key={groupdata.key}
          title={<span><Icon type={groupdata.icon} /><span>
            {groupdata.label}</span></span>}
        >{subItems}</SubMenu>);
    }
    return children;
  }


  render() {
    const { match } = this.props;
    const { Sider } = Layout;
    const pathArr = this.props.location.pathname.split('/');
    const selectedKeys = [];
    const defaultOpenKeys = [];
    if (pathArr.length >= 3) {
      const pageName = pathArr[2];
      const pageNameArr = pageName.split('_');
      selectedKeys.push(pageNameArr[1]);
      defaultOpenKeys.push(pageNameArr[0]);
    }
    return (
      <div className="ms-content">
        <div className="ms-left" ref={(dom) => { this.ms_left = dom; }}>

          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu selectedKeys={selectedKeys} onSelect={this.onSelect.bind(this)} defaultOpenKeys={defaultOpenKeys} mode="inline">
              {this.renderMenu()}
            </Menu>
          </Sider>
        </div>

        <div className="ms-right">
          <div className="ms-right-inner">
            <Switch>
              <Route exact path={`${match.path}/zbjk_ztfx`} component={zbjkZtfx} />
              <Route exact path={`${match.path}/zbjk_zyzbfx`} component={zbjkZyzbfx} />
              <Route exact path={`${match.path}/zbjk_qsfx`} component={zbjkQsfx} />
              <Route exact path={`${match.path}/zbjk_ywjg`} component={zbjkYwjg} />
              <Route exact path={`${match.path}/zbjk_qtfx`} component={zbjkQtfx} />
              <Route exact path={`${match.path}/zdyj_gjzb`} component={zdyjGjzb} />
              <Route exact path={`${match.path}/zdyj_pzlzb`} component={zdyjPzlzb} />
              <Route exact path={`${match.path}/zdyj_gmlzb`} component={zdyjGmlzb} />
              <Route exact path={`${match.path}/zdyj_lpl`} component={zdyjLpl} />
              <Route exact path={`${match.path}/zdyj_gfxyw`} component={zdyjGfxyw} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(MSMenu);
