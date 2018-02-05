// pages/view/view.js
Page({
  data: {
    currentTab: 0, 
    address: ["全部", "北京", "天津", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "山东", "湖北", "湖南", "广东", "重庆", "四川", "陕西", "甘肃", "河北", "山西", "内蒙古", "河南", "海南", "广西", "贵州", "云南", "西藏", "青海", "宁夏", "新疆", "江西", "香港", "澳门", "台湾", "",],
    currentTab1: 0,
    list: [
      "2017年软科世界大学学术排名",
      "2017年世界大学学术排名：清华大学跻身前50领跑内地",
      "2017年7月专科高校人气排行榜TOP10",
      "2017年7月本科高校人气排行榜TOP10",
      "亚太地区大学排行榜",
      "2017亚太地区大学排行榜: 中国四所大学跻身前十",
      "北京大学、清华大学位居亚太地区大学排行榜前五",
      "湖南3所大学进入中国50强，有你的母校吗？",
      "各专业排行前五的大学有哪些",
      "2017年世界大学声誉排行榜 南京大学位列91-100"
    ],
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },
  // onLoad: function () {
  //   var that = this//不要漏了这句，很重要
  //   wx.request({
  //     url: './view.json',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     success: function (res) {
  //       that.setData({
  //         list: res.data.list,
  //       })
  //     }
  //   })
  // },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindChange1: function (e) {
    var that = this;
    that.setData({ currentTab1: e.detail.current });
  },
  // 点击tab切换 
  swichNav1: function (e) {
    var that = this;
    if (this.data.currentTab1 === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab1: e.target.dataset.current
      })
    }
  }
})