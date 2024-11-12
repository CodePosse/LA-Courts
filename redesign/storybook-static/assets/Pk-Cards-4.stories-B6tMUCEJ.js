const c=({...e})=>{const t=document.createElement("div");t.className="card pk-card-4";const n=document.createElement("h5");n.className="card-title p-4",n.innerHTML=e.title,t.appendChild(n);const a=document.createElement("div");a.className="card-body",a.style.backgroundColor=e.cardBgColor,t.appendChild(a);const o=document.createElement("p");return o.className="card-text",o.innerHTML=e.text,a.appendChild(o),t},l={title:"components/Cards/PK Cards 4",tags:["autodocs"],render:({...e})=>c({...e}),argTypes:{title:{name:"Title",control:"text"},text:{name:"Text",control:"text"}},args:{}},r={args:{title:"Child Custody Mediation",text:`
      <p>Family Law Online Dispute Resolution Program</p>
      <p>Family Court Services-Child Custody Mediation</p>
    `}};var s,d,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "Child Custody Mediation",
    text: \`
      <p>Family Law Online Dispute Resolution Program</p>
      <p>Family Court Services-Child Custody Mediation</p>
    \`
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const p=["Style1"];export{r as Style1,p as __namedExportsOrder,l as default};
