import { getUrlQuery } from './util.tool';

//enum RoleType = {
//    // 经销商业务员
//    DISTRIBUTOR_SALESMAN,
//    // 经销商经理
//    DISTRIBUTOR_MANAGER,
//    // 业务主管
//    SALESMAN,
//    // 业务科长
//    SALESMAN_HEADER,
//    // 业务经理
//    SALESMAN_MANAGER,
//    // 渠道员
//    CHANNEL_MAN,
//    // 市场部
//    MARKETING_DEPARTMENT,
//    // 三包科
//    THREE_GUARANTEES,
//    // 广告公司
//    ORG,
//    // 三包业务员
//    THREE_SALEMAN,
//    // 知轮业务经理
//    ZHILUN_SALESMAN_MANAGER,
//    // 知轮业务科长
//    ZHILUN_SALESMAN_HEADER,
//    // 知轮业务主管
//    ZHILUN_SALESMAN,
//    // 办事处经理
//    ZHILUN_OFFICE_MANAGER,
//    /// extra add
//    INVALID,
//};
const isFactory = () => {
    const roleType = getUrlQuery('roleType'); // 角色类型
    const dealerRoleList = ['DISTRIBUTOR_SALESMAN', 'DISTRIBUTOR_MANAGER'];
    return !!dealerRoleList.includes(roleType);
};

export { isFactory };
