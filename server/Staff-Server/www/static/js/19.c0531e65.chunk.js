(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[19],{421:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var a=n(1),r=n(2),c=n(5),i=n(0),s=n(6),o=n.n(s),l=n(41),u=n(57);function d(t){var e=t.className,n=t.direction,c=t.index,s=t.marginDirection,o=t.children,l=t.split,u=t.wrap,d=i.useContext(h),p=d.horizontalSize,f=d.verticalSize,b=d.latestIndex,m={};return d.supportFlexGap||("vertical"===n?c<b&&(m={marginBottom:p/(l?2:1)}):m=Object(a.a)(Object(a.a)({},c<b&&Object(r.a)({},s,p/(l?2:1))),u&&{paddingBottom:f})),null===o||void 0===o?null:i.createElement(i.Fragment,null,i.createElement("div",{className:e,style:m},o),c<b&&l&&i.createElement("span",{className:"".concat(e,"-split"),style:m},l))}var p=n(164),f=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},h=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),b={small:8,middle:16,large:24};e.b=function(t){var e,n=i.useContext(u.b),s=n.getPrefixCls,m=n.space,j=n.direction,x=t.size,O=void 0===x?(null===m||void 0===m?void 0:m.size)||"small":x,y=t.align,v=t.className,g=t.children,k=t.direction,w=void 0===k?"horizontal":k,C=t.prefixCls,z=t.split,S=t.style,D=t.wrap,N=void 0!==D&&D,_=f(t,["size","align","className","children","direction","prefixCls","split","style","wrap"]),E=Object(p.a)(),I=i.useMemo((function(){return(Array.isArray(O)?O:[O,O]).map((function(t){return function(t){return"string"===typeof t?b[t]:t||0}(t)}))}),[O]),M=Object(c.a)(I,2),T=M[0],G=M[1],P=Object(l.a)(g,{keepEmpty:!0}),R=void 0===y&&"horizontal"===w?"center":y,L=s("space",C),A=o()(L,"".concat(L,"-").concat(w),(e={},Object(r.a)(e,"".concat(L,"-rtl"),"rtl"===j),Object(r.a)(e,"".concat(L,"-align-").concat(R),R),e),v),B="".concat(L,"-item"),F="rtl"===j?"marginLeft":"marginRight",W=0,J=P.map((function(t,e){return null!==t&&void 0!==t&&(W=e),i.createElement(d,{className:B,key:"".concat(B,"-").concat(e),direction:w,index:e,marginDirection:F,split:z,wrap:N},t)})),U=i.useMemo((function(){return{horizontalSize:T,verticalSize:G,latestIndex:W,supportFlexGap:E}}),[T,G,W,E]);if(0===P.length)return null;var q={};return N&&(q.flexWrap="wrap",E||(q.marginBottom=-G)),E&&(q.columnGap=T,q.rowGap=G),i.createElement("div",Object(a.a)({className:A,style:Object(a.a)(Object(a.a)({},q),S)},_),i.createElement(h.Provider,{value:U},J))}},896:function(t,e,n){},933:function(t,e,n){"use strict";n.r(e);var a=n(33),r=n.n(a),c=n(63),i=n(46),s=n(47),o=n(49),l=n(48),u=n(0),d=n(361),p=n(421),f=n(45),h=n(947),b=n(32),m=n(42),j=n(40),x=(n(896),n(3)),O=j.b.getApplyByPageNum,y=j.b.Repeal,v=j.b.RefMore,g=j.b.DeleteApply,k=j.b.getMarkById,w=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleWatchMark=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e._id);case 2:n=t.sent,d.a.info({title:"\u67e5\u770b\u7406\u7531",content:n.data.mark});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.handleModic=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=console,t.next=3,g(e._id);case 3:t.t1=t.sent,t.t0.log.call(t.t0,t.t1),a.props.history.push({pathname:"/index/Apply",state:{info:e}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.handleDelete=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e._id);case 2:"200"===t.sent.code&&(Object(b.a)("\u5220\u9664\u6210\u529f","success"),setTimeout((function(){window.location.reload()}),2e3));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.handleReal=function(){var t=Object(c.a)(r.a.mark((function t(e){var n,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e._id);case 2:n=t.sent,c=a.state.listData,(i=c.find((function(t){return e._id===t._id}))).status="-1",i.statusText="\u5df2\u64a4\u9500","200"===n.code&&(e.status="-1",a.setState({listData:c}),Object(b.a)("\u64a4\u9500\u6210\u529f","success"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.handleRef=function(){var t=Object(c.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.state.listData,t.next=3,v(e._id);case 3:"200"===(c=t.sent).code?(n.find((function(t){return e._id===t._id})).status="0",a.setState({listData:n}),Object(b.a)("\u63d0\u4ea4\u6210\u529f","success"),Object(m.c)(e)):Object(b.a)(c.msg);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.handleGetList=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:(n=t.sent).data&&(n.data.forEach((function(t){"0"===t.status?t.statusText="\u5ba1\u6838\u4e2d":"-1"===t.status?t.statusText="\u5df2\u64a4\u9500":"-2"===t.status?t.statusText="\u5df2\u9a73\u56de":"1"===t.status&&(t.statusText="\u5df2\u901a\u8fc7"),t.key=t._id})),a.setState({listData:n.data,total:n.pageSize}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.client="",a.action=function(t){var e="";switch(t.status){case"-1":e=Object(x.jsxs)(p.b,{children:[Object(x.jsx)(f.a,{onClick:function(){return a.handleModic(t)},children:"\u4fee\u6539"}),Object(x.jsx)(f.a,{onClick:function(){return a.handleDelete(t)},type:"danger",children:"\u5220\u9664"}),Object(x.jsx)(f.a,{onClick:function(){return a.handleRef(t)},type:"primary",children:"\u91cd\u65b0\u63d0\u4ea4"})]});break;case"0":e=Object(x.jsxs)(p.b,{children:[Object(x.jsx)(f.a,{onClick:function(){return Object(m.c)(t)},children:"\u50ac\u529e"}),Object(x.jsx)(f.a,{type:"danger",onClick:function(){return a.handleReal(t)},children:"\u64a4\u9500"})]});break;case"1":e=Object(x.jsx)(f.a,{type:"danger",onClick:function(){return a.handleReal(t)},children:"\u64a4\u9500"});break;default:e=Object(x.jsxs)(p.b,{children:[Object(x.jsx)(f.a,{onClick:function(){return a.handleWatchMark(t)},children:"\u67e5\u770b\u7406\u7531"}),Object(x.jsx)(f.a,{onClick:function(){return a.handleDelete(t)},type:"danger",children:"\u5220\u9664"})]})}return e},a.columns=[{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"time",align:"center",key:"createTime"},{title:"\u5929\u6570",dataIndex:"num",align:"center",key:"num"},{title:"\u7c7b\u578b",dataIndex:"type",align:"center",key:"type"},{title:"\u72b6\u6001",align:"center",dataIndex:"statusText",key:"statusText"},{title:"\u64cd\u4f5c",align:"center",render:function(t){return a.action(t)},key:"func"}],a.state={listData:[],total:0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.handleGetList(1),this.client=Object(m.k)((function(t){t&&window.location.reload()}))}},{key:"componentWillUnmount",value:function(){this.client.off()}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("section",{className:"applyList-container",children:[Object(x.jsx)("section",{className:"applyList-header",children:"\u6211\u7684\u7533\u8bf7"}),Object(x.jsx)("section",{className:"applyList-mainer",children:Object(x.jsx)(h.a,{pagination:{defaultCurrent:1,defaultPageSize:6,hideOnSinglePage:!0,responsive:!0,total:this.state.total,onChange:function(e){t.handleGetList(e)}},dataSource:this.state.listData,columns:this.columns})})]})}}]),n}(u.Component);e.default=w}}]);
//# sourceMappingURL=19.c0531e65.chunk.js.map