(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[15],{423:function(e,t,n){"use strict";n(0),n(424);var a=n(3);t.a=function(e){return Object(a.jsxs)("section",{className:"staff-header",children:[e.title,e.children]})}},424:function(e,t,n){},467:function(e,t,n){"use strict";var a=n(1),s=n(4),c=n(0),i=n(6),r=n.n(i),o=n(36),l=n(107),u=n(23),d=n(75),p=n(46),f=n(77),h=n(53),m=n(61),b=n(60),j=n(148),O=n(13),v=n(42),x=void 0,k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n},g=c.forwardRef((function(e,t){var n=Object(o.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),i=Object(s.a)(n,2),l=i[0],g=i[1],y=function(t,n){var a;g(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},N=function(t){var n;y(!1,t),null===(n=e.onConfirm)||void 0===n||n.call(x,t)},w=function(t){var n;y(!1,t),null===(n=e.onCancel)||void 0===n||n.call(x,t)},C=c.useContext(b.b).getPrefixCls,S=e.prefixCls,T=e.placement,E=e.children,P=e.overlayClassName,F=k(e,["prefixCls","placement","children","overlayClassName"]),z=C("popover",S),I=C("popconfirm",S),V=r()(I,P),_=c.createElement(h.a,{componentName:"Popconfirm",defaultLocale:m.a.Popconfirm},(function(t){return function(t,n){var s=e.okButtonProps,i=e.cancelButtonProps,r=e.title,o=e.cancelText,l=e.okText,u=e.okType,d=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},d,c.createElement("div",{className:"".concat(t,"-message-title")},Object(j.a)(r))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(p.a,Object(a.a)({onClick:w,size:"small"},i),o||n.cancelText),c.createElement(p.a,Object(a.a)({onClick:N},Object(f.a)(u),{size:"small"},s),l||n.okText)))}(z,t)})),L=C();return c.createElement(d.a,Object(a.a)({},F,{prefixCls:z,placement:T,onVisibleChange:function(t){e.disabled||y(t)},visible:l,overlay:_,overlayClassName:V,ref:t,transitionName:Object(v.b)(L,"zoom-big",e.transitionName)}),Object(O.a)(E,{onKeyDown:function(e){var t,n;c.isValidElement(E)&&(null===(n=null===E||void 0===E?void 0:(t=E.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===u.a.ESC&&l&&y(!1,e)}(e)}}))}));g.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:c.createElement(l.a,null),disabled:!1},t.a=g},916:function(e,t,n){},917:function(e,t,n){},988:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var a=n(28),s=n.n(a),c=n(48),i=n(49),r=n(50),o=n(122),l=n(52),u=n(51),d=n(0),p=n(371),f=(n(916),n(917),n(373)),h=n(467),m=n(46),b=n(369),j=n(368),O=n(363),v=n(980),x=n(33),k=n(35),g=n(43),y=n(3),N=k.b.applyPost,w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleOk=function(){a.form.submit()},a.handleRef=function(){var e=Object(c.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(a.props.data._id,t);case 2:n=e.sent,"200"===n.code&&(a.setState({visiable:!1}),Object(g.h)(a.props.data),Object(x.a)("\u7533\u8bf7\u6210\u529f,\u8bf7\u7b49\u5f85\u5ba1\u6838","success"),a.props.postpone(a.props.data._id,t.num));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={visiable:!1},console.log(e),a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsxs)("section",{className:"backlog-task",children:[Object(y.jsxs)("span",{children:["\u6807\u9898:",this.props.data.title]}),Object(y.jsxs)("article",{children:["\u5185\u5bb9:",this.props.data.content?this.props.data.content:"\u6682\u65e0\u5185\u5bb9"]}),this.props.data.url&&Object(y.jsxs)(y.Fragment,{children:["\u76f8\u5173\u6587\u4ef6\u5730\u5740:",Object(y.jsx)("a",{href:this.props.data.url,download:this.props.title,children:this.props.data.url})]}),Object(y.jsx)("section",{className:"task-feedback",children:Object(y.jsxs)(f.b,{children:[Object(y.jsx)(h.a,{title:"\u786e\u8ba4\u5b8c\u6210\u4efb\u52a1",cancelText:"\u7a0d\u7b49",okText:"\u5b8c\u6210",onConfirm:function(){return e.props.Finsh(e.props.data._id,e.props.data.adminId)},children:Object(y.jsx)(m.a,{type:"primary",children:"\u5df2\u5b8c\u6210"})}),Object(y.jsxs)(m.a,{disabled:"0"!=this.props.data.status,onClick:function(){return e.setState({visiable:!0})},children:["0"===this.props.data.status&&"\u7533\u8bf7\u5ef6\u671f","2"===this.props.data.status&&"\u6b63\u5728\u5ba1\u6838\u4e2d","3"===this.props.data.status&&"\u5ef6\u671f".concat(this.props.data.postTime),"4"===this.props.data.status&&"\u672a\u901a\u8fc7"]})]})}),Object(y.jsx)(b.a,{width:"12.5rem",visible:this.state.visiable,title:"\u8bf7\u8f93\u5165\u5ef6\u8fdf\u5929\u6570\u548c\u7406\u7531",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onCancel:function(){return e.setState({visiable:!1})},onOk:function(){return e.handleOk()},children:Object(y.jsxs)(j.a,{ref:function(t){return e.form=t},onFinish:this.handleRef,children:[Object(y.jsx)(j.a.Item,{label:"\u7406\u7531",name:"mask",rules:[{required:!0,message:"\u5929\u6570\u4e0d\u80fd\u4e3a\u7a7a"}],children:Object(y.jsx)(O.a,{style:{width:"100%"}})}),Object(y.jsx)(j.a.Item,{label:"\u5929\u6570",rules:[{required:!0,message:"\u5929\u6570\u4e0d\u80fd\u4e3a\u7a7a"}],name:"num",children:Object(y.jsx)(v.a,{style:{width:"100%"},max:"7",min:"0"})})]})})]})}}]),n}(d.Component),C=n(423),S=n(68),T=n(20),E=k.b.getTaskById,P=k.b.FinshTask,F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleFinsh=function(){var t=Object(c.a)(s.a.mark((function t(n,a){var c,i,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.state,i=c.list,r=c.index,t.next=3,P(n);case 3:"200"==t.sent.code&&(Object(g.i)({username:T.a.getState.user.username,adminId:a}),Object(S.a)("\u68d2(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727","success"),e.setState({list:i.filter((function(e){return e._id!==n})),index:r-1>0?r-=1:0}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.handlePostpone=function(){var t=Object(c.a)(s.a.mark((function t(n,a){var c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.state.list,(i=c.find((function(e){return e._id===n}))).status="2",i.postTime=a,e.setState({list:c});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.handleScroll=function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){var t=n.target;if(console.log(Object(o.a)(e)),e.loadSuccess&&t.scrollHeight-(t.offsetHeight+t.scrollTop)<10)if(e.pageNum+=1,e.pgaeNum<=e.total){var a=e.state.list,s=e.handleGetTask(e.pageNum).data;a.push(s),e.setState({list:a})}else Object(S.a)("\u6ca1\u6709\u66f4\u591a\u4efb\u52a1\u5566")}),500);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.pageNum=1,e.loadSuccess=!1,e.timer=null,e.total=0,e.state={list:[],index:0},e}return Object(r.a)(n,[{key:"handleGetTask",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadSuccess=!1,e.next=3,E(t);case 3:if("200"!==(n=e.sent).code){e.next=8;break}return this.loadSuccess=!0,n.data.forEach((function(e){for(var t in e.admin)e[t]=e.admin[t]})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.handleGetTask(1);case 2:t=e.sent,this.total=t.pageSize<=8?t.pageSize/8+t.pageSize%8>0?1:0:1,this.setState({list:t.data}),this.client=Object(g.k)((function(e){e&&setTimeout((function(){window.location.reload()}),2e3)}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.client&&this.client.off()}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("section",{className:"staff-backlog",children:[Object(y.jsx)(C.a,{title:"\u6211\u7684\u5f85\u529e"}),Object(y.jsx)("section",{className:"backLog-main",children:this.state.list.length?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("section",{className:"backLog-aside",onScroll:this.handleScroll,children:this.state.list.map((function(t,n){return Object(y.jsxs)("section",{className:"aside-item",onClick:function(){return e.setState({index:n})},children:[Object(y.jsx)(p.a,{className:"item-avatar",src:t.imgPath}),Object(y.jsxs)("section",{className:"item-info",children:[Object(y.jsxs)("section",{className:"info-name",children:[Object(y.jsxs)("span",{children:[t.name,"-",t.position]}),Object(y.jsxs)("i",{children:[" ",t.tartTime]})]}),Object(y.jsx)("section",{className:"info-content",children:t.title})]})]},n)}))}),Object(y.jsx)("section",{className:"backLog-content",children:Object(y.jsx)(w,{postpone:this.handlePostpone,Finsh:this.handleFinsh,data:this.state.list.length?this.state.list[this.state.index]:"\u6682\u65e0\u4efb\u52a1"})})]}):Object(y.jsx)("section",{className:"backlog-null",children:Object(y.jsx)("span",{children:"\u6682\u65e0\u4efb\u52a1"})})})]})}}]),n}(d.Component)}}]);
//# sourceMappingURL=15.7e07c49f.chunk.js.map