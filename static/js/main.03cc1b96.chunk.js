(this["webpackJsonpreact-basics"]=this["webpackJsonpreact-basics"]||[]).push([[0],{10:function(e,i,a){e.exports={menuItem:"menu-item_styles_menuItem__2mFdt",backgroundImage:"menu-item_styles_backgroundImage__2jWeV",content:"menu-item_styles_content__26_HG",large:"menu-item_styles_large__2kxhp",title:"menu-item_styles_title__1ft4d",subtitle:"menu-item_styles_subtitle__2JvWP"}},11:function(e,i,a){e.exports={collectionItem:"collection-item_styles_collectionItem__3pn0v",image:"collection-item_styles_image__1oTAk",collectionFooter:"collection-item_styles_collectionFooter__3RlRk",name:"collection-item_styles_name__1GlOM",price:"collection-item_styles_price__1GaZE"}},17:function(e,i,a){e.exports={collectionPreview:"collection-preview_styles_collectionPreview__3NJDS",title:"collection-preview_styles_title__1VU8n",preview:"collection-preview_styles_preview__IN7TE"}},25:function(e,i,a){e.exports={directoryMenu:"directory_styles_directoryMenu__1MomK"}},26:function(e,i,a){e.exports={homepage:"homepage_styles_homepage__329fc"}},32:function(e,i,a){},33:function(e,i,a){},39:function(e,i,a){"use strict";a.r(i);var t=a(1),n=a(0),s=a(23),r=a.n(s),l=(a(32),a(33),a(2)),m=a(7),c=a(9),o=a.n(c);function g(){return(g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function p(e,i){if(null==e)return{};var a,t,n=function(e,i){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],i.indexOf(a)>=0||(n[a]=e[a]);return n}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.createElement("desc",null,"Created with Sketch."),h=n.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},n.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},n.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),n.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),n.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),n.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),n.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function u(e,i){var a=e.title,t=e.titleId,s=p(e,["title","titleId"]);return n.createElement("svg",g({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:i,"aria-labelledby":t},s),void 0===a?n.createElement("title",{id:t},"Group"):a?n.createElement("title",{id:t},a):null,d,h)}var j=n.forwardRef(u),b=(a.p,function(){return Object(t.jsxs)("div",{className:o.a.header,children:[Object(t.jsx)(m.b,{to:"/",className:o.a.logoContainer,children:Object(t.jsx)(j,{className:o.a.logo})}),Object(t.jsxs)("div",{className:o.a.options,children:[Object(t.jsx)(m.b,{to:"/shop",className:o.a.option,children:"SHOP"}),Object(t.jsx)(m.b,{to:"/shop",className:o.a.option,children:"CONTACT"})]})]})}),_=a(15),k=a(16),O=a(10),f=a.n(O),v=function(e){var i=e.title,a=e.imageUrl,n=e.size,s=e.linkUrl,r=Object(l.f)(),m=Object(l.g)();return console.log(m),Object(t.jsxs)("div",{className:"".concat(f.a.menuItem," ").concat(f.a[n]),onClick:function(){return r.push("".concat(m.url).concat(s))},children:[Object(t.jsx)("div",{className:f.a.backgroundImage,style:{backgroundImage:"url(".concat(a,")")}}),Object(t.jsxs)("div",{className:f.a.content,children:[Object(t.jsx)("h1",{className:f.a.title,children:i.toUpperCase()}),Object(t.jsx)("span",{className:f.a.subtitle,children:"SHOP NOW"})]})]})},U=a(25),w=a.n(U),y=[{title:"hats",imageUrl:"images/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"images/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"images/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"images/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"images/men.png",size:"large",id:5,linkUrl:"shop/mens"}],x=function(){var e=Object(n.useState)(Object(_.a)(y)),i=Object(k.a)(e,1)[0];return Object(t.jsx)("div",{className:w.a.directoryMenu,children:i.map((function(e){var i=e.title,a=e.id,n=e.imageUrl,s=e.linkUrl,r=e.size;return Object(t.jsx)(v,{title:i,imageUrl:n,linkUrl:s,size:r},a)}))})},N=a(26),B=a.n(N),E=function(){return Object(t.jsx)("div",{className:B.a.homepage,children:Object(t.jsx)(x,{})})},I=a(11),S=a.n(I),T=function(e){e.id;var i=e.name,a=e.price,n=e.imageUrl;return Object(t.jsxs)("div",{className:S.a.collectionItem,children:[Object(t.jsx)("div",{className:S.a.image,style:{backgroundImage:"url(".concat(n,")")}}),Object(t.jsxs)("div",{className:S.a.collectionFooter,children:[Object(t.jsx)("span",{className:S.a.name,children:i}),Object(t.jsx)("span",{className:S.a.price,children:a})]})]})},C=a(17),J=a.n(C),P=function(e){var i=e.title,a=e.items;return Object(t.jsxs)("div",{className:J.a.collectionPreview,children:[Object(t.jsx)("h1",{className:J.a.title,children:i.toUpperCase()}),Object(t.jsx)("div",{className:J.a.preview,children:a.filter((function(e,i){return i<4})).map((function(e){return Object(t.jsx)(T,{price:e.price,imageUrl:e.imageUrl,name:e.name},e.id)}))})]})},W=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"/images/shop-img/hats/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"/images/shop-img/hats/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"/images/shop-img/hats/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"/images/shop-img/hats/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"/images/shop-img/hats/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"/images/shop-img/hats/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"/images/shop-img/hats/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"/images/shop-img/hats/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"/images/shop-img/hats/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"/images/shop-img/sneakers/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"/images/shop-img/sneakers/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"/images/shop-img/sneakers/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"/images/shop-img/sneakers/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"/images/shop-img/sneakers/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"/images/shop-img/sneakers/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"/images/shop-img/sneakers/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"/images/shop-img/sneakers/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"/images/shop-img/jackets/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"/images/shop-img/jackets/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"/images/shop-img/jackets/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"/images/shop-img/jackets/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"/images/shop-img/jackets/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"/images/shop-img/womens/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"/images/shop-img/womens/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"/images/shop-img/womens/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"/images/shop-img/womens/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"/images/shop-img/womens/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"/images/shop-img/womens/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"/images/shop-img/womens/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"/images/shop-img/mens/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"/images/shop-img/mens/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"/images/shop-img/mens/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"/images/shop-img/mens/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"/images/shop-img/mens/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"/images/shop-img/mens/polka-dot-shirt.png",price:25}]}],A=function(){var e=Object(n.useState)(Object(_.a)(W)),i=Object(k.a)(e,1)[0];return Object(t.jsx)("div",{className:"shop-page",children:i.map((function(e){var i=e.id,a=e.title,n=e.items,s=e.routeName;return Object(t.jsx)(P,{title:a,items:n,routeName:s},i)}))})};var R=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(b,{}),Object(t.jsxs)(l.c,{children:[Object(t.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(t.jsx)(l.a,{path:"/shop",component:A})]})]})};r.a.render(Object(t.jsx)(m.a,{children:Object(t.jsx)(R,{})}),document.getElementById("root"))},9:function(e,i,a){e.exports={header:"header_styles_header__12Wqo",logoContainer:"header_styles_logoContainer__2nZOR",options:"header_styles_options__1o8Lp",option:"header_styles_option__27veY"}}},[[39,1,2]]]);
//# sourceMappingURL=main.03cc1b96.chunk.js.map