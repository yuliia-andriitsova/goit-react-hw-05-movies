(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[332],{332:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(885),u=n(757),c=n.n(u),o=n(791),i=n(970),s=n(731),p=n(470),f=n(7),l=n.n(f),v=n(184);function d(e){var t=e.getFormData,n=(0,o.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u)},children:[(0,v.jsx)("input",{onChange:function(e){c(e.target.value)}}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})}d.protoTypes={getFormData:l().func.isRequired};var h="Movies_movieLink__ERyJ6";function m(){var e,t=(0,s.lr)(),n=(0,a.Z)(t,2),u=n[0],f=n[1],l=null!==(e=u.get("query"))&&void 0!==e?e:"",m=(0,o.useState)(null),y=(0,a.Z)(m,2),x=y[0],b=y[1],g=(0,p.TH)();(0,o.useEffect)((function(){if(l){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Ue)({query:l});case 2:t=e.sent,b(t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[l]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{getFormData:function(e){f({query:e})}}),null!==x&&(null===x||void 0===x?void 0:x.length)>0?(0,v.jsx)("ul",{children:null===x||void 0===x?void 0:x.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{to:"".concat(e.id),className:h,id:e.id,state:{from:g},children:e.original_title})},e.id)}))}):(0,v.jsx)("p",{children:" Not found"})]})}},970:function(e,t,n){"use strict";n.d(t,{DI:function(){return f},G2:function(){return p},SY:function(){return s},Ue:function(){return i},cM:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c3b722c55570e9bc7df3ad457c08a917"}}),o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var r=n(47);function a(){}function u(){}u.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,u,c){if(c!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=332.914a917b.chunk.js.map