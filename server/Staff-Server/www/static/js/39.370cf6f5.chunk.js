(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[39],{406:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),r=n(2),c=n(4),i=n(0),o=n(6),l=n.n(o),s=n(33),u=n(59);function d(e){var t=e.className,n=e.direction,c=e.index,o=e.marginDirection,l=e.children,s=e.split,u=e.wrap,d=i.useContext(m),p=d.horizontalSize,f=d.verticalSize,b=d.latestIndex,j={};return d.supportFlexGap||("vertical"===n?c<b&&(j={marginBottom:p/(s?2:1)}):j=Object(a.a)(Object(a.a)({},c<b&&Object(r.a)({},o,p/(s?2:1))),u&&{paddingBottom:f})),null===l||void 0===l?null:i.createElement(i.Fragment,null,i.createElement("div",{className:t,style:j},l),c<b&&s&&i.createElement("span",{className:"".concat(t,"-split"),style:j},s))}var p=n(166),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),b={small:8,middle:16,large:24};t.b=function(e){var t,n=i.useContext(u.b),o=n.getPrefixCls,j=n.space,O=n.direction,v=e.size,x=void 0===v?(null===j||void 0===j?void 0:j.size)||"small":v,y=e.align,h=e.className,g=e.children,k=e.direction,w=void 0===k?"horizontal":k,C=e.prefixCls,E=e.split,I=e.style,z=e.wrap,S=void 0!==z&&z,N=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),P=Object(p.a)(),T=i.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(e){return function(e){return"string"===typeof e?b[e]:e||0}(e)}))}),[x]),B=Object(c.a)(T,2),D=B[0],F=B[1],G=Object(s.a)(g,{keepEmpty:!0}),R=void 0===y&&"horizontal"===w?"center":y,V=o("space",C),A=l()(V,"".concat(V,"-").concat(w),(t={},Object(r.a)(t,"".concat(V,"-rtl"),"rtl"===O),Object(r.a)(t,"".concat(V,"-align-").concat(R),R),t),h),J="".concat(V,"-item"),K="rtl"===O?"marginLeft":"marginRight",L=0,M=G.map((function(e,t){return null!==e&&void 0!==e&&(L=t),i.createElement(d,{className:J,key:"".concat(J,"-").concat(t),direction:w,index:t,marginDirection:K,split:E,wrap:S},e)})),W=i.useMemo((function(){return{horizontalSize:D,verticalSize:F,latestIndex:L,supportFlexGap:P}}),[D,F,L,P]);if(0===G.length)return null;var _={};return S&&(_.flexWrap="wrap",P||(_.marginBottom=-F)),P&&(_.columnGap=D,_.rowGap=F),i.createElement("div",Object(a.a)({className:A,style:Object(a.a)(Object(a.a)({},_),I)},N),i.createElement(m.Provider,{value:W},M))}},467:function(e,t,n){"use strict";var a=n(1),r=n(4),c=n(0),i=n(6),o=n.n(i),l=n(35),s=n(107),u=n(22),d=n(75),p=n(46),f=n(77),m=n(52),b=n(60),j=n(59),O=n(147),v=n(13),x=n(42),y=void 0,h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=c.forwardRef((function(e,t){var n=Object(l.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),i=Object(r.a)(n,2),s=i[0],g=i[1],k=function(t,n){var a;g(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},w=function(t){var n;k(!1,t),null===(n=e.onConfirm)||void 0===n||n.call(y,t)},C=function(t){var n;k(!1,t),null===(n=e.onCancel)||void 0===n||n.call(y,t)},E=c.useContext(j.b).getPrefixCls,I=e.prefixCls,z=e.placement,S=e.children,N=e.overlayClassName,P=h(e,["prefixCls","placement","children","overlayClassName"]),T=E("popover",I),B=E("popconfirm",I),D=o()(B,N),F=c.createElement(m.a,{componentName:"Popconfirm",defaultLocale:b.a.Popconfirm},(function(t){return function(t,n){var r=e.okButtonProps,i=e.cancelButtonProps,o=e.title,l=e.cancelText,s=e.okText,u=e.okType,d=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},d,c.createElement("div",{className:"".concat(t,"-message-title")},Object(O.a)(o))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(p.a,Object(a.a)({onClick:C,size:"small"},i),l||n.cancelText),c.createElement(p.a,Object(a.a)({onClick:w},Object(f.a)(u),{size:"small"},r),s||n.okText)))}(T,t)})),G=E();return c.createElement(d.a,Object(a.a)({},P,{prefixCls:T,placement:z,onVisibleChange:function(t){e.disabled||k(t)},visible:s,overlay:F,overlayClassName:D,ref:t,transitionName:Object(x.b)(G,"zoom-big",e.transitionName)}),Object(v.a)(S,{onKeyDown:function(e){var t,n;c.isValidElement(S)&&(null===(n=null===S||void 0===S?void 0:(t=S.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===u.a.ESC&&s&&k(!1,e)}(e)}}))}));g.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:c.createElement(s.a,null),disabled:!1},t.a=g},974:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(108),r=n(34),c=n.n(r),i=n(64),o=n(76),l=n(0),s=n(406),u=n(46),d=n(467),p=n(975),f=n(18),m=n(41),b=n(31),j=n(24),O=n(3),v=m.a.findAllAminInfo,x=m.a.handleFreezeStatus,y=m.a.handleRecoverStatus,h=m.a.handleDeleteStatus,g=m.a.handleReset;function k(){var e=[{title:"\u8d26\u53f7",dataIndex:"adminId",key:"userId"},{title:"\u59d3\u540d",dataIndex:"name",key:"username"},{title:"\u7535\u8bdd",dataIndex:"phone",key:"phone"},{title:"\u804c\u4f4d",dataIndex:"position",key:"address"},{title:"\u6743\u9650",dataIndex:"",key:"power",render:function(e){return"1"===e.power?"\u9ad8\u7ea7\u7ba1\u7406\u5458":"\u666e\u901a\u7ba1\u7406\u5458"}},{title:"\u72b6\u6001",dataIndex:"",key:"address",render:function(e){return"1"===e.status||"0"===e.status?"\u6b63\u5e38":"-1"===e.status?"\u5df2\u51bb\u7ed3":"-2"===e.status?"\u5df2\u5220\u9664":void 0}},{title:"\u64cd\u4f5c",key:"x",render:function(e){var t,n=function(){return Object(O.jsxs)(s.b,{children:[Object(O.jsx)(u.a,{onClick:function(){return S(e)},children:"\u51bb\u7ed3"}),Object(O.jsx)(d.a,{okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u4e00\u65e6\u5220\u9664\u65e0\u6cd5\u6062\u590d,\u662f\u5426\u5220\u9664",onOk:function(){return P(e)},children:Object(O.jsx)(u.a,{type:"danger",children:"\u5220\u9664"})})]})};switch(e.status){case"1":t=Object(O.jsxs)(s.b,{children:[Object(O.jsx)(u.a,{onClick:function(){return function(e){return T.apply(this,arguments)}(e)},type:"primary",children:"\u91cd\u7f6e"}),Object(O.jsx)(n,{})]});break;case"0":t=Object(O.jsx)(n,{});break;case"-1":t=Object(O.jsxs)(s.b,{children:[Object(O.jsx)(u.a,{onClick:function(){return N(e)},type:"primary",children:"\u6062\u590d"}),Object(O.jsx)(d.a,{okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u4e00\u65e6\u5220\u9664\u65e0\u6cd5\u6062\u590d,\u662f\u5426\u5220\u9664",onOk:function(){return P(e)},children:Object(O.jsx)(u.a,{type:"danger",children:"\u5220\u9664"})})]});break;default:t="\u5df2\u5220\u9664"}return t}}];e.forEach((function(e){e.align="center"}));var t=Object(f.e)(),n=Object(l.useState)([]),r=Object(o.a)(n,2),m=r[0],k=r[1],w=Object(l.useState)(0),C=Object(o.a)(w,2),E=C[0],I=C[1],z=Object(l.useRef)();z.current=m;var S=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.adminId);case 2:"200"===e.sent.code&&(Object(b.a)("\u51bb\u7ed3\u6210\u529f","success"),F(t.adminId,"-1"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.adminId);case 2:"200"===e.sent.code&&(Object(b.a)("\u6062\u590d\u6210\u529f","success"),F(t.adminId,"1"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.adminId);case 2:"200"===e.sent.code&&(Object(b.a)("\u5220\u9664\u6210\u529f","success"),F(t.adminId,"-2"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function T(){return(T=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.adminId);case 2:"200"===e.sent.code&&(Object(b.a)("\u91cd\u7f6e\u6210\u529f","success"),F(t.adminId,"0"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:(n=e.sent).data&&(n.data.forEach((function(e){e.key=e._id})),k(n.data),I(n.pageSize));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){var n=Object(a.a)(m);n.find((function(t){return t.adminId===e})).status=t,k(n)}return Object(l.useEffect)((function(){"2"!==j.a.getState().admin.power?(Object(b.a)("\u6ca1\u6709\u6743\u9650"),setTimeout((function(){t.goBack()}),2e3)):B(1)}),[z]),Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{columns:e,pagination:{total:E,pageSize:8,onChange:function(e){return B(e)}},dataSource:m})})}}}]);
//# sourceMappingURL=39.370cf6f5.chunk.js.map