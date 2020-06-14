const ANDROID_LINK = 'intent://arvr.google.com/scene-viewer/1.0?file=https://github.com/DARKFRAME-MEDIA/BLM2020-Android/blob/master/BLM2020.glb?raw=true#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;';
const IOS_LINK = 'https://github.com/DARKFRAME-MEDIA/BLM/blob/master/blm2020.usdz?raw=true';


let facebookBrowser = window.navigator.appVersion.includes('FB');
let ios = window.navigator.appVersion.includes('iPhone');
let mobile = true;

if (mobile) {
    if(ios) {
        if(facebookBrowser) {
            document.getElementById('mobileRedirect').classList.remove('hidden');
        } else {
            document.getElementById('main').classList.remove('hidden');
            document.getElementById('monumentLink').href = IOS_LINK;
        }
    } else {
        document.getElementById('main').classList.remove('hidden');
        document.getElementById('monumentLink').href = ANDROID_LINK;
    }
} else {
    document.getElementById('desktopRedirect').classList.remove('hidden');
}


document.getElementById('browserinfo').innerText = window.navigator.appVersion;
