/*
 * @Author: zhangping
 * @Date: 2024-06-17 09:46:00
 * @Description: 审批中心api
 */
import request from '@/libs/request';

// 审核中心列表
export function apiAuditList(data) {
    return request({
        url: '/supplier/apply/audit/auditList',
        method: 'post',
        data,
    });
}
