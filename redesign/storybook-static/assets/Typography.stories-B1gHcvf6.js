const K=a=>({h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",paragraph:"p","paragraph-large":"p","paragraph-medium":"p","paragraph-small":"p","card-heading":"p"})[a],Q=({...a})=>{const d=document.createElement(K(a.variant));return d.innerText=a.text,d.className=`typography ${a.variant}`,d},R={title:"Content/Typography",tags:["autodocs"],render:({...a})=>Q({...a}),argTypes:{text:{name:"Text",control:"text"},variant:{name:"Variant",control:{type:"select",labels:{h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",paragraph:"Paragraph","paragraph-large":"Paragraph Large","paragraph-medium":"Paragraph Medium","paragraph-small":"Paragraph Small","card-heading":"Card Heading"}},options:["h1","h2","h3","h4","h5","h6","paragraph","paragraph-large","paragraph-medium","paragraph-small","card-heading","paragraph"]}}},r={args:{variant:"h1",text:"H1 - Newsreader"}},e={args:{variant:"h2",text:"H2 - Newsreader"}},t={args:{variant:"h3",text:"H3 - Newsreader"}},s={args:{variant:"h4",text:"H4 - Hanken Grotesk"}},n={args:{variant:"h5",text:"H5 - Hanken Grotesk"}},o={args:{variant:"h6",text:"H6 - Hanken Grotesk"}},p={args:{variant:"paragraph",text:"Paragraph - Hanken Grotesk"}},g={args:{variant:"paragraph-large",text:"Paragraph Large - Hanken Grotesk"}},c={args:{variant:"paragraph-medium",text:"Paragraph Medium - Hanken Grotesk"}},h={args:{variant:"paragraph-small",text:"Paragraph Small - Hanken Grotesk"}},m={args:{variant:"card-heading",text:"Card Heading - Hanken Grotesk"}};var i,H,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "h1",
    text: "H1 - Newsreader"
  }
}`,...(u=(H=r.parameters)==null?void 0:H.docs)==null?void 0:u.source}}};var l,k,x;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "h2",
    text: "H2 - Newsreader"
  }
}`,...(x=(k=e.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var v,P,G;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "h3",
    text: "H3 - Newsreader"
  }
}`,...(G=(P=t.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var S,y,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "h4",
    text: "H4 - Hanken Grotesk"
  }
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var w,C,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "h5",
    text: "H5 - Hanken Grotesk"
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var L,M,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "h6",
    text: "H6 - Hanken Grotesk"
  }
}`,...(E=(M=o.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var _,b,f;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "paragraph",
    text: "Paragraph - Hanken Grotesk"
  }
}`,...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var O,V,$;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "paragraph-large",
    text: "Paragraph Large - Hanken Grotesk"
  }
}`,...($=(V=g.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var j,q,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "paragraph-medium",
    text: "Paragraph Medium - Hanken Grotesk"
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,B,D;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "paragraph-small",
    text: "Paragraph Small - Hanken Grotesk"
  }
}`,...(D=(B=h.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var F,I,J;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "card-heading",
    text: "Card Heading - Hanken Grotesk"
  }
}`,...(J=(I=m.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const U=["H1","H2","H3","H4","H5","H6","Paragraph","ParagraphLarge","ParagraphMedium","ParagraphSmall","CardHeading"];export{m as CardHeading,r as H1,e as H2,t as H3,s as H4,n as H5,o as H6,p as Paragraph,g as ParagraphLarge,c as ParagraphMedium,h as ParagraphSmall,U as __namedExportsOrder,R as default};
