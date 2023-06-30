class MyWaypoints {
    constructor(linkToApplyWaypoint, headerLinks, activeClassItem, activeClass) {
        this.linkToApplyWaypoint = $(linkToApplyWaypoint)[0];
        this.activeClassItem = $(activeClassItem);
        this.activeClass = activeClass;
        this.headerLinks = $(headerLinks);
        this.addWaypoints();
    }
    addWaypoints() {
        const that = this;
        
        //WHEN WE ARE SCROLLING DOWN
        new Waypoint({
            element: this.linkToApplyWaypoint,
            handler: function(direction) {
                if(direction == "down") {
                    that.headerLinks.removeClass(that.activeClass);
                    that.activeClassItem.addClass(that.activeClass);
                }
            },
            offset: '25%',
        });

        // WHEN WE ARE SCROLLING UP
        new Waypoint({
            element: this.linkToApplyWaypoint,
            handler: function(direction) {
                if(direction == "up") {
                    that.headerLinks.removeClass(that.activeClass);
                    that.activeClassItem.addClass(that.activeClass);
                }
            },
            offset: '-45%',
        });
    }
}