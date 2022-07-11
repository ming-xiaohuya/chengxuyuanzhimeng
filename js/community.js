new Vue({
    el: '#app',
    data: {
      datalist: [
          {
              title: '对于php中文网APP，你有什么不得不说的感受和建议呢？  ',
              text: '为了帮助同学们更好的利用碎片化学习，以及更好的学习体验，php中文网重新开发了APP，目前开放安卓版的APP内测！欢迎提出bug，学习体验，更好的建议等！',
              p: '钟老师来自于 2021-04-26 11:31:13',
              url: 'https://www.php.cn/static/images/user_avatar.jpg'
          },
          {
            title: 'update方法不能更新字段值为0的数据  ',
            text: 'tp6 模型的update方法,更新data中包含字段值为0时,无法更新字段,为00时却可以.这个怎么回事?',
            p: 'Mr.O来自于 2021-05-19 12:48:45',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: 'session登录信息  ',
            text: '用session设置用户登录信息,在哪里查看？我的session storage里面什么都没有',
            p: '铁力瓦尔良来自于 2021-05-18 20:32:43',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '验证码  ',
            text: '不感觉验证码有点大吗',
            p: '铁力瓦尔良来自于 2021-05-18 19:00:45',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '订单语音播报有好几种，轮询时如何处理  ',
            text: '订单状态有1-新订单，2-待接单，3-退款订单；轮询接口中有这三种状态 的对应数量，如果有就播报声音，js如何处理这三种订单语音播报顺序播放呢',
            p: 'A峰来自于 2021-05-18 16:37:00',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '数据库  ',
            text: '连接数据库，不指定数据表吗？我里面有三张表它怎么知道用哪个呢？是因为这个原因效果才出不来吗？',
            p: '铁力瓦尔良来自于 2021-05-18 15:01:43',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '验证码  ',
            text: '{:captcha_src()}➕这个东西后，页面刷新不出来了，怎么办？？？',
            p: '铁力瓦尔良来自于 2021-05-16 19:09:57',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: 'curl_multi问题  ',
            text: '用curl_multi进行批量的请求，但有时候会出现访问过快的情况，有没有办法重新提交这个请求？',
            p: '小黑来自于 2021-05-16 11:33:13',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '请问哪里出错了？执行没有反应$stmt->execute() false 没有报错  ',
            text: '怎么执行不了插入操作呢，$stmt->execute() 执行错误，没有报错误提示',
            p: '王先生灬网站定制来自于 2021-05-13 23:09:28',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: 'Auth权限认证类  ',
            text: '请问这个权限认证类是老师自己写的吗',
            p: '李希-13507453412来自于 2021-05-13 18:13:08',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: 'PHP搜索代码只能搜出一页，点击任意页码不实现  ',
            text: '在模糊搜索的时候，会查询出所要的搜索信息，但是只能看到第一页，点击下一页或者任意一页就会出现如下图，并返回主页面以下是搜索功能代码//档案搜索    publi...',
            p: '木木来自于 2021-05-13 10:43:16',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '老师，请问那里可以下载视频里讲到的funciton.php  ',
            text: '老师，请问那里可以下载视频里讲到的funciton.php',
            p: '欢乐马来自于 2021-05-13 02:13:16',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '如何传递变量  ',
            text: '<a href="/index.php?a=user2 & modify= "  ><?php echo $bbs_v[&#...',
            p: '黎明来自于 2021-05-12 20:55:10',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: 'Mac怎么安装呢？  ',
            text: 'Mac怎么安装？',
            p: 'YJ来自于 2021-05-12 16:47:45',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        },
        {
            title: '给定两张表risk_events (风险事件表) 和 event_define（风险定义表）  ',
            text: '题目：给定两张表risk_events (风险事件表) 和 event_define（风险定义表）。表数据如下：1、risk_events 字段说明：Event...',
            p: 'A .配角来自于 2021-05-12 11:32:14',
            url: 'https://www.php.cn/static/images/user_avatar.jpg'
        }
      ]
    }
  })
