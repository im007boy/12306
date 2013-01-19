/**
 * Date: 13-1-19
 * Desc:
 *
 * localStorage["loginUser.user_name"] = '';
 * localStorage["user.password"] = '';
 * localStorage["passenger_1_name"] = '';
 * localStorage["passenger_1_cardno"] = '';
 * localStorage["passenger_1_mobileno"] = '';
 */
/**
 *
 * @param url
 * @param fn
 */
function route(url, fn){
    if ( location.href.indexOf(url) > -1 ){
        setPageAction(true);
        fn && fn();
    }
}
function setPageAction(visible){
    chrome.extension.sendMessage({action: 'showPageAction', data: {visible: visible}});
}
function bindAction(){
    ["loginUser.user_name","user.password", "passenger_1_name", "passenger_1_cardno", "passenger_1_mobileno"].forEach(function(name){
        var input = $('input[name=\"'+ name +'\"]');
        if ( input.length ){
            if (localStorage[name]){
                input.val( localStorage[name] )
            }
            input.change(function(){
                localStorage[name] = $(this).val();
                console.warn('save', name);
            })
        }
    });
    setPageAction(true);
}
bindAction();
route('https://dynamic.12306.cn/otsweb/loginAction.do', function(){
    $('input[name="randCode"]').focus();
});
route('https://dynamic.12306.cn/otsweb/order/confirmPassengerAction.do', function(){
    $('input[name="randCode"]').focus();
});