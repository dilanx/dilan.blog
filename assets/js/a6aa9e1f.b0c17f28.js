"use strict";(self.webpackChunkdilanx_blog=self.webpackChunkdilanx_blog||[]).push([[89],{9703:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(5999),r=a(4280);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(r.Z,{permalink:i,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},245:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(7571),r=a(2715);function i(e){const{sidebar:t,toc:a,children:i,...m}=e;return n.createElement(l.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--9",itemScope:!0,itemType:"http://schema.org/Blog"},i),n.createElement("aside",{className:"col col--3 dblog-aside"},a&&n.createElement("div",{className:"dblog-toc"},a),n.createElement(r.Z,{sidebar:t})))))}},2239:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7294),l=a(6010),r=a(2263),i=a(1944),m=a(5281),s=a(245),c=a(9703),o=a(197),d=a(4148);function g(e){const{metadata:t}=e,{siteConfig:{tagline:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:m,permalink:s}=t,c="/"===s?a:m;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:c,description:l}),n.createElement(o.Z,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(s.Z,{sidebar:l},n.createElement(d.Z,{items:a}),n.createElement(c.Z,{metadata:t}))}function p(e){return n.createElement(i.FG,{className:(0,l.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},n.createElement(g,e),n.createElement(u,e))}},7651:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(9960),i=a(6767),m=a.n(i);function s(e){return e.href?n.createElement(r.Z,e):n.createElement(n.Fragment,null,e.children)}function c(e){let{author:t,className:a}=e;const{name:r,title:i,url:c,email:o,icon:d}=t,g=c||o&&"mailto:"+o||void 0,u=m()({r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random())}).saturate(.1),p=u.isDark()?"white":"black";return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},d&&n.createElement("div",{className:"avatar__photo dblog-avatar",style:{backgroundColor:u.mix(m()("white")).hex(),color:p,font:d.font}},n.createElement("p",null,d.letters)),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s,{href:g,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}},5996:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7294),l=a(6010),r=a(9460),i=a(5289),m=a(169),s=a(9960);const c="preview_OkJ9",o="title_xvU1";function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:d,title:g}=a,u=i?"h1":"h2";return n.createElement("div",null,i?n.createElement("img",{src:"/img/preview"+d+".jpg",alt:"item preview",className:c}):n.createElement(s.Z,{itemProp:"url",to:d},n.createElement("img",{src:"/img/preview"+d+".jpg",alt:"item preview",className:c})),n.createElement(u,{className:(0,l.Z)(o,t),itemProp:"headline"},i?g:n.createElement(s.Z,{itemProp:"url",to:d},g,n.createElement(m.Z,{className:"dblog-arrow"}))))}var g=a(5999),u=a(8824);const p="container_iJTo";function E(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.c)();return t=>{const a=Math.ceil(t);return e(a,(0,g.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function b(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function v(){return n.createElement(n.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:m,readingTime:c,tags:o}=a,d=null==o?void 0:o[0];return n.createElement("div",{className:(0,l.Z)(p,"margin-vert--md",t)},d?n.createElement(s.Z,{to:d.permalink,className:(0,l.Z)("dblog-item-category","cat-"+d.label)},d.label.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")):n.createElement("p",{className:"dblog-item-category cat-none"},"Uncategorized"),n.createElement(v,null),n.createElement(b,{date:i,formattedDate:m}),void 0!==c&&n.createElement(n.Fragment,null,n.createElement(v,null),n.createElement(E,{readingTime:c})))}var N=a(4489);function Z(){return n.createElement("header",null,n.createElement(d,{className:"dblog-item-header-title"}),n.createElement(h,null),n.createElement(N.Z,{className:"dblog-item-header-authors"}))}var f=a(5048),_=a(2571);function k(e){let{children:t,className:a}=e;const m=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(i.Z,{className:(0,l.Z)(m,a)},n.createElement(Z,null),n.createElement(f.Z,{className:"dblog-item-content"},t),n.createElement(_.Z,null))}},4148:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(9460),r=a(5996);function i(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},198:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),l=a(6010),r=a(9960),i=a(5999);const m="sidebarItemTitle_r4Q1",s="sidebarItemList_QwSx",c="sidebarItem_lnhn",o="sidebarItemLink_yNGZ",d="sidebarItemLinkActive_oSRm",g="sidebarItemPreview_cjQn",u="sidebarItemText_eH0B";function p(e){let{sidebar:t}=e;return n.createElement("nav",{className:"thin-scrollbar","aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m)},t.title),n.createElement("ul",{className:(0,l.Z)(s,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c},n.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},n.createElement("img",{src:"/img/preview"+e.permalink+".jpg",alt:"sidebar item preview",className:g}),n.createElement("p",{className:u},e.title)))))))}},4280:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(9960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:m}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link","dblog-pagination",m?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"dblog-pagination-label"},a))}},9567:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(9960);const i="tag_d0Lz",m="tagRegular_bmnp",s="tagWithCount_vddX";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,c?s:m)},a,c&&n.createElement("span",null,c))}},4678:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9567);const i="tags_ysAR",m="tag_DyE2";function s(e){let{tags:t}=e;return n.createElement("ul",{className:(0,l.Z)(i,"padding--none")},t.slice(1).map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:m},n.createElement(r.Z,{label:t,permalink:a}))})))}}}]);