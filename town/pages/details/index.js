// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: null,
    distList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // console.log(options)
    wx.setNavigationBarTitle({
      title: options.title
    })
    wx.request({
      url: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=' + options.id ,
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function(res){
        console.log(res.data.data.brand)
        that.setData({
          distList: res.data.data.brand
        })
      }
    })
  },
  /**
   * 商品列表
   */
  goList: function(e){
    console.log(e)
    let ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../list/index?brand=' + ds.id + "&typeid=" + ds.typeid
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