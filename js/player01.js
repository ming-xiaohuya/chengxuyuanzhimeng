new Vue({
    el: '#app',
    data: {
        dataIndex: 0,
        sectionIndex: 0,
        dataList: [
            {
                index: 0,
                url: 'https://kodo.1000phone.com/1624875583680.369_干货爆满丨千锋码小花Web前端自学教程 - 1.1-01-前端学习必备3件套.mp4'
            },
            {
                index: 1,
                url: 'http://7xtcwd.com1.z0.glb.clouddn.com/%E5%8D%83%E9%94%8Bweb%E5%89%8D%E7%AB%AF%E6%95%99%E7%A8%8B%EF%BC%9A02_%E4%B8%80%E5%B0%8F%E6%97%B6%E5%BC%80%E5%8F%91996.ICU.mp4'
            },
            {
                index: 2,
                url: 'http://7xtcwd.com1.z0.glb.clouddn.com/%E5%8D%83%E9%94%8Bweb%E5%89%8D%E7%AB%AF%E6%95%99%E7%A8%8B%EF%BC%9A03_%E4%B8%80%E5%B0%8F%E6%97%B6%E5%BC%80%E5%8F%91996.ICU.mp4'
            },
            {
                index: 3,
                url: 'http://7xtcwd.com1.z0.glb.clouddn.com/%E5%8D%83%E9%94%8Bweb%E5%89%8D%E7%AB%AF%E6%95%99%E7%A8%8B%EF%BC%9A04_%E4%B8%80%E5%B0%8F%E6%97%B6%E5%BC%80%E5%8F%91996.ICU.mp4'
            },
            {
                index: 4,
                url: 'http://7xtcwd.com1.z0.glb.clouddn.com/%E5%8D%83%E9%94%8Bweb%E5%89%8D%E7%AB%AF%E6%95%99%E7%A8%8B%EF%BC%9A05_%E4%B8%80%E5%B0%8F%E6%97%B6%E5%BC%80%E5%8F%91996.ICU.mp4'
            },
        ],
        sectionList: [
            {
                index: 0,
                title: '第1节 - 一小时开发996.ICU',
                play: '点击播放'
            },
            {
                index: 1,
                title: '第2节 - 一小时开发996.ICU',
                play: '点击播放'
            },
            {
                index: 2,
                title: '第3节 - 一小时开发996.ICU',
                play: '点击播放'
            },
            {
                index: 3,
                title: '第4节 - 一小时开发996.ICU',
                play: '点击播放'
            },
            {
                index: 4,
                title: '第5节 - 一小时开发996.ICU',
                play: '点击播放'
            }
        ]
    },
    methods: {
        myShowClick(index) {
            this.dataIndex = index
            this.sectionIndex = index
        }
    }
})
