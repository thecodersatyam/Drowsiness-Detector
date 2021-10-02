function JavaBlink() {
    var blinks = document.getElementsByTagName('JavaBlink');
    for (var i = blinks.length - 1; i >= 0; i--) {
   var s = blinks[i];
   s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    window.setTimeout(JavaBlink, 800);
         }
     if (document.addEventListener) document.addEventListener("DOMContentLoaded", JavaBlink, false);
     else if (window.addEventListener) window.addEventListener("load", JavaBlink, false);
     else if (window.attachEvent) window.attachEvent("onload", JavaBlink);
     else window.onload = JavaBlink;