// pages/classify/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    dataRight: [],
    leftActive: 1,
    cNav: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function(res){
        console.log(res.data)
        that.setData({
          dataList: res.data,
          dataRight: res.data
        })
      }
    })
  },
  /**
   * 选中事件
   */
  check: function(e){
    let id = e.target.dataset.id,
        index = e.target.dataset.index;
    // console.log(e.target.dataset)
    this.setData({
      leftActive: id,
      cNav: index
    })
  },
  /**
   * 商品详情
   */
  goList: function(e){
    console.log(e)
    let ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../list/index?brand=' + ds.id + "&typeid=" + ds.typeid
    })
    // console.log(e)
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