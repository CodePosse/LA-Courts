import{e as O}from"./error_icon-0DotJWQH.js";import{D as F}from"./bootstrap.esm-DggnlyUa.js";const I=({...t})=>{var b;const r=document.createElement("div");if(r.className="dropdown",t.error&&r.classList.add("error"),t.label){const e=document.createElement("label");if(e.className="form-label",e.htmlFor="select",e.innerText=t.label,t.required){const o=document.createElement("span");o.innerText=" (required)",e.appendChild(o)}r.appendChild(e)}const n=document.createElement("button");n.className="btn w-100 btn-light border-1 bg-white dropdown-toggle",n.type="button",n.dataset.bsToggle="dropdown",n.setAttribute("aria-expanded","false"),n.innerText=t.placeholder||"Select",t.disabled&&(n.disabled=!0),r.appendChild(n);const u=document.createElement("ul");if(u.className="dropdown-menu border-0 w-100",r.appendChild(u),(b=t==null?void 0:t.options)==null||b.forEach(e=>{const o=document.createElement("li"),a=document.createElement("button");a.className="dropdown-item",a.innerText=e,o.appendChild(a),u.appendChild(o)}),t.helpText){const e=document.createElement("div");e.className="select-help-text mt-1";const o=document.createElement("span");o.innerText=t.helpText,e.appendChild(o),r.appendChild(e)}if(t.error){const e=document.createElement("div");e.className="select-error-message mt-1";const o=document.createElement("img");o.src=O,o.alt="error icon",o.style.width="16px";const a=document.createElement("span");a.className="error-message",a.innerText=t.error,e.appendChild(o),e.appendChild(a),r.appendChild(e)}return new F(r.querySelector(".dropdown-toggle")),r},z={title:"forms/Select",tags:["autodocs"],render:({...t})=>I({...t}),argTypes:{label:{name:"Label",control:"text"},placeholder:{name:"Select",control:"text"},error:{name:"Error",control:"text"},helpText:{name:"Help Text",control:"text"},required:{name:"Required",control:"boolean"},disabled:{name:"Disabled",control:"boolean"},options:{name:"Options",control:"array"}},args:{}},c={args:{options:["Action 1","Action 2","Action 3"]}},s={args:{label:"Label",options:["Action 1","Action 2","Action 3"]}},l={args:{label:"Label",options:["Action 1","Action 2","Action 3"],helpText:"Help text"}},i={args:{label:"Label",options:["Action 1","Action 2","Action 3"],error:"Error message"}},d={args:{label:"Label",options:["Action 1","Action 2","Action 3"],required:!0}},p={args:{label:"Label",options:["Action 1","Action 2","Action 3"],disabled:!0}},m={args:{label:"Label",options:["Action 1","Action 2","Action 3"],error:"Error message",helpText:"Help text",required:!0,disabled:!0}};var A,h,x;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: ["Action 1", "Action 2", "Action 3"]
  }
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,S,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"]
  }
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var T,L,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    helpText: "Help text"
  }
}`,...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var f,W,q;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    error: "Error message"
  }
}`,...(q=(W=i.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var C,N,H;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    required: true
  }
}`,...(H=(N=d.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var y,D,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    disabled: true
  }
}`,...(v=(D=p.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,_,M;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Label",
    options: ["Action 1", "Action 2", "Action 3"],
    error: "Error message",
    helpText: "Help text",
    required: true,
    disabled: true
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const B=["Select","SelectWithLabel","SelectWithHelpText","SelectWithError","SelectWithRequired","SelectWithDisabled","SelectWithAll"];export{c as Select,m as SelectWithAll,p as SelectWithDisabled,i as SelectWithError,l as SelectWithHelpText,s as SelectWithLabel,d as SelectWithRequired,B as __namedExportsOrder,z as default};
