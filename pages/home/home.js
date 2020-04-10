// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'Coderwhy',
    age:18,
    students:[
    {id:110, name: 'kobe', age: 30},
    {id:111, name: 'james', age: 28},
    {id:112, name: 'curry', age: 32},
    {id:113, name: 'why', age: 18}
    ],
    counter:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(){
      //1、错误的做法：界面是不会刷新的
      // this.data.counter +=1
      // console.log(this.data.counter)
      //this.setData()
      this.setData({
        counter:this.data.counter+1
      })
    },
    onTap2:function(){
      this.setData({
        counter:this.data.counter-1
      })
    }
  }
})

