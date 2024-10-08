import{e as v}from"./error_icon-0DotJWQH.js";const H=({...e})=>{const d=document.createElement("div");d.classList.add("form-check");const r=document.createElement("input");r.classList.add("form-check-input"),r.type="radio",r.name=e.name,r.id=e.id,r.checked=e.checked,r.disabled=e.disabled;const o=document.createElement("label");if(o.classList.add("form-check-label"),o.setAttribute("for",e.id),o.innerText=e.label,e.error){const a=document.createElement("div");a.classList.add("error-message");const l=document.createElement("img");l.src=v,a.appendChild(l),a.appendChild(document.createTextNode(` ${e.error}`)),o.appendChild(a)}if(e.helpText){const a=document.createElement("div");a.classList.add("help-text"),a.innerText=e.helpText,o.appendChild(a)}return d.appendChild(r),d.appendChild(o),d},I={title:"Forms/Radio",tags:["autodocs"],render:({...e})=>H({...e}),argTypes:{id:{name:"ID",control:"text"},label:{name:"Label",control:"text"},name:{name:"Name",control:"text"},checked:{name:"Checked",control:"boolean"},error:{name:"Error",control:"text"},helpText:{name:"Help Text",control:"text"},disabled:{name:"Disabled",control:"boolean"}},args:{}},t={args:{label:"Radio",id:"radio1",name:"radio1"}},n={args:{label:"Radio",checked:!0,id:"radio2",name:"radio2"}},i={args:{label:"Radio",error:"Validation message",id:"radio3",name:"radio3"}},s={args:{label:"Radio",helpText:"Help text",id:"radio4",name:"radio4"}},c={args:{label:"Radio",disabled:!0,id:"radio5",name:"radio5"}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Radio",
    id: "radio1",
    name: "radio1"
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,R;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Radio",
    checked: true,
    id: "radio2",
    name: "radio2"
  }
}`,...(R=(h=n.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var x,g,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Radio",
    error: "Validation message",
    id: "radio3",
    name: "radio3"
  }
}`,...(T=(g=i.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var E,k,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Radio",
    helpText: "Help text",
    id: "radio4",
    name: "radio4"
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var f,D,L;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Radio",
    disabled: true,
    id: "radio5",
    name: "radio5"
  }
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const _=["Radio","RadioChecked","RadioError","RadioHelpText","RadioDisabled"];export{t as Radio,n as RadioChecked,c as RadioDisabled,i as RadioError,s as RadioHelpText,_ as __namedExportsOrder,I as default};
