// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this
    wx.request({
      url: 'http://www.huanqiuxiaozhen.com/wemall/goods/inqGoodsByTypeBrand?brand=' + options.brand + "&typeid=" + options.typeid,
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function(res){
        console.log(res)
        
        that.setData({
          list: res.data.data
        })
      }
    })
  },
  /**
   * 列表
   */
  goList: function(e){
    let bs = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../theme/index?id=' + bs.id
    })
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