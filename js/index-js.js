$(document).ready(function(){
  // 使用鼠标移进和移出为元素underline添加下划线
  $('.underline').hover(function(){
    $('.nav-a',this).css('color','#fff');
    $('span',this).stop().css('height','5px');
    $('span',this).animate({
      left:'0',
      width:'100%',
      right:'0'
    },200);
  },
  function(){
    $('.nav-a',this).css('color','#afafaf');
    $('span',this).stop().animate({
      left:'50%',
      width:'0'
    },200);
  });
  //二级div切换
  var lis = $('.switch-list');
  var uls = $('f1');
  lis.click(function () {
    var li_selected = $(this);              //选中的li分类
    var num = li_selected.index();          //相对于同胞元素的位置
    lis.removeClass("active");              //清空liCSS属性
    li_selected.addClass('active');         //选中li添加属性
    uls.css("display", "none");             //隐藏所有form标签
    uls.eq(num).css("display", "block");    //展示选中的li所对应的form内容
  });
  //div切换
  $(".v-list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");	// siblings()返回别选择元素的同级元素
      var index = $(this).index();
      $(".grade").eq(index).show().siblings().hide();
  });
  // // 使用当前索引值分别改变元素为active1和元素为active2的背景
  // $(".underline").on("click", function() {
  //   var i = $(this).index(); //当前索引值
  //   if(i == 1){
  //     $(this).css('background-color','#363c41');
  //     $(".active2").css('background-color','#000');
  //   }else if(i == 3){
  //     $(this).css('background-color','#363c41');
  //     $(".active1").css('background-color','#000');
  //   }
  // });
});