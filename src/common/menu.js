import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '系统门户',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '系统首页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ],
  },
  {
    name: '汇报',
    icon: 'form',
    path: 'form',
    children: [
	   {
        name: '工作日报',
        path: 'basic-form',
      },
	  {
        name: '计划报告',
        path: 'basic-form',
      },	  {
        name: '目标管理',
        path: 'basic-form',
      },
      {
        name: '基础表单',
        path: 'basic-form',
      },
      {
        name: '分步表单',
        path: 'step-form',
      },
      {
        name: '高级表单',
        authority: 'admin',
        path: 'advanced-form',
      },
    ],
  },
  {
    name: '协作',
    icon: 'table',
    path: 'list',
    children: [
		{
        name: '项目管理',
        path: 'table-list',
      },
	  {
        name: '任务协作',
        path: 'table-list',
      },
	  {
        name: '日程安排',
        path: 'table-list',
      },
		{
        name: '知识文档',
        path: 'table-list',
      },

      {
        name: '查询表格',
        path: 'table-list',
      },
      {
        name: '标准列表',
        path: 'basic-list',
      },
      {
        name: '卡片列表',
        path: 'card-list',
      },
      {
        name: '搜索列表',
        path: 'search',
        children: [
          {
            name: '搜索列表（文章）',
            path: 'articles',
          },
          {
            name: '搜索列表（项目）',
            path: 'projects',
          },
          {
            name: '搜索列表（应用）',
            path: 'applications',
          },
        ],
      },
    ],
  },
  {
    name: 'HRM',
    icon: 'profile',
    path: 'profile',
    children: [
		      {
        name: '绩效考核',
        path: 'basic',
      },
		{
        name: '人事档案',
        path: 'basic',
      },
		{
        name: '工资单',
        path: 'basic',
      },
      {
        name: '基础详情页',
        path: 'basic',
      },
      {
        name: '高级详情页',
        path: 'advanced',
        authority: 'admin',
      },
    ],
  },
  {
    name: 'CRM',
    icon: 'check-circle-o',
    path: '',
    children: [
	  {
        name: '线索',
        path: 'success',
      },
	  {
        name: '商机',
        path: 'success',
      },
	  {
        name: '客户',
        path: 'list/customer-list',
      },
	  {
        name: '联系人',
        path: 'success',
      },
	  {
        name: '合同',
        path: 'success',
      },
	  {
        name: '产品',
        path: 'success',
      },
	  {
        name: '市场活动',
        path: 'success',
      },
	  {
        name: '竞争对手',
        path: 'success',
      },
      {
        name: 'CRM统计',
        path: 'result/success',
      },
      {
        name: '失败',
        path: 'result/fail',
      },
    ],
  },
    {
    name: '客户库',
    icon: 'warning',
    path: 'customer',
    children: [
		     {
        name: '我的客户',
        icon: 'info-circle',
        path: 'customer-list',
      },
      {
        name: '我关注的客户',
        icon: 'info-circle',
        path: 'watched-customer-list',
      },
      {
        name: '共享给我的客户',
        icon: 'info-circle',
        path: 'share-to-me-customer-list',
      },
      {
        name: '新分配给我的客户',
        icon: 'info-circle',
        path: 'new-distribution-customer-list',
      },
      {
        name: '我的全部客户',
        icon: 'info-circle',
        path: 'all-customer-list',
      },
    ],
  },
  {
    name: '商机库',
    icon: 'warning',
    path: 'business',
    children: [
		     {
        name: '我的商机',
        path: 'customer-list',
      },
      {
        name: '我关注的商机',
        path: 'watched-customer-list',
      },
      {
        name: '共享给我的商机',
        path: 'share-to-me-customer-list',
      },
      {
        name: '新分配给我的商机',
        path: 'new-distribution-customer-list',
      },
      {
        name: '我的全部商机',
        path: 'all-customer-list',
      },
    ],
  },
  {
    name: '合同库',
    icon: 'warning',
    path: 'contract',
    children: [
		     {
        name: '我的合同',
        path: 'customer-list',
      },
      {
        name: '我关注的合同',
        path: 'watched-customer-list',
      },
      {
        name: '共享给我的合同',
        path: 'share-to-me-customer-list',
      },
      {
        name: '我的全部商机',
        path: 'all-customer-list',
      },
    ],
  },
   {
    name: '线索库',
    icon: 'warning',
    path: 'leads',
    children: [
		     {
        name: '我的线索',
        path: 'customer-list',
      },
      {
        name: '我关注的线索',
        path: 'watched-customer-list',
      },
      {
        name: '我的全部线索',
        path: 'all-customer-list',
      },
    ],
  },
  {
    name: '出勤管理',
    icon: 'warning',
    path: 'attend',
    children: [
		     {
        name: '异常考勤',
        path: 'customer-list',
      },
      {
        name: '考勤设置',
        path: 'watched-customer-list',
      },
      {
        name: '关联审批设置',
        path: 'all-customer-list',
      },
      {
        name: '轨迹管理设置',
        path: 'all-customer-list',
      },
    ],
  },
  {
    name: '审批',
    icon: 'warning',
    path: 'exception',
    children: [
		     {
        name: '审批流程',
        path: '403',
      },
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
	    name: '系统设置',
	    icon: 'warning',
	    path: 'SystemManage',
	    children: [
			     {
	        name: '组织架构设置',
	        path: 'organize',
		    children: [
			     {
	        name: '团队结构',
	        path: 'department',
	      },
	      {
	        name: '邀请列表',
	        path: '403',
	      },
	      {
	        name: '岗位设置',
	        path: '404',
	      },
	      {
	        name: '职级设置',
	        path: 'trigger',
	      },
	    ],
	      },
	      {
	        name: '权限和应用',
	        path: 'PermissionAndApp',
		    children: [
			     {
	        name: '应用管理',
	        path: '403',
	      },
	      {
	        name: '权限管理',
	        path: '403',
	      },
	    ],
	      },
	      {
	        name: '系统设置',
	        path: 'SystemSet',
		    children: [
			     {
	        name: '团队授权信息',
	        path: '403',
	      },
	      {
	        name: '企业微信',
	        path: '403',
	      },
	      {
	        name: '微信服务号',
	        path: '404',
	      },
	      {
	        name: '系统提醒设置',
	        path: 'trigger',
	        hideInMenu: true,
	      },
	    ],
	      },
	      {
	        name: '安全设置',
	        path: '500',
		    children: [
			     {
	        name: 'IP黑白名单设置',
	        path: '403',
	      },
	      {
	        name: '设备管理',
	        path: '403',
	      },
	    ],
	      },
	      {
	        name: '企业个性化设置',
	        path: 'trigger',
		    children: [
			     {
	        name: '个性化定制',
	        path: '403',
	      },
	    ],
	      },
	    ],
	  },
	  {
		    name: '个人设置',
		    icon: 'warning',
		    path: 'exception',
		    children: [
				     {
		        name: '个人资料',
		        path: '403',
		      },
		      {
		        name: '头像设置',
		        path: '403',
		      },
		      {
		        name: '修改密码',
		        path: '404',
		      },
		      {
		        name: '消息设置',
		        path: '500',
		      },
		      {
		        name: '应用设置',
		        path: 'trigger',
		        hideInMenu: true,
		      },
		      {
		        name: '首页设置',
		        path: 'trigger',
		        hideInMenu: true,
			  },
			  {
		        name: '申请加入团队列表',
		        path: 'trigger',
		        hideInMenu: true,
			  },
			  {
		        name: '语言设置',
		        path: 'trigger',
		        hideInMenu: true,
			  },
			  {
		        name: '签名管理',
		        path: 'trigger',
		        hideInMenu: true,
			   },
			   {
		        name: '数据订阅',
		        path: 'trigger',
		        hideInMenu: true,
				},
		    ],
		  },
  {
    name: '其他',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
		      {
        name: '短信',
        path: 'login',
      },
			      {
        name: '邮件',
        path: 'login',
      },
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
