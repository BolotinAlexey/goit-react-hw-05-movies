"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{308:function(t,n,r){r.d(n,{Aj:function(){return o},IQ:function(){return h},Tn:function(){return v},XT:function(){return m},s_:function(){return f}});var e=r(165),a=r(861),u=r(243),s="https://api.themoviedb.org/3/",c="?api_key=66413c0c73bd8d6f9d602d8ba291e1c5",i="&language=en-US";function o(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,e.Z)().mark((function t(){var n;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(s+"trending/all/day"+c);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(s+"movie/"+n+c+i);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(s+"movie/"+n+"/credits"+c+i);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(s+"movie/"+n+"/reviews"+c+i);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(s+"search/movie"+c+i+"/&query="+n+"&page=1&include_adult=false");case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},247:function(t,n,r){r.r(n);var e=r(439),a=r(689),u=r(791),s=r(308),c=r(345),i=r(184);n.default=function(){var t=(0,a.UO)().id,n=(0,u.useState)(null),r=(0,e.Z)(n,2),o=r[0],p=r[1];return(0,u.useEffect)((function(){var n;null===(n=(0,s.IQ)(t))||void 0===n||n.then(p)}),[]),{casts:o}&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Cast"}),0===(null===o||void 0===o?void 0:o.length)?(0,i.jsx)("p",{children:"We don't have any casts for this movies"}):null===o||void 0===o?void 0:o.map((function(t){var n=t.profile_path,r=t.name,e=t.character,a=t.cast_id;return(0,i.jsxs)("li",{className:"thumb-cast",children:[(0,i.jsxs)("p",{children:["Character: ",e||"none"]}),(0,i.jsxs)("p",{children:["Name: ",r||"none"]}),(0,i.jsx)(c.Z,{width:100,url:n,alt:r}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]},a)}))]})}},345:function(t,n,r){var e=r(184);n.Z=function(t){var n=t.url,r=t.alt,a=t.width;return(0,e.jsx)("img",{width:a,src:"https://image.tmdb.org/t/p/w500"+n,alt:r})}}}]);
//# sourceMappingURL=247.611e5ded.chunk.js.map