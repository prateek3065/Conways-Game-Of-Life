(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(3),c=n.n(i),s=n(2),a=n(5),l=n.n(a),d=n(7),u=n(0),b=!0,j=void 0,f=void 0,h=void 0,m=void 0,O=void 0;function p(e){return f=e.numRows,j=e.numCols,h=e.grid,m=e.setGrid,O=e.buttonText,b&&"Stop"===O&&(b=!1,function(e){v.apply(this,arguments)}(e.delayTime)),Object(u.jsx)(u.Fragment,{})}function g(e){return new Promise((function(t){return setTimeout(t,e)}))}function v(){return(v=Object(d.a)(l.a.mark((function e(t){var n,r,o,i,c,s,a,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:for(n=[],r=0;r<f;r++){for(o=[],i=0;i<j;i++)o[i]=h[r][i];n.push(o)}for(c=!1,s=1;s<f-1;s++)for(a=1;a<j-1;a++)(d=x(h,s,a))>0&&(c=!0),1===h[s][a]?d<2||d>3?n[s][a]=0:2!==d&&3!==d||(c=!0):3===d&&(n[s][a]=1);b=!0,c&&m(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,n){var r=0;return 1===e[t-1][n-1]&&r++,1===e[t-1][n]&&r++,1===e[t-1][n+1]&&r++,1===e[t][n-1]&&r++,1===e[t][n+1]&&r++,1===e[t+1][n-1]&&r++,1===e[t+1][n]&&r++,1===e[t+1][n+1]&&r++,r}n(6);var w={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.7)",zindex:1e3};function S(e){var t=e.open,n=e.setIsOpen,r=e.children;if(!t)return null;return c.a.createPortal(Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:w}),Object(u.jsxs)("div",{className:"MODAL_STYLES",children:[r,Object(u.jsx)("button",{onClick:function(){n(!1)},children:"Close"})]})," "]}),document.getElementById("portal"))}var k=n(16),y={gosper:{grid:[[0,-6],[-1,-5],[-1,-6],[-1,-7],[-2,-4],[-2,-8],[-3,-6],[-4,-3],[-5,-3],[-6,-4],[-7,-5],[-7,-6],[-7,-7],[-4,-9],[-5,-9],[-6,-8],[-16,-6],[-16,-7],[-17,-6],[-17,-7],[3,-7],[3,-8],[3,-9],[4,-7],[4,-8],[4,-9],[5,-6],[5,-10],[7,-5],[7,-6],[7,-10],[7,-11],[17,-8],[17,-9],[18,-8],[18,-9]],min_rows:22,min_cols:36},pulsar:{grid:[[-1,2],[-1,3],[-1,4],[-1,-2],[-1,-3],[-1,-4],[1,2],[1,3],[1,4],[1,-2],[1,-3],[1,-4],[2,1],[3,1],[4,1],[-2,1],[-3,1],[-4,1],[2,-1],[3,-1],[4,-1],[-2,-1],[-3,-1],[-4,-1],[2,6],[3,6],[4,6],[-2,6],[-3,6],[-4,6],[2,-6],[3,-6],[4,-6],[-2,-6],[-3,-6],[-4,-6],[-6,2],[-6,3],[-6,4],[-6,-2],[-6,-3],[-6,-4],[6,2],[6,3],[6,4],[6,-2],[6,-3],[6,-4]],min_rows:8,min_cols:8},blinker:{grid:[[1,0],[0,0],[-1,0]],min_rows:6,min_cols:6},beacon:{grid:[[0,0],[-1,0],[-1,-1],[0,-1],[1,1],[1,2],[2,1],[2,2]],min_rows:6,min_cols:6},pentadecathlon:{grid:[[0,0],[0,1],[0,2],[0,4],[0,5],[0,-1],[0,-3],[0,-4],[1,3],[1,-2],[-1,3],[-1,-2]],min_rows:16,min_cols:10},glider:{grid:[[-1,1],[0,1],[1,1],[1,0],[0,-1]],min_rows:5,min_cols:5},lwss:{grid:[[-2,-1],[-2,1],[-1,2],[0,2],[1,2],[1,-1],[2,0],[2,1],[2,2]],min_rows:7,min_cols:6},mwss:{grid:[[-3,0],[-3,1],[-3,2],[-2,-1],[-2,2],[-1,2],[0,-2],[0,2],[1,2],[2,1],[2,-1]],min_rows:7,min_cols:8},hwss:{grid:[[-3,0],[-3,1],[-3,2],[-2,-1],[-2,2],[-1,2],[0,-2],[0,2],[1,-2],[1,2],[2,2],[3,1],[3,-1]],min_rows:7,min_cols:9},test:{grid:[[0,0]],min_rows:1,min_cols:1}};function C(e){var t=e.grid,n=e.setGrid,r=e.setreRender,o=e.patternSelectedFromModal;if(""!==o)for(var i=0,c=Object.entries(y);i<c.length;i++){var a=Object(s.a)(c[i],2),l=a[0],d=a[1];if(l===o)for(var u=0,b=Object.entries(d);u<b.length;u++){var j=Object(s.a)(b[u],2),f=j[0],h=j[1];"grid"===f&&N({grid:t,setGrid:n,val2:h,setreRender:r})}}}function N(e){for(var t=e.grid,n=e.setGrid,r=e.val2,o=e.setreRender,i=t,c=0,a=Object.entries(r);c<a.length;c++){var l=Object(s.a)(a[c],2),d=l[0],u=l[1];console.log(d),i[u[0]+t.length/2][u[1]+t[0].length/2]=1}n(i),o((function(e){return e+1}))}function F(e){e.isModalForPatterSelectionOpen;var t=e.setOpenModalForPatternSelection,n=e.patternSelectedFromModal,r=(e.setPatternSelectedFromModal,e.Patterns),o=e.setreRender,i=e.grid,c=e.setGrid;function s(e){for(var s=i,a=1;a<i.length-2;a++)for(var l=1;l<i[0].length-2;l++)s[a][l]=0;c(s),n=e,t(!1),o((function(e){return e+1})),r({grid:i,setGrid:c,setreRender:o,patternSelectedFromModal:n})}return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{id:"pattern-selection",children:[Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("gosper")},children:"gosper"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("pulsar")},children:"pulsar"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("blinker")},children:"blinker"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("beacon")},children:"beacon"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("pentadecathlon")},children:"pentadecathlon"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("glider")},children:"glider"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("lwss")},children:"lawss"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("mwss")},children:"mawss"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return s("hwss")},children:"hwss"})]})})}var _={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.7)",zindex:1e3};function P(e){var t=e.isModalForPatterSelectionOpen,n=e.setOpenModalForPatternSelection,r=e.patternSelectedFromModal,o=e.setPatternSelectedFromModal,i=e.Patterns,s=e.setreRender,a=e.grid,l=e.setGrid;return t?c.a.createPortal(Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:_}),Object(u.jsx)("div",{className:"MODAL_STYLES",children:Object(u.jsx)(F,{isModalForPatterSelectionOpen:t,setOpenModalForPatternSelection:n,patternSelectedFromModal:r,setPatternSelectedFromModal:o,Patterns:i,setreRender:s,grid:a,setGrid:l})})," "]}),document.getElementById("portal2")):null}var M=70,G=70,R=["The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur","1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.","2. Any live cell with two or three live neighbours lives on to the next generation.","3. Any live cell with more than three live neighbours dies, as if by overpopulation.","4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction."],A=function(){var e=Object(r.useState)((function(){return"Start"})),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)((function(){return 1})),c=Object(s.a)(i,2),a=c[0],l=c[1],d=Object(r.useState)((function(){for(var e=[],t=0;t<M;t++)e.push(Array.from(Array(G),(function(){return 0})));for(var n=0;n<M;n++)e[0][n]=2,e[69][n]=2,e[n][0]=2,e[n][69]=2;return e})),b=Object(s.a)(d,2),j=b[0],f=b[1],h=Object(r.useState)((function(){return"gosper"})),m=Object(s.a)(h,2),O=m[0],g=m[1];Object(r.useEffect)((function(){}),[a,O]);var v=Object(r.useState)((function(){return R})),x=Object(s.a)(v,2),w=x[0],y=x[1];console.log("HH"+O);var N=Object(r.useState)((function(){return C({grid:j,setGrid:f,setreRender:l,patternSelectedFromModal:O}),100})),F=Object(s.a)(N,2),_=F[0],A=F[1];var L=Object(r.useState)((function(){return!0})),T=Object(s.a)(L,2),E=T[0],I=T[1];var B=Object(r.useState)((function(){return!1})),q=Object(s.a)(B,2),z=q[0],D=q[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"buttons-bar",children:[Object(u.jsx)("button",{className:"buttons",id:"button-reset",onClick:function(){!function(){for(var e=j,t=0;t<M;t++)for(var n=0;n<G;n++)e[t][n]=0===t||0===n||69===t||69===n?2:0;f(e),l((function(e){return e+1}))}()},children:"Reset Board"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return A((function(e){return e+100}))},children:"Slow"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){return A((function(e){return e-100}))},children:"Fast"}),Object(u.jsx)("button",{className:"buttons",onClick:function(){D(!0)},children:"Select Patterns"}),Object(u.jsx)("button",{className:"buttons",id:"button-info-request",onClick:function(){return y(R),void I(!0)},children:"Info About the Game"})]}),Object(u.jsx)("div",{className:"buttons-bar",id:"start-button-bar",children:Object(u.jsx)("input",{className:"checkbox",type:"checkbox",onClick:function(){o("Start"===n?"Stop":"Start"),l((function(e){return(e+1)%1e3}))}})}),Object(u.jsxs)("div",{className:"board",style:{gridTemplateColumns:"repeat(".concat(G,",10px)")},children:[j.map((function(e,t){return e.map((function(e,r){return Object(u.jsx)("div",{onClick:function(){!function(e,t){if("Stop"===n)I(!0),y(["Please Stop the game before adding any Life"]);else{var r=j;r[e][t]=1===j[e][t]?0:1,f(r),l((function(e){return(e+1)%1e3}))}}(t,r)},style:{width:"10px",height:"10px",backgroundColor:1===j[t][r]?"green":2===j[t][r]?"lightgrey":"white",border:"solid 1px black"}},"".concat(t,"-").concat(r))}))})),Object(u.jsx)(p,{numRows:M,numCols:G,grid:j,setGrid:f,buttonText:n,delayTime:_}),Object(u.jsx)(S,{open:E,setIsOpen:I,children:w.map((function(e){return Object(u.jsx)("div",{children:e},Object(k.a)())}))}),Object(u.jsx)(P,{isModalForPatterSelectionOpen:z,setOpenModalForPatternSelection:D,patternSelectedFromModal:O,setPatternSelectedFromModal:g,Patterns:C,setreRender:l,grid:j,setGrid:f})]})]}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsxs)("div",{className:"footer-tag",children:[Object(u.jsx)("h1",{children:"Project build by Prateek"}),Object(u.jsx)("h1",{children:"For more information regarding Conways-Game-Of-Life Click below"}),Object(u.jsx)("a",{className:"links",href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",children:"Link"})]}),Object(u.jsx)("div",{className:"linkedin-icon",children:Object(u.jsx)("i",{className:"fa fa-linkedin-square",onClick:function(){window.open("https://www.linkedin.com/in/prateek-sharma-891721196/")}})})]})]})};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root"))},6:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.8e917cc6.chunk.js.map