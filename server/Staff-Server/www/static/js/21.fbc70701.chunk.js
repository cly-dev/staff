(this.webpackJsonpstaff=this.webpackJsonpstaff||[]).push([[21],{934:function(e,t,a){},935:function(e,t,a){},946:function(e,t,a){"use strict";var c=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},s=a(8),r=function(e,t){return c.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};r.displayName="DeleteOutlined";t.a=c.forwardRef(r)},982:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var c=a(34),n=a.n(c),s=a(64),r=a(48),i=a(49),l=a(51),o=a(50),u=a(0),d=a(363),f=a(368),h=a(46),j=a(76),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},b=a(8),m=function(e,t){return u.createElement(b.a,Object.assign({},e,{ref:t,icon:p}))};m.displayName="UploadOutlined";var O=u.forwardRef(m),x=a(69),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"check-square",theme:"outlined"},v=function(e,t){return u.createElement(b.a,Object.assign({},e,{ref:t,icon:g}))};v.displayName="CheckSquareOutlined";var N=u.forwardRef(v),w=a(946),y=a(41),k=(a(934),a(31)),z=a(3),C=y.a.uploadFile,H=y.a.deleteFile;function F(e){var t=Object(u.useState)(""),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(u.useState)(""),l=Object(j.a)(i,2),o=l[0],d=l[1],f=Object(u.useState)(0),p=Object(j.a)(f,2),b=p[0],m=p[1],g=Object(u.useState)(!1),v=Object(j.a)(g,2),y=v[0],F=v[1],R=Object(u.useState)(!1),V=Object(j.a)(R,2),M=V[0],S=V[1];function P(){return(P=Object(s.a)(n.a.mark((function t(a){var c,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(c=new FormData).append("file",a.target.files[0]),F(!0),m(0),d(a.target.files[0].name),t.next=7,C(e.url,c,(function(e){m(e.loaded/e.total*100)}),{"Content-Type":"multipart/form-data"});case 7:"200"===(s=t.sent).code&&(e.path(s.data),r(s.data),Object(k.a)("\u4e0a\u4f20\u6210\u529f","success"),F(!1),S(!0));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=Object(s.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=5;break}return t.next=3,H(c);case 3:"200"===t.sent.code&&(r(""),e.clear(),F(!1),m(0),S(!1),d(""));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("section",{className:"upload-file",children:[Object(z.jsx)(h.a,{className:"btn",icon:Object(z.jsx)(O,{}),children:"\u70b9\u51fb\u4e0a\u4f20"}),Object(z.jsx)("input",{type:"file",className:"upload-file",onChange:function(e){return P.apply(this,arguments)}})]}),o&&Object(z.jsxs)("section",{className:"progress-content",children:[y&&Object(z.jsx)(x.a,{className:"progress-loading"}),M&&Object(z.jsx)(N,{className:"progress-succeed",style:{color:"#67C23A"}}),Object(z.jsx)("span",{className:"path-name",children:o}),0!==b&&Object(z.jsx)("progress",{max:"100",value:b}),M&&Object(z.jsx)(w.a,{className:"progress-delete",onClick:function(){return I.apply(this,arguments)}})]})]})}a(935);var R=a(43),V=y.a.addNotice,M=(y.a.uploadFile,d.a.TextArea),S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).handleRef=Object(s.a)(n.a.mark((function e(){var t,a,s,r,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.a)("\u6b63\u5728\u63d0\u4ea4\u4e2d","loading"),a=c.formRef.getFieldValue(),s=a.title,r=a.content,e.next=4,V({title:s,content:r,file:c.filePath});case 4:"200"===(i=e.sent).code?(t.destroy(),Object(k.a)("\u6dfb\u52a0\u6210\u529f","success"),Object(R.g)(i.data),c.props.history.push("/admin-index/\u901a\u77e5/\u67e5\u770b\u901a\u77e5")):Object(k.a)(i.msg);case 6:case"end":return e.stop()}}),e)}))),c.getPath=function(e){c.filePath=e},c.filePath="",c.state={timer:"",type:[],fileName:"",progress:0},c}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(z.jsxs)("section",{className:"addNotice-container",children:[Object(z.jsx)("section",{className:"addNotice-header",children:"\u53d1\u5e03\u901a\u77e5"}),Object(z.jsxs)(f.a,{onFinish:this.handleRef,ref:function(t){return e.formRef=t},labelCol:{span:7},wrapperCol:{span:10},layout:"horizontal",initialValues:{},size:"large",children:[Object(z.jsx)(f.a.Item,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:Object(z.jsx)(d.a,{})}),Object(z.jsx)(f.a.Item,{label:"\u63cf\u8ff0",name:"content",children:Object(z.jsx)(M,{rows:8,showCount:!0,maxLength:100,className:"textArea-input"})}),Object(z.jsx)(f.a.Item,{label:"\u4e0a\u4f20\u76f8\u5173\u6587\u4ef6",name:"file",children:Object(z.jsx)(f.a.Item,{children:Object(z.jsx)(F,{clear:function(){return e.data=""},url:"/admin/uploadFile",path:this.getPath})})})]}),Object(z.jsx)("section",{className:"refs-container",children:Object(z.jsx)(h.a,{size:"large",type:"primary",className:"refs-btn",onClick:function(){return e.formRef.submit()},children:"\u63d0\u4ea4"})})]})}}]),a}(u.Component)}}]);
//# sourceMappingURL=21.fbc70701.chunk.js.map