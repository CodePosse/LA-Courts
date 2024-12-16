const K=a=>({h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",paragraph:"p","paragraph-large":"p","paragraph-medium":"p","paragraph-small":"p","card-heading":"p"})[a],Q=({...a})=>{const d=document.createElement(K(a.variant));return d.innerText=a.text,d.className=`typography ${a.variant}`,d},R={title:"Content/Typography",tags:["autodocs"],render:({...a})=>Q({...a}),argTypes:{text:{name:"Text",control:"text"},variant:{name:"Variant",control:{type:"select",labels:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",paragraph:"Paragraph","paragraph-large":"Paragraph Large","paragraph-medium":"Paragraph Medium","paragraph-small":"Paragraph Small","card-heading":"Card Heading"}},options:["h1","h2","h3","h4","h5","h6","paragraph","paragraph-large","paragraph-medium","paragraph-small","card-heading","paragraph"]}}},r={args:{variant:"h1",text:"H1 - Newsreader"}},e={args:{variant:"h2",text:"H2 - Newsreader"}},t={args:{variant:"h3",text:"H3 - Newsreader"}},s={args:{variant:"h4",text:"H4 - Lato"}},n={args:{variant:"h5",text:"H5 - Lato"}},o={args:{variant:"h6",text:"H6 - Lato"}},p={args:{variant:"paragraph",text:"Paragraph - Lato"}},g={args:{variant:"paragraph-large",text:"Paragraph Large - Lato"}},c={args:{variant:"paragraph-medium",text:"Paragraph Medium - Lato"}},h={args:{variant:"paragraph-small",text:"Paragraph Small - Lato"}},m={args:{variant:"card-heading",text:"Card Heading - Lato"}};var i,u,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "h1",
    text: "H1 - Newsreader"
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var H,x,v;e.parameters={...e.parameters,docs:{...(H=e.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "h2",
    text: "H2 - Newsreader"
  }
}`,...(v=(x=e.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var L,P,S;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "h3",
    text: "H3 - Newsreader"
  }
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var y,N,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "h4",
    text: "H4 - Lato"
  }
}`,...(w=(N=s.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var C,T,M;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "h5",
    text: "H5 - Lato"
  }
}`,...(M=(T=n.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var E,_,b;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "h6",
    text: "H6 - Lato"
  }
}`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var f,O,V;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "paragraph",
    text: "Paragraph - Lato"
  }
}`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var $,j,k;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "paragraph-large",
    text: "Paragraph Large - Lato"
  }
}`,...(k=(j=g.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "paragraph-medium",
    text: "Paragraph Medium - Lato"
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,D,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "paragraph-small",
    text: "Paragraph Small - Lato"
  }
}`,...(F=(D=h.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,I,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "card-heading",
    text: "Card Heading - Lato"
  }
}`,...(J=(I=m.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const U=["H1","H2","H3","H4","H5","H6","Paragraph","ParagraphLarge","ParagraphMedium","ParagraphSmall","CardHeading"];export{m as CardHeading,r as H1,e as H2,t as H3,s as H4,n as H5,o as H6,p as Paragraph,g as ParagraphLarge,c as ParagraphMedium,h as ParagraphSmall,U as __namedExportsOrder,R as default};
