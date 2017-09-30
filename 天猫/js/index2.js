window.onload=function(){
	let images=$('.bannerimage');
	let bannerlast4 = $('.banner-last4')[0];
	let list = bannerlast4.getElementsByTagName('li');
	let bannerlast = $('.banner-last')[0];
	let bannerlast3 = document.getElementsByClassName('banner-last3')[0];
	let lists = bannerlast3.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');

	let t;
	t=setInterval(move,3000);
	let now = 0;
	let next = 0;
	list[now].style.background='#fff';
	let imgW=parseInt(getComputedStyle(images[0],null).width);
	let flag=true;
	function move(){
		next++;
		if(next==images.length){
			next=0
		}
		list[now].style.background='#C5C5C5';
		list[next].style.background='#fff';
		images[next].style.left=`${imgW}px`
		animate(images[now],{left:-imgW});
		animate(images[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
	function movel(){
		next--;
		if(next<0){
			next=images.length-1;
		}
		list[now].style.background='#C5C5C5';
		list[next].style.background='#fff';
		images[next].style.left=`${-imgW}px`;
		animate(images[now],{left:imgW});
		animate(images[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
	bannerlast.onmouseover=function(){
		clearInterval(t);
	}
	bannerlast.onmouseout=function(){
		t= setInterval(move,3000);
	}
	for(let i=0;i<list.length;i++){
		list[i].onclick=function(){
			if(now==i){
				return;
			}
			list[now].style.background='#C5C5C5';
			list[i].style.background='#fff';
			images[i].style.left=`${imgW}px`
			animate(images[now],{left:-imgW});
			animate(images[i],{left:0});
			now=next=i;
		}
	}
	for(let i=0;i<lists.length;i++){
		lists[i].onmouseover=function(){
			item[i].style.display='block';
		}
		lists[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
	//收藏夹
	let shoucang=$('.header-right')[0];
	let shoucangjia=shoucang.getElementsByTagName('li');
	let itemh=$('.itemh')[0];
	let itemh1=itemh.getElementsByTagName('li');
	console.log(itemh1)
	shoucangjia[0].onmouseover=function(){
		shoucangjia[0].style.background='#fff';
		itemh1[0].style.display='block';
	}
	shoucangjia[0].onmouseout=function(){
		shoucangjia[0].style.background='#F2F2F2';
		itemh1[0].style.display='none';
	}
	shoucangjia[3].onmouseover=function(){
		shoucangjia[3].style.background='#fff';
		itemh1[1].style.display='block';
	}
	shoucangjia[3].onmouseout=function(){
		shoucangjia[3].style.background='#F2F2F2';
		itemh1[1].style.display='none';
	}
	shoucangjia[6].onmouseover=function(){
		shoucangjia[6].style.background='#fff';
		itemh1[3].style.display='block';
	}
	shoucangjia[6].onmouseout=function(){
		shoucangjia[6].style.background='#F2F2F2';
		itemh1[3].style.display='none';
	}
	shoucangjia[7].onmouseover=function(){
		shoucangjia[7].style.background='#fff';
		itemh1[4].style.display='block';
	}
	shoucangjia[7].onmouseout=function(){
		shoucangjia[7].style.background='#F2F2F2';
		itemh1[4].style.display='none';
	}
	// 左侧定位
	let asid=document.querySelector('.aside');
	let aside=document.querySelectorAll('.aside>botton')
	let ch=innerHeight;
	let floor=document.querySelectorAll('.floor');
	let asidetop=document.querySelector('.aside-top')
	console.log(asid);
	let floorAll=[];
	let color=['#ff6700','pink','skyblue','yellow','green','#000','blue','#000']
	// let flag = true;
	floor.forEach(element=>{
		floorAll.push(element.offsetTop);
	});
	aside.forEach((element,index)=>{
		element.onclick=function(){
			for(let i=0;i<aside.length;i++){
				aside[i].style.background='none';
			}
			element.style.background=color[index];
			flag=false;
			animate(document.body,{scrollTop:floorAll[index]},function(){
				flag=true;
			})
		}
	})

	let flag1=true;
	window.onscroll=function(){
		if(!flag){
			return;
		}
		let scrolltop=document.body.scrollTop;
		if(scrolltop>=800){
			if(flag1){
				flag1=!flag1;
				animate(asidetop,{top:0});
				animate(asid,{left:0});
			}
		}else{
			if(!flag1){
				flag1=!flag1;
				animate(asidetop,{top:-50});
				animate(asid,{left:-38});
			}
		}
		floorAll.forEach((value,index)=>{
			if(scrolltop+ch>=value+100){
				for(let i=0;i<aside.length;i++){
					aside[i].style.background='none';
				}
				aside[index].style.background=color[index];			
				// let  imgs=floor[index].getElementsByTagName('img');
				// for(let i=0;i<imgs.length;i++){
				// 	imgs[i].src=imgs[i].getAttribute('imgPath');

				// }
			}
		})
	}
	let youdingwei=document.querySelectorAll('.youdingwei > li');
	let itemy=document.querySelectorAll('.itemy > div');
	console.log(itemy)
	for(let i=2;i<8;i++){
		youdingwei[i].onmouseover=function(){
				itemy[i-2].style.display='block';
				itemy[i-2].style.transform=`translateX(${20}px)`;
		}
		youdingwei[i].onmouseout=function(){
				itemy[i-2].style.display='none';
				itemy[i-2].style.transformX=`translateX(${-20}px)`
		}
	}

}
