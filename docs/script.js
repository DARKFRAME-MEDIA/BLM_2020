let facebookBrowser = window.navigator.appVersion.includes('FB');
let ios = window.navigator.appVersion.includes('ios');

if (ios && facebookBrowser) {
    document.getElementById('test').innerText('this is a redirect page');
}