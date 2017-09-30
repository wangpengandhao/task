window.onload=function(){
	let bannerlast3 = document.getElementsByClassName('banner-last3')[0];
	let list = bannerlast3.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	let bannerlast4=document.getElementsByClassName('banner-last4')[0];
	let bannerlast4li=bannerlast4.getElementsByTagName('li');
	let bannerimage=document.getElementsByClassName('bannerimage');
		// banner轮播按钮
		// 方法一
		// for(let i=0;i<6;i++){
		// 	bannerlast4li[i].onmouseover=function(){
		// 		// 所有消失  当前对应的显示
		// 		for(let i=0;i<6;i++){
		// 			bannerimage[i].style.display='none';
		// 			bannerlast4li[i].style.background='#fff';
		// 		}
		// 		bannerimage[i].style.display='block';
		// 		bannerlast4li[i].style.background='#C5C5C5';
				
		// 	}
		// }
		// 方法二   先给一个默认值，要替换的图片显示，被替换的图片隐藏，把当前的下标给
		// 			了被替换的的下标
		// let now=0;
		// for(let i=0;i<6;i++){
		// 	bannerlast4li[i].onclick=function(){
		// 		bannerimage[now].style.display='none';
		// 		bannerimage[i].style.display='block';
		// 		now=i;
		// 	}
		// }
		// 方法三   自调用(闭包)
		// 把所执行的事件返回来，再去调用点击事件
		let now =0;
		for(var i=0;i<6;i++){
			bannerlast4li[i].onclick=(function(i){
				return function(){
					bannerimage[now].style.display='none';
					bannerlast4li[now].style.background='#C5C5C5';
		 			bannerimage[i].style.display='block';
		 			bannerlast4li[i].style.background='#fff';
		 			now=i;
				}
			})(i)
		}
		// banner左侧选项卡
		for(let i=0;i<list.length;i++){
			list[i].onmouseover=function(){
				item[i].style.display='block';
			}
			list[i].onmouseout=function(){
				item[i].style.display='none';
			}
		}

console.log()
}
