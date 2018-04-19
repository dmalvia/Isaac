function equalHeight(group) {
    tallest = 0;
    group.each(function () {
        console.log(this.offsetHeight)
        thisHeight = this.offsetHeight; // Change to outerHeight for DPE
        if (thisHeight > tallest) {
            tallest = thisHeight;
            console.log('thisHeight ' + thisHeight)
        }
    });
    group.height(tallest);
    console.log('tallest ' + tallest)
}

$(window).on("load resize", function () {
    equalHeight($(".hero-blocks__content"));
});