import React from 'react';
import Pages from '../../components/pages/Pages';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    CodeOutlined,
    DashboardOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutContent = props => {

    const [collapsed, setCollapesed] = React.useState(false);

    const onCollapse = value => {
        setCollapesed(value)
    };

    const changeRoute = item => {
        props.history.push(item.key);
    };

    return (
        <React.Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider 
                collapsible 
                collapsed={collapsed} onCollapse={onCollapse}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                  }}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" onClick={changeRoute}>
                        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<CodeOutlined />} title="Payloads">
                            <Menu.Item key="shells">Unix reverse shells</Menu.Item>
                            <Menu.Item key="msfvenom">MsfVenom</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Pages />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Project maintained by <a href="https://github.com/xsstnv/">xsstnv</a></Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    );
}

export default withRouter(LayoutContent);