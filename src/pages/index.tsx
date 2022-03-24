import React ,{ useState }from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import HeaderPage from '../component/header';
const { Header, Sider, Content } = Layout;
export default function IndexPage(props:any) {
  const state = {
    collapsed: false,
  };

  const [isCollapse, setIsCollapse] = useState<boolean>(false);


  const toggle = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={isCollapse}>
          <div className={styles.logo} />
          <Menu  mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2 
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout-container">
          <HeaderPage className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </HeaderPage>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              maxHeight: `calc(100vh - 70px)`,
              overflow:`auto`,
            }}
          >
          { props.children }
          </Content>
        </Layout>
      </Layout>
    </>);
}
