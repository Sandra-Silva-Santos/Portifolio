const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        this.textContent= '  Light Mode';
        body.style.background = 'white';
        body.style.color = '#212529';
        body.style.transition = '2s';
    }else{
        this.textContent = '  Dark Mode';
        body.style.background = '#212529';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
