let facebookBrowser = window.navigator.appVersion.includes('FB');
let ios = window.navigator.appVersion.includes('iPhone');

if (ios && facebookBrowser) {
    document.getElementById('main').classList.add('hidden');
    document.getElementById('redirect').classList.remove('hidden');
}