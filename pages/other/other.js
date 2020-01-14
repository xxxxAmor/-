// // pages/other/other.js
// var postData = require("../../data/course_data.js");
// console.log(postData)
// console.log(postData.qnaire[1].question)
// console.log(postData.qnaire[1].option.d)

Page({
  answer() {
    wx.navigateTo({
      url: '/pages/succes/succes',
    })
  },
  


})


// Page({
//   data: {
//     id: "",
//     details: postData.qnaire
//   },
//   onLoad: function () {
//     this.setData({
//       id: postData.qnaire[0].id[1] //id[1]=2
//     })

//     console.log('详情', this.data.details)
//   },
  
//   nextQuestion: function () {
//     var that = this;
//     if (that.data.id <=4) {
//       this.setData({
//         id: that.data.details[0][id+1],
//         question:qnaire[id].question,

//       });
//     }
//   },
//   lastQuestion: function () {
//     var that = this;
//     if (that.data.id > 1 && that.data.id <=4) {
//       this.setData({
//         id: that.data.details[0][id - 1],
//         question: qnaire[id].question,

//       });
//     }
//   },
// onShow:function(){
//     console.log("onshow ");
//     var that = this
//     console.log(that.data);
//   },
  


// })









