import React, {useState, useEffect} from 'react';
import { LaptopOutlined,MailOutlined, NotificationOutlined, UserOutlined,AppstoreOutlined,SettingOutlined } from '@ant-design/icons';
import type { MenuProps,MenuItemProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import styles from './index.less';
const { Header, Content, Sider } = Layout;
import {navList, DATA} from './menu';

const App: React.FC = () => {
  const [navKey, setNavKey] = useState(['HTML5']);
  const [menuList, setMenuList] = useState([]);
  const [menukey, setMenukey]= useState([]);
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(()  =>{
    const found = DATA.find(it => {
      return navKey.includes(it.key)
    });
    const children = found?.children ?? [];
    setMenuList(children);
    setMenukey(children[0]?.key);
  },[DATA])

  const onChangeNav: MenuProps['onClick']  = (nav) => {
    setNavKey(nav.selectedKeys);
    const _menuList = DATA?.find(it => it.key === nav.key)?.children;
    setMenuList(_menuList);
    setMenukey(_menuList[0]?.key);
  }

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.logo}>Ikissweb</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['HTML5']}
          items={navList}
          style={{ flex: 1, minWidth: 0 }}
          selectedKeys={navKey}
          onSelect={onChangeNav}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={menukey}
            selectedKeys={menukey}
            // defaultOpenKeys={navKey}
            style={{ height: '100%', borderInlineEnd: 0 }}
            items={menuList}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          /> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;