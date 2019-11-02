var API_V1_URLS = {
    // core
  'core_captcha_url' : '/api/v1/core/captcha',        //获取验证码
  'core_file_upload_url': '/api/v1/core/upload',        //上传文件
  'core_qiniu_uptoken': '/api/v1/core/qiniu/uptoken', //获取七牛uptoken
  'core_qr_code': '/api/v1/core/qr_code', //获取二维码
  'core_job_info': '/api/v1/core/job/result/<job_id>',    // 获取job info


  // account 用户中心
  'account_user_role': '/api/v1/account/get_user_role',         //登录获取角色列表[帐号，密码]
  'account_login': '/api/v1/account/login',               //获取登录jwt token []
  'account_switch_user_role': '/api/v1/account/switch_user_role',     //已经登录的用户切换角色[带token]
  'account_class_info': '/api/v1/account/get_class_info',         //登录用户获取班级信息
  'account_class': '/api/v1/account/get_class',             //登录用户获取班级列表
  'account_refresh_token': '/api/v1/account/refresh_token',       //刷新token
  'account_logout': '/api/v1/account/login',                //登出
  'account_class_excel': '/api/v1/account/class_excel/<arg>',       //下载班级excel
  'account_school_classes': '/api/v1/account/get_school_classes',     //获取学校所有年级的班级
  'account_school_teaching': '/api/v1/account/get_school_teaching',   //获取学校某学科的任教信息
  'account_current_user': '/api/v1/account/current_user',         //获取当前用户信息
  'account_subject_teacher': '/api/v1/account/scoring_subject_teacher', //获取学校某学科的教师列表
  'account_current_roles': '/api/v1/account/current_roles', //获取角色列表
  
};

export default {API_V1_URLS}
