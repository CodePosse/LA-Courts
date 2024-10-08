import{D as E}from"./bootstrap.esm-DggnlyUa.js";const A=({...e})=>{var l;const t=document.createElement("div");t.className="menu dropdown";const n=document.createElement("button");n.textContent=e.text,n.className="menu-button",n.setAttribute("data-bs-toggle","dropdown"),e.disabled&&(n.disabled=!0),t.appendChild(n);const o=document.createElement("div");return o.className="dropdown-menu",(l=e.options)==null||l.forEach(c=>{const i=document.createElement("span");i.className="menu-title",i.textContent=c.title,o.appendChild(i);const d=document.createElement("ul");d.className="mb-0",c.items.forEach(m=>{const u=document.createElement("li"),r=document.createElement("a");r.className="dropdown-item",r.textContent=m.text,r.href=m.href,u.appendChild(r),d.appendChild(u)}),o.appendChild(d)}),t.appendChild(o),new E(t.querySelector(".dropdown-menu")),t},w={title:"components/Menu",tags:["autodocs"],render:({...e})=>A({...e}),argTypes:{text:{name:"Text",control:"text"},disabled:{name:"Disabled",control:"boolean"},options:{name:"Options",control:"object"}},args:{}},s={args:{text:"Menu item",disabled:!1,options:[{title:"Title",items:[{text:"Action",href:"#"},{text:"Another action",href:"#"},{text:"Something else here",href:"#"}]},{title:"Title",items:[{text:"Action",href:"#"},{text:"Another action",href:"#"},{text:"Something else here",href:"#"}]}]}},a={args:{text:"Disabled item",disabled:!0,options:[]}};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "Menu item",
    disabled: false,
    options: [{
      title: "Title",
      items: [{
        text: "Action",
        href: "#"
      }, {
        text: "Another action",
        href: "#"
      }, {
        text: "Something else here",
        href: "#"
      }]
    }, {
      title: "Title",
      items: [{
        text: "Action",
        href: "#"
      }, {
        text: "Another action",
        href: "#"
      }, {
        text: "Something else here",
        href: "#"
      }]
    }]
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: "Disabled item",
    disabled: true,
    options: []
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["Menu","Disabled"];export{a as Disabled,s as Menu,M as __namedExportsOrder,w as default};
