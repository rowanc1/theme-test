import{c as k}from"/build/_shared/chunk-XDMRC4Q6.js";var l=k((j,d)=>{d.exports=s;s.displayName="javadoclike";s.aliases=[];function s(f){(function(i){var p=i.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};function u(t,n){var r="doc-comment",a=i.languages[t];if(!!a){var e=a[r];if(!e){var c={};c[r]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},a=i.languages.insertBefore(t,"comment",c),e=a[r]}if(e instanceof RegExp&&(e=a[r]={pattern:e}),Array.isArray(e))for(var o=0,v=e.length;o<v;o++)e[o]instanceof RegExp&&(e[o]={pattern:e[o]}),n(e[o]);else n(e)}}function m(t,n){typeof t=="string"&&(t=[t]),t.forEach(function(r){u(r,function(a){a.inside||(a.inside={}),a.inside.rest=n})})}Object.defineProperty(p,"addSupport",{value:m}),p.addSupport(["java","javascript","php"],p)})(f)}});export{l as a};
