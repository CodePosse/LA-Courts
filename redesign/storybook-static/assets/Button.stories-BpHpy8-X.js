/* empty css               */const A=({...e})=>{const a=document.createElement("button"),r=document.createElement("span");if(r.innerText=e.text,a.className="button",a.classList.add(e.variant),a.classList.add(e.size||"md"),e.disabled&&(a.disabled=!0),e.prefixIcon){const s=document.createElement("i");s.className=e.prefixIcon,s.classList.add("prefix-icon"),a.appendChild(s),a.appendChild(r)}if(e.suffixIcon){a.appendChild(r);const s=document.createElement("i");s.className=e.suffixIcon,s.classList.add("suffix-icon"),a.appendChild(s)}return!e.prefixIcon&&!e.suffixIcon&&a.appendChild(r),a},G={title:"Components/Button",tags:["autodocs"],render:({...e})=>A({...e}),argTypes:{text:{name:"Text",control:"text"},disabled:{name:"Disabled",control:"boolean"},prefixIcon:{name:"Prefix Icon",control:"text"},suffixIcon:{name:"Suffix Icon",control:"text"},size:{name:"Size",control:{type:"select",labels:{sm:"Small",md:"Medium",lg:"Large"}},options:["sm","md","lg"]},variant:{name:"Variant",control:{type:"select",labels:{primary:"Primary",secondary:"Secondary",positive:"Positive",negative:"Negative",transparent:"Transparent"}},options:["primary","secondary","positive","negative","transparent"]}},args:{}},t={args:{text:"Button",variant:"primary",size:"md",disabled:!1}},n={args:{text:"Secondary",variant:"secondary",size:"md",disabled:!1}},i={args:{text:"Positive",variant:"positive",size:"md",disabled:!1}},o={args:{text:"Negative",variant:"negative",size:"md",disabled:!1}},c={args:{text:"Transparent",variant:"transparent",size:"md",disabled:!1}},d={args:{text:"Disabled",variant:"primary",size:"md",disabled:!0}},m={args:{text:"Button",variant:"primary",size:"md",disabled:!1,prefixIcon:"fas fa-user"}},p={args:{text:"Button",variant:"primary",size:"md",disabled:!1,suffixIcon:"fas fa-user"}},l={args:{text:"Button",variant:"primary",size:"md",disabled:!1,prefixIcon:"fas fa-user",suffixIcon:"fas fa-user"}};var f,u,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,g,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: "Secondary",
    variant: "secondary",
    size: "md",
    disabled: false
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,I,z;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: "Positive",
    variant: "positive",
    size: "md",
    disabled: false
  }
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var S,B,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: "Negative",
    variant: "negative",
    size: "md",
    disabled: false
  }
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var T,N,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: "Transparent",
    variant: "transparent",
    size: "md",
    disabled: false
  }
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var h,D,E;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: "Disabled",
    variant: "primary",
    size: "md",
    disabled: true
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,_,M;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    prefixIcon: "fas fa-user"
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,V,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    suffixIcon: "fas fa-user"
  }
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var k,q,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    prefixIcon: "fas fa-user",
    suffixIcon: "fas fa-user"
  }
}`,...(w=(q=l.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const H=["Button","Secondary","Positive","Negative","Transparent","Disabled","PrefixIcon","SuffixIcon","PrefixSuffixIcon"];export{t as Button,d as Disabled,o as Negative,i as Positive,m as PrefixIcon,l as PrefixSuffixIcon,n as Secondary,p as SuffixIcon,c as Transparent,H as __namedExportsOrder,G as default};
