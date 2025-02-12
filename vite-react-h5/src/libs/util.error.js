import { Toast } from 'antd-mobile';
import log from './util.log';

const throwLogError = (msg) => {
    const err = new Error(msg);
    log.error('>>>>>> Error >>>>>>');
    throwNoticeError(err);
    throw err;
};

const throwNoticeError = (err) => {
    console.log('提示:', err.message || '报错了');
    Toast.show(err.message || '报错了');
};

export { throwLogError, throwNoticeError };
