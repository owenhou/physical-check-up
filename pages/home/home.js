// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    hots: [{ "mainImg": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518268771.jpg", "title": "臻爱父母基础套餐-A","price":"1600"},
      { "mainImg": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518268771.jpg", "title": "臻爱父母基础套餐-B", "price": "1200" }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({ title: '拼命加载中...' });
    var brandImgs = ["https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518268771.jpg", "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518268771.jpg"];
    this.setData({ brandImgs: brandImgs });
    this.setData({hots:this.data.hots});
    wx.hideLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})