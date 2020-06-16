const ANDROID_LINK = 'intent://arvr.google.com/scene-viewer/1.0?file=https://github.com/DARKFRAME-MEDIA/BLM2020-Android/blob/master/BLM2020.glb?raw=true#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;';
const IOS_LINK = 'https://github.com/DARKFRAME-MEDIA/BLM/blob/master/blm2020.usdz?raw=true';

const checkmarkSVG = `<svg xmlns="http://www.w3.org/2000/svg" focusable="false" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><path d="M14 21.5L9 16.54 10.59 14.97 14 18.35 21.41 11 23 12.58 14 21.5z"/><title>Checkmark outline</title></svg>`


let facebookBrowser = window.navigator.appVersion.includes('FB');
let ios = window.navigator.appVersion.includes('iPhone') || window.navigator.appVersion.includes('iPad');
let mobile = true;

// if (mobile) {
//     if (ios) {
//         document.getElementById('monumentLink').href = IOS_LINK;
//         // if (facebookBrowser) {
//         //     // document.getElementById('mobileRedirect').classList.remove('hidden');
//         // } else {
//         //     // document.getElementById('main').classList.remove('hidden');
//         //     document.getElementById('monumentLink').href = IOS_LINK;
//         // }
//     } else {
//         // document.getElementById('main').classList.remove('hidden');
//         document.getElementById('monumentLink').href = ANDROID_LINK;
//     }
// } else {
//     document.getElementById('desktopRedirect').classList.remove('hidden');
// }

// document.getElementById('browserinfo').innerText = window.navigator.appVersion;


document.getElementById('copyUrlButton').addEventListener('click', function (event) {
    var temp = document.createElement('textarea');
    temp.value = window.location.href;
    temp.setAttribute('readonly', '');
    temp.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    document.getElementById('copyIconContainer').innerHTML = checkmarkSVG;

});