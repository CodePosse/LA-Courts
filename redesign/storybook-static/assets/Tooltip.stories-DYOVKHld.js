import{T as f}from"./bootstrap.esm-DggnlyUa.js";const h=({...t})=>{const e=document.createElement("span");return e.setAttribute("data-bs-toggle","tooltip"),e.setAttribute("data-bs-placement",t.placement),e.setAttribute("data-bs-title",t.text),e.textContent="Hover over me",new f(e,{placement:t.placement,title:t.text}),e},A={title:"components/Tooltip",tags:["autodocs"],render:({...t})=>h({...t}),argTypes:{text:{name:"Text",control:"text"},placement:{name:"Placement",control:{type:"select",labels:{top:"Top",right:"Right",bottom:"Bottom",left:"Left"}},options:["top","right","bottom","left"]}},args:{}},o={args:{text:"Tooltip on top",placement:"top"}},r={args:{text:"Tooltip on right",placement:"right"}},a={args:{text:"Tooltip on bottom",placement:"bottom"}},n={args:{text:"Tooltip on left",placement:"left"}};var s,p,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "Tooltip on top",
    placement: "top"
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: "Tooltip on right",
    placement: "right"
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var T,g,d;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: "Tooltip on bottom",
    placement: "bottom"
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,x,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: "Tooltip on left",
    placement: "left"
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const B=["TooltipTop","TooltipRight","TooltipBottom","TooltipLeft"];export{a as TooltipBottom,n as TooltipLeft,r as TooltipRight,o as TooltipTop,B as __namedExportsOrder,A as default};
