alert("欢迎您");
document.write("<audio src=\"如果有一天我变得很有钱-毛不易·《明日之子 第2期》.mp3\" autoplay=\"autoplay\"></audio>");
  		function time() {
				//获得显示时间的div
			    today= document.getElementById('showtime');
			    var now=new Date()
			    //替换div内容 
			    today.innerHTML = "北京时间： "+now.getFullYear()
			    +"年"+(now.getMonth()+1)+"月"+now.getDate()
			    +"日 "+now.getHours()+"时"+now.getMinutes()
			    +"分"+now.getSeconds()+"秒";
			    //等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
			    setTimeout(time,1000);
 			}