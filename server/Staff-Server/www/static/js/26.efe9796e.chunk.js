(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[26],{406:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(1),r=n(2),c=n(4),o=n(0),l=n(6),i=n.n(l),s=n(33),u=n(59);function d(e){var t=e.className,n=e.direction,c=e.index,l=e.marginDirection,i=e.children,s=e.split,u=e.wrap,d=o.useContext(f),p=d.horizontalSize,m=d.verticalSize,b=d.latestIndex,h={};return d.supportFlexGap||("vertical"===n?c<b&&(h={marginBottom:p/(s?2:1)}):h=Object(a.a)(Object(a.a)({},c<b&&Object(r.a)({},l,p/(s?2:1))),u&&{paddingBottom:m})),null===i||void 0===i?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:h},i),c<b&&s&&o.createElement("span",{className:"".concat(t,"-split"),style:h},s))}var p=n(166),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),b={small:8,middle:16,large:24};t.b=function(e){var t,n=o.useContext(u.b),l=n.getPrefixCls,h=n.space,v=n.direction,j=e.size,O=void 0===j?(null===h||void 0===h?void 0:h.size)||"small":j,y=e.align,x=e.className,g=e.children,C=e.direction,E=void 0===C?"horizontal":C,S=e.prefixCls,k=e.split,w=e.style,N=e.wrap,I=void 0!==N&&N,z=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),P=Object(p.a)(),D=o.useMemo((function(){return(Array.isArray(O)?O:[O,O]).map((function(e){return function(e){return"string"===typeof e?b[e]:e||0}(e)}))}),[O]),T=Object(c.a)(D,2),R=T[0],L=T[1],F=Object(s.a)(g,{keepEmpty:!0}),M=void 0===y&&"horizontal"===E?"center":y,B=l("space",S),A=i()(B,"".concat(B,"-").concat(E),(t={},Object(r.a)(t,"".concat(B,"-rtl"),"rtl"===v),Object(r.a)(t,"".concat(B,"-align-").concat(M),M),t),x),G="".concat(B,"-item"),V="rtl"===v?"marginLeft":"marginRight",K=0,J=F.map((function(e,t){return null!==e&&void 0!==e&&(K=t),o.createElement(d,{className:G,key:"".concat(G,"-").concat(t),direction:E,index:t,marginDirection:V,split:k,wrap:I},e)})),W=o.useMemo((function(){return{horizontalSize:R,verticalSize:L,latestIndex:K,supportFlexGap:P}}),[R,L,K,P]);if(0===F.length)return null;var _={};return I&&(_.flexWrap="wrap",P||(_.marginBottom=-L)),P&&(_.columnGap=R,_.rowGap=L),o.createElement("div",Object(a.a)({className:A,style:Object(a.a)(Object(a.a)({},_),w)},z),o.createElement(f.Provider,{value:W},J))}},467:function(e,t,n){"use strict";var a=n(1),r=n(4),c=n(0),o=n(6),l=n.n(o),i=n(35),s=n(107),u=n(22),d=n(75),p=n(46),m=n(77),f=n(52),b=n(60),h=n(59),v=n(147),j=n(13),O=n(42),y=void 0,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=c.forwardRef((function(e,t){var n=Object(i.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),o=Object(r.a)(n,2),s=o[0],g=o[1],C=function(t,n){var a;g(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},E=function(t){var n;C(!1,t),null===(n=e.onConfirm)||void 0===n||n.call(y,t)},S=function(t){var n;C(!1,t),null===(n=e.onCancel)||void 0===n||n.call(y,t)},k=c.useContext(h.b).getPrefixCls,w=e.prefixCls,N=e.placement,I=e.children,z=e.overlayClassName,P=x(e,["prefixCls","placement","children","overlayClassName"]),D=k("popover",w),T=k("popconfirm",w),R=l()(T,z),L=c.createElement(f.a,{componentName:"Popconfirm",defaultLocale:b.a.Popconfirm},(function(t){return function(t,n){var r=e.okButtonProps,o=e.cancelButtonProps,l=e.title,i=e.cancelText,s=e.okText,u=e.okType,d=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},d,c.createElement("div",{className:"".concat(t,"-message-title")},Object(v.a)(l))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(p.a,Object(a.a)({onClick:S,size:"small"},o),i||n.cancelText),c.createElement(p.a,Object(a.a)({onClick:E},Object(m.a)(u),{size:"small"},r),s||n.okText)))}(D,t)})),F=k();return c.createElement(d.a,Object(a.a)({},P,{prefixCls:D,placement:N,onVisibleChange:function(t){e.disabled||C(t)},visible:s,overlay:L,overlayClassName:R,ref:t,transitionName:Object(O.b)(F,"zoom-big",e.transitionName)}),Object(j.a)(I,{onKeyDown:function(e){var t,n;c.isValidElement(I)&&(null===(n=null===I||void 0===I?void 0:(t=I.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===u.a.ESC&&s&&C(!1,e)}(e)}}))}));g.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:c.createElement(s.a,null),disabled:!1},t.a=g},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(2),r=n(4),c=n(9),o=n(0),l=n(6),i=n.n(l),s=n(33),u=n(53),d=n(19),p=n(59),m=n(1);function f(e){return void 0!==e&&null!==e}var b=function(e){var t,n=e.itemPrefixCls,r=e.component,c=e.span,l=e.className,s=e.style,u=e.labelStyle,d=e.contentStyle,p=e.bordered,m=e.label,b=e.content,h=e.colon,v=r;return p?o.createElement(v,{className:i()((t={},Object(a.a)(t,"".concat(n,"-item-label"),f(m)),Object(a.a)(t,"".concat(n,"-item-content"),f(b)),t),l),style:s,colSpan:c},f(m)&&o.createElement("span",{style:u},m),f(b)&&o.createElement("span",{style:d},b)):o.createElement(v,{className:i()("".concat(n,"-item"),l),style:s,colSpan:c},o.createElement("div",{className:"".concat(n,"-item-container")},m&&o.createElement("span",{className:i()("".concat(n,"-item-label"),Object(a.a)({},"".concat(n,"-item-no-colon"),!h)),style:u},m),b&&o.createElement("span",{className:i()("".concat(n,"-item-content")),style:d},b)))};function h(e,t,n){var a=t.colon,r=t.prefixCls,c=t.bordered,l=n.component,i=n.type,s=n.showLabel,u=n.showContent,d=n.labelStyle,p=n.contentStyle;return e.map((function(e,t){var n=e.props,f=n.label,h=n.children,v=n.prefixCls,j=void 0===v?r:v,O=n.className,y=n.style,x=n.labelStyle,g=n.contentStyle,C=n.span,E=void 0===C?1:C,S=e.key;return"string"===typeof l?o.createElement(b,{key:"".concat(i,"-").concat(S||t),className:O,style:y,labelStyle:Object(m.a)(Object(m.a)({},d),x),contentStyle:Object(m.a)(Object(m.a)({},p),g),span:E,colon:a,component:l,itemPrefixCls:j,bordered:c,label:s?f:null,content:u?h:null}):[o.createElement(b,{key:"label-".concat(S||t),className:O,style:Object(m.a)(Object(m.a)(Object(m.a)({},d),y),x),span:1,colon:a,component:l[0],itemPrefixCls:j,bordered:c,label:f}),o.createElement(b,{key:"content-".concat(S||t),className:O,style:Object(m.a)(Object(m.a)(Object(m.a)({},p),y),g),span:2*E-1,component:l[1],itemPrefixCls:j,bordered:c,content:h})]}))}var v=function(e){var t=o.useContext(y),n=e.prefixCls,a=e.vertical,r=e.row,c=e.index,l=e.bordered;return a?o.createElement(o.Fragment,null,o.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},h(r,e,Object(m.a)({component:"th",type:"label",showLabel:!0},t))),o.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},h(r,e,Object(m.a)({component:"td",type:"content",showContent:!0},t)))):o.createElement("tr",{key:c,className:"".concat(n,"-row")},h(r,e,Object(m.a)({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},j=function(e){return e.children},O=n(13),y=o.createContext({}),x={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function g(e,t,n){var a=e;return(void 0===t||t>n)&&(a=Object(O.a)(e,{span:n}),Object(d.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function C(e){var t,n=e.prefixCls,l=e.title,d=e.extra,m=e.column,f=void 0===m?x:m,b=e.colon,h=void 0===b||b,j=e.bordered,O=e.layout,C=e.children,E=e.className,S=e.style,k=e.size,w=e.labelStyle,N=e.contentStyle,I=o.useContext(p.b),z=I.getPrefixCls,P=I.direction,D=z("descriptions",n),T=o.useState({}),R=Object(r.a)(T,2),L=R[0],F=R[1],M=function(e,t){if("number"===typeof e)return e;if("object"===Object(c.a)(e))for(var n=0;n<u.b.length;n++){var a=u.b[n];if(t[a]&&void 0!==e[a])return e[a]||x[a]}return 3}(f,L);o.useEffect((function(){var e=u.a.subscribe((function(e){"object"===Object(c.a)(f)&&F(e)}));return function(){u.a.unsubscribe(e)}}),[]);var B=function(e,t){var n=Object(s.a)(e).filter((function(e){return e})),a=[],r=[],c=t;return n.forEach((function(e,o){var l,i=null===(l=e.props)||void 0===l?void 0:l.span,s=i||1;if(o===n.length-1)return r.push(g(e,i,c)),void a.push(r);s<c?(c-=s,r.push(e)):(r.push(g(e,s,c)),a.push(r),c=t,r=[])})),a}(C,M);return o.createElement(y.Provider,{value:{labelStyle:w,contentStyle:N}},o.createElement("div",{className:i()(D,(t={},Object(a.a)(t,"".concat(D,"-").concat(k),k&&"default"!==k),Object(a.a)(t,"".concat(D,"-bordered"),!!j),Object(a.a)(t,"".concat(D,"-rtl"),"rtl"===P),t),E),style:S},(l||d)&&o.createElement("div",{className:"".concat(D,"-header")},l&&o.createElement("div",{className:"".concat(D,"-title")},l),d&&o.createElement("div",{className:"".concat(D,"-extra")},d)),o.createElement("div",{className:"".concat(D,"-view")},o.createElement("table",null,o.createElement("tbody",null,B.map((function(e,t){return o.createElement(v,{key:t,index:t,colon:h,prefixCls:D,vertical:"vertical"===O,bordered:j,row:e})})))))))}C.Item=j;t.b=C},550:function(e,t,n){"use strict";var a=n(48),r=n(49),c=n(51),o=n(50),l=n(0),i=n(34),s=n.n(i),u=n(64),d=n(474),p=n(41),m=n(3),f=p.a.getOrderById,b=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handlegetData=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,console.log(n),n.data[0]&&r.setState({info:n.data[0]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={info:{orderTotal:0,orderMax:0,orderSum:0,orderAvg:0}},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.handlegetData(this.props.record.userId)}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(d.b,{className:"descript-container",al:!0,title:"",size:"small",children:this.props.children?this.props.children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.b.Item,{label:"\u9500\u552e\u5355\u6570",children:this.state.info.orderTotal}),Object(m.jsx)(d.b.Item,{label:"\u6700\u9ad8\u9500\u91cf",children:this.state.info.orderMax}),Object(m.jsx)(d.b.Item,{label:"\u6708\u5e73\u5747\u9500\u91cf",children:Math.floor(this.state.info.orderAvg)}),Object(m.jsx)(d.b.Item,{label:"\u603b\u9500\u552e\u989d",children:this.state.info.orderSum})]})})})}}]),n}(l.PureComponent),h=n(467),v=n(46),j=n(406),O=n(975),y=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleDismissal=function(e){console.log(e)},r.handleSuspension=function(e){console.log(e)},r.handleRecover=function(e){console.log(e)},console.log(e),r.columns=[{title:"\u5de5\u53f7",dataIndex:"userId",key:"userId"},{title:"\u59d3\u540d",dataIndex:"username",key:"username"},{title:"\u7535\u8bdd",dataIndex:"age",key:"age"},{title:"\u5bb6\u5ead\u4f4f\u5740",dataIndex:"address",key:"address"},{title:"\u6027\u522b",dataIndex:"sex",key:"sex"},{title:"\u5165\u804c\u65f6\u95f4",dataIndex:"joinTime",key:"joinTime"},{title:"\u64cd\u4f5c",dataIndex:"",key:"x",render:function(e){var t=e.status,n=function(){return Object(m.jsx)(h.a,{cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onConfirm:function(){return r.props.handleDismissal(e)},title:"\u4e00\u65e6\u89e3\u96c7\u65e0\u6cd5\u6062\u590d,\u786e\u5b9a\u89e3\u96c7\u6b64\u4eba",children:Object(m.jsx)(v.a,{type:"danger",children:"\u89e3\u96c7"})})};return t>=0?Object(m.jsxs)(j.b,{children:[Object(m.jsx)(v.a,{onClick:function(){return r.props.handleSuspension(e)},children:"\u505c\u804c"}),Object(m.jsx)(n,{})]}):-1===t?Object(m.jsxs)(j.b,{children:[Object(m.jsx)(v.a,{type:"primary",onClick:function(){return r.props.handleRecover(e)},children:"\u6062\u590d"}),Object(m.jsx)(n,{})]}):"\u5df2\u89e3\u96c7..."}}],r.columns.forEach((function(e){e.align="center"})),r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("section",{children:Object(m.jsx)(O.a,{columns:this.columns,pagination:{total:this.props.total,pageSize:this.props.pageSize?this.props.pageSize:8,onChange:function(t){return e.props.page(t)}},expandable:{expandedRowRender:function(e){return Object(m.jsx)(b,{record:e})},rowExpandable:function(e){return-2!==e.status}},dataSource:this.props.data})})}}]),n}(l.Component);t.a=y},965:function(e,t,n){"use strict";n.r(t);var a=n(34),r=n.n(a),c=n(64),o=n(48),l=n(49),i=n(51),s=n(50),u=n(0),d=n(550),p=n(41),m=n(31),f=n(3),b=p.a.findAllStaff,h=p.a.handleSuspend,v=p.a.handleKick,j=p.a.handleRecover,O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleDismissal=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.userId);case 2:"200"===(n=e.sent).code?(Object(m.a)("\u5df2\u89e3\u96c7","success"),a.handleLocalChange(t.userId,-2)):Object(m.a)(n.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSuspension=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.userId);case 2:"200"===(n=e.sent).code?(Object(m.a)("\u5df2\u505c\u804c","success"),a.handleLocalChange(t.userId,-1)):Object(m.a)(n.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleRecover=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t.userId);case 2:"200"===(n=e.sent).code?(Object(m.a)("\u5df2\u6062\u590d","success"),a.handleLocalChange(t.userId,1)):Object(m.a)(n.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handlePageNum=function(e){a.handlegetStaff(e)},a.handleLocalChange=function(e,t){var n=a.state.listData;n.find((function(t){return t.userId===e})).status=t,a.setState({listData:n})},a.handlegetStaff=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:(n=e.sent).data.forEach((function(e){e.key=e._id})),n.data.length&&a.setState({listData:n.data,total:n.pageSize});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={listData:[],total:0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.handlegetStaff(1)}},{key:"render",value:function(){return Object(f.jsx)(d.a,{handleDismissal:this.handleDismissal,handleRecover:this.handleRecover,handleSuspension:this.handleSuspension,data:this.state.listData,page:this.handlePageNum,total:this.state.total,pageSize:8})}}]),n}(u.Component);t.default=O}}]);
//# sourceMappingURL=26.efe9796e.chunk.js.map