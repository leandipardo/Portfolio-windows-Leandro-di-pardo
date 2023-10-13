const d = document
export default function mover_carousel(carousel){
    if(window.outerWidth <= 1024){
        return;
    }else{
    const slider = document.querySelector(carousel);
    let isDown = false;
    let startX;
    let scrollLeft;
    if(slider){
    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', _ => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', _ => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const SCROLL_SPEED = 1.9;
      const walk = (x - startX) * SCROLL_SPEED;
      slider.scrollLeft = scrollLeft - walk;
    });
}
}
}