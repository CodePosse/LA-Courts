/* empty css               */const b=({...t})=>{const e=document.createElement("div");if(e.className="card pk-card-3 border-0",e.style.width="18rem",e.style.backgroundColor=t.cardBgColor,t.imgSrc){const r=document.createElement("img");r.src=t.imgSrc,r.className="card-img-top",r.alt="...",e.appendChild(r)}const o=document.createElement("button");o.className="button primary sm border-0",o.style.background=t.buttonColor,e.appendChild(o);const c=document.createElement("span");return c.innerHTML=t.buttonText,c.style.color=t.buttonTextColor,o.appendChild(c),e},i=""+new URL("card_image_sample_2-BUyjIYTJ.svg",import.meta.url).href,C={title:"components/Cards/PK Cards 3",tags:["autodocs"],render:({...t})=>b({...t}),argTypes:{imgSrc:{name:"Image Source",control:"text"},buttonText:{name:"Button Text",control:"text"},buttonColor:{name:"Button Color",control:"color"},buttonTextColor:{name:"Button Text Color",control:"color"}},args:{}},n={args:{imgSrc:i,buttonText:"Internet Access Options",buttonColor:"rgba(22, 51, 104, 0.8)",buttonTextColor:"#FFFFFF"}},a={args:{imgSrc:i,buttonText:"Internet Access Options",buttonColor:"#F3C629",buttonTextColor:"#000000"}};var s,l,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    imgSrc: cardImageSample2,
    buttonText: "Internet Access Options",
    buttonColor: "rgba(22, 51, 104, 0.8)",
    buttonTextColor: "#FFFFFF"
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    imgSrc: cardImageSample2,
    buttonText: "Internet Access Options",
    buttonColor: "#F3C629",
    buttonTextColor: "#000000"
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Style1","Style2"];export{n as Style1,a as Style2,x as __namedExportsOrder,C as default};
