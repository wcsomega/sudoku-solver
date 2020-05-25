(this["webpackJsonpsudoku-app"]=this["webpackJsonpsudoku-app"]||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(5),i=n.n(o),a=n(6),s=n(7),u=n(10),l=n(9),d=(n(16),n(2));function b(e,t,n,r){return function(e,t,n){for(var r=0;r<9;r++){var c=f(e,r,t);if(0!==c&&n===c)return!1}return!0}(e,n,r)&&function(e,t,n){for(var r=0;r<9;r++){var c=f(e,t,r);if(0!==c&&n===c)return!1}return!0}(e,t,r)&&function(e,t,n,r){for(var c=3*Math.floor(t/3),o=3*Math.floor(n/3),i=0;i<3;i++)for(var a=0;a<3;a++){var s=f(e,c+a,o+i);if(0!==s&&r===s)return!1}return!0}(e,t,n,r)}function f(e,t,n){return Object(d.c)(e,9*n+t)}function p(e,t,n,r){return Object(d.d)(e,9*n+t,r)}var m=n(1),x=n(3),O=function(e){var t=e.selected,n=e.fixed,r=e.children,c=Object(x.a)(e,["selected","fixed","children"]);return Object(m.a)("div",Object.assign({css:{display:"grid",backgroundColor:t?"lightskyblue":"transparent","&:hover":{backgroundColor:t?"lightskyblue":"aliceblue"}}},c),Object(m.a)("span",{css:{color:n?"black":"darkgray",fontSize:"xx-large",userSelect:"none",margin:"auto"}},r))},g=function(e){var t=e.children,n=Object(x.a)(e,["children"]);return Object(m.a)("button",Object.assign({css:{borderRadius:"5px",color:"white",backgroundColor:"dodgerblue",fontSize:"x-large",border:"0px solid transparent",padding:"10px 30px",margin:"20px 10px",textTransform:"uppercase","&:hover":{backgroundColor:"deepskyblue"}}},n),t)},h=Object(r.forwardRef)((function(e,t){var n=e.rows,r=e.columns,c=e.children,o=Object(x.a)(e,["rows","columns","children"]);return Object(m.a)("div",Object.assign({css:{display:"grid",gridTemplateColumns:"repeat(".concat(r,", 1fr)"),gridTemplateRows:"repeat(".concat(n,", 1fr)"),overflow:"hidden"},ref:t},o),c)})),j=function(e){var t=e.numbers,n=e.fixed,c=e.selection,o=e.onSelectCell,i=e.onClickOutside,a=Object(x.a)(e,["numbers","fixed","selection","onSelectCell","onClickOutside"]),s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=function(e){s.current&&!s.current.contains(e.target)&&i(e)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}})),Object(m.a)(h,Object.assign({rows:9,columns:9,css:{border:"2px solid black",borderRadius:"5px"},ref:s},a),t.map((function(e,t){var r=t%9,i=Math.trunc(t/9);return Object(m.a)(O,{onClick:function(){return o(t)},css:{borderTop:0===i?"0px solid transparent":i%3===0?"2px solid black":"1px solid grey",borderLeft:0===r?"0px solid transparent":r%3===0?"2px solid black":"1px solid grey"},selected:c===t,fixed:n.get(t),key:t},0===e?"":e)})))},v=function(e){var t=e.number,n=Object(x.a)(e,["number"]);return Object(m.a)("button",Object.assign({css:{borderRadius:"5px",width:"50px",height:"50px",fontSize:"x-large",border:"1px solid lightgrey",backgroundColor:"whitesmoke",margin:"2px"}},n),t)},k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).deselect=function(){r.setState({selection:-1})},r.handleClick=function(e){r.setState({selection:e})},r.resetPuzzle=function(){r.setState({numbers:Object(d.a)(Array(81).fill(0)),fixed:Object(d.a)(Array(81).fill(!1)),selection:-1})},r.solvePuzzle=function(){var e=function e(t){for(var n=0;n<9;n++)for(var r=0;r<9;r++)if(0===f(t,n,r)){for(var c=1;c<10;c++)if(b(t,n,r,c)){var o=e(p(t,n,r,c));if(null!==o)return o}return null}return t}(r.state.numbers);r.setState({numbers:e})},r.onNumButton=function(e){-1!==r.state.selection&&r.setState({numbers:r.state.numbers.set(r.state.selection,e),fixed:r.state.fixed.set(r.state.selection,0!==e)})},r.state={numbers:Object(d.a)(Array(81).fill(0)),fixed:Object(d.a)(Array(81).fill(!1)),selection:-1},r}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(m.a)("div",{css:{textAlign:"center"}},Object(m.a)(j,{css:{width:"540px",height:"540px",marginRight:"auto",marginLeft:"auto",marginTop:"40px",marginBottom:"20px"},numbers:this.state.numbers,fixed:this.state.fixed,onSelectCell:this.handleClick,selection:this.state.selection,onClickOutside:this.deselect}),Object(m.a)("div",null,Object(d.b)(1,10).map((function(t){return Object(m.a)(v,{number:t,key:t,onClick:function(){return e.onNumButton(t)}})}))),Object(m.a)(g,{onClick:this.solvePuzzle},"Solve Puzzle"),Object(m.a)(g,{onClick:this.resetPuzzle},"Reset Puzzle"),Object(m.a)(g,{onClick:function(){return e.onNumButton(0)}},"Erase Cell"))}}]),n}(c.a.Component);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c465fe51.chunk.js.map