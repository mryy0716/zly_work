var vm=new Vue({
	el:"#shenDengxi",
	data:{
		flag:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:""
		},
		flag1:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:""
		},
		flag2:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:"",
			xian:true
		},
		flag3:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:""
		},
		flag4:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:""
		},
		fn:function(nameCon,ok,lar,ind){
			ind.nameCon=nameCon;
			ind.ok=ok;
			ind.lar=lar;
		},
		yzbtn:true,
		sj:0
	},
	methods:{
		inp(start){
				switch(true){
					case start.name.length==0:
						this.fn("用户名不能为空","errorLabel",true,this.flag);
						break;
					case start.name.length<6||start.name.length>16:
						this.fn("用户名要6-16位","errorLabel",true,this.flag);
						break;
					case !/^(\w|-|[\u4e00-\u9fa5])*$/.test(start.name):
						this.fn("请使用汉字、字母、数字组合","errorLabel",true,this.flag);
						break;
					default:
						this.fn("ok","validLabel",true,this.flag);
				}
		},
		inp1(start){
			switch(true){
					case start.name.length==0:
						this.fn("手机号不能为空","errorLabel",true,this.flag1);
						break;
					case !/^1[34578]\d{9}$/.test(start.name):
						this.fn("手机号格式错误！","errorLabel",true,this.flag1);
						break;
					default:
						this.fn("ok","validLabel",true,this.flag1);
				}
		},
		inp2(start) {
			switch (true) {
				case start.name.length == 0:
					this.fn( "验证码不能为空","errorLabel",true,this.flag2);
					break;
				case this.yzbtn:
					break;
				case start.name.toString() != this.sj:
					this.fn( "验证码错误","errorLabel",true,this.flag2);
					break;
				default:
					this.fn("ok","validLabel",true,this.flag2);
			}
		},
		yz() {
			this.yzbtn = false;
			this.sj = Math.random().toString().substr(2, 4);
		},
		xianshi(){
			this.flag2.lar=true;
			this.flag2.xian=false;
			this.yz();
		},
		inp3(start) {
			switch (true) {
				case start.name.length == 0:
					this.fn("密码不能为空","errorLabel",true,this.flag3);
					break;
				case !/^[0-9a-z]{6,20}$/.test(start.name):
					this.fn("密码只能是6-20位的数字或字母","errorLabel",true,this.flag3);
					break;
				default:
					this.fn("ok","validLabel",true,this.flag3);
			}
		},
		inp4(start) {
			switch (true) {
				case start.name.length == 0:
					this.fn("确认密码不能为空","errorLabel",true,this.flag4);
					break;
				case this.flag3.name != start.name:
					this.fn("两次密码不一样！","errorLabel",true,this.flag4);
					break;
				default:
					this.fn("ok","validLabel",true,this.flag4);
			}
		},
		btn(){
			if(this.flag1.ok&&this.flag.ok&&this.flag2.ok&&this.flag3.ok&&this.flag4.ok=="validLabel"){
				console.log(this.flag1.name,this.flag.name,this.flag2.name,this.flag3.name,this.flag4.name)
			}
		}
	}
})