import{C as w}from"./bootstrap.esm-DggnlyUa.js";const y="data:image/svg+xml,%3csvg%20width='20'%20height='16'%20viewBox='0%200%2020%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.7071%208.70711C20.0976%208.31658%2020.0976%207.68342%2019.7071%207.29289L13.3431%200.928932C12.9526%200.538408%2012.3195%200.538408%2011.9289%200.928932C11.5384%201.31946%2011.5384%201.95262%2011.9289%202.34315L17.5858%208L11.9289%2013.6569C11.5384%2014.0474%2011.5384%2014.6805%2011.9289%2015.0711C12.3195%2015.4616%2012.9526%2015.4616%2013.3431%2015.0711L19.7071%208.70711ZM0%209L19%209V7L0%207L0%209Z'%20fill='black'/%3e%3c/svg%3e",f=({...e})=>{const n=document.createElement("div");n.className="accordion resource-accordion",n.id=e.id;const i=document.createElement("div");i.className="accordion-item mb-4";const s=document.createElement("h2");s.className="accordion-header";const t=document.createElement("button");t.className="accordion-button p-4",t.type="button",t.dataset.bsToggle="collapse",t.dataset.bsTarget=`#${e.id}-collapse`,t.setAttribute("aria-expanded","true"),t.setAttribute("aria-controls",`${e.id}-collapse`),t.innerHTML=e.title;const c=document.createElement("div");c.id=`${e.id}-collapse`,c.className="accordion-collapse collapse show",c.dataset.bsParent=`#${e.id}`;const d=document.createElement("div");d.className="accordion-body d-flex justify-content-between align-items-center";const l=document.createElement("table");l.className="table border-0 m-0";const h=document.createElement("tbody");return e.resources.forEach(p=>{const o=document.createElement("tr");o.className="border-top accordion-resource",p.active&&o.classList.add("active");const a=document.createElement("td");a.className="bg-transparent py-4 ps-5 pe-1",a.style.fontWeight="600",a.style.fontSize="14px",a.innerText=p.title;const m=document.createElement("td");m.className="bg-transparent py-4 ps-1",m.innerText=p.description;const u=document.createElement("td");u.className="bg-transparent py-4 pe-4";const g=document.createElement("img");g.src=y,u.appendChild(g),o.appendChild(a),o.appendChild(m),o.appendChild(u),h.appendChild(o)}),l.appendChild(h),d.appendChild(l),c.appendChild(d),s.appendChild(t),i.appendChild(s),i.appendChild(c),n.appendChild(i),new w(n,{toggle:!1}),n},x={title:"components/Accordions/Resources Accordion",tags:["autodocs"],render:({...e})=>f({...e}),argTypes:{id:{name:"ID",control:"text"},title:{name:"Resources",control:"text"},resources:{name:"Resources",control:"object"}},args:{}},r={args:{id:"resources-accordion",title:"Resources",resources:[{title:"Family Court Service",active:!1,description:"Mediation, Parenting Time Agreements and other services involving children."},{title:"Family Law Facilitator",active:!0,description:"Child Support Form Completion, Guided Interviews and Workshops."},{title:"Online Services",active:!1,description:"Things I can do without going to a court location."}]}};var v,C,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: "resources-accordion",
    title: "Resources",
    resources: [{
      title: "Family Court Service",
      active: false,
      description: "Mediation, Parenting Time Agreements and other services involving children."
    }, {
      title: "Family Law Facilitator",
      active: true,
      description: "Child Support Form Completion, Guided Interviews and Workshops."
    }, {
      title: "Online Services",
      active: false,
      description: "Things I can do without going to a court location."
    }]
  }
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const L=["ResourcesAccordion"];export{r as ResourcesAccordion,L as __namedExportsOrder,x as default};
