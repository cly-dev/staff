(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[23],{397:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(397);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},467:function(e,t,n){"use strict";var a=n(1),r=n(4),c=n(0),o=n(6),i=n.n(o),s=n(36),u=n(107),l=n(23),f=n(75),p=n(46),b=n(77),d=n(53),O=n(61),j=n(60),v=n(148),m=n(13),y=n(42),x=void 0,h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},k=c.forwardRef((function(e,t){var n=Object(s.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),o=Object(r.a)(n,2),u=o[0],k=o[1],g=function(t,n){var a;k(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},w=function(t){var n;g(!1,t),null===(n=e.onConfirm)||void 0===n||n.call(x,t)},C=function(t){var n;g(!1,t),null===(n=e.onCancel)||void 0===n||n.call(x,t)},P=c.useContext(j.b).getPrefixCls,E=e.prefixCls,I=e.placement,S=e.children,T=e.overlayClassName,N=h(e,["prefixCls","placement","children","overlayClassName"]),D=P("popover",E),_=P("popconfirm",E),z=i()(_,T),V=c.createElement(d.a,{componentName:"Popconfirm",defaultLocale:O.a.Popconfirm},(function(t){return function(t,n){var r=e.okButtonProps,o=e.cancelButtonProps,i=e.title,s=e.cancelText,u=e.okText,l=e.okType,f=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},f,c.createElement("div",{className:"".concat(t,"-message-title")},Object(v.a)(i))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(p.a,Object(a.a)({onClick:C,size:"small"},o),s||n.cancelText),c.createElement(p.a,Object(a.a)({onClick:w},Object(b.a)(l),{size:"small"},r),u||n.okText)))}(D,t)})),R=P();return c.createElement(f.a,Object(a.a)({},N,{prefixCls:D,placement:I,onVisibleChange:function(t){e.disabled||g(t)},visible:u,overlay:V,overlayClassName:z,ref:t,transitionName:Object(y.b)(R,"zoom-big",e.transitionName)}),Object(m.a)(S,{onKeyDown:function(e){var t,n;c.isValidElement(S)&&(null===(n=null===S||void 0===S?void 0:(t=S.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===l.a.ESC&&u&&g(!1,e)}(e)}}))}));k.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:c.createElement(u.a,null),disabled:!1},t.a=k},970:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(402),r=n(108),c=n(28),o=n.n(c),i=n(48),s=n(76),u=n(0),l=n(467),f=n(46),p=n(373),b=n(975),d=n(369),O=n(363),j=n(35),v=n(33),m=n(43),y=n(3),x=j.a.getAllApply,h=j.a.applyPass,k=j.a.applyTurn;function g(){var e=Object(u.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],j=new u.useState([]),g=Object(s.a)(j,2),w=g[0],C=g[1],P=new u.useState(0),E=Object(s.a)(P,2),I=E[0],S=E[1],T=new u.useState(""),N=Object(s.a)(T,2),D=N[0],_=N[1],z=new u.useState(""),V=Object(s.a)(z,2),R=V[0],A=V[1],B=Object(u.useRef)(),J=Object(u.useRef)();J.current=R;var K=Object(u.useRef)();B.current=w;var L=[{title:"\u59d3\u540d",dataIndex:"username",key:"username"},{title:"\u6807\u9898",dataIndex:"title",key:"title"},{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u5929\u6570",dataIndex:"num",key:"num"},{title:"\u5185\u5bb9",dataIndex:"desc",key:"desc"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u72b6\u6001",key:"status",render:function(e){var t="";switch(e.status){case"0":t="\u5ba1\u6838\u4e2d";break;case"1":t="\u5df2\u901a\u8fc7";break;case"-1":t="\u5df2\u64a4\u9500";break;case"-2":t="\u5df2\u9a73\u56de"}return t}},{title:"\u64cd\u4f5c",dataIndex:"",key:"x",render:function(e){var t=function(){return Object(y.jsx)(l.a,{cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onConfirm:function(){return t=e,console.log(t),A(t.userId),_(t._id),void c(!0);var t},title:"\u662f\u5426\u9a73\u56de",children:Object(y.jsx)(f.a,{type:"danger",children:"\u9a73\u56de"})})};return"0"===e.status?Object(y.jsxs)(p.b,{children:[Object(y.jsx)(f.a,{type:"primary",onClick:function(){return F(e)},children:"\u901a\u8fc7"}),Object(y.jsx)(t,{})]}):"1"===e.status?Object(y.jsx)(t,{}):"\u65e0\u6cd5\u64cd\u4f5c"}}];function q(){return(q=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K.current.state.value){e.next=7;break}return e.next=3,k(D,K.current.state.value);case 3:"200"===e.sent.code&&(Object(v.a)("\u9a73\u56de\u6210\u529f","success"),G(D,"-2"),c(!1),K.current.state.value="",Object(m.d)({type:"turn",message:"\u60a8\u7684\u4e00\u6761\u7533\u8bf7\u6d88\u606f\u88ab\u9a73\u56de",userId:J.current,applyId:D})),e.next=8;break;case 7:Object(v.a)("\u8bf7\u8f93\u5165\u9a73\u56de\u7406\u7531");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}L.forEach((function(e){e.align="center"}));var F=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t._id);case 2:"200"===(n=e.sent).code?(Object(v.a)("\u7533\u8bf7\u901a\u8fc7","success"),G(t._id,"1"),Object(m.d)({type:"pass",message:"\u60a8\u7684\u4e00\u6761\u7533\u8bf7\u6d88\u606f\u901a\u8fc7",userId:t.userId,applyId:D})):Object(v.a)(n.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t){w.find((function(t){return t._id===e})).status=t;for(var n=0,a=0;a<w.length;a++)w[a]._id===e&&(n=a);var c=Object(r.a)(w);c[n].status=t,C(c)};new u.useEffect((function(){H(1);var e=Object(m.l)((function(e){e&&setTimeout((function(){window.location.reload()}),2e3)}));return function(){e.off()}}),[B]);var H=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,x(t);case 3:r=e.sent,console.log(r),r.data&&(r.data.forEach((function(e){e.key=e._id,n.push(Object(a.a)(Object(a.a)({},e),e.staff))})),C(n),S(r.pageSize));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("section",{children:[Object(y.jsx)(b.a,{pagination:{total:I,pageSize:10,onChange:function(e){H(e)}},columns:L,dataSource:w}),Object(y.jsx)(d.a,{title:"\u8bf7\u8f93\u5165\u9a73\u56de\u539f\u56e0",visible:n,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onCancel:function(){return c(!1)},onOk:function(){return q.apply(this,arguments)},children:Object(y.jsx)(O.a,{placeholder:"\u8bf7\u8f93\u5165\u539f\u56e0",ref:K})})]})}}}]);
//# sourceMappingURL=23.c8306e93.chunk.js.map