class SmoothScroll {
    constructor(linksToSmoothScroll) {
        this.linksToSmoothScroll = $(linksToSmoothScroll);
        this.addSmoothScroll();
    }
    addSmoothScroll() {
        this.linksToSmoothScroll.smoothScroll({
            offset: -100,
            speed: 200,
        });
    }
}