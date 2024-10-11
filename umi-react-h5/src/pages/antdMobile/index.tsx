import styles from './index.less';
import { Button, Input } from 'antd-mobile';

const Index = () => {
    return (
        <div className={styles['am']}>
            <div className="mt-20">
                <p className={styles['am-title']}>antd-mobile</p>
                <Button block color="primary" fill="solid" size="large">
                    按钮
                </Button>
            </div>
        </div>
    );
};

export default Index;
