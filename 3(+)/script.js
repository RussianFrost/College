//function zoomIn {
	//fontWeight:"bolder"
//}
 
 $('element').click(func(){
    var $that = $(this);
    $that.animate({
        width: $that.width() * 2,
        height: $that.height() * 2
    });
});