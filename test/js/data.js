$('#tbody-shop').on('click', 'button', function(){
    const $tr =  $(this).parents('tr')
    if($(this).hasClass('btn-edit')){
        $tr.addClass('edit').find('span').each(function(){
            $(this).next().val($(this).html())
        })
    }
    else if($(this).hasClass('btn-ok')){
        const id = $tr.data('id'),
              name = $tr.find('.input-name').val(),
              price = $tr.find('.input-price').val(),
              num = $tr.find('.input-num').val()
        $.get('./php/updata.php', { id, name, price, num}, function(resp){
            if(resp.code === 200){
                $tr.removeClass('edit').find('span').each(function(){
                    $(this).html($(this).next().val())
                })
            }else{
                alert('网络错误,数据修改失败')
            }
        }, 'json')
    }
    else if($(this).hasClass('btn-cancel')){
        $tr.removeClass('edit')
    }
    else if($(this).hasClass('btn-del')){
        if(confirm('确定删除吗?')){
            const id = $tr.data('id')
            $.get('./php/del.php', { id }, function(resp){
                if(resp.code === 200){
                    getData()
                }
            }, 'json')
        }
    }
})
const $inputName = $('#inputName'),
      $inputPrice = $('#inputPrice'),
      $inputNum = $('#inputNum'),
      $addFail = $('#add-fail')
$('.modal-footer #btn-add').on('click', function(){
    const name = $inputName.val(),
          price = $inputPrice.val(),
          num = $inputNum.val()
    $.get('./php/add.php', { name, price, num }, function(resp){
        console.log(resp)
        if(resp.code === 200){
            $('#addModal').modal('hide')
            getData()
        }else{
            $addFail.removeClass('hide')
            setTimeout(() => {
                $addFail.addClass('hide')
            }, 2000)
        }
    }, 'json')
})

$('#addModal').on('hidden.bs.modal', function () {
    console.log('当模态框隐藏的时候执行一些动作...')
    inputName.value = inputPrice.value = inputNum.value = ''
})
  