"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[777],{559:function(n,e,t){t.d(e,{Pg:function(){return o},S3:function(){return a},Wp:function(){return c},gH:function(){return s},lg:function(){return u}});var i="https://api.themoviedb.org/3/",r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDY5NDYxNzVhYmE4NGVjMWZlYjNhNjAzNWVmZGI0ZCIsInN1YiI6IjY0ODhiNzRmOTkyNTljMDBmZjEwOGVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8hYuQw3SpaFp3KuXamF2ZGzm3w0X0SsPIxY8a5WkFQ"}},c=function(){var n="".concat(i,"trending/all/day?language=en-US");return fetch(n,r).then((function(n){return n.json()}))},o=function(n){var e="".concat(i,"movie/").concat(n,"?language=en-US");return fetch(e,r).then((function(n){return n.json()}))},a=function(n){var e="".concat(i,"movie/").concat(n,"/credits?language=en-US");return fetch(e,r).then((function(n){return n.json()}))},u=function(n){var e="".concat(i,"movie/").concat(n,"/reviews?language=en-US&page=1");return fetch(e,r).then((function(n){return n.json()}))},s=function(n){var e="".concat(i,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1");return fetch(e,r).then((function(n){return n.json()}))}},777:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var i=t(439),r=t(559),c=t(791),o=t(689),a=t(87),u=t(184),s=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("nav",{children:[(0,u.jsx)(a.rU,{to:"cast",children:"Cast"}),(0,u.jsx)(a.rU,{to:"reviews",children:"Reviews"})]})]})},h=t(910),l=function(n){var e,t,i=n.movie,r=(0,o.TH)(),s=(0,c.useRef)(null===(e=r.state)||void 0===e?void 0:e.from).current;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(a.rU,{to:null!==s&&void 0!==s?s:"/",children:" \u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c"}),(0,u.jsx)("img",{style:{width:"450px"},src:i.backdrop_path?"https://image.tmdb.org/t/p/original/".concat(i.backdrop_path):h,alt:i.original_title})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:i.original_title}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Overview"}),(0,u.jsx)("p",{children:i.overview})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("ul",{children:null===(t=i.genres)||void 0===t?void 0:t.map((function(n,e){return(0,u.jsx)("span",{children:n.name},e)}))})]})]})]})},d=function(){var n=(0,o.UO)().movieId,e=(0,c.useState)(null),t=(0,i.Z)(e,2),a=t[0],h=t[1];if((0,c.useEffect)((function(){(0,r.Pg)(n).then((function(n){return h(n)})).catch((function(n){return console.log(n)}))}),[n]),a)return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{movie:a}),(0,u.jsx)(s,{}),(0,u.jsx)(o.j3,{})]})}},910:function(n,e,t){n.exports=t.p+"static/media/aOmQWw3_460s.c4d1c3aec86c0b58f2dc.jpg"}}]);
//# sourceMappingURL=777.a4512872.chunk.js.map