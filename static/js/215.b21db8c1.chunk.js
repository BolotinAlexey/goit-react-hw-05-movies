"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[215],{308:function(n,t,r){r.d(t,{Aj:function(){return o},IQ:function(){return d},Tn:function(){return v},XT:function(){return x},s_:function(){return l}});var e=r(165),u=r(861),a=r(243),i="https://api.themoviedb.org/3/",s="?api_key=66413c0c73bd8d6f9d602d8ba291e1c5",c="&language=en-US";function o(){return p.apply(this,arguments)}function p(){return(p=(0,u.Z)((0,e.Z)().mark((function n(){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"trending/all/day"+s);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"movie/"+t+s+c);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"movie/"+t+"/credits"+s+c);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,u.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"movie/"+t+"/reviews"+s+c);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(i+"search/movie"+s+c+"/&query="+t+"&page=1&include_adult=false");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},215:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e,u=r(439),a=r(689),i=r(791),s=r(168),c=r(444).ZP.div(e||(e=(0,s.Z)(["\n  ul {\n    list-style: none;\n    padding: 0;\n  }\n\n  li {\n    margin-bottom: 20px;\n  }\n"]))),o=r(308),p=r(184);var l=function(){var n=(0,a.UO)().id,t=(0,i.useState)(null),r=(0,u.Z)(t,2),e=r[0],s=r[1];return(0,i.useEffect)((function(){var t;null===(t=(0,o.Tn)(n))||void 0===t||t.then(s)}),[n,null===e||void 0===e?void 0:e.length]),(0,p.jsxs)(c,{children:[(0,p.jsx)("h3",{children:"Reviews:"}),(0,p.jsx)("ul",{children:0===(null===e||void 0===e?void 0:e.length)?(0,p.jsx)("p",{children:"We don't have any reviews for this movies"}):null===e||void 0===e?void 0:e.map((function(n){var t=n.author,r=n.content,e=n.id;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",t]}),(0,p.jsxs)("p",{children:[" ",r]}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]},e)}))})]})}}}]);
//# sourceMappingURL=215.b21db8c1.chunk.js.map