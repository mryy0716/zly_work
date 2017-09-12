var vm=new Vue({
	el:"#shenDengxi",
	data:{
		pd:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:""
		},
		pd1:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:""
		},
		pd2:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:"",
			xian:true
		},
		pd3:{
			ok:"errorLabel",
			lar:false,
			name:"",
			nameCon:""
		},
		pd4:{
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
						this.fn("用户名不能为空","errorLabel",true,this.pd);
						break;
					case start.name.length<6||start.name.length>16:
						this.fn("用户名要6-16位","errorLabel",true,this.pd);
						break;
					case !/^(\w|-|[\u4e00-\u9fa5])*$/.test(start.name):
						this.fn("请使用汉字、字母、数字组合","errorLabel",true,this.pd);
						break;
					default:
						this.fn("ok","validLabel",true,this.pd);
				}
		},
		inp1(start){
			switch(true){
					case start.name.length==0:
						this.fn("手机号不能为空","errorLabel",true,this.pd1);
						break;
					case !/^1[34578]\d{9}$/.test(start.name):
						this.fn("手机号格式错误！","errorLabel",true,this.pd1);
						break;
					default:
						this.fn("ok","validLabel",true,this.pd1);
				}
		},
		inp2(start) {
			switch (true) {
				case start.name.length == 0:
					this.fn( "验证码不能为空","errorLabel",true,this.pd2);
					break;
				case this.yzbtn:
					break;
				case start.name.toString() != this.sj:
					this.fn( "验证码错误","errorLabel",true,this.pd2);
					break;
				default:
					this.fn("ok","validLabel",true,this.pd2);
			}
		},
		yz() {
			this.yzbtn = false;
			this.sj = Math.random().toString().substr(2, 4);
		},
		xianshi(){
			this.pd2.lar=true;
			this.pd2.xian=false;
			this.yz();
		},
		inp3(start) {
			switch (true) {
				case start.name.length == 0:
					this.fn("密码不能为空","errorLabel",true,this.pd3);
					break;
				case !/^[0-9a-z]{6,20}$/.test(start.name):
					this.fn("密码只能是6-20位的数字或字母","errorLabel",true,this.pd3);
					break;
				default:
					this.fn("ok","validLabel",true,this.pd3);
			}
		},
		inp4(start) {
			switch (true) {
				case start.name.length == 0:
					this.fn("确认密码不能为空","errorLabel",true,this.pd4);
					break;
				case this.pd3.name != start.name:
					this.fn("密码错误！","errorLabel",true,this.pd4);
					break;
				default:
					this.fn("ok","validLabel",true,this.pd4);
			}
		},
		btn(){
			if(this.pd1.ok&&this.pd.ok&&this.pd2.ok&&this.pd3.ok&&this.pd4.ok=="validLabel"){
				console.log(this.pd1.name,this.pd.name,this.pd2.name,this.pd3.name,this.pd4.name)
			}
		}
	}
})