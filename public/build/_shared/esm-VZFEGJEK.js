import{t as a}from"/build/_shared/chunk-OXWSRVLZ.js";import"/build/_shared/chunk-7HSNBBRJ.js";import"/build/_shared/chunk-XDMRC4Q6.js";var c=/((?<before>[\s\S]*?)\s+){0,1}\^\^\^(\s+(?<after>[\s\S]*)){0,1}/,C={name:"card",alias:"grid-item-card",arg:{type:a.parsed},options:{link:{type:a.string},header:{type:a.parsed},footer:{type:a.parsed}},body:{type:a.parsed,required:!0},run(s){let{link:p,header:r,footer:t}=s.options||{},e,l,n;if(r||t)e=r?[{type:"paragraph",children:r}]:[],l=s.body,n=t?[{type:"paragraph",children:t}]:[];else{let[u,i]=y(s.body);e=i.length?u:[];let h=i.length?i:u;[l,n]=g(h)}let o=[];return e.length&&o.push({type:"header",children:e}),s.arg&&o.push({type:"cardTitle",children:s.arg}),o.push(...l),n.length&&o.push({type:"footer",children:n}),[{type:"card",url:p,children:o}]}};function d(s){var p;let r=[],t=[],e=!1;return(p=s.children)===null||p===void 0||p.forEach(n=>{var o;if(e){t.push(n);return}if(n.type!=="text"||!n.value){r.push(n);return}let u=n.value,i=c.exec(u);if(!i){r.push(n);return}e=!0;let{before:h,after:f}=(o=i.groups)!==null&&o!==void 0?o:{};h&&r.push({type:"text",value:h}),f&&t.push({type:"text",value:f})}),{before:r.length?Object.assign(Object.assign({},s),{children:r}):null,after:t.length?Object.assign(Object.assign({},s),{children:t}):null,post:e}}function y(s){let p=[],r=[],t=!1;return s.forEach(e=>{if(t)r.push(e);else if(e.type!=="paragraph")p.push(e);else{let l=d(e),{before:n,after:o}=l;t=l.post,n&&p.push(n),o&&r.push(o)}}),[p,r]}function g(s){let p=[],r=[],t=!1;return s.forEach(e=>{t?r.push(e):e.type!=="blockBreak"?p.push(e):t=!0}),[p,r]}export{C as cardDirective,d as splitParagraphNode};
