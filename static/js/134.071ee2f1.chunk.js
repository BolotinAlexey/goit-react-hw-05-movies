"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{308:function(n,t,e){e.d(t,{Aj:function(){return o},IQ:function(){return d},Tn:function(){return v},XT:function(){return m},s_:function(){return l}});var r=e(165),u=e(861),a=e(243),i="https://api.themoviedb.org/3/",s="?api_key=66413c0c73bd8d6f9d602d8ba291e1c5",c="&language=en-US";function o(){return p.apply(this,arguments)}function p(){return(p=(0,u.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"trending/all/day"+s);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"movie/"+t+s+c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"movie/"+t+"/credits"+s+c);case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,u.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"movie/"+t+"/reviews"+s+c);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,u.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"search/movie"+s+c+"/&query="+t+"&page=1&include_adult=false");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},522:function(n,t,e){e.d(t,{Z:function(){return o}});var r,u=e(689),a=e(87),i=e(168),s=e(444).ZP.ol(r||(r=(0,i.Z)(["\n  padding: 20px;\n  li {\n    margin-bottom: 5px;\n  }\n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n"]))),c=e(184);var o=function(n){var t=n.list,e=(0,u.TH)();return(0,c.jsx)(s,{children:t&&t.map((function(n){var t=n.title,r=n.name,u=n.id;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/"+u,state:{from:e},children:t||r})},u)}))})}},134:function(n,t,e){e.r(t);var r=e(439),u=e(791),a=e(87),i=e(522),s=e(308),c=e(184);t.default=function(){var n=(0,u.useState)(null),t=(0,r.Z)(n,2),e=t[0],o=t[1],p=(0,a.lr)(),l=(0,r.Z)(p,2),f=l[0],d=l[1];return(0,u.useEffect)((function(){var n=f.get("query");n&&(0,s.XT)(n).then(o),n||(o(null),d({}))}),[f,d]),(0,c.jsxs)("form",{onSubmit:function(n){n.preventDefault(),d({query:n.currentTarget.elements.q.value}),n.currentTarget.reset()},children:[(0,c.jsx)("div",{children:"Movies"}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{name:"q",type:"text"})}),(0,c.jsx)("button",{type:"submit",children:"Search"}),(null===e||void 0===e?void 0:e.length)>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"List movies"}),(0,c.jsx)(i.Z,{list:e})]})]})}}}]);
//# sourceMappingURL=134.071ee2f1.chunk.js.map