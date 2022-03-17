const scrollHeader = ()=>{
    const header = document.querySelector('header');

    window.addEventListener('scroll', (e)=>{
       const top = document.documentElement.scrollTop;
       top > 300 ? header.classList.add('activ') : header.classList.remove('activ')

    })
}

export default scrollHeader;