(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[34],{911:function(e,t,a){},959:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a.n(r),s=a(48),c=a(49),i=a(50),l=a(52),m=a(51),u=a(0),o=(a(911),a(33)),d=a(35),h=a(521),j=a.n(h),f=a(363),b=a(368),p=a(943),O=a(976),x=a(980),g=a(46),y=a(3),v=d.b.modicOrder,k=d.b.getOrderDetail,w=f.a.TextArea,T=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={timer:"",initData:{}},r.handleRef=Object(s.a)(n.a.mark((function e(){var t,a,s,c,i,l,m,u,d,h;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.a)("\u6b63\u5728\u63d0\u4ea4\u4e2d","loading"),a=r.formRef.getFieldValue(),s=a.name,c=a.num,i=a.price,l=a.type,m=a.mark,u=a._id,d=a.createTime,e.next=4,v({id:u,name:s,num:c,price:i,type:l,mark:m,createTime:j()(d).format("YYYY-MM-DD")});case 4:h=e.sent,t.destroy(),"200"===h.code?(Object(o.a)("\u4fee\u6539\u6210\u529f","success"),r.props.history.push("/index/watchOrder")):Object(o.a)(h.msg);case 7:case"end":return e.stop()}}),e)}))),r.handleTime=function(e,t){r.setState({timer:t})},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;k(this.props.match.params.orderId).then((function(t){t.data.createTime=j()(t.data.createTime),e.formRef.setFieldsValue(t.data)}))}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("section",{className:"changeOrder-container",children:[Object(y.jsx)("section",{className:"changeOrder-header",children:"\u4fee\u6539\u8ba2\u5355"}),Object(y.jsxs)("section",{className:"changeOrder-mainer",children:[Object(y.jsxs)(b.a,{onFinish:this.handleRef,ref:function(t){return e.formRef=t},labelCol:{span:2},wrapperCol:{span:13},layout:"horizontal",size:"large",children:[Object(y.jsx)(b.a.Item,{label:"\u5546\u54c1\u540d",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5546\u54c1\u540d"}],children:Object(y.jsx)(f.a,{ref:function(t){return e.name=t}})}),Object(y.jsx)(b.a.Item,{label:"\u7c7b\u522b",name:"type",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7c7b\u522b"}],children:Object(y.jsx)(p.a,{value:this.state.initData.type,placeholder:"\u8bf7\u8f93\u5165\u7c7b\u522b",ref:function(t){return e.type=t}})}),Object(y.jsx)(b.a.Item,{label:"\u65f6\u95f4",name:"createTime",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65f6\u95f4"}],children:Object(y.jsx)(O.a,{placeholder:"\u8bf7\u8f93\u5165\u65f6\u95f4",onChange:this.handleTime,ref:function(t){return e.timer=t}})}),Object(y.jsx)(b.a.Item,{label:"\u6570\u91cf",name:"num",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6570\u91cf"}],children:Object(y.jsx)(x.a,{min:1,ref:function(t){return e.num=t}})}),Object(y.jsx)(b.a.Item,{label:"\u4ef7\u683c",name:"price",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ef7\u683c"}],children:Object(y.jsx)(x.a,{min:1,ref:function(t){return e.price=t}})}),Object(y.jsx)(b.a.Item,{label:"\u5907\u6ce8",name:"mark",children:Object(y.jsx)(w,{rows:8,showCount:!0,maxLength:100,className:"textArea-input"})})]}),Object(y.jsx)("section",{className:"refs-container",children:Object(y.jsx)(g.a,{size:"large",type:"primary",className:"refs-btn",onClick:function(){return e.formRef.submit()},children:"\u63d0\u4ea4"})})]})]})}}]),a}(u.Component);t.default=T}}]);
//# sourceMappingURL=34.846609a7.chunk.js.map