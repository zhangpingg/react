import styles from './index.less';
import { Button } from 'antd-mobile';

const Index = () => {
    return (
        <div className={styles.am}>
            <div className="mt-20">
                antd-mobile
                <Button block color="primary" fill="solid" size="large">
                    按钮
                </Button>
            </div>
        </div>
    );
};

export default Index;
