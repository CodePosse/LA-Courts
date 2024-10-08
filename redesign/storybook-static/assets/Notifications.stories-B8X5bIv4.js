const g="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_69_30437)'%3e%3cpath%20d='M12%202.00092C6.48%202.00092%202%206.48092%202%2012.0009C2%2017.5209%206.48%2022.0009%2012%2022.0009C17.52%2022.0009%2022%2017.5209%2022%2012.0009C22%206.48092%2017.52%202.00092%2012%202.00092ZM10%2017.0009L5%2012.0009L6.41%2010.5909L10%2014.1709L17.59%206.58092L19%208.00092L10%2017.0009Z'%20fill='%23006D23'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_69_30437'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_69_30489)'%3e%3cpath%20d='M11.9999%202.00095C6.47988%202.00095%201.99988%206.48095%201.99988%2012.0009C1.99988%2017.5209%206.47988%2022.0009%2011.9999%2022.0009C17.5199%2022.0009%2021.9999%2017.5209%2021.9999%2012.0009C21.9999%206.48095%2017.5199%202.00095%2011.9999%202.00095ZM12.9999%2017.0009H10.9999V15.0009H12.9999V17.0009ZM12.9999%2013.0009H10.9999V7.00095H12.9999V13.0009Z'%20fill='%23BD002A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_69_30489'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",H="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.25%204.8075L13.1925%203.75L9%207.9425L4.8075%203.75L3.75%204.8075L7.9425%209L3.75%2013.1925L4.8075%2014.25L9%2010.0575L13.1925%2014.25L14.25%2013.1925L10.0575%209L14.25%204.8075Z'%20fill='%235A657C'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_69_30541)'%3e%3cpath%20d='M0.999939%2021.0009H22.9999L11.9999%202.00092L0.999939%2021.0009ZM12.9999%2018.0009H10.9999V16.0009H12.9999V18.0009ZM12.9999%2014.0009H10.9999V10.0009H12.9999V14.0009Z'%20fill='%23F07F23'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_69_30541'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",V=t=>{switch(t){case"positive":return g;case"negative":return E;case"warning":return M;default:return g}},Z=({...t})=>{const n=document.createElement("div");n.className="notification d-flex align-items-start justify-content-between p-3",n.classList.add(t.variant);const i=document.createElement("div");i.className="d-flex",t.title||t.link&&t.linkText?i.classList.add("align-items-start"):i.classList.add("align-items-center"),n.appendChild(i);const a=document.createElement("img");a.className="me-3",a.src=V(t.variant),a.alt=t.variant,i.appendChild(a);const o=document.createElement("div");if(i.appendChild(o),t.title){const e=document.createElement("div");e.className="notification-title mb-1",e.textContent=t.title,o.appendChild(e)}if(t.body){const e=document.createElement("div");e.className="notification-body",(t.title||t.link&&t.linkText)&&e.classList.add("mb-1"),e.textContent=t.body,o.appendChild(e)}if(t.link&&t.linkText){const e=document.createElement("a");e.className="btn btn-link p-0 text-decoration-none",e.href=t.link,e.textContent=t.linkText,o.appendChild(e)}const m=document.createElement("button");m.className="btn btn-text btn-sm p-0",n.appendChild(m);const p=document.createElement("img");return p.src=H,p.alt="Close",m.appendChild(p),n},B={title:"components/Notifications",tags:["autodocs"],render:({...t})=>Z({...t}),argTypes:{title:{name:"Title",control:"text"},body:{name:"Body",control:"text"},link:{name:"Link",control:"text"},linkText:{name:"Dismiss",control:"text"},variant:{name:"Variant",control:{type:"select",labels:{positive:"Positive",negative:"Negative",warning:"Warning"}},options:["positive","negative","warning"]}},args:{}},c={args:{title:"Notification title",body:"Notification body",link:"#",linkText:"Dismiss",variant:"positive"}},s={args:{title:"Notification title",body:"Notification body",link:"#",linkText:"Dismiss",variant:"negative"}},l={args:{title:"Notification title",body:"Notification body",link:"#",linkText:"Dismiss",variant:"warning"}},r={args:{body:"Notification body",variant:"positive"}},d={args:{title:"Notification title",body:"Notification body",variant:"positive"}};var v,f,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Notification title",
    body: "Notification body",
    link: "#",
    linkText: "Dismiss",
    variant: "positive"
  }
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var u,w,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Notification title",
    body: "Notification body",
    link: "#",
    linkText: "Dismiss",
    variant: "negative"
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,y,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Notification title",
    body: "Notification body",
    link: "#",
    linkText: "Dismiss",
    variant: "warning"
  }
}`,...(N=(y=l.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var k,L,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    body: "Notification body",
    variant: "positive"
  }
}`,...(C=(L=r.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: "Notification title",
    body: "Notification body",
    variant: "positive"
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const P=["Default","Negative","Warning","BodyOnly","WithoutLink"];export{r as BodyOnly,c as Default,s as Negative,l as Warning,d as WithoutLink,P as __namedExportsOrder,B as default};
