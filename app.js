'use strict'

document.addEventListener('click', function (e) {
    const mbArr = ["mh", "m1", "m2", "m3", "m4", "m5", "m6"];

    for (let i = 0; i < mbArr.length; i++) {
        var str = mbArr[i];
        console.log(str);
        var mb = document.getElementById(mbArr[i]);
        mb.classList.remove('glow');
    }

    var mBtn = document.getElementById(this.activeElement.getAttribute('id'));

    mBtn.classList.add('glow');

    if (mBtn.id == "mh") {
        window.scrollTo(0, 0);
    }

});