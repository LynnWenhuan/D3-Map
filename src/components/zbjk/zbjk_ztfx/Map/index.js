/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Icon, Button } from 'antd';
import '!style!css!./index.css';
// import ZbjkService from '../../services/ZbjkService';
import * as d3 from 'd3';
import { mapToTableData } from '../../../../assets/data/data';

const MapConfig = {
  '中国': { path: "china.json", scale: 470, center: [105, 23] },
  "江西": { textoffsetX: -0, textoffsetY: 10, path: "jiangxi.json", scale: 4200, center: [116, 26] },
  "湖南": { textoffsetX: 5, textoffsetY: 10, path: "hunan.json", scale: 4200, center: [112, 26] },
  "贵州": { textoffsetX: 10, textoffsetY: 7, path: "guizhou.json", scale: 4200, center: [107, 25.5] },
  "云南": { textoffsetX: 12, textoffsetY: 35, path: "yunnan.json", scale: 2900, center: [102, 23.2] },
  "广西": { textoffsetX: 22, textoffsetY: 11, path: "guangxi.json", scale: 3600, center: [108.5, 21.5] },
  "广东": { textoffsetX: 20, textoffsetY: -14, path: "guangdong.json", scale: 3200, center: [114, 20] },
  "海南": { textoffsetX: -0, textoffsetY: 20, path: "hainan.json", scale: 9200, center: [110, 18.4] },
  "新疆": { textoffsetX: -100, textoffsetY: 30, path: "xinjiang.json", scale: 1100, center: [87, 36] },
  "西藏": { textoffsetX: 70, textoffsetY: 30, path: "xizang.json", scale: 1200, center: [89, 23] },
  "青海": { textoffsetX: 40, textoffsetY: 5, path: "qinghai.json", scale: 1800, center: [97, 30.5] },
  "四川": { textoffsetX: -0, textoffsetY: 30, path: "sichuan.json", scale: 2600, center: [103, 28.2] },
  "甘肃": { textoffsetX: -4, textoffsetY: 32, path: "gansu.json", scale: 1700, center: [101, 34] },
  "内蒙古": { textoffsetX: 100, textoffsetY: 10, path: "neimenggu.json", scale: 900, center: [112, 39] },
  "黑龙江": { textoffsetX: 30, textoffsetY: 80, path: "heilongjiang.json", scale: 1700, center: [129, 46.6] },
  "吉林": { textoffsetX: 10, textoffsetY: 30, path: "jilin.json", scale: 2800, center: [127, 42] },
  "辽宁": { textoffsetX: 15, textoffsetY: -0, path: "liaoning.json", scale: 4000, center: [122.5, 40] },
  "山西": { textoffsetX: -0, textoffsetY: 12, path: "shan1xi.json", scale: 3600, center: [113, 36.5] },
  "宁夏": { textoffsetX: -0, textoffsetY: 0, path: "ningxia.json", scale: 4800, center: [107, 36.3] },
  "陕西": { textoffsetX: 13, textoffsetY: -6, path: "shan3xi.json", scale: 3000, center: [110, 34.4] },
  "重庆": { textoffsetX: -10, textoffsetY: 20, path: "chongqing.json", scale: 5700, center: [107.8, 29.3] },
  "湖北": { textoffsetX: 5, textoffsetY: 5, path: "hubei.json", scale: 3700, center: [112.2, 28.8] },
  "安徽": { textoffsetX: -5, textoffsetY: 22, path: "anhui.json", scale: 4500, center: [118, 30.9] },
  "浙江": { textoffsetX: 5, textoffsetY: 7, path: "zhejiang.json", scale: 5000, center: [121, 27.8] },
  "福建": { textoffsetX: -10, textoffsetY: 23, path: "fujian.json", scale: 5000, center: [118.6, 24.8] },
  "河南": { textoffsetX: 10, textoffsetY: 10, path: "henan.json", scale: 4000, center: [113.8, 32.3] },
  "山东": { textoffsetX: 10, textoffsetY: -0, path: "shandong.json", scale: 3700, center: [118.8, 34.3] },
  "江苏": { textoffsetX: 25, textoffsetY: 16, path: "jiangsu.json", scale: 4600, center: [119.5, 31.5] },
  "河北": { textoffsetX: -2, textoffsetY: 16, path: "hebei.json", scale: 3300, center: [117, 38.1] },
  "北京": { textoffsetX: -8, textoffsetY: -3, path: "beijing.json", scale: 13000, center: [116.5, 39.9] },
  "天津": { textoffsetX: 10, textoffsetY: 12, path: "tianjin.json", scale: 13000, center: [117.5, 39.1] },
  "深圳": { textoffsetX: -0, textoffsetY: 0, path: "shenzhen.json", scale: 28600, center: [114.2, 22.3] },
  "澳门": { textoffsetX: 0, textoffsetY: 0 },
  "香港": { textoffsetX: 0, textoffsetY: 10 },
}
const width = 520;
const height = 700;
const createMapName = (name, props) => {
  const config = MapConfig[name];
  config.name = name;
  if (!config || !config.path) {
    return;
  }
  if (name === '中国') {
    document.getElementById('ms-map-bkwrapper').style['display'] = 'none';
  } else {
    document.getElementById('ms-map-bkwrapper').style['display'] = 'block';
  }
  document.getElementById('mapwrapper').innerHTML = '';
  const svg = d3.select('#mapwrapper').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('svg:g')
    .attr('id', 'texts')
    .append('g')
    .attr('transform', 'translate(0,0)');

  const scale = config.scale || 1200;
  const center = config.center || [105, 30];
  const projection = d3.geo.mercator()
    .center(center)
    .scale(scale)
    .translate([width / 2, height / 2]);

  const path = d3.geo.path()
    .projection(projection);


  d3.json(`./json/${config.path}`, (error, root) => {
    if (error) {
      return console.error(error);
    }

    const popMenu = document.getElementById('ms-map-pop-menu');
    svg.selectAll('path')
      .data(root.features)
      .enter()
      .append('path')
      .attr('stroke', 'rgb(251, 156, 148)')
      .attr('stroke-width', .1)
      .attr('id', (d, i) => {
        return `pathid_${i}`;
      })
      .attr('fill', (d, i) => {
        const nameClour = d.properties.name;
        if (nameClour === '广东') {
          return '#BBFFFF';
        }
        if (nameClour === '江西') {
          return '#46A3FF';
        }
        if (nameClour === '安徽') {
          return '#BBFFFF';
        }
        if (nameClour === '湖北') {
          return '#93FF93';
        }
        if (nameClour === '山东') {
          return '#46A3FF';
        }
        if (nameClour === '四川') {
          return '#46A3FF';
        }
        if (nameClour === '湖南') {
          return '#BBFFFF';
        }
        if (nameClour === '福建') {
          return '#BBFFFF';
        }
        if (nameClour === '吉林') {
          return '#93FF93';
        }
        if (nameClour === '贵州') {
          return '#93FF93';
        }
        if (nameClour === '云南') {
          return '#95CACA';
        }
        if (nameClour === '浙江') {
          return '#93FF93';
        }
        if (nameClour === '河南') {
          return '#95CACA';
        }
        if (nameClour === '江苏') {
          return '#95CACA';
        }
        if (nameClour === '广西') {
          return '#D9B3B3';
        }
        if (nameClour === '黑龙江') {
          return '#D9B3B3';
        }
        if (nameClour === '陕西') {
          return '#D9B3B3';
        }
        if (nameClour === '重庆') {
          return '#D9B3B3';
        }
        if (nameClour === '山西') {
          return '#D9B3B3';
        }
        if (nameClour === '北京') {
          return '#ee695f';
        }
        if (nameClour === '天津') {
          return '#D9B3B3';
        }
        if (nameClour === '河北') {
          return '#46A3FF';
        }
        if (nameClour === '辽宁') {
          return '#46A3FF';
        }
        if (nameClour === '海南') {
          return '#46A3FF';
        }
        if (nameClour === '甘肃') {
          return '#46A3FF';
        }
        if (nameClour === '内蒙古') {
          return '#95CACA';
        }
        return '#fff';
      })

      .attr('d', path)
      .attr('cursor', 'pointer')
      .attr('stroke-width', 1)
      .on('mouseover', (d, i) => {
        let quotaData = null;
        if (props.zbjk_ztfx.zbjkResponseData) {
          const { zbjkResponseData: { dataSource } } = props.zbjk_ztfx;
          const code = mapToTableData[d.properties.name];
          for (let i = 1; i <= dataSource.length; i += 1) {
            if (dataSource[i - 1].companyCode === code) {
              quotaData = dataSource[i - 1].rate;
            }
          }
        }
        popMenu.innerHTML = d.properties.name + "<br/>" + quotaData
        popMenu.style['display'] = 'block';
        d3.select(this)
          .attr('fill', '#fbc8c0');
      })
      .on('click', (d, i) => {
        popMenu.style['display'] = 'none';
        const mapName = d.properties.name;
        props.dispatch({
          type: 'zbjk_ztfx/mapToTable',
          payload: {
            key: 'companyCode',
            name: mapName,
          },
        });
      })
      .on('mouseout', (d, i) => {
        popMenu.style['display'] = 'none';
        d3.select(this)
          .attr('fill', '#fff');
      });

    svg.selectAll('text')
      .data(root.features)
      .enter().append('svg:text')
      .text((d) => {
        var name = d.properties.name;
        if (name === '澳门') {
          name = '';
        }
        return name;
      })
      .attr('x', (d) => {
        const offset = MapConfig[d.properties.name] || { textoffsetX: 0, textoffsetY: 0 };
        const re = d.geometry.coordinates[0][0][0];
        if (re instanceof Array) {
          return projection([re[0], re[1]])[0] + offset.textoffsetX;
        }
        return projection([re, d.geometry.coordinates[0][0][1]])[0] + offset.textoffsetX;
      })
      .attr('y', (d) => {
        const offset = MapConfig[d.properties.name] || { textoffsetX: 0, textoffsetY: 0 };
        const re = d.geometry.coordinates[0][0][0];
        if (re instanceof Array) {
          return projection([re[0], re[1]])[1] + offset.textoffsetY;
        }
        return projection([re, d.geometry.coordinates[0][0][1]])[1] + offset.textoffsetY;
      })
      .attr('fill', '#6f6f6f')
      .attr('font-size', '11px');
  });
};

class Map extends React.Component {
  componentDidMount() {
    this.popMenu = document.getElementById('ms-map-pop-menu');
    createMapName('中国', this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.zbjk_ztfx;
    if (!name) {
      return null;
    }
    createMapName(name, this.props);
  }
  mouseMoveHandle(e) {
    if (this.popMenu) {
      this.popMenu.style.left = `${e.pageX}px`;
      this.popMenu.style.top = `${e.pageY}px`;
    }
  }

  mapBkClick = () => {
    this.props.dispatch({
      type: 'zbjk_ztfx/mapToTable',
      payload: {
        key: 'companyCode',
        name: '中国',
      },
    });
  }

  render() {
    return (
      <div ref="mapwrap" onMouseMove={this.mouseMoveHandle.bind(this)} className="ms-map-wrapper">
        <div id="ms-map-pop-menu" className="ms-map-pop-menu" />
        <div id="ms-map-bkwrapper" className="ms-map-bkbtn">
          <Button onClick={this.mapBkClick.bind(this)} size="small">
            <Icon type="left" />返回
          </Button>
        </div>
        <div id="mapwrapper" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { zbjk_ztfx: state.zbjk_ztfx };
}
export default connect(mapStateToProps)(Map);
