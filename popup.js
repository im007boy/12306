/**
 * Date: 13-1-19
 * Desc:
 */
$(function(){
    function merge(a, b){
        for (var k in b){
            b.hasOwnProperty(k) && (a[k] = b[k]);
        }
        return a;
    }
    function createUserInfoForm(name, uid, phone){
        var form = $('<form>');
        form.append(
            $("<input name='name' />").val(name)
        ).append(
            $("<input name='uid' />").val(uid)
        ).append(
            $("<input name='phone' />").val(phone)
        ).append(
            $("<button type='submit'>").text(name === null?'add':'apply')
        );
        return form;
    }
    var root = $('#users');
    var users = localStorage.getItem('users');
    users = merge(users, {

    })
    root.append(
        $('<li>').append(createUserInfoForm(null))
    )
})