import {Layout} from "antd";
import styles from './BasicLayout.module.css';
import {Outlet} from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader.tsx";

const {Header, Footer, Content} = Layout;


const BasicLayout = () => {
    return (
        <div id="basic-layout">
            <Layout>
                <Header className={styles.header}>
                    <GlobalHeader />
                </Header>
                <Content className={styles.content}>
                    <Outlet />
                </Content>
                <Footer className={styles.footer}>
                    <a
                        href="https://baidu.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        百度首页
                    </a>
                    Footer
                </Footer>
            </Layout>
        </div>

    );
}
export default BasicLayout