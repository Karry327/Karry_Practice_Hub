// pages/myinfo.js
Page({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        userinfo: {}
    },
    onLoad:function(options) {
        this.setData({
            userinfo:wx.getStorangeSync('userInfo')
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
