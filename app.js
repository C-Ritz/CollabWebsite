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

    switch (mBtn.id) {
        case 'mh':
            window.scrollTo(0, 0);
            break;
        case 'm1':
            break;
        case 'm2':
            break;
        case 'm3':
            break;
        case 'm4':
            break;
        case 'm5':
            break;
        case 'm6':
            window.scrollTo(0, document.body.scrollHeight);
            break;
    }

});