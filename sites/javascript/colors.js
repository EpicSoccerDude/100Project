function myColors(yolo) {
    document.body.style.backgroundColor = 'hsl(' + yolo + ', 100%, 50%)';

    setTimeout(function() {
        myColors(++yolo)
    }, yolo);
}
	myColors(0);
