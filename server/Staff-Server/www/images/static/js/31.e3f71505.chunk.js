(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[31],{891:function(e,s,a){},928:function(e,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return x}));var n=a(33),r=a.n(n),t=a(63),c=a(46),i=a(47),o=a(49),d=a(48),l=a(0),u=(a(891),a(360)),h=a(357),j=a(45),b=a(40),m=a(32),p=a(24),f=a(92),O=a(3),w=b.b.ModicPsd,x=function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=s.call.apply(s,[this].concat(i))).handleFinish=function(){var s=Object(t.a)(r.a.mark((function s(a){var n;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,w(a);case 2:"200"===(n=s.sent).code?(Object(m.a)("\u4fee\u6539\u6210\u529f,\u8bf7\u91cd\u65b0\u767b\u5f55","success"),e.props.history.push({pathname:"/",state:{userId:p.a.getState().userId}}),p.a.dispatch(Object(f.a)())):Object(m.a)(n.msg);case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.handleRefs=function(){e.passwordForm.submit()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("section",{className:"change-container",children:[Object(O.jsx)("section",{className:"change-header",children:"\u4fee\u6539\u5bc6\u7801"}),Object(O.jsxs)("section",{className:"change-mainer",children:[Object(O.jsxs)(u.a,{ref:function(s){return e.passwordForm=s},size:"large",labelCol:{span:8},wrapperCol:{span:8},name:"passwordForm",onFinish:this.handleFinish,children:[Object(O.jsx)(u.a.Item,{name:"oldPsd",label:"\u65e7\u5bc6\u7801:",hasFeedback:!0,rules:[{required:!0,message:"\u65e7\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}],children:Object(O.jsx)(h.a.Password,{})}),Object(O.jsx)(u.a.Item,{name:"newPsd",label:"\u65b0\u5bc6\u7801",hasFeedback:!0,rules:[{required:!0,message:"\u65b0\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},{pattern:/^[a-zA-Z]\w{5,11}$/,message:"\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u957f\u5ea6\u57286~12\u4e4b\u95f4\uff0c\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf"}],children:Object(O.jsx)(h.a.Password,{})}),Object(O.jsx)(u.a.Item,{name:"comfirmPsd",label:"\u786e\u8ba4\u5bc6\u7801",dependencies:["newPsd"],hasFeedback:!0,rules:[{required:!0,message:"\u786e\u8ba4\u5bc6\u7801\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},function(e){var s=e.getFieldValue;return{validator:function(e,a){return a&&s("newPsd")!==a?Promise.reject(new Error("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4")):Promise.resolve()}}}],children:Object(O.jsx)(h.a.Password,{})})]}),Object(O.jsx)("section",{className:"refs-container",children:Object(O.jsx)(j.a,{size:"large",type:"primary",className:"refs-btn",onClick:this.handleRefs,children:"\u63d0\u4ea4"})})]})]})}}]),a}(l.Component)}}]);
//# sourceMappingURL=31.e3f71505.chunk.js.map