(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,i){e.exports=i.p+"static/media/crown.ed28accb.svg"},22:function(e,t,i){e.exports=i.p+"static/media/shopping-bag.09e6f5e7.svg"},25:function(e,t,i){e.exports=i(45)},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(12),r=i.n(c),l=i(7),s=(i(30),i(31),i(2)),o=(i(32),i(33),[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}]),m=function(){var e=Object(s.f)();return n.a.createElement("section",{className:"directory-menu"},o.map(function(t){var i=t.title,a=t.imageUrl,c=t.id,r=t.size,l=t.linkUrl;return console.log(a),n.a.createElement("div",{role:"button",tabIndex:c,onClick:function(){return e.push("/shop/".concat(l))},className:"menu-item ".concat(r||"")},n.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),n.a.createElement("div",{className:"content"},n.a.createElement("span",{className:"title"},i.toUpperCase()),n.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))},p=(i(38),i(21)),b=i.n(p),g=i(22),d=i.n(g),u=(i(39),i(10)),h=function(e){return e.cart.cartItems},k=function(){var e=Object(u.c)(h);return n.a.createElement("div",null,n.a.createElement("div",{className:"cart-icon"},n.a.createElement("img",{className:"shopping-icon",src:d.a}),n.a.createElement("span",{className:"item-count"},e.length)))},f=function(){return n.a.createElement("div",{className:"header"},n.a.createElement(l.b,{to:"/",className:"logo-container"},n.a.createElement("img",{src:b.a,alt:""})),n.a.createElement("nav",{className:"options"},n.a.createElement(l.b,{to:"/shop",className:"option"},n.a.createElement("span",null,"SHOP")),n.a.createElement(l.b,{to:"/signIn",className:"option"},n.a.createElement("span",null,"SIGN IN")),n.a.createElement(k,null)))},E=(i(41),i(42),{ADD_ITEM_TO_CART:"ADD_ITEM_TO_CART"}),U=function(e){var t=e.imageUrl,i=e.name,a=e.price,c=e.id,r=Object(u.b)(),l=function(e){return r(function(e){return{type:E.ADD_ITEM_TO_CART,payload:e}}(e))},s={name:i,imgUrl:t,price:a,id:c};return n.a.createElement("div",{className:"collection-item"},n.a.createElement("img",{className:"image",src:t,alt:i}),n.a.createElement("div",{className:"collection-footer"},n.a.createElement("span",{className:"name"},i),n.a.createElement("span",{className:"price"},a)),n.a.createElement("button",{type:"button",className:"custom-button",onClick:function(){l(s)}},"ADD TO CART"))},v=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],N=(i(43),function(){var e=Object(s.g)().collection,t=v.find(function(t){return t.routeName===e});if(!t)return null;var i=t.title,a=t.items;return a.forEach(function(e){console.log(e)}),n.a.createElement("section",{className:"collection-preview"},n.a.createElement("h1",{className:"title"},i),n.a.createElement("div",{className:"preview"},a.map(function(e){return n.a.createElement(U,Object.assign({key:e.id},e))})))});i(44);console.log(v);var w=function(){var e=Object(s.f)();return n.a.createElement("div",{className:"shop-page"},n.a.createElement("div",{className:"shop-column"},v.map(function(t,i){return n.a.createElement("div",{key:i,className:"shop-row"},n.a.createElement("h1",{onClick:function(){return e.push("/shop/".concat(t.routeName))}},t.title),n.a.createElement("div",{className:"shop-category-offers"},t.items.slice(0,4).map(function(e){return n.a.createElement(U,Object.assign({key:e.id},e))})))})))},T=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Sign In"))},B=function(){return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/shop/:collection",component:N}),n.a.createElement(s.a,{path:"/shop",component:w}),n.a.createElement(s.a,{path:"/signIn",component:T}),n.a.createElement(s.a,{path:"/",component:m})))},y=i(9),j=i(24),O=i(18),C={cartItems:[],isOpened:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_ITEM_TO_CART:return Object(O.a)({},e,{cartItems:[].concat(Object(j.a)(e.cartItems),[t.payload])});case"TOGGLE_CART":return Object(O.a)({},e,{isOpened:!e.isOpened});default:return e}},D=Object(y.b)({cart:J}),I=Object(y.c)(D);r.a.render(n.a.createElement(u.a,{store:I},n.a.createElement(l.a,null,n.a.createElement(B,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.099ef2b3.chunk.js.map