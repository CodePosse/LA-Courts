/* empty css               */import{M as F}from"./bootstrap.esm-DggnlyUa.js";const f={"modal-sm":"Small","modal-md":"Medium","modal-lg":"Large","modal-xl":"Full Width"},W=({...e})=>{const c=document.createElement("div"),o=document.createElement("button");o.type="button",o.className="btn btn-primary",o.dataset.bsToggle="modal",o.dataset.bsTarget=`#${e.id}`,o.textContent=`Launch ${f[e.size]||"demo"} modal`,c.appendChild(o);const t=document.createElement("div");t.className="modal fade",t.id=e.id,t.tabIndex=-1,c.appendChild(t);const p=document.createElement("div");p.className=`modal-dialog ${e.size}`,t.appendChild(p);const a=document.createElement("div");a.className="modal-content",p.appendChild(a);const d=document.createElement("div");d.className="modal-header",a.appendChild(d);const u=document.createElement("h5");u.className="modal-title",u.textContent=e.title,d.appendChild(u);const n=document.createElement("button");n.type="button",n.className="btn-close",n.dataset.bsDismiss="modal",n.setAttribute("aria-label","Close"),d.appendChild(n);const y=document.createElement("div");y.className="modal-body",y.innerHTML=e.body,a.appendChild(y);const s=document.createElement("div");s.className="modal-footer border-0",a.appendChild(s);const g=document.createElement("button");g.className="button secondary sm",g.innerHTML=`<span>${e.secondaryButton}</span>`,s.appendChild(g);const b=document.createElement("button");return b.className="button positive sm",b.innerHTML=`<span>${e.positiveButton}</span>`,s.appendChild(b),new F(t),c},D={title:"components/Modal",tags:["autodocs"],parameters:{docs:{description:{component:"Modal may not correctly render in Storybook due to the way Storybook renders components. You can go to individual component stories to see the correct rendering."}}},render:({...e})=>W({...e}),argTypes:{id:{name:"ID",control:"text"},title:{name:"Title",control:"text"},body:{name:"Body",control:"text"},secondaryButton:{name:"Secondary Button",control:"text"},positiveButton:{name:"Positive Button",control:"text"},size:{name:"Size",control:{type:"select",labels:f},options:["modal-sm","modal-md","modal-lg","modal-xl"]}},args:{}},l={args:{id:"small-modal",title:"Small Modal",body:"<p>Modal body text goes here.</p>",secondaryButton:"Close",positiveButton:"Save changes",size:"modal-sm"}},r={args:{id:"medium-modal",title:"Medium Modal",body:"<p>Modal body text goes here.</p>",secondaryButton:"Close",positiveButton:"Save changes",size:"modal-md"}},m={args:{id:"large-modal",title:"Large Modal",body:"<p>Modal body text goes here.</p>",secondaryButton:"Close",positiveButton:"Save changes",size:"modal-lg"}},i={args:{id:"full-width-modal",title:"Full Width Modal",body:"<p>Modal body text goes here.</p>",secondaryButton:"Close",positiveButton:"Save changes",size:"modal-xl"}};var h,M,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "small-modal",
    title: "Small Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-sm"
  }
}`,...(v=(M=l.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var B,C,S;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "medium-modal",
    title: "Medium Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-md"
  }
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var x,E,z;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "large-modal",
    title: "Large Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-lg"
  }
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var N,L,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: "full-width-modal",
    title: "Full Width Modal",
    body: "<p>Modal body text goes here.</p>",
    secondaryButton: "Close",
    positiveButton: "Save changes",
    size: "modal-xl"
  }
}`,...(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const H=["Small","Medium","Large","FullWidth"];export{i as FullWidth,m as Large,r as Medium,l as Small,H as __namedExportsOrder,D as default};
