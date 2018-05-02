// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{

    }
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    let item = {
      "name": "臻爱父母基础套餐",
      "price": 1600,
      "image": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518268771.jpg",
      "id": 1,
      "projects": [
        {
          "name": "一般检查",
          "description": "体重是否正常，有无体重不足、超重或肥胖；有无血压脉搏异常等"
        },
        {
          "name": "总胆固醇（TC）",
          "description": "筛查脂肪肝，胆管炎，胆囊炎，药物中毒性肝炎，酒精性肝炎和黄疸等。"
        },
        {
          "name": "总胆固醇（TC）",
          "description": "筛查脂肪肝，胆管炎，胆囊炎，药物中毒性肝炎，酒精性肝炎和黄疸等。"
        },
        {
          "name": "总胆固醇（TC）",
          "description": "筛查脂肪肝，胆管炎，胆囊炎，药物中毒性肝炎，酒精性肝炎和黄疸等。"
        }
      ]
    };
    let data = { "heads": ["项目名称", "项目介绍"], "list": item.projects, "columns": ["name", "description"]}
    this.setData({item:item, tableData: data});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.item);
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