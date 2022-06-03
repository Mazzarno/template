window.ASUSInit = function() {
    asus_api.init({
        appkey: 'micro00001',
        api_background: 'general_Dark',
        lang: 'FR',
    })
};
(function(d) {
    var js,
        id = 'asus-jsapi'
    if (d.getElementById('asus-jsapi')) {
        return
    }
    js = d.createElement('script')
    js.id = id
    js.async = true
    js.src = 'https://www.asus.com/API/js/asus_api.js'
    d.getElementsByTagName('head')[0].appendChild(js)
})(document)