(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a(179)},115:function(e,t,a){},118:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},119:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),l=(a(115),a(59)),i=a.n(l),m=a(85),u=a(13),s=(a(118),a(119),a(88)),d=a.n(s),p=(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_CHEC_PUBLIC_KEY:"pk_41548626beaa789663fab58559eb5501fc3a5e432232b"}).NEXT_PUBLIC_CHEC_PUBLIC_KEY,new d.a("pk_41548626beaa789663fab58559eb5501fc3a5e432232b",!0)),b=a(27),h=a(14),g=a(237),E=a(238),f=a(239),y=a(234),v=a(240),C=a(226),w=a(228),x=a(221),j=a(89),k=a.n(j),O=a(4),N=a(224),S=a(213),_=(Object(N.a)(function(e){return{appBar:Object(O.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(O.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(S.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}}),a(229)),I=a(236),B=a(95),A=(Object(B.a)(),Object(N.a)(function(e){return{title:{marginTop:"5%"},emptyButton:{minWidth:"150px"},checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),F=a(230),T=a(232),P=a(233),R=a(235),L=Object(N.a)(function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}}),W=function(e){var t=e.item,a=e.onUpdateCartQty,n=e.onRemoveFromCart,o=L(),c=function(e,t){return a(e,t)};return r.a.createElement(F.a,null,r.a.createElement(T.a,{image:t.image.url,alt:t.name,className:o.media}),r.a.createElement(P.a,{className:o.cardContent},r.a.createElement(y.a,{variant:"h4"},t.name),r.a.createElement(y.a,{variant:"h5"},t.line_total.formatted_with_symbol)),r.a.createElement(R.a,{className:o.cardActions},r.a.createElement("div",{className:o.buttons},r.a.createElement(w.a,{type:"button",size:"small",onClick:function(){return c(t.id,t.quantity-1)}},"-"),r.a.createElement(y.a,null,"\xa0",t.quantity,"\xa0"),r.a.createElement(w.a,{type:"button",size:"small",onClick:function(){return c(t.id,t.quantity+1)}},"+")),r.a.createElement(w.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return e=t.id,n(e);var e}},"Remove")))},q=function(e){var t=e.cart,a=e.onUpdateCartQty,n=e.onRemoveFromCart,o=e.onEmptyCart,c=A(),l=function(){return o()};if(!t.line_items)return"...loading";return r.a.createElement(I.a,null,r.a.createElement("div",{className:c.toolbar}),r.a.createElement(y.a,{className:c.title,variant:"h3",gutterBottom:!0},"Your Shopping Cart"),t.line_items.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{container:!0,spacing:3},t.line_items.map(function(e){return r.a.createElement(_.a,{item:!0,xs:12,sm:4,key:e.id},r.a.createElement(W,{item:e,onUpdateCartQty:a,onRemoveFromCart:n}))})),r.a.createElement("div",{className:c.cardDetails},r.a.createElement(y.a,{variant:"h4"},"Subtotal: ",t.subtotal.formatted_with_symbol),r.a.createElement("div",null,r.a.createElement(w.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:l},"Empty Cart"),r.a.createElement(w.a,{className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary"}," Checkout")))):r.a.createElement(y.a,{variant:"subtitle1"},"You have no items in your shopping cart.",r.a.createElement(b.b,{to:"/",className:c.link},"Start adding some!")))},z=function(e){var t=e.totalItems,a="./navbarStyles.js",n=Object(h.e)();return r.a.createElement("div",null,r.a.createElement(g.a,{sx:{flexGrow:1}},r.a.createElement(E.a,{position:"static",className:a.appBar,color:"inherit"},r.a.createElement(f.a,null,r.a.createElement(y.a,{component:b.b,to:"/",variant:"h6",className:a.title,color:"inherit"},r.a.createElement("img",{src:k.a,alt:"PetroElectronics.js",height:"25px",className:a.image}),"Petro Electronics"),r.a.createElement("div",{className:a.grow}),"/"===n.pathname&&r.a.createElement("div",{className:a.button},r.a.createElement(v.a,{component:b.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},null!==q?r.a.createElement(C.a,{badgeContent:t,color:"secondary"},r.a.createElement(x.a,null)):"")),r.a.createElement(w.a,{style:{position:"absolute",right:3},component:b.b,to:"/contactForm",color:"secondary"},"Contact Us")))))},U=a(222),D=Object(N.a)(function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}}),M=function(e){var t=e.product,a=e.onAddToCart,n=D();return r.a.createElement(F.a,{className:n.root},r.a.createElement(g.a,{m:2,pt:2},r.a.createElement(T.a,{className:n.media,image:t.image.url,title:t.name}),r.a.createElement(P.a,null,r.a.createElement("div",{className:n.cardContent},r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},t.name),r.a.createElement(y.a,{variant:"h5"},t.price.formatted_with_symbol)),r.a.createElement(y.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary"})),r.a.createElement(R.a,{disableSpacing:!0,className:n.classActions},r.a.createElement(v.a,{"aria-label":"Add to Cart",onClick:function(){return a(t.id,1)}},r.a.createElement(U.a,null)))))},G=function(e){var t=e.products,a=e.onAddToCart;return r.a.createElement("main",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_.a,{container:!0,justify:"center",spacing:4,direction:"row"},t.map(function(e){return r.a.createElement(_.a,{item:!0,key:e.id,xs:12,sm:6,md:4,lg:3},r.a.createElement(M,{product:e,onAddToCart:a}))})))},H=a(93),Y=a.n(H),Q=a(96),X=a(223),J=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],m=l[1],s=Object(n.useState)(""),d=Object(u.a)(s,2),p=d[0],b=d[1],h=Object(n.useState)(""),E=Object(u.a)(h,2),f=E[0],v=E[1];return r.a.createElement("div",{style:{backgroundImage:'url("https://d3qy1z8dfilwgh.cloudfront.net/chrome.jpeg")',backgroundPosition:"center",height:"100vh",backgroundSize:"cover"}},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==a.trim()&&""!==i.trim()&&""!==p.trim()){var t=Math.ceil(1),n=Math.floor(1e5),r={operation:"create",tableName:"ContactFormTable",payload:{Item:{Id:""+Math.floor(Math.random()*(n-t)+t),name:a,email:i,reason:p}}};Y.a.post("https://s1ncys8urb.execute-api.us-east-1.amazonaws.com/prod/contactform",r,{headers:{"x-api-key":"yyTR72wGng2P1f1CshGsU114yikgPFIb1XWr4bCm"}}).then(function(e){v("Contact Form Submitted!")}).catch(function(e){v("Server is down!")})}else v("All form fields required")}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.a,{maxWidth:"sm"},r.a.createElement(F.a,null,r.a.createElement(g.a,{m:2,pt:3},r.a.createElement(y.a,{variant:"h4",align:"center",color:"Text-primary",gutterBottom:!0},"Contact Form"),r.a.createElement(y.a,{variant:"h8",align:"center",color:"Text-primary",gutterBottom:!0},"Tell us why you'd like to hear from us!"),r.a.createElement(X.a,{margin:"normal",label:"Name",placeholder:"Enter your full name",name:"name",variant:"outlined",required:!0,value:a,onChange:function(e){return o(e.target.value)},fullWidth:!0,autoFocus:!0}),r.a.createElement(X.a,{margin:"normal",label:"Email",placeholder:"Enter your email",name:"email",variant:"outlined",required:!0,value:i,onChange:function(e){return m(e.target.value)},fullWidth:!0,autoFocus:!0}),r.a.createElement(X.a,{margin:"normal",label:"Reason",placeholder:"Enter the reason for contacting us",name:"reason",variant:"outlined",required:!0,value:p,onChange:function(e){return b(e.target.value)},fullWidth:!0,autoFocus:!0}),r.a.createElement(w.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,sx:{mt:3,mb:2}},"Submit"),r.a.createElement(Q.a,{sitekey:"6LdWgX0fAAAAAEdSq4PHgISIW7xz3wp9pGApytiM",onChange:function(e){console.log("Captcha value:",e)}}))))),f&&r.a.createElement("p",{className:"message"},f))},K=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=function(){var e=Object(m.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p.products.list().then(function(e){o(e.data)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){c()},[]),r.a.createElement(b.a,null,r.a.createElement("div",{style:{backgroundImage:'url("https://d3qy1z8dfilwgh.cloudfront.net/chrome.jpeg")',backgroundPosition:"center",height:"100vh",backgroundSize:"cover"}},r.a.createElement(z,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",element:r.a.createElement(G,{products:a})}),r.a.createElement(h.a,{exact:!0,path:"/ContactForm",element:r.a.createElement(J,null)}))))},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,242)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),V()},89:function(e,t,a){e.exports=a.p+"static/media/petroelectronics.517fdabd.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.44145707.chunk.js.map