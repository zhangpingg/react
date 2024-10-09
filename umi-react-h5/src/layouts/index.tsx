import 'lib-flexible';
import { Provider } from 'react-redux';
import store from '@/store';
import styles from './index.less';

const Layouts = (props: any) => {
    return (
        <Provider store={store}>
            <div className={styles['layouts']}>
                <div className={styles['layouts-title']}>layout-容器</div>
                {props.children}
            </div>
        </Provider>
    );
};

export default Layouts;
