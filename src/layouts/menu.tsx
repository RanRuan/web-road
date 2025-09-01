import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
const DATA = [
  {key:'HTML5', label:'HTML5',  children:[
    {key:'box', label:'盒模型'},
    {key:'bfc', label:'BFC'}]},
  {key:'CSS3', label:'CSS3', 
    children:[
    {key:'flex', label:'弹性布局'},
    {key:'bfc', label:'BFC'}]},
  {key:'JavaScript', label:'JavaScript',children:[{key:'js', label:'弹性布局'},{key:'es6', label:'BFC'}]},
  {key:'algorithm', label:'算法',children:[]},
  {key:'React', label:'React',children:[]},
  {key:'VUE3', label:'VUE3',children:[]},
  {key:'HTTP', label:'通信&浏览器',children:[]},
  {key:'Engineering', label:'前端工程化',children:[]},
  {key:'AI', label:'AI',children:[]},
]
const navList: MenuProps['items'] = DATA.map(({key,  label}) => ({
  key,
  label: label,
}));



export  {navList, DATA }