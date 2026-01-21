import _ from 'lodash';

/**
 * @description 判断-是否是有效的数据
 * @param {any} val 传入的值
 * @returns {boolean} 返回boolean
 */
const isValidVal = (val) => {
    if ([null, undefined, ''].includes(val)) {
        return false;
    }
    return true;
};

/**
 * @description 判断-是否是有效的非空数组
 * @param {any} list 传入的值
 * @returns {boolean} 返回boolean
 */
const isValidArr = (list) => {
    if (_.isArray(list) && !_.isEmpty(list)) {
        return true;
    }
    return false;
};

/**
 * @description 删除对象中value为 null, undefined，'', 空数组的 key
 * @param {Object} data 传入的对象
 * @param {Boolean} isCLearEmptyArray 是否删除空数组
 * @returns {Object} 返回value有值的key对象
 */
// 清空无效的key
const clearInvalidKey = (data, isCLearEmptyArray = true) => {
    let _data = { ...data };
    for (let key in _data) {
        if (
            _data[key] === '' ||
            _data[key] === null ||
            _data[key] === 'null' ||
            _data[key] === undefined ||
            _data[key] === 'undefined'
        ) {
            delete _data[key];
        }
        if (isCLearEmptyArray && _.isArray(data[key]) && _.isEmpty(data[key])) {
            delete _data[key];
        }
    }
    return _data;
};

/**
 * 获取url的query参数
 * @param {String} key 属性key
 * @returns {object} url的参数对象
 */
const getUrlQuery = (key) => {
    const url = window.location.href;
    if (url.indexOf('?') < 0) {
        return;
    }
    return key ? formatData(joinParam(url))?.[key] : formatData(joinParam(url));

    function joinParam(url) {
        const _obj = {};
        url.split('?')[1]
            .split('&')
            .forEach((item) => {
                let _key = item.split('=')[0];
                let _val = item.split('=')[1];
                if (_obj[_key]) {
                    _obj[_key].push(decodeURI(_val));
                } else {
                    _obj[_key] = [decodeURI(_val)];
                }
            });
        return _obj;
    }
    function formatData(obj) {
        for (let key in obj) {
            if (obj[key].length === 1) {
                obj[key] = obj[key][0];
            }
        }
        return obj;
    }
};

export { isValidVal, isValidArr, clearInvalidKey, getUrlQuery };
