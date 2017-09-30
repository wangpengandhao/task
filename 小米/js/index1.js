window.onload=function(){
	let images=$('.images');
	let dian3 =$('.dian3');
	let banner=$('.banner')[0];
	let bannerleft=$('.bannerleft');
	let items=$('.items');
	let banner3=$('.banner3')[0];
	let banner4=$('.banner4')[0];
	let t;
	t=setInterval(move,3000);
	let now = 0;
	let next = 0;
	dian3[now].style.background='#fff';
	let imgW=parseInt(getComputedStyle(images[0],null).width);
	
	let flag=true;
	banner3.onclick=function(){
		if(!flag){
			return
		}
		movel()
		flag=false;
	}
	banner4.onclick=function(){
		if(!flag){
			return
		}
		move()
		flag=false;
	}
	function move(){
		next++;
		if(next==images.length){
			next=0
		}
		dian3[now].style.background='#17171C';
		dian3[next].style.background='#fff';
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
		dian3[now].style.background='#17171C';
		dian3[next].style.background='#fff';
		images[next].style.left=`${-imgW}px`;
		animate(images[now],{left:imgW});
		animate(images[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t= setInterval(move,3000);
	}
	for(let i=0;i<dian3.length;i++){
		dian3[i].onclick=function(){
			if(now==i){
				return;
			}
			dian3[now].style.background='#17171C';
			dian3[i].style.background='#fff';
			images[i].style.left=`${imgW}px`
			animate(images[now],{left:-imgW});
			animate(images[i],{left:0});
			now=next=i;
		}
	}
	for(let i=0;i<bannerleft.length;i++){
		bannerleft[i].onmouseover=function(){
			items[i].style.display='block';
		}
		bannerleft[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}
	// 购物车
	let gouwuche=document.querySelector('.head-right1>.icon-gouwuche');
	let gouwuche1=$('.gouwuche1')[0];
	gouwuche.onmouseover=function(){
		gouwuche1.style.display='block';
	}
	gouwuche.onmouseout=function(){
		gouwuche1.style.display='none';
	}
	console.log(gouwuche)

	// 导航下拉
	// let navcente=$('.nav-center')[0];
	// let navcenter=navcente.getElementsByTagName('li');
	let navcenter=document.querySelectorAll('.nav-center > li');
	let navxial=$('.nav-xiala')[0];
	let navxiala=navxial.getElementsByTagName('li');
	console.log(navcenter);
	for(let i=0;i<7;i++){
		navcenter[i].onmouseover=function(){
			navxiala[i].style.display='block';
		}
		navcenter[i].onmouseout=function(){
			navxiala[i].style.display='none';
		}
	}
	console.log(navxiala)
	// 小米明星单
	let xialunbo1=$('.xia-lunbo1')[0];
	let iconzuo=$('.iconfont icon-zuo')[0];
	let iconyou=$('.iconfont icon-you')[10];
	let danpin1=$('.danpin1')[0];
	let xialunbo=parseInt(getComputedStyle(xialunbo1,null).width);
	let xl=xialunbo-1226;
	console.log(xl);
	

	// let t1=setInterval(move1,60);
	// let t2=setInterval(move2, 4000);
	// function move1(){
	
	// if(xialunbo1.style.left=0){
	// 	xialunbo1.style.transform=`translateX(-1240)`;

	// }
	// if(xialunbo1.style.left=`${-1240}px`){
	// 	xialunbo1.style.transform=`translateX(-0)`;
	// 	}
	// }
	// function move2(){
		
	// 	animate(xialunbo1,{left:-xl});
	// 	// animate(xialunbo1,{left:0});
	// }
	// function move1(){
		
	// 	// animate(xialunbo1,{left:-xl});
	// 	animate(xialunbo1,{left:0});
	// }
	// if(xialunbo1.style.left=`-1240px`){
	// 	move1()	
	// 	}
	// if(xialunbo1.style.left=0){
	// 	move2()
	// }	


	let i=0;
	iconyou.onclick=function(){
		if(i==1){
			return;
		}
		i++;
		xialunbo1.style.left=`${-1240*i}px`;
	}
	iconzuo.onclick=function(){
		if(i==0){
			return;
		}
		i--;
		xialunbo1.style.left=0;
	}

	// iconyou.onclick=function(){
	// 	xialunbo1.style.left=`-1240px`
	// }
	// iconzuo.onclick=function(){
	// 	xialunbo1.style.left=0;
	// }
	// danpin1.onmouseover=function(){
	// 	clearInterval(t1);
	// 	// clearInterval(t2);
	// }
	// danpin1.onmouseout=function(){
	// 	t1= setInterval(move1,60);
	// 	// t2= setInterval(move2,4000);
	// }

	// 家电模块
	
	let jia5=$('.jia5');
	let jiadian3=$('.jiadian3');
	let now1=0;
	let next1=0;
	for(let i=0;i<jia5.length;i++){
		jiadian3[i].onmouseover=function(){
			if(now1==i){
				return;
			}
			jiadian3[i].style.color='#ff6700';
			jiadian3[i].style.borderBottom='#ff6700';
			jiadian3[now1].style.color='#424242';
			jia5[now1].style.display='none';
			jia5[i].style.display='block';
			now1=i;
		}
	}
	// 智能模块
	let zhiright=$('.zhiright')[0];
	let zhineng=zhiright.getElementsByTagName('ul');
	let zhi=$('.zhineng2')[0];
	let zhineng2=zhi.getElementsByTagName('li');
	console.log(zhineng)
	for(let i=0;i<5;i++){
		zhineng2[i].onmouseover=function(){
			if(now1==i){
				return;
			}
			zhineng[now1].style.display='none';
			zhineng[i].style.display='block';
			now1=i;
		}
	}
	// 搭配开始
	let dapei=$('.dapei')[0];
	let dapei1=dapei.getElementsByTagName('li');
	let dapei2=$('.dapeiright')[0];
	let dapei3=dapei2.getElementsByTagName('ul');
	console.log(dapei3)
	for(let i=0;i<5;i++){
		dapei1[i].onmouseover=function(){
			if(now1==i){
				return;
			}
			dapei3[now1].style.display='none';
			dapei3[i].style.display='block';
			now1=i
		}
	}
	// 为你推荐
	let s=0;
	let iconzuo1=$('.iconfont icon-zuo')[1];
	let iconyou1=$('.iconfont icon-you')[11];
	let tui2=document.querySelector('.tui2');
	iconyou1.onclick=function(){
		if(s==3){
			return;
		}
		s++;
		tui2.style.left=`${-1240*s}px`;
		
	}
	iconzuo1.onclick=function(){
		if(s==0){
			return;
		}
		s--;
		tui2.style.left=`${-1240*s}px`;
	}
	console.log(tui2);
	// 内容开始
	let neileft=document.querySelector('.nei-left');
	let neiright=document.querySelector('.nei-right');
	let neirongdian1=document.querySelectorAll('.neirongdian > div');
	let neirongleft=document.querySelectorAll('.neirong-left');
	console.log(neirongleft);
	let flagn=true;
	let nown=0;
	let nextn=0;
	neiright.onclick=function(){
		if(!flagn){
			return 
		}
		moveto();
		flagn=false;
	}
	neileft.onclick=function(){
		if(!flagn){
			return 
		}
		moveou();
		flagn=false;
	}
	function moveto(){
		nextn++
		if(nextn==3){
			nextn=0;
			return
		}
		neirongdian1[nown].style.background='#B0B0B0';
		neirongdian1[nextn].style.background='#ff6700';
		animate(neirongleft[nown],{left:-296})
		animate(neirongleft[nextn],{left:0},function(){
			flagn=true;
		});
		nown=nextn;
	}
	function moveou(){
		nextn--
		if(nextn<0){
			nextn=2;
			return
		}
		neirongdian1[nown].style.background='#B0B0B0';
		neirongdian1[nextn].style.background='#ff6700';
		animate(neirongleft[nown],{left:296})
		animate(neirongleft[nextn],{left:0},function(){
			flagn=true;
		});
		nown=nextn;
	}
}