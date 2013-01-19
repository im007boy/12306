/**
 * Date: 13-1-19
 * Desc:
 */
chrome.extension.onMessage.addListener(function(request, sender){
    switch( request.action ){
        case 'showPageAction':
            request.data.visible?chrome.pageAction.show(sender.tab.id):chrome.pageAction.hide(sender.tab.id);

    }
})