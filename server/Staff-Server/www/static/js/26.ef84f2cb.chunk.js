(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[26],{467:function(e,t,n){"use strict";var a=n(1),c=n(4),r=n(0),o=n(6),l=n.n(o),s=n(36),i=n(107),u=n(23),d=n(75),p=n(46),f=n(77),m=n(53),b=n(61),h=n(60),v=n(148),j=n(13),O=n(42),y=void 0,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},g=r.forwardRef((function(e,t){var n=Object(s.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),o=Object(c.a)(n,2),i=o[0],g=o[1],C=function(t,n){var a;g(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},k=function(t){var n;C(!1,t),null===(n=e.onConfirm)||void 0===n||n.call(y,t)},E=function(t){var n;C(!1,t),null===(n=e.onCancel)||void 0===n||n.call(y,t)},S=r.useContext(h.b).getPrefixCls,w=e.prefixCls,N=e.placement,I=e.children,D=e.overlayClassName,P=x(e,["prefixCls","placement","children","overlayClassName"]),T=S("popover",w),z=S("popconfirm",w),R=l()(z,D),L=r.createElement(m.a,{componentName:"Popconfirm",defaultLocale:b.a.Popconfirm},(function(t){return function(t,n){var c=e.okButtonProps,o=e.cancelButtonProps,l=e.title,s=e.cancelText,i=e.okText,u=e.okType,d=e.icon;return r.createElement("div",{className:"".concat(t,"-inner-content")},r.createElement("div",{className:"".concat(t,"-message")},d,r.createElement("div",{className:"".concat(t,"-message-title")},Object(v.a)(l))),r.createElement("div",{className:"".concat(t,"-buttons")},r.createElement(p.a,Object(a.a)({onClick:E,size:"small"},o),s||n.cancelText),r.createElement(p.a,Object(a.a)({onClick:k},Object(f.a)(u),{size:"small"},c),i||n.okText)))}(T,t)})),M=S();return r.createElement(d.a,Object(a.a)({},P,{prefixCls:T,placement:N,onVisibleChange:function(t){e.disabled||C(t)},visible:i,overlay:L,overlayClassName:R,ref:t,transitionName:Object(O.b)(M,"zoom-big",e.transitionName)}),Object(j.a)(I,{onKeyDown:function(e){var t,n;r.isValidElement(I)&&(null===(n=null===I||void 0===I?void 0:(t=I.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===u.a.ESC&&i&&C(!1,e)}(e)}}))}));g.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:r.createElement(i.a,null),disabled:!1},t.a=g},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(2),c=n(4),r=n(9),o=n(0),l=n(6),s=n.n(l),i=n(29),u=n(54),d=n(19),p=n(60),f=n(1);function m(e){return void 0!==e&&null!==e}var b=function(e){var t,n=e.itemPrefixCls,c=e.component,r=e.span,l=e.className,i=e.style,u=e.labelStyle,d=e.contentStyle,p=e.bordered,f=e.label,b=e.content,h=e.colon,v=c;return p?o.createElement(v,{className:s()((t={},Object(a.a)(t,"".concat(n,"-item-label"),m(f)),Object(a.a)(t,"".concat(n,"-item-content"),m(b)),t),l),style:i,colSpan:r},m(f)&&o.createElement("span",{style:u},f),m(b)&&o.createElement("span",{style:d},b)):o.createElement(v,{className:s()("".concat(n,"-item"),l),style:i,colSpan:r},o.createElement("div",{className:"".concat(n,"-item-container")},f&&o.createElement("span",{className:s()("".concat(n,"-item-label"),Object(a.a)({},"".concat(n,"-item-no-colon"),!h)),style:u},f),b&&o.createElement("span",{className:s()("".concat(n,"-item-content")),style:d},b)))};function h(e,t,n){var a=t.colon,c=t.prefixCls,r=t.bordered,l=n.component,s=n.type,i=n.showLabel,u=n.showContent,d=n.labelStyle,p=n.contentStyle;return e.map((function(e,t){var n=e.props,m=n.label,h=n.children,v=n.prefixCls,j=void 0===v?c:v,O=n.className,y=n.style,x=n.labelStyle,g=n.contentStyle,C=n.span,k=void 0===C?1:C,E=e.key;return"string"===typeof l?o.createElement(b,{key:"".concat(s,"-").concat(E||t),className:O,style:y,labelStyle:Object(f.a)(Object(f.a)({},d),x),contentStyle:Object(f.a)(Object(f.a)({},p),g),span:k,colon:a,component:l,itemPrefixCls:j,bordered:r,label:i?m:null,content:u?h:null}):[o.createElement(b,{key:"label-".concat(E||t),className:O,style:Object(f.a)(Object(f.a)(Object(f.a)({},d),y),x),span:1,colon:a,component:l[0],itemPrefixCls:j,bordered:r,label:m}),o.createElement(b,{key:"content-".concat(E||t),className:O,style:Object(f.a)(Object(f.a)(Object(f.a)({},p),y),g),span:2*k-1,component:l[1],itemPrefixCls:j,bordered:r,content:h})]}))}var v=function(e){var t=o.useContext(y),n=e.prefixCls,a=e.vertical,c=e.row,r=e.index,l=e.bordered;return a?o.createElement(o.Fragment,null,o.createElement("tr",{key:"label-".concat(r),className:"".concat(n,"-row")},h(c,e,Object(f.a)({component:"th",type:"label",showLabel:!0},t))),o.createElement("tr",{key:"content-".concat(r),className:"".concat(n,"-row")},h(c,e,Object(f.a)({component:"td",type:"content",showContent:!0},t)))):o.createElement("tr",{key:r,className:"".concat(n,"-row")},h(c,e,Object(f.a)({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},j=function(e){return e.children},O=n(13),y=o.createContext({}),x={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function g(e,t,n){var a=e;return(void 0===t||t>n)&&(a=Object(O.a)(e,{span:n}),Object(d.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function C(e){var t,n=e.prefixCls,l=e.title,d=e.extra,f=e.column,m=void 0===f?x:f,b=e.colon,h=void 0===b||b,j=e.bordered,O=e.layout,C=e.children,k=e.className,E=e.style,S=e.size,w=e.labelStyle,N=e.contentStyle,I=o.useContext(p.b),D=I.getPrefixCls,P=I.direction,T=D("descriptions",n),z=o.useState({}),R=Object(c.a)(z,2),L=R[0],M=R[1],V=function(e,t){if("number"===typeof e)return e;if("object"===Object(r.a)(e))for(var n=0;n<u.b.length;n++){var a=u.b[n];if(t[a]&&void 0!==e[a])return e[a]||x[a]}return 3}(m,L);o.useEffect((function(){var e=u.a.subscribe((function(e){"object"===Object(r.a)(m)&&M(e)}));return function(){u.a.unsubscribe(e)}}),[]);var A=function(e,t){var n=Object(i.a)(e).filter((function(e){return e})),a=[],c=[],r=t;return n.forEach((function(e,o){var l,s=null===(l=e.props)||void 0===l?void 0:l.span,i=s||1;if(o===n.length-1)return c.push(g(e,s,r)),void a.push(c);i<r?(r-=i,c.push(e)):(c.push(g(e,i,r)),a.push(c),r=t,c=[])})),a}(C,V);return o.createElement(y.Provider,{value:{labelStyle:w,contentStyle:N}},o.createElement("div",{className:s()(T,(t={},Object(a.a)(t,"".concat(T,"-").concat(S),S&&"default"!==S),Object(a.a)(t,"".concat(T,"-bordered"),!!j),Object(a.a)(t,"".concat(T,"-rtl"),"rtl"===P),t),k),style:E},(l||d)&&o.createElement("div",{className:"".concat(T,"-header")},l&&o.createElement("div",{className:"".concat(T,"-title")},l),d&&o.createElement("div",{className:"".concat(T,"-extra")},d)),o.createElement("div",{className:"".concat(T,"-view")},o.createElement("table",null,o.createElement("tbody",null,A.map((function(e,t){return o.createElement(v,{key:t,index:t,colon:h,prefixCls:T,vertical:"vertical"===O,bordered:j,row:e})})))))))}C.Item=j;t.b=C},550:function(e,t,n){"use strict";var a=n(49),c=n(50),r=n(52),o=n(51),l=n(0),s=n(28),i=n.n(s),u=n(48),d=n(474),p=n(35),f=n(3),m=p.a.getOrderById,b=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).handlegetData=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:n=e.sent,console.log(n),n.data[0]&&c.setState({info:n.data[0]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.state={info:{orderTotal:0,orderMax:0,orderSum:0,orderAvg:0}},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.handlegetData(this.props.record.userId)}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(d.b,{className:"descript-container",al:!0,title:"",size:"small",children:this.props.children?this.props.children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.b.Item,{label:"\u9500\u552e\u5355\u6570",children:this.state.info.orderTotal}),Object(f.jsx)(d.b.Item,{label:"\u6700\u9ad8\u9500\u91cf",children:this.state.info.orderMax}),Object(f.jsx)(d.b.Item,{label:"\u6708\u5e73\u5747\u9500\u91cf",children:Math.floor(this.state.info.orderAvg)}),Object(f.jsx)(d.b.Item,{label:"\u603b\u9500\u552e\u989d",children:this.state.info.orderSum})]})})})}}]),n}(l.PureComponent),h=n(467),v=n(46),j=n(373),O=n(975),y=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).handleDismissal=function(e){console.log(e)},c.handleSuspension=function(e){console.log(e)},c.handleRecover=function(e){console.log(e)},console.log(e),c.columns=[{title:"\u5de5\u53f7",dataIndex:"userId",key:"userId"},{title:"\u59d3\u540d",dataIndex:"username",key:"username"},{title:"\u7535\u8bdd",dataIndex:"age",key:"age"},{title:"\u5bb6\u5ead\u4f4f\u5740",dataIndex:"address",key:"address"},{title:"\u6027\u522b",dataIndex:"sex",key:"sex"},{title:"\u5165\u804c\u65f6\u95f4",dataIndex:"joinTime",key:"joinTime"},{title:"\u64cd\u4f5c",dataIndex:"",key:"x",render:function(e){var t=e.status,n=function(){return Object(f.jsx)(h.a,{cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onConfirm:function(){return c.props.handleDismissal(e)},title:"\u4e00\u65e6\u89e3\u96c7\u65e0\u6cd5\u6062\u590d,\u786e\u5b9a\u89e3\u96c7\u6b64\u4eba",children:Object(f.jsx)(v.a,{type:"danger",children:"\u89e3\u96c7"})})};return t>=0?Object(f.jsxs)(j.b,{children:[Object(f.jsx)(v.a,{onClick:function(){return c.props.handleSuspension(e)},children:"\u505c\u804c"}),Object(f.jsx)(n,{})]}):-1===t?Object(f.jsxs)(j.b,{children:[Object(f.jsx)(v.a,{type:"primary",onClick:function(){return c.props.handleRecover(e)},children:"\u6062\u590d"}),Object(f.jsx)(n,{})]}):"\u5df2\u89e3\u96c7..."}}],c.columns.forEach((function(e){e.align="center"})),c}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("section",{children:Object(f.jsx)(O.a,{columns:this.columns,pagination:{total:this.props.total,pageSize:this.props.pageSize?this.props.pageSize:8,onChange:function(t){return e.props.page(t)}},expandable:{expandedRowRender:function(e){return Object(f.jsx)(b,{record:e})},rowExpandable:function(e){return-2!==e.status}},dataSource:this.props.data})})}}]),n}(l.Component);t.a=y},965:function(e,t,n){"use strict";n.r(t);var a=n(28),c=n.n(a),r=n(48),o=n(49),l=n(50),s=n(52),i=n(51),u=n(0),d=n(550),p=n(35),f=n(33),m=n(3),b=p.a.findAllStaff,h=p.a.handleSuspend,v=p.a.handleKick,j=p.a.handleRecover,O=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleDismissal=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.userId);case 2:"200"===(n=e.sent).code?(Object(f.a)("\u5df2\u89e3\u96c7","success"),a.handleLocalChange(t.userId,-2)):Object(f.a)(n.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSuspension=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.userId);case 2:"200"===(n=e.sent).code?(Object(f.a)("\u5df2\u505c\u804c","success"),a.handleLocalChange(t.userId,-1)):Object(f.a)(n.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleRecover=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t.userId);case 2:"200"===(n=e.sent).code?(Object(f.a)("\u5df2\u6062\u590d","success"),a.handleLocalChange(t.userId,1)):Object(f.a)(n.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handlePageNum=function(e){a.handlegetStaff(e)},a.handleLocalChange=function(e,t){var n=a.state.listData;n.find((function(t){return t.userId===e})).status=t,a.setState({listData:n})},a.handlegetStaff=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:(n=e.sent).data.forEach((function(e){e.key=e._id})),n.data.length&&a.setState({listData:n.data,total:n.pageSize});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={listData:[],total:0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.handlegetStaff(1)}},{key:"render",value:function(){return Object(m.jsx)(d.a,{handleDismissal:this.handleDismissal,handleRecover:this.handleRecover,handleSuspension:this.handleSuspension,data:this.state.listData,page:this.handlePageNum,total:this.state.total,pageSize:8})}}]),n}(u.Component);t.default=O}}]);
//# sourceMappingURL=26.ef84f2cb.chunk.js.map