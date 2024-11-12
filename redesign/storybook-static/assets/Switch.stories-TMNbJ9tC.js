import{e as v}from"./error_icon-0DotJWQH.js";const I=({...e})=>{const s=document.createElement("div");s.className="switch form-check form-switch";const a=document.createElement("input");a.classList.add("form-check-input"),a.type="checkbox",a.name=e.name,a.id=e.id,a.checked=e.checked,a.disabled=e.disabled;const r=document.createElement("label");if(r.classList.add("form-check-label"),r.setAttribute("for",e.id),r.innerText=e.label,e.error){const t=document.createElement("div");t.classList.add("error-message");const h=document.createElement("img");h.src=v,t.appendChild(h),t.appendChild(document.createTextNode(` ${e.error}`)),r.appendChild(t)}if(e.helpText){const t=document.createElement("div");t.classList.add("help-text"),t.innerText=e.helpText,r.appendChild(t)}return s.appendChild(a),s.appendChild(r),s},N={title:"forms/Switch",tags:["autodocs"],render:({...e})=>I({...e}),argTypes:{id:{name:"ID",control:"text"},label:{name:"Label",control:"text"},name:{name:"Name",control:"text"},switchedOn:{name:"Switched On",control:"boolean"},error:{name:"Error",control:"text"},helpText:{name:"Help Text",control:"text"},disabled:{name:"Disabled",control:"boolean"}},args:{}},n={args:{id:"switch1",label:"Switch Label",name:"switch1",switchedOn:!1,error:"Validation message",helpText:"Help text",disabled:!1}},c={args:{id:"switch2",label:"Switch Label",name:"switch2",switchedOn:!0,error:"",helpText:"",disabled:!1}},l={args:{id:"switch3",label:"Switch Label",name:"switch3",switchedOn:!1,error:"",helpText:"",disabled:!0}},i={args:{id:"switch4",label:"Switch Label",name:"switch4",switchedOn:!1,error:"Validation message",helpText:"",disabled:!1}},d={args:{id:"switch5",label:"Switch Label",name:"switch5",switchedOn:!1,error:"",helpText:"Help text",disabled:!1}},o={args:{id:"switch6",label:"Switch Label",name:"switch6",switchedOn:!1,error:"Validation message",helpText:"Help text",disabled:!1}};var m,p,w;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "switch1",
    label: "Switch Label",
    name: "switch1",
    switchedOn: false,
    error: "Validation message",
    helpText: "Help text",
    disabled: false
  }
}`,...(w=(p=n.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var b,x,u;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "switch2",
    label: "Switch Label",
    name: "switch2",
    switchedOn: true,
    error: "",
    helpText: "",
    disabled: false
  }
}`,...(u=(x=c.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var S,f,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: "switch3",
    label: "Switch Label",
    name: "switch3",
    switchedOn: false,
    error: "",
    helpText: "",
    disabled: true
  }
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var g,L,O;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "switch4",
    label: "Switch Label",
    name: "switch4",
    switchedOn: false,
    error: "Validation message",
    helpText: "",
    disabled: false
  }
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var E,H,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: "switch5",
    label: "Switch Label",
    name: "switch5",
    switchedOn: false,
    error: "",
    helpText: "Help text",
    disabled: false
  }
}`,...(k=(H=d.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var C,D,V;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "switch6",
    label: "Switch Label",
    name: "switch6",
    switchedOn: false,
    error: "Validation message",
    helpText: "Help text",
    disabled: false
  }
}`,...(V=(D=o.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const _=["Switch","SwitchChecked","SwitchDisabled","SwitchError","SwitchHelpText","SwitchErrorAndHelpText"];export{n as Switch,c as SwitchChecked,l as SwitchDisabled,i as SwitchError,o as SwitchErrorAndHelpText,d as SwitchHelpText,_ as __namedExportsOrder,N as default};
