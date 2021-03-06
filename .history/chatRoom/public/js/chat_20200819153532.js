let content = document.getElementsByClassName('content')[0]
let text = document.getElementsByClassName('text')[0]


text.onkeydown = function (ev) {
    var event = ev || event
    if (event.keyCode == 13) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/chat/chatBox',
            data: {
                content: text.value
            },
            success: (result) => {
                text.value = ''
                $('.content').html('')
                let html = ''
                result.forEach((items) => {
                    html += `<div class="box">
                    <div class="box1">
                        <img src='${items.avatar}' class='avatar'>
                        <div class="chat_name">${items.nickName}</div>

                    </div>
                    <div class="box2">
                        <div class="chat_content">${items.content}</div>
                    </div>
                    <div class="box3">
                        <div class='chat_date'>${items.createAt}</div>
                    </div>
                </div>`
                    $('.content').html(html)
                })
                var nScrollHight = 0 //滚动距离总长(注意不是滚动条的长度)
                var nScrollTop = 0   //滚动到的当前位置
                var nDivHight = $('#div1').height()
                $('.content').scroll()
            },
            error: (error) => {
                console.log(error)
            }
        })
    }
}
