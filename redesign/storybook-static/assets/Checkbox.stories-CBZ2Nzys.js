const I=({...e})=>{const a=document.createElement("div");a.classList.add("form-check");const c=document.createElement("input");c.classList.add("form-check-input"),c.type="checkbox",c.id=e.id,c.value=e.value||"",c.checked=e.checked,c.disabled=e.disabled,c.name=e.name,c.indeterminate=e.indeterminate;const o=document.createElement("label");return o.classList.add("form-check-label"),o.setAttribute("for",e.id),o.innerText=e.label,a.appendChild(c),a.appendChild(o),a},L={title:"Forms/Checkbox",tags:["autodocs"],render:({...e})=>I({...e}),argTypes:{id:{name:"ID",control:"text"},label:{name:"Label",control:"text"},name:{name:"Name",control:"text"},checked:{name:"Checked",control:"boolean"},disabled:{name:"Disabled",control:"boolean"},indeterminate:{name:"Indeterminate",control:"boolean"}},args:{}},n={args:{label:"Checkbox",id:"checkbox1",name:"checkbox1"}},r={args:{label:"Checkbox",checked:!0,id:"checkbox2",name:"checkbox2"}},t={args:{label:"Checkbox",indeterminate:!0,id:"checkbox5",name:"checkbox5"}},s={args:{label:"Checkbox",disabled:!0,id:"checkbox3",name:"checkbox3"}},d={args:{label:"Checkbox",checked:!0,disabled:!0,id:"checkbox4",name:"checkbox4"}};var b,l,i;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Checkbox",
    id: "checkbox1",
    name: "checkbox1"
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var h,m,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Checkbox",
    checked: true,
    id: "checkbox2",
    name: "checkbox2"
  }
}`,...(k=(m=r.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var x,u,p;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Checkbox",
    indeterminate: true,
    id: "checkbox5",
    name: "checkbox5"
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var C,g,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Checkbox",
    disabled: true,
    id: "checkbox3",
    name: "checkbox3"
  }
}`,...(D=(g=s.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var E,f,S;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Checkbox",
    checked: true,
    disabled: true,
    id: "checkbox4",
    name: "checkbox4"
  }
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const v=["Checkbox","CheckboxChecked","CheckboxIndeterminate","CheckboxDisabled","CheckboxCheckedDisabled"];export{n as Checkbox,r as CheckboxChecked,d as CheckboxCheckedDisabled,s as CheckboxDisabled,t as CheckboxIndeterminate,v as __namedExportsOrder,L as default};
