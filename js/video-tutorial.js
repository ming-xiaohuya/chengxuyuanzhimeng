new Vue({
    el: '#app',
    data: {
        datalist: [
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019Web前端从入门到精通（HTML+CSS全套）',
                popularity: 357182,
                downloads: 55032,
                img: 'img/video-button.png',
                dataurl: '../video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '一小时开发996.ICU',
                popularity: 315176,
                downloads: 11331,
                img: 'img/video-button.png',
                dataurl: '../video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019iOS混合开发视频精讲',
                popularity: 317768,
                downloads: 3555,
                img: 'img/video-button.png',
                dataurl: '../video-tutoial/player01html'
            },
            {
				url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019安卓混合开发视频精讲',
                popularity: 311053,
                downloads: 4170,
                img: 'img/video-button.png',
                dataurl: '../video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019Web前端初识与职业发展',
                popularity: 192438,
                downloads: 3542,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'Web前端小白入门必看预习视频',
                popularity: 188536,
                downloads: 4056,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020年毕设论文辅导-职位管理系统',
                popularity: 187952,
                downloads: 8725,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020千锋逆战班——Web前端直播行业课',
                popularity: 187353,
                downloads: 14529,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
				url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020千锋逆战班——Web前端直播体验课',
                popularity: 185805,
                downloads: 4743,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'HTML+CSS新手快速入门教程（编程小白福音系列）',
                popularity: 172339,
                downloads: 3191,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版JavaScript基础入门教程全集（强烈推荐）',
                popularity: 171572,
                downloads: 3087,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020Vue全套教程全开源（强烈推荐）',
                popularity: 164792,
                downloads: 4276,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020年毕设论文辅导-Vue喵喵电影',
                popularity: 156223,
                downloads: 4351,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020年毕设论文辅导-小程序云项目',
                popularity: 164497,
                downloads: 2181,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020年毕设论文辅导-资产管理平台',
                popularity: 162429,
                downloads: 2069,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版前端视频-MongoDB数据库全套（精华版）',
                popularity: 161163,
                downloads: 2077,
                img: 'img/video-button.png',
                dataurl: 'video-tutoial/player01html'
            }
        ],
        primarylist: [
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019Web前端从入门到精通（HTML+CSS全套）',
                popularity: 357158,
                downloads: 55032,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019Web前端初识与职业发展',
                popularity: 306167,
                downloads: 2099,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'Web前端小白入门必看预习视频',
                popularity: 208627,
                downloads: 12085,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020千锋逆战班——Web前端直播行业课',
                popularity: 194666,
                downloads: 4377,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020千锋逆战班——Web前端直播体验课',
                popularity: 192393,
                downloads: 3542,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'HTML+CSS新手快速入门教程（编程小白福音系列）',
                popularity: 188521,
                downloads: 4056,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'Web前端入门教程+学习资料【完结】',
                popularity: 94690,
                downloads: 13375,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '页面布局经典案例视频',
                popularity: 73069,
                downloads: 11248,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '一阶段专题视频合集',
                popularity: 66919,
                downloads: 3155,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '页面布局与设备适配教程',
                popularity: 64687,
                downloads: 6641,
                img: 'img/video-button.png'
            }
        ],
        intermediatelist: [
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版JavaScript基础入门教程全集（强烈推荐）',
                popularity: 187928,
                downloads: 8725,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020DvaJS视频精讲，全网首发',
                popularity: 153883,
                downloads: 3376,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版React入门到大神',
                popularity: 143981,
                downloads: 1660,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'TypeScript全套视频（程序员必备）',
                popularity: 140140,
                downloads: 3653,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'Taro开发框架视频，不看后悔',
                popularity: 135314,
                downloads: 3505,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'JavaScript全套视频~全套资料',
                popularity: 86242,
                downloads: 11273,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'JavaScript经典案例视频',
                popularity: 53252,
                downloads: 6216,
                img: 'img/video-button.png'
            }
        ],
        advancedlist: [
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019iOS混合开发视频精讲',
                popularity: 314754,
                downloads: 3555,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019安卓混合开发视频精讲',
                popularity: 311022,
                downloads: 4170,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020Vue全套教程全开源（强烈推荐）',
                popularity: 187315,
                downloads: 15429,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版小程序框架Mpvue入门教程（全开源）',
                popularity: 164776,
                downloads: 4276,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020全新Dart Flutter开发教程（首发）',
                popularity: 156760,
                downloads: 3152,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版前端视频-MongoDB数据库全套（精华版）',
                popularity: 156218,
                downloads: 4351,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'uniApp视频全套资料配源码',
                popularity: 152705,
                downloads: 3822,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020前端Ajax入门全套教程全开源',
                popularity: 145518,
                downloads: 4076,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版腾讯小程序同构框架kbone教程（前沿技术）',
                popularity: 143318,
                downloads: 3768,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019最新nodeJS从入门到大神',
                popularity: 141676,
                downloads: 4562,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '用面向对象打造Vue框架教程',
                popularity: 139822,
                downloads: 1729,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020微信公众号开发教程全开源（强烈推荐）',
                popularity: 138024,
                downloads: 4120,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019轻松玩转微信小程序开发',
                popularity: 134327,
                downloads: 3015,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2020版Node.JS入门到大神',
                popularity: 137592,
                downloads: 2956,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: 'NodeJS+Express+MongoDB实战项目',
                popularity: 135522,
                downloads: 3652,
                img: 'img/video-button.png'
            },
            {
                url: './img/Fghrp_ZHxsFZP6xYzyYue2V0cjUl.jpg',
                title: '2019最新Flutter全套视频~全套资料',
                popularity: 135155,
                downloads: 3232,
                img: 'img/video-button.png'
            }
        ]
    }
})