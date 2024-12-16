const b=({...e})=>{const a=document.createElement("div");return a.innerText=e.text,a.className="badge",a.style.textTransform=e.textTransform,e.filled?a.classList.add(`${e.variant}-filled`):a.classList.add(e.variant),a.classList.add(e.size||"lg"),a},W={title:"Components/Badge",tags:["autodocs"],render:({...e})=>b({...e}),argTypes:{text:{name:"Text",control:"text"},filled:{name:"Filled",control:"boolean"},textTransform:{name:"Text Transform",control:{type:"select",labels:{uppercase:"Uppercase",lowercase:"Lowercase",capitalize:"Capitalize",none:"None"}},options:["uppercase","lowercase","capitalize","none"]},size:{name:"Size",control:{type:"select",labels:{lg:"Default",sm:"Small"}},options:["sm","lg"]},variant:{name:"Variant",control:{type:"select",labels:{primary:"Primary",positive:"Positive",negative:"Negative",warning:"Warning",secondary:"Secondary",featured:"Featured"}},options:["primary","positive","negative","warning","secondary","featured"]}}},r={args:{text:"Primary",filled:!1,variant:"primary"}},t={args:{text:"Positive",filled:!1,variant:"positive"}},s={args:{text:"Negative",filled:!1,variant:"negative"}},n={args:{text:"Warning",filled:!1,variant:"warning"}},i={args:{text:"Secondary",filled:!1,variant:"secondary"}},o={args:{text:"Featured",filled:!1,variant:"featured"}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: "Primary",
    filled: false,
    variant: "primary"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "Positive",
    filled: false,
    variant: "positive"
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,u,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: "Negative",
    filled: false,
    variant: "negative"
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,y,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: "Warning",
    filled: false,
    variant: "warning"
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var P,T,w;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: "Secondary",
    filled: false,
    variant: "secondary"
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var N,z,F;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: "Featured",
    filled: false,
    variant: "featured"
  }
}`,...(F=(z=o.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const L=["Primary","Positive","Negative","Warning","Secondary","Featured"];export{o as Featured,s as Negative,t as Positive,r as Primary,i as Secondary,n as Warning,L as __namedExportsOrder,W as default};
