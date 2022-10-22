let items = document.querySelectorAll('.item');
let nav = document.getElementById('nav');
document.addEventListener('scroll', (event) => {
    if (window.scrollY > 600)
    {
        document.getElementById('nav').style.position = 'fixed';
        nav.style.width = '1430px';
        
        nav.classList.add('tofixed');
    }
    else {
        document.getElementById('nav').style.position = 'relative';
        nav.classList.remove('tofixed');
    }
    items.forEach(item =>{
        if(item.offsetTop - window.scrollY < 300){
            item.classList.add('active');
        }
    })

})

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item1');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item1');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

