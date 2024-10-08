const y="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.0152%206L9.32%209.2976L12.6248%206L13.64%207.0152L9.32%2011.3352L5%207.0152L6.0152%206Z'%20fill='%235A657C'/%3e%3c/svg%3e",C=({...e})=>{const o=document.createElement("div");if(o.className="form-group autocomplete",e.label){const a=document.createElement("label");a.htmlFor=`${e.id}-datalist`,a.textContent=e.label,o.appendChild(a)}const t=document.createElement("input");t.type="text",t.className="form-control",t.placeholder=e.placeholder,t.setAttribute("list",`list-${e.id}`),t.id=`${e.id}-datalist`,e.disabled&&(t.disabled=!0),o.appendChild(t);const n=document.createElement("datalist");n.id=`list-${e.id}`,o.appendChild(n);const l=document.createElement("img");return l.src=y,l.className="arrow-icon",l.style.top=e.label?"50%":"calc(50% - 15px)",o.appendChild(l),e.options.forEach(a=>{const d=document.createElement("option");d.textContent=a,n.appendChild(d)}),setTimeout(()=>{$(`#${e.id}-datalist`).autocomplete()},100),o},x={title:"forms/Autocomplete",tags:["autodocs"],render:({...e})=>C({...e}),argTypes:{id:{name:"ID",control:"text"},label:{name:"Label",control:"text"},placeholder:{name:"Placeholder",control:"text"},disabled:{name:"Disabled",control:"boolean"},options:{name:"Options",control:"array"}},args:{}},r={args:{id:"autocomplete1",placeholder:"Search",options:["Jury Duty","Courthouses","Support & Knowledge Base"]}},s={args:{id:"autocomplete2",label:"Search",placeholder:"Search",options:["Jury Duty","Courthouses","Support & Knowledge Base"]}},c={args:{id:"autocomplete3",label:"Search",placeholder:"Search",disabled:!0,options:["Jury Duty","Courthouses","Support & Knowledge Base"]}};var p,u,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: "autocomplete1",
    placeholder: "Search",
    options: ["Jury Duty", "Courthouses", "Support & Knowledge Base"]
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,h,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "autocomplete2",
    label: "Search",
    placeholder: "Search",
    options: ["Jury Duty", "Courthouses", "Support & Knowledge Base"]
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,g,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: "autocomplete3",
    label: "Search",
    placeholder: "Search",
    disabled: true,
    options: ["Jury Duty", "Courthouses", "Support & Knowledge Base"]
  }
}`,...(w=(g=c.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const D=["Autocomplete","AutocompleteWithLabel","AutocompleteDisabled"];export{r as Autocomplete,c as AutocompleteDisabled,s as AutocompleteWithLabel,D as __namedExportsOrder,x as default};
