parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iJA9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MEET_MESSAGE_WHEN_MUTE_IS_OFF=exports.MEET_MESSAGE_WHEN_MUTE_IS_ON=exports.UNMUTED=exports.MUTED=exports.UNMUTE=exports.MUTE=void 0;var E="mute";exports.MUTE=E;var e="unmute";exports.UNMUTE=e;var r="muted";exports.MUTED=r;var o="unmuted";exports.UNMUTED=o;var _="Turn on microphone";exports.MEET_MESSAGE_WHEN_MUTE_IS_ON=_;var t="Turn off microphone";exports.MEET_MESSAGE_WHEN_MUTE_IS_OFF=t;
},{}],"FOZT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isCurrentlyMuted=exports.updateContextMenuTitle=exports.setMeetMuteState=exports.changeFavicon=exports.switchToMeetTab=exports.isLiveGoogleMeetTab=void 0;var e=require("./constants");function t(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var u=e.apply(n,r);function c(e){t(u,o,a,c,i,"next",e)}function i(e){t(u,o,a,c,i,"throw",e)}c(void 0)})}}var r=/meet.google.com\/[a-zA-Z]{3}\-[a-zA-Z]{4}\-[a-zA-Z]{3}.*/gm,o=function(e){return e.url.match(r)};exports.isLiveGoogleMeetTab=o;var a=function(){var e=n(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,console.log("Got meet tab:",t),null!=t&&(console.log("Updating tab to meet:",t),chrome.tabs.update(t.id,{selected:!0,active:!0}),chrome.windows.update(t.windowId,{drawAttention:!0,focused:!0})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error while getting meet tab");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();exports.switchToMeetTab=a;var u=function(){var e=n(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,console.log("Sending message to tab:",n,"with muteState:",t),chrome.tabs.sendMessage(n.id,{muteState:t});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();exports.setMeetMuteState=u;var c=function(e){document.querySelector('link[rel*="icon"]').href="icon/"+e+".png"};exports.changeFavicon=c;var i=function(){var t=n(regeneratorRuntime.mark(function t(n,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("Requested mute state:",r),r!==e.MUTE){t.next=6;break}return t.next=4,chrome.tabs.update(n.id,{muted:!0});case 4:t.next=9;break;case 6:if(r!==e.UNMUTE){t.next=9;break}return t.next=9,chrome.tabs.update(n.id,{muted:!1});case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),s=function(e){return e.mutedInfo.muted};exports.isCurrentlyMuted=s;var p=function(){return new Promise(function(e,t){try{chrome.tabs.query({},function(t){t.forEach(function(t,n){if(o(t))return console.log("Found live Google Meet tab:",t),e(t)})})}catch(n){t(n)}})},l=function(e,t){chrome.contextMenus.update(e,{title:t})};exports.updateContextMenuTitle=l;
},{"./constants":"iJA9"}]},{},["FOZT"], null)
//# sourceMappingURL=/utils.js.map