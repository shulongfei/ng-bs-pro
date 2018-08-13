// (function () {

//     var b_name = navigator.appName;
//     var b_version = navigator.appVersion;
//     var version = b_version.split(";");
//     var trim_version = version[1].replace(/\s/g,"");
//     if (b_name == "Microsoft Internet Explorer") {
//         if (trim_version == "MSIE8.0" || trim_version == "MSIE7.0" || trim_version == "MSIE5.0") {
//            alert('亲!浏览器版本过低，当前电脑可以当废铁卖了。');
//         }
//     }

// })();

// 封装alert
// window.alert=function(content){
//     if(!document.getElementById("my-modal-alert")) {
//     html =  '<div  class="modal fade bs-example-modal-sm" id="my-modal-alert">' +
//             '<div class= "modal-dialog modal-sm" >' +
//             '<div class="modal-content" id="modal-position">' +
//             '<div class="modal-header">' +
//             '<h6 class="modal-title" id="myModalLabel">温馨提示</h6></div>' +
//             '<div class="modal-body"><div id="modal_message"></div></div>' +
//             '<div class="modal-footer"> ' +
//             '<button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>' +
//             '</div></div> </div></div>';
//             $('body').append(html);
//             modalMiddle();
//     }
//     $("#my-modal-alert").modal("show");
//     $('#modal_message').html(content);
// }

// // 封装确认框
// function alertCan(content,o){
//     window.alertCan.o = !o?{sure:null,cancle:null}:o;
//     if(!document.getElementById("my-modal-alert-f2")) {
//         html='<div  class="modal fade bs-example-modal-sm" id="my-modal-alert-f2">' +
//             '<div class= "modal-dialog modal-sm">' +
//             '<div class="modal-content" id="modal-position">' +
//             '<div class="modal-header">' +
//             '<h6 class="modal-title" id="myModalLabel">温馨提示</h6></div>' +
//             '<div class="modal-body"><div id="modal_message_f2"></div></div>' +
//             '<div class="modal-footer"> ' +
//             '<button type="button" onclick="alertCan.o.sure()" class="btn btn-primary" data-dismiss="modal">确定</button>' +
//             '<button type="button" onclick="alertCan.o.cancle()" class="btn btn-primary" data-dismiss="modal">退出</button>' +
//             '</div></div> </div></div>';
//         $('body').append(html);
//         modalMiddle();
//     }
//     $("#my-modal-alert-f2").modal('show');
//     $('#modal_message_f2').html(content);
// }

// //测试代码可删除
// $('#btn-a').on('click',function(e){
//     e.preventDefault();
//     if($('.a').val()==""){
//         alertCan("内容不能为空这是一条提示信息我我我我我122这提示信息提示信息提示信息",{
//             sure: function(){
//                 console.log(1111);
//             },
//             cancle: function(){
//                 console.log(22222);
//             }
//         });
//     }else{
//         location.href="../record_step_two.html";
//     }
// })


function  modalMiddle(){
    
    var myModal= $('#my-modal-alert,#my-modal-alert-f2');
    function centerModals() {
        myModal.each(function(i) {
            var $clone = $(this).clone().css('display','block').appendTo('body');
            var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
            top = top > 0 ? top : 0;
            $clone.remove();
            $(this).find('.modal-content').css("margin-top", top);
        });
    };
    myModal.on('show.bs.modal', centerModals);

    //禁用空白处点击关闭
    myModal.modal({
        backdrop: 'static',
        keyboard: false,//禁止键盘
        show:false
    });   

    //页面大小变化是仍然保证模态框水平垂直居中
    $(window).on('resize', centerModals);

}

import "./jquery.js"
import "./bootstrap.js"

export default function message(content) {
  if(!document.getElementById("my-modal-alert")) {
    var html =  '<div  class="modal fade bs-example-modal-sm" id="my-modal-alert">' +
            '<div class= "modal-dialog modal-sm" >' +
            '<div class="modal-content" id="modal-position">' +
            '<div class="modal-header">' +
            '<h6 class="modal-title" id="myModalLabel">温馨提示</h6></div>' +
            '<div class="modal-body"><div id="modal_message"></div></div>' +
            '<div class="modal-footer"> ' +
            '<button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>' +
            '</div></div> </div></div>';
            $('body').append(html);
            modalMiddle();
    }
    $("#my-modal-alert").modal("show");
    $('#modal_message').html(content);
}
