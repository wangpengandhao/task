window.onload=function(){
	let images=$('.bannerimage');
	let bannerlast4 = $('.banner-last4')[0];
	let list = bannerlast4.getElementsByTagName('li');
	let bannerlast = $('.banner-last')[0];
	let bannerlast3 = document.getElementsByClassName('banner-last3')[0];
	let lists = bannerlast3.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	console.log(list)

	let num=0;
	let t
	t= setInterval(move,3000);
	function move(){
		num++;
		if(num==images.length){
			num=0;
		}
		for(let i=0;i<images.length;i++){
			// images[i].style.display='none';
			animate(images[i],{opacity:0});
			list[i].style.background='#C5C5C5';
		}
		// images[num].style.display='block';
		animate(images[num],{opacity:1});
		list[num].style.background='#fff';
	}
	for(let i=0;i<6;i++){
		list[i].onclick=function(){
			clearInterval(t);
			// 所有消失  当前对应的显示
			for(let i=0;i<6;i++){
				// images[i].style.display='none';
				animate(images[i],{opacity:0});
				list[i].style.background='#fff';
			}
		// images[i].style.display='block';
		animate(images[i],{opacity:1});
		list[i].style.background='#C5C5C5';
		num=i		
		}
	}
	bannerlast.onmouseover=function(){
		clearInterval(t);
	}
	bannerlast.onmouseout=function(){
		t= setInterval(move,3000);
	}
	for(let i=0;i<lists.length;i++){
		lists[i].onmouseover=function(){
			item[i].style.display='block';
		}
		lists[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
}
