(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[24],{474:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(2),c=n(4),r=n(9),l=n(0),s=n(6),o=n.n(s),i=n(29),b=n(54),d=n(19),u=n(60),m=n(1);function j(e){return void 0!==e&&null!==e}var h=function(e){var t,n=e.itemPrefixCls,c=e.component,r=e.span,s=e.className,i=e.style,b=e.labelStyle,d=e.contentStyle,u=e.bordered,m=e.label,h=e.content,p=e.colon,f=c;return u?l.createElement(f,{className:o()((t={},Object(a.a)(t,"".concat(n,"-item-label"),j(m)),Object(a.a)(t,"".concat(n,"-item-content"),j(h)),t),s),style:i,colSpan:r},j(m)&&l.createElement("span",{style:b},m),j(h)&&l.createElement("span",{style:d},h)):l.createElement(f,{className:o()("".concat(n,"-item"),s),style:i,colSpan:r},l.createElement("div",{className:"".concat(n,"-item-container")},m&&l.createElement("span",{className:o()("".concat(n,"-item-label"),Object(a.a)({},"".concat(n,"-item-no-colon"),!p)),style:b},m),h&&l.createElement("span",{className:o()("".concat(n,"-item-content")),style:d},h)))};function p(e,t,n){var a=t.colon,c=t.prefixCls,r=t.bordered,s=n.component,o=n.type,i=n.showLabel,b=n.showContent,d=n.labelStyle,u=n.contentStyle;return e.map((function(e,t){var n=e.props,j=n.label,p=n.children,f=n.prefixCls,x=void 0===f?c:f,O=n.className,v=n.style,y=n.labelStyle,S=n.contentStyle,g=n.span,k=void 0===g?1:g,E=e.key;return"string"===typeof s?l.createElement(h,{key:"".concat(o,"-").concat(E||t),className:O,style:v,labelStyle:Object(m.a)(Object(m.a)({},d),y),contentStyle:Object(m.a)(Object(m.a)({},u),S),span:k,colon:a,component:s,itemPrefixCls:x,bordered:r,label:i?j:null,content:b?p:null}):[l.createElement(h,{key:"label-".concat(E||t),className:O,style:Object(m.a)(Object(m.a)(Object(m.a)({},d),v),y),span:1,colon:a,component:s[0],itemPrefixCls:x,bordered:r,label:j}),l.createElement(h,{key:"content-".concat(E||t),className:O,style:Object(m.a)(Object(m.a)(Object(m.a)({},u),v),S),span:2*k-1,component:s[1],itemPrefixCls:x,bordered:r,content:p})]}))}var f=function(e){var t=l.useContext(v),n=e.prefixCls,a=e.vertical,c=e.row,r=e.index,s=e.bordered;return a?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(r),className:"".concat(n,"-row")},p(c,e,Object(m.a)({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:"content-".concat(r),className:"".concat(n,"-row")},p(c,e,Object(m.a)({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:r,className:"".concat(n,"-row")},p(c,e,Object(m.a)({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},x=function(e){return e.children},O=n(13),v=l.createContext({}),y={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function S(e,t,n){var a=e;return(void 0===t||t>n)&&(a=Object(O.a)(e,{span:n}),Object(d.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function g(e){var t,n=e.prefixCls,s=e.title,d=e.extra,m=e.column,j=void 0===m?y:m,h=e.colon,p=void 0===h||h,x=e.bordered,O=e.layout,g=e.children,k=e.className,E=e.style,I=e.size,N=e.labelStyle,C=e.contentStyle,w=l.useContext(u.b),P=w.getPrefixCls,M=w.direction,A=P("descriptions",n),D=l.useState({}),F=Object(c.a)(D,2),R=F[0],T=F[1],L=function(e,t){if("number"===typeof e)return e;if("object"===Object(r.a)(e))for(var n=0;n<b.b.length;n++){var a=b.b[n];if(t[a]&&void 0!==e[a])return e[a]||y[a]}return 3}(j,R);l.useEffect((function(){var e=b.a.subscribe((function(e){"object"===Object(r.a)(j)&&T(e)}));return function(){b.a.unsubscribe(e)}}),[]);var z=function(e,t){var n=Object(i.a)(e).filter((function(e){return e})),a=[],c=[],r=t;return n.forEach((function(e,l){var s,o=null===(s=e.props)||void 0===s?void 0:s.span,i=o||1;if(l===n.length-1)return c.push(S(e,o,r)),void a.push(c);i<r?(r-=i,c.push(e)):(c.push(S(e,i,r)),a.push(c),r=t,c=[])})),a}(g,L);return l.createElement(v.Provider,{value:{labelStyle:N,contentStyle:C}},l.createElement("div",{className:o()(A,(t={},Object(a.a)(t,"".concat(A,"-").concat(I),I&&"default"!==I),Object(a.a)(t,"".concat(A,"-bordered"),!!x),Object(a.a)(t,"".concat(A,"-rtl"),"rtl"===M),t),k),style:E},(s||d)&&l.createElement("div",{className:"".concat(A,"-header")},s&&l.createElement("div",{className:"".concat(A,"-title")},s),d&&l.createElement("div",{className:"".concat(A,"-extra")},d)),l.createElement("div",{className:"".concat(A,"-view")},l.createElement("table",null,l.createElement("tbody",null,z.map((function(e,t){return l.createElement(f,{key:t,index:t,colon:p,prefixCls:A,vertical:"vertical"===O,bordered:x,row:e})})))))))}g.Item=x;t.b=g},906:function(e,t,n){},987:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(28),c=n.n(a),r=n(108),l=n(48),s=n(49),o=n(50),i=n(52),b=n(51),d=n(0),u=n(975),m=n(369),j=n(474),h=n(35),p=n(20),f=n(3),x=function(e){Object(i.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).user=e.user?e.user:p.a.getState().user,a}return Object(o.a)(n,[{key:"render",value:function(){return console.log(this.props),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.b,{className:"descript-container",al:!0,title:"",size:"small",children:this.props.children?this.props.children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.b.Item,{label:"\u59d3\u540d",children:this.user.username}),Object(f.jsx)(j.b.Item,{label:"\u5de5\u53f7",children:this.user.userId}),Object(f.jsx)(j.b.Item,{label:"\u5e74\u9f84",children:this.user.age}),Object(f.jsx)(j.b.Item,{label:"\u6700\u9ad8\u9500\u91cf",children:this.props.record.orderMax}),Object(f.jsx)(j.b.Item,{label:"\u6708\u5e73\u5747\u9500\u91cf",children:this.props.record.orderAvg})]})})})}}]),n}(d.PureComponent),O=(n(906),n(33)),v=h.b.getStateByage,y=function(e){Object(i.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={visible:!1,data:[],text:{}},a.handlegetState=Object(l.a)(c.a.mark((function e(){var t,n,l,s,o,i,b,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(r.a)(a.state.data),n=(new Date).getFullYear(),l=a.userInfo.joinTime.slice(0,4);case 3:if(!(l<=n)){e.next=15;break}return e.next=6,v(l++);case 6:s=e.sent,o=0,i=0,b=0,d=0,s.data[0]&&(o=s.data[0].orderTotal,i=s.data[0].orderSum,b=s.data[0].orderMax,d=s.data[0].orderAvg),t.push({year:"".concat(l-1,"-").concat(l),name:a.userInfo.username,total:o,orderSum:i,orderMax:b,orderAvg:d,key:l}),e.next=3;break;case 15:a.setState({data:t});case 16:case"end":return e.stop()}}),e)}))),a.handleMarkReport=function(e){console.log(e),a.setState({visible:!0,text:e})},a.userInfo=p.a.getState().user,a.columns=[{title:"\u5e74\u4efd",dataIndex:"year",key:"year",align:"center"},{title:"\u51fa\u5355\u6570",dataIndex:"total",key:"total",align:"center"},{title:"\u9500\u552e\u91cf",dataIndex:"orderSum",key:"orderSum",align:"center"},{title:"\u64cd\u4f5c",dataIndex:"",key:"x",align:"center",render:function(e){return Object(f.jsx)("a",{onClick:function(){return a.handleMarkReport(e)},children:"\u751f\u6210\u62a5\u8868"})}}],a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handlegetState()}},{key:"render",value:function(){var e=this;return console.log(this.state.data),Object(f.jsxs)("section",{className:"state-container",children:[Object(f.jsx)("section",{className:"state-header",children:"\u751f\u6210\u62a5\u8868"}),Object(f.jsxs)("section",{className:"state-mainer",children:[Object(f.jsx)(u.a,{columns:this.columns,dataSource:this.state.data,expandable:{expandedRowRender:function(e){return Object(f.jsx)(x,{record:e})}}}),","]}),Object(f.jsx)(m.a,{title:"\u9884\u89c8",centered:!0,cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",visible:this.state.visible,onOk:function(){return Object(O.c)()},onCancel:function(){return e.setState({visible:!1})},width:1e3,children:Object(f.jsx)("section",{id:"psf-prient",children:Object(f.jsxs)(j.b,{bordered:!0,children:[Object(f.jsx)(j.b.Item,{label:"\u59d3\u540d",children:this.userInfo.username}),Object(f.jsx)(j.b.Item,{label:"\u6027\u522b",children:this.userInfo.sex}),Object(f.jsx)(j.b.Item,{label:"\u5e74\u9f84",children:this.userInfo.age}),Object(f.jsx)(j.b.Item,{label:"\u5e74\u4efd",children:this.state.text.year}),Object(f.jsx)(j.b.Item,{label:"\u6708\u5e73\u5747\u9500\u91cf",children:this.state.text.orderAvg}),Object(f.jsx)(j.b.Item,{label:"\u6708\u6700\u9ad8\u9500\u91cf",children:this.state.text.orderMax}),Object(f.jsx)(j.b.Item,{label:"\u603b\u9500\u91cf",children:this.state.text.orderSum})]})})})]})}}]),n}(d.PureComponent)}}]);
//# sourceMappingURL=24.546fb961.chunk.js.map