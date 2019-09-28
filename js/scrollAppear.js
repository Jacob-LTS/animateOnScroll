class ScrollAppear {
    constructor(elementClass) {
        this.elements = document.getElementsByClassName(elementClass);
        this.screenPos = window.innerHeight / 2;
    }

    scrollListener() {
        window.addEventListener('scroll', () => {
            let elementsPos = [];
            for(let i = 0; i<this.elements.length; i++) {
                elementsPos.push(this.elements[i].getBoundingClientRect().top);
                if(elementsPos[i] < this.screenPos) {

                    this.elements[i].classList.add('animateScroll--animate');
                } else {
                    this.elements[i].classList.remove('animateScroll--animate');
                }
            }
        })
    }
}



