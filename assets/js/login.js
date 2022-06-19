$(function() {
    // 点击登录让注册隐藏
    console.log(222);
    $('#link_login').on('click', () => {
        // 点击登录显示  注册隐藏
        $('.login-box').show()
        $('.reg-box').hide()
    })
    // 点击注册 登录隐藏
    $('#link_reg').on('click', () => {
        $('.login-box').hide()
        $('.reg-box').show()
    })
})


// 表单验证

// 先获取form对象 模块加载
const form = layui.form

form.verify({
    pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ],
    pdd: (value) => { // value 可以通过形参获取表单的值
        const mima = $('.reg-box [name="password"]').val()  //属性选择器
        if (mima !== value) return '两次密码不一致'
    }
  }); 


//   弹窗 直接使用
// layer.open({
//     title: '在线调试'
//     ,content: '配置各种参数，试试效果'
//   });     
// 注册
const url = 'http://www.liulongbin.top:3007'

// 监听注册表单

$('#form_reg').submit((e) => {
    // 阻止默认事件
    e.preventDefault()
    console.log(666);
    $.ajax({
        method: 'POST',
        url: url + '/api/reguser',
        data: {
            username: $('.reg-box [name="username"]').val(),
            password: $('.reg-box [name="password"]').val()
        },
        success: (res) => {
            console.log(res);
            if (res.status !== 0) return layer.msg(res.message)
            layer.msg('注册成功')
            // 成功返回登录页面
            $('#link_login').click()
        }
    })
})

// d登录
$('#form_login').submit( e => {
    e.preventDefault() // 阻止表单默认事件
    $.ajax({
        method: 'POST',
        url: url + '/api/login',
        data: $('#form_login').serialize(), // 将表单中的内容拼接成字符串型的参数
        success: res => {
            console.log(res);
            if (status !== 0) layer.msg(res.message)
            layer.msg('登录成功')
            location.href = '/index.html'
        }
    })

})