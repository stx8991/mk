//公告
$(function(){
	var scrollDiv = $("#gonggao"),
		$ul = scrollDiv.find("ul"),
		$li = scrollDiv.find("li"),
		$length = $li.length,
		$liHeight = $li.height(),
		num = 0;
 
	if(scrollDiv.length == 0){
		return;
	} 
	if($length > 1){
		$ul.append($li.eq(0).clone());
		setInterval(
			function(){
				num++;
				$ul.addClass("animate").css("-webkit-transform","translateY(-"+ $liHeight*(num) +"px)");
				setTimeout(
					function(){
						if(num == $length){
							$ul.removeClass("animate").css("-webkit-transform","translateY(0)");
							num = 0;
						}
					},300);
			},3000);
	}
});
