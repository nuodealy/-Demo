// pages/home/index.js
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false,
    images: [],
    themeContent: [],
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this

    // app.getUserInfo(function (userInfo) {
    //   console.log(userInfo)
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })

    /**
     * 默认加载动画
     */
    setTimeout(function () {
      that.setData({
        loadingHidden: true
      })
    }, 1000)

    /**
     * 轮播图数据
     */
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          images: res.data
        })
      }
    }),
    /**
     * 主题馆
     */
    wx.request({
      url: "http://huanqiuxiaozhen.com/wemall/venues/venuesList",
      method: "GET",
      header: {
        'Accept': 'application/json'
      },
      success: function(res){
        // console.log(res.data.data)
        that.setData({
          themeContent:res.data.data
        })
      }
    }),
    /**
     * 环球精选
     */
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function(res){
        // console.log(res.data.data)
        that.setData({
          dataList: res.data.data.dataList
        })
      }
    })
  },
  /**
   * 点击主题馆跳转详情页
   */
  goDetails: function(e){
    let ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../details/index?id=' + ds.id + '&title=' + ds.title
    })
    // console.log(e.currentTarget.dataset)
  },
  /**
   * 点击环球精选跳转详情页
   */
  goTheme: function(e){
    let bs = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../theme/index?id=' + bs.id 
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