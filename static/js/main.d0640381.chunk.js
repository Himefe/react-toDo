(this.webpackJsonpteste=this.webpackJsonpteste||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(7),s=a(8),i=a(4),u=a(1),l=a.n(u),o=a(9),d=a.n(o),j=(a(15),a(0)),b=function(e){var t=e.texto,a=e.onClick;return Object(j.jsx)("button",{className:"botao-inserir",onClick:a,texto:t,children:t})},f=function(){var e=l.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],u=l.a.useState(""),o=Object(i.a)(u,2),d=o[0],f=o[1],h=l.a.useState(!1),x=Object(i.a)(h,2),O=x[0],p=x[1],m=l.a.useRef(),v=l.a.useRef(),k=l.a.useRef();l.a.useEffect((function(){O&&v.current.setAttribute("show","")}),[O]);var g=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==d&&" "!==d){e.next=5;break}return p(!0),clearTimeout(k.current),k.current=setTimeout((function(){p(!1)}),2e3),e.abrupt("return",null);case 5:n([{label:d,id:String(Math.floor(1e3*Math.random()))}].concat(Object(c.a)(a))),f("");case 7:m.current.focus();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.currentTarget.closest("li");t.hasAttribute("data-checked")?t.removeAttribute("data-checked"):t.setAttribute("data-checked","")},w=function(e){var t=e.currentTarget.closest("li").getAttribute("data-id"),r=a.findIndex((function(e){return e.id===t}));a.splice(r,1),n(Object(c.a)(a))};return Object(j.jsxs)("main",{children:[O&&Object(j.jsx)("div",{className:"alerta",ref:v,children:Object(j.jsx)("span",{children:"Por favor digite alguma tarefa!"})}),Object(j.jsx)("h2",{children:"Tarefas"}),Object(j.jsxs)("div",{className:"area-ul",children:[Object(j.jsxs)("div",{className:"input-area",children:[Object(j.jsx)("input",{type:"text",value:d,id:"label-inserir",onChange:function(e){var t=e.target;return f(t.value)},ref:m,onKeyDown:function(e){return"Enter"===e.key?g():null},placeholder:"Digite a sua tarefa"}),Object(j.jsx)(b,{onClick:g,texto:"Inserir nova tarefa"})]}),a.length<1&&Object(j.jsx)("span",{children:"Nenhuma tarefa inserida!"}),Object(j.jsx)("ul",{children:a.map((function(e){return Object(j.jsxs)("li",{"data-id":e.id,children:[Object(j.jsxs)("div",{className:"check-name-area",children:[Object(j.jsx)("span",{className:"check-area",onClick:N,children:Object(j.jsx)("span",{})}),Object(j.jsx)("span",{children:e.label})]}),Object(j.jsx)("span",{className:"excluir",onClick:w,children:"X"})]},e.id)}))})]})]})};d.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d0640381.chunk.js.map