var OnScreen = require('onscreen');
var os = new OnScreen({
    tolerance: 0,
    throttle: 0,
    toggleClass: ''
});
os.on('enter', '.material-slide-up', (element) => {
    $(element).addClass('slideInUp animated')
});

os.on('enter', '.material-bounce-in ', (element) => {
    $(element).addClass('bounceIn animated')
});

os.on('enter', '.material-fade-in ', (element) => {
    $(element).addClass('fadeIn animated')
});

os.on('enter', '.material-zoomIn', (element) => {
    $(element).addClass('zoomIn animated')
});

os.on('enter', '.material-rollin', (element) => {
    $(element).addClass('rollIn animated')
});
