(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[26],{899:function(e,t,a){},937:function(e,t,a){"use strict";a.r(t);var n=a(410),s=a(110),r=a(33),c=a.n(r),i=a(63),o=a(46),l=a(47),u=a(49),h=a(48),d=a(0),b=a(953),f=a(959),j=a(948),x=a(963),O=a(964),p=a(454),g=a(459),m=a(938),y=a(950),v=a(957),k=a(952),w=a(955),Y=a(951),C=a(960),S=(a(899),a(40)),D=a(32),N=a(3),M=S.a.getOrderCountByMonth,B=S.a.getOrderCount,A=S.a.getOrderByEvery,I=[],L=(new Date).getFullYear(),z=(new Date).getMonth()+1,E=[{title:"\u59d3\u540d",dataIndex:"username",key:"username",align:"center"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",align:"center"},{title:"\u5e74\u5ea6\u603b\u9500\u552e\u989d",dataIndex:"orderSum",key:"orderSum",align:"center"}],J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handlegetOrderByMonth=Object(i.a)(c.a.mark((function e(){var t,a,n,s,r,i,o,l,u,h,d,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],n=1;n<=12;n++)I.push(n+"\u6708");D.b.xAxis.data=I,s=2018;case 4:if(!(s<L)){e.next=17;break}r=1;case 6:if(!(r<=12)){e.next=14;break}return e.next=9,M({year:s,month:r});case 9:i=e.sent,a.push(i.data?i.data.Count:0);case 11:r++,e.next=6;break;case 14:s++,e.next=4;break;case 17:o=1;case 18:if(!(o<=z)){e.next=26;break}return e.next=21,M({year:L,month:o});case 21:l=e.sent,a.push(l.data?l.data.Count:0);case 23:o++,e.next=18;break;case 26:for(u=0,h=2018;h<=L;h++)D.b.legend.data.push(""+h),D.b.series.push({name:""+h,type:"line",stack:"\u603b\u91cf",data:a.slice(12*u,12*(u+1))}),u++;p.a([m.a,y.a,v.a,k.a,w.a,Y.a,C.a]),(d=null===(t=document)||void 0===t?void 0:t.querySelector(".echarts-container"))&&(b=g.b(d),D.b&&b.setOption(D.b));case 31:case"end":return e.stop()}}),e)}))),r.handlegetOrderList=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(s.a)(r.state.listData),e.next=3,A(L,t);case 3:(i=e.sent).data&&(i.data.forEach((function(e){a.push(Object(n.a)(Object(n.a)(Object(n.a)({},e.user),e),{},{key:e._id}))})),console.log(a),r.setState({listData:a}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handlegetCount=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([B(L),B(L-1)]);case 2:(t=e.sent)&&r.setState({newYear:t[0].data.Count?t[0].data.Count:0,lastYear:t[1].data.Count?t[1].data.Count:0});case 4:case"end":return e.stop()}}),e)}))),r.state={series:[],lastYear:0,newYear:0,listData:[]},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.handlegetOrderByMonth(),this.handlegetCount(),this.handlegetOrderList(1)}},{key:"componentWillUnmount",value:function(){D.b.series.length=0}},{key:"render",value:function(){var e=this;return console.log("\u52a0\u8f7d\u5b8c\u6210"),Object(N.jsxs)("section",{className:"performance-container",children:[Object(N.jsx)("section",{className:"echarts-container"}),Object(N.jsxs)("section",{className:"info-container",children:[Object(N.jsxs)("section",{className:"data-info",children:[Object(N.jsxs)("section",{className:"data-box",children:[Object(N.jsx)(b.a,{style:{height:"300",fontSize:20,textAlign:"center"},title:"2021\u5e74\u603b\u9500\u552e\u989d",value:this.state.newYear}),Object(N.jsx)(b.a,{style:{height:"300",textAlign:"center"},title:"2020\u5e74\u603b\u9500\u552e\u989d",value:this.state.lastYear})]}),Object(N.jsx)("section",{className:"statistic-box",children:Object(N.jsx)(f.a,{style:{height:"100%"},children:Object(N.jsx)(b.a,{title:"\u540c\u6bd4",value:(this.state.newYear-this.state.lastYear)/this.state.newYear*100,precision:2,valueStyle:{color:this.state.newYear-this.state.lastYear>0?"#cf1322":"#3f8600"},prefix:this.state.newYear-this.state.lastYear>0?Object(N.jsx)(x.a,{}):Object(N.jsx)(O.a,{}),suffix:"%"})})})]}),Object(N.jsx)("section",{className:"user-info",children:Object(N.jsx)(j.a,{style:{maxHeight:50},pagination:{pageSize:6,onChange:function(t){e.handlegetOrderList(t)}},columns:E,dataSource:this.state.listData})})]})]})}}]),a}(d.Component);t.default=J}}]);
//# sourceMappingURL=26.e8762f6b.chunk.js.map