const columns = [
    { title: '姓名', dataIndex: 'name', width: 100, fixed: 'left' },
    { title: '年龄', dataIndex: 'age', width: 300 },
    { title: '城市', dataIndex: 'city', width: 300 },
    { title: '地址', dataIndex: 'address', width: 300 },
];

const list = [
    { key: 1, name: '张三', age: 18, city: '上海', address: '上海xxx小区' },
    { key: 2, name: '李四', age: 19, city: '杭州', address: '杭州xxx小区' },
    { key: 3, name: '王五', age: 20, city: '深圳', address: '深圳xxx小区' },
    { key: 4, name: '赵六', age: 21, city: '北京', address: '北京xxx小区' },
];

export { columns, list };
