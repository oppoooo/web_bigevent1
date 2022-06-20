
$(function() {
    getUserInfo()
});
const url = 'http://www.liulongbin.top:3007'
$(function getUserInfo() {
    $.ajax({
        type: 'GET',
        url: url + '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token')  // 请求头携带 获取本地存储的值  token是用户身份验证令牌
        },
        success: res => {
            // console.log(res);
            if (res.status !== 0) return layer.msg(res.message)
            layer.msg('身份认证成功')
        }

    })
})

// 退出

$('.btnLogout').click( () => {
    layer.confirm('确定退出吗？', {icon: 3, title:'提示'}, function(index){
        // 清空本地的token值
        localStorage.removeItem('token')
        location.href = '/login.html'
      });
})