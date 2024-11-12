import{e as j}from"./error_icon-0DotJWQH.js";const z="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%200.75H3C2.175%200.75%201.5%201.425%201.5%202.25V12.75H3V2.25H12V0.75ZM14.25%203.75H6C5.175%203.75%204.5%204.425%204.5%205.25V15.75C4.5%2016.575%205.175%2017.25%206%2017.25H14.25C15.075%2017.25%2015.75%2016.575%2015.75%2015.75V5.25C15.75%204.425%2015.075%203.75%2014.25%203.75ZM6%2015.75H14.25V5.25H6V15.75Z'%20fill='%235A657C'/%3e%3c/svg%3e",J="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%206.375C7.55025%206.375%206.375%207.55025%206.375%209C6.375%2010.4497%207.55025%2011.625%209%2011.625C10.4497%2011.625%2011.625%2010.4497%2011.625%209C11.625%207.55025%2010.4497%206.375%209%206.375ZM7.5%209C7.5%208.17157%208.17157%207.5%209%207.5C9.82843%207.5%2010.5%208.17157%2010.5%209C10.5%209.82843%209.82843%2010.5%209%2010.5C8.17157%2010.5%207.5%209.82843%207.5%209Z'%20fill='%230059C8'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203.5625C4.91038%203.5625%202.51541%206.95275%201.73298%208.77842C1.66349%208.94056%201.67409%209.12591%201.76161%209.27908C2.75301%2011.014%204.89764%2014.4375%209%2014.4375C13.1024%2014.4375%2015.247%2011.014%2016.2384%209.27908C16.3317%209.11578%2016.3372%208.91666%2016.2531%208.74844C15.8577%207.95765%2015.0703%206.67638%2013.8801%205.58535C12.6859%204.49068%2011.0565%203.5625%209%203.5625ZM9%2013.3125C5.7574%2013.3125%203.91953%2010.738%202.88181%208.9688C3.69287%207.2753%205.75583%204.6875%209%204.6875C10.6935%204.6875%2012.0641%205.44681%2013.1199%206.41465C14.056%207.27273%2014.7212%208.27497%2015.1081%208.98597C14.0686%2010.7546%2012.2321%2013.3125%209%2013.3125Z'%20fill='%230059C8'/%3e%3c/svg%3e",K=({...e})=>{const n=document.createElement("div");n.className="input",e.errorMessage&&n.classList.add("error");const o=document.createElement("label");o.className="form-label",o.htmlFor=e.id,n.appendChild(o);const s=document.createElement("span");if(s.className="label-left",s.textContent=e.label,o.appendChild(s),e.required){const t=document.createElement("span");t.textContent=" (required)",s.appendChild(t)}if(e.linkText&&e.linkUrl){const t=document.createElement("span");t.className="label-right";const r=document.createElement("a");r.className="label-link",r.href=e.linkUrl;const l=document.createElement("img");l.src=J,l.alt="";const b=document.createElement("span");b.textContent=e.linkText,r.appendChild(l),r.appendChild(b),t.appendChild(r),o.appendChild(t)}const T=`input-group-${e.id}`,i=document.createElement("div");i.className="input-group",i.id=T;const D=e.type==="textarea"?"textarea":"input",a=document.createElement(D);if(a.className="form-control",a.id=e.id,a.placeholder=e.placeholder,a.onfocus=()=>{document.querySelector(`#${T}`).classList.add("focus")},a.onblur=()=>{document.querySelector(`#${T}`).classList.remove("focus")},i.appendChild(a),n.appendChild(i),e.showCopy){const t=document.createElement("button");t.className="input-group-text bg-white";const r=document.createElement("img");r.src=z,r.alt="",t.appendChild(r),i.appendChild(t)}const p=document.createElement("div");p.className="form-text";const c=document.createElement("div");if(c.className="input-left",p.appendChild(c),e.inputLeftText){const t=document.createElement("div");t.className="mb-2",t.textContent=e.inputLeftText,c.appendChild(t)}if(e.errorMessage){const t=document.createElement("div");t.className="error-message",c.appendChild(t);const r=document.createElement("img");r.src=j,r.alt="",t.appendChild(r);const l=document.createElement("span");l.textContent=e.errorMessage,t.appendChild(l)}const y=document.createElement("div");return y.className="input-right",y.textContent=e.inputRightText,p.appendChild(y),n.appendChild(p),n},X={title:"forms/Input",tags:["autodocs"],render:({...e})=>K({...e}),argTypes:{id:{name:"ID",control:"text"},type:{name:"Type",control:{type:"select",labels:{text:"Text",textarea:"Textarea"}},options:["text","textarea"]},label:{name:"Label",control:"text"},required:{name:"Required",control:"boolean"},showCopy:{name:"Show Copy",control:"boolean"},linkUrl:{name:"Link URL",control:"text"},linkText:{name:"Link Text",control:"text"},placeholder:{name:"Placeholder",control:"text"},inputLeftText:{name:"Input Left Text",control:"text"},errorMessage:{name:"Error Message",control:"text"},inputRightText:{name:"Input Right Text",control:"text"}},args:{}},u={args:{id:"input",type:"text",label:"Label",required:!0,linkUrl:"https://example.com",linkText:"Link",placeholder:"Placeholder",inputLeftText:"Help Text",errorMessage:"Validation message",inputRightText:"0/240",showCopy:!0}},d={args:{id:"simple-text-input",type:"text",label:"Simple Text Input",required:!1,placeholder:"Enter text here",showCopy:!1}},h={args:{id:"textarea-help",type:"textarea",label:"Textarea with Help",required:!0,placeholder:"Type your message here...",inputLeftText:"This is a help text.",showCopy:!0}},m={args:{id:"required-error",type:"text",label:"Required Input",required:!0,placeholder:"This field is required",errorMessage:"This field cannot be empty.",showCopy:!1}},x={args:{id:"input-link",type:"text",label:"Input with Link",required:!1,linkUrl:"https://example.com",linkText:"Learn more",placeholder:"Search here...",showCopy:!0}},g={args:{id:"input-right-text",type:"text",label:"Input with Right Text",required:!1,placeholder:"Enter a value",inputRightText:"Characters left: 100",showCopy:!1}},C={args:{id:"optional-textarea",type:"textarea",label:"Optional Textarea",required:!1,placeholder:"Write your thoughts...",errorMessage:"Please ensure your input is valid.",showCopy:!1}},f={args:{id:"fully-configured",type:"text",label:"Fully Configured Input",required:!0,linkUrl:"https://example.com/help",linkText:"Help Link",placeholder:"Fill this field",inputLeftText:"Input your information.",errorMessage:"There was an error with your input.",inputRightText:"Max 150 characters",showCopy:!0}};var w,L,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "input",
    type: "text",
    label: "Label",
    required: true,
    linkUrl: "https://example.com",
    linkText: "Link",
    placeholder: "Placeholder",
    inputLeftText: "Help Text",
    errorMessage: "Validation message",
    inputRightText: "0/240",
    showCopy: true
  }
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var I,q,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: "simple-text-input",
    type: "text",
    label: "Simple Text Input",
    required: false,
    placeholder: "Enter text here",
    showCopy: false
  }
}`,...(v=(q=d.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var E,M,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: "textarea-help",
    type: "textarea",
    label: "Textarea with Help",
    required: true,
    placeholder: "Type your message here...",
    inputLeftText: "This is a help text.",
    showCopy: true
  }
}`,...(R=(M=h.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var S,H,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: "required-error",
    type: "text",
    label: "Required Input",
    required: true,
    placeholder: "This field is required",
    errorMessage: "This field cannot be empty.",
    showCopy: false
  }
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var U,W,V;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: "input-link",
    type: "text",
    label: "Input with Link",
    required: false,
    linkUrl: "https://example.com",
    linkText: "Learn more",
    placeholder: "Search here...",
    showCopy: true
  }
}`,...(V=(W=x.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var F,Z,O;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: "input-right-text",
    type: "text",
    label: "Input with Right Text",
    required: false,
    placeholder: "Enter a value",
    inputRightText: "Characters left: 100",
    showCopy: false
  }
}`,...(O=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:O.source}}};var P,A,_;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "optional-textarea",
    type: "textarea",
    label: "Optional Textarea",
    required: false,
    placeholder: "Write your thoughts...",
    errorMessage: "Please ensure your input is valid.",
    showCopy: false
  }
}`,...(_=(A=C.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var $,B,G;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: "fully-configured",
    type: "text",
    label: "Fully Configured Input",
    required: true,
    linkUrl: "https://example.com/help",
    linkText: "Help Link",
    placeholder: "Fill this field",
    inputLeftText: "Input your information.",
    errorMessage: "There was an error with your input.",
    inputRightText: "Max 150 characters",
    showCopy: true
  }
}`,...(G=(B=f.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const Y=["All","SimpleTextInput","TextareaWithHelp","RequiredWithError","InputWithLink","TextInputWithRightText","OptionalTextarea","FullyConfiguredInput"];export{u as All,f as FullyConfiguredInput,x as InputWithLink,C as OptionalTextarea,m as RequiredWithError,d as SimpleTextInput,g as TextInputWithRightText,h as TextareaWithHelp,Y as __namedExportsOrder,X as default};
