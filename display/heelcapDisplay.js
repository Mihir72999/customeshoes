const quarter = document.getElementById('quarter')
const heelcap = document.getElementById('heelcap')


function heelcapDisplay(){
    quarter.style.transform = 'translateX(270px)'
    heelcap.style.transform = 'translateX(0px)'
    heelcap.style.transition='all';
    heelcap.style.transitionDuration = '0.5s'
    heelcap.style.transitionDelay='0.5s'

}