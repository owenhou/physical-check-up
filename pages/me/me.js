var app = getApp()
Page( {
  data: {
    userInfo: {},
    menuItems: [ {
      icon: '../../assert/images/yuyue.png',
      text: '我的预约',
      url: ""
    },
      {
        icon: '../../assert/images/kefu.png',
        text: '联系客服',
        url: ""
      }, {
        icon: '../../assert/images/help.png',
        text: '常见问题',
        url: ""
      }]
  },

  onLoad: function() {
    this.setData({
      userInfo: app.globalData.userInfo
    });
  }
})