(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||c()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),c=r("8OQS");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("q1tI"),s=r("7ljp"),p=s.useMDXComponents,f=s.mdx,m=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,a=t.children,i=c(t,["scope","components","children"]),s=p(r),d=m(e),y=u.useMemo((function(){if(!a)return null;var t=l({React:u,mdx:f},d),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+a])).apply(void 0,[{}].concat(o(r)))}),[a,e]);return u.createElement(y,l({components:s},i))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function a(e,r,c){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a},a.apply(null,arguments)}t.exports=a},yZlL:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return f}));var n=r("dI71"),o=r("q1tI"),a=r.n(o),c=r("Wbzz"),i=r("A2+M"),l=r("6Gk8"),u=r("Bl7J"),s=r("vrFN"),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props.data.mdx;console.log("post.frontmatter",t.frontmatter);var e=this.props.data.site.siteMetadata.title,r=this.props.pageContext,n=r.previous,o=r.next;return a.a.createElement(u.a,{location:this.props.location,title:e},a.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("h1",{className:"title is-1"},t.frontmatter.title),a.a.createElement("p",{style:{marginBottom:t.frontmatter.updated?"0.5rem":"2rem"}},"Posted: ",t.frontmatter.date),t.frontmatter.updated&&a.a.createElement("p",{style:{marginBottom:"2rem"}},"Updated: ",t.frontmatter.updated)),a.a.createElement("div",{className:"content"},a.a.createElement(i.MDXRenderer,null,t.body)),a.a.createElement("footer",null,a.a.createElement(l.a,null))),a.a.createElement("nav",{style:{marginTop:"2rem"}},a.a.createElement("ul",null,a.a.createElement("li",null,n&&a.a.createElement(c.Link,{className:"button is-default",to:n.fields.slug,rel:"prev"},"← Go to: ",n.frontmatter.title)),a.a.createElement("li",null,o&&a.a.createElement(c.Link,{className:"button is-default",to:o.fields.slug,rel:"next"},"Go to: ",o.frontmatter.title," →")))),a.a.createElement("script",{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"}))},e}(a.a.Component);e.default=p;var f="3240826544"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-686951292bcd370c7f05.js.map