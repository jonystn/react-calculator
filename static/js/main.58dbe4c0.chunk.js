(this["webpackJsonpbinary-calculator"]=this["webpackJsonpbinary-calculator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),o=a.n(c),r=(a(14),a(15),a(4)),i=(a(16),a(2)),s=a(3),u=l.a.createElement(i.a,{icon:s.a,style:{color:"#1AAFBE"}}),m=l.a.createElement(i.a,{icon:s.d,style:{color:"#7EB54D"}}),d=l.a.createElement(i.a,{icon:s.b,style:{color:"#E34E2A"}}),E=l.a.createElement(i.a,{icon:s.c,style:{color:"#F9B31B"}});function p(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),i=Object(r.a)(o,2),s=i[0],p=i[1],b=Object(n.useState)(null),h=Object(r.a)(b,2),v=h[0],y=h[1],f=Object(n.useState)(null),g=Object(r.a)(f,2),x=g[0],N=g[1];return l.a.createElement("div",{className:"Calculator"},l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"Top"},l.a.createElement("h1",null,"react calculator"),l.a.createElement("div",{className:"Hr"})),l.a.createElement("span",null,"operand 1"),l.a.createElement("div",{className:"Led"},l.a.createElement("input",{class:"Readout",type:"number",tabindex:"1",autoFocus:"autofocus",maxLength:"8",value:a,onChange:function(e){return c(e.target.value)}}),l.a.createElement("input",{class:"Placehold",type:"readonly",tabindex:"-1",disabled:"",placeholder:"88888888"})),l.a.createElement("span",null,"operand 2"),l.a.createElement("div",{className:"Led"},l.a.createElement("input",{class:"Readout",type:"number",tabindex:"2",maxLength:"8",value:s,onChange:function(e){return p(e.target.value)}}),l.a.createElement("input",{class:"Placehold",type:"readonly",tabindex:"-1",disabled:"",placeholder:"88888888"})),l.a.createElement("div",{className:"Btns"},l.a.createElement("button",{onClick:function(){a&&s&&N(Math.floor(a-s)),a&&s&&y(a+" - "+s)}},l.a.createElement("i",null,d)),l.a.createElement("button",{onClick:function(){a&&s&&N(Math.floor(a*s)),a&&s&&y(a+" \xd7 "+s)}},l.a.createElement("i",null,m)),l.a.createElement("button",{onClick:function(){a&&s&&N(Math.floor(a/s)),a&&s&&y(a+" \xf7 "+s)}},l.a.createElement("i",null,u)),l.a.createElement("button",{onClick:function(){a&&s&&N(Math.pow(s,1/a).toFixed(5)+"..."),a&&s&&y(a+" \u221a "+s)}},l.a.createElement("i",null,E))),l.a.createElement("span",null,"result"),l.a.createElement("div",{className:"ResultContainer"},l.a.createElement("div",{className:"LedLastOperation"},l.a.createElement("input",{className:"LastOperation",type:"text",tabindex:"-1",value:v,readOnly:!0}),l.a.createElement("input",{class:"Placehold",type:"readonly",tabindex:"-1",disabled:"",placeholder:"888888888888888888888"})),l.a.createElement("div",{className:"LedResult"},l.a.createElement("input",{className:"Result",tabindex:"-1",type:"text",value:x,onFocus:function(e){return e.target.select()},readOnly:!0}),l.a.createElement("input",{class:"Placehold",type:"readonly",tabindex:"-1",disabled:"",placeholder:"8888888888"}))),l.a.createElement("img",{src:"https://jonystn.github.io/react-calculator/images/logo.png",alt:"Logo"})))}var b=function(){return l.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.58dbe4c0.chunk.js.map