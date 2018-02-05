//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  bindViewTap1: function () {
    wx.navigateTo({
      url: '../view/view'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (["墙角数枝梅", "凌寒独自开", "遥知不是雪", "为有暗香来"]).map(log => {
        return log
      })
    })
  }
})
