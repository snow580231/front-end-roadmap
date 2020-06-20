(this["webpackJsonpfront-end-roadmap"]=this["webpackJsonpfront-end-roadmap"]||[]).push([[10],{41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=p(n(0)),a=p(n(45)),c=p(n(9));function p(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({}),s=u.Provider,i=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(i,null,(function(t){return o.default.createElement(e,r({components:n||t},a))}))}};var l=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};l.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},t.default=l},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(41);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),c=s(a),p=s(n(44)),u=n(41);function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,s=e.components,i=void 0===s?{}:s,l=e.Layout,f=e.layoutProps,d=i[n+"."+t]||i[t]||m[t]||t;return l?((0,p.default)(this,l),c.default.createElement(l,r({components:i},f),c.default.createElement(d,a,u))):c.default.createElement(d,a,u)}}]),t}(a.Component);t.default=(0,u.withMDXComponents)(f)},44:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,i=s&&s(Object);e.exports=function e(t,n,l){if("string"!==typeof n){if(i){var m=s(n);m&&m!==i&&e(t,m,l)}var f=c(n);p&&(f=f.concat(p(n)));for(var d=0;d<f.length;++d){var h=f[d];if(!r[h]&&!o[h]&&(!l||!l[h])){var g=u(n,h);try{a(t,h,g)}catch(v){}}}return t}return t}},45:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(46));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},46:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(c(r),c(n(9))),a=c(n(47));c(n(48));function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,c,l="__create-react-context-"+(0,a.default)()+"__",m=function(e){function n(){var t,r;p(this,n);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=r=u(this,e.call.apply(e,[this].concat(a))),r.emitter=i(r.props.value),u(r,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(c=r)?0!==a||1/a===1/c:a!==a&&c!==c)?o=0:(o="function"===typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,c},n.prototype.render=function(){return this.props.children},n}(r.Component);m.childContextTypes=((n={})[l]=o.default.object.isRequired,n);var f=function(t){function n(){var e,r;p(this,n);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return e=r=u(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},u(r,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[l]?this.context[l].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return f.contextTypes=((c={})[l]=o.default.object,c),{Provider:m,Consumer:f}},e.exports=t.default},47:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(14))},48:function(e,t,n){"use strict";var r=n(49);e.exports=r},49:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},50:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},58:function(e,t,n){"use strict";n.r(t);var r=n(50),o=n(0),a=n.n(o),c=n(42);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(c.MDXTag,{name:"wrapper",components:t},a.a.createElement(c.MDXTag,{name:"h1",components:t},"NodeJS"),a.a.createElement(c.MDXTag,{name:"blockquote",components:t},a.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"\u53ef\u4ee5\u5185\u5d4c\u5728\u79fb\u52a8\u7aef\uff0c\u5b9e\u73b0\u524d\u7aef\u7684\u6df7\u5408\u5f0f\u5f00\u53d1\uff0c\u5927\u591a\u6570\u6df7\u5408\u5f0f\u5f00\u53d1\u6846\u67b6\u90fd\u662f\u57fa\u4e8eWebView\u6a21\u5f0f\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\u7684")),a.a.createElement(c.MDXTag,{name:"h2",components:t},"npm\u7684\u4f7f\u7528"),a.a.createElement(c.MDXTag,{name:"ul",components:t},a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.runoob.com/nodejs/nodejs-npm.html"}},"NPM \u4f7f\u7528\u4ecb\u7ecd-\u83dc\u9e1f\u6559\u7a0b"))),a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.npmjs.cn/"}},"npm \u4e2d\u6587\u6587\u6863"))),a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"}),a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"[\u82f1\u6587-\u7ffb\u5899][package.json/package-lock.json/npm-shrinkwrap.json\u7684\u533a\u522b]","(",a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://medium.com/@hossam.hilal0/package-json-vs-package-lock-json-vs-npm-shrinkwrap-json-33fcddc1521a"}},"https://medium.com/@hossam.hilal0/package-json-vs-package-lock-json-vs-npm-shrinkwrap-json-33fcddc1521a"),")"))),a.a.createElement(c.MDXTag,{name:"h2",components:t},"\ud83d\udcc4 \u6587\u7ae0"),a.a.createElement(c.MDXTag,{name:"ul",components:t},a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://nodejs.cn/"}},"Node\u4e2d\u6587\u5b98\u65b9\u6587\u6863"),"\uff08\u91cd\u70b9\u638c\u63e1\u5e38\u4f7f\u7528\u7684\u51e0\u4e2amodule\uff1afs\u3001http\u3001path\uff09"),a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.nodebeginner.org/index-zh-cn.html"}},"Node\u5165\u95e8")),a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://nqdeng.github.io/7-days-nodejs/"}},"\u4e03\u5929\u5b66\u4f1aNodeJS"))),a.a.createElement(c.MDXTag,{name:"h2",components:t},"\u9879\u76ee\u5b9e\u8df5"),a.a.createElement(c.MDXTag,{name:"ul",components:t},a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/goldbergyoni/nodebestpractices"}},"node best practices")),a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://eggjs.org/"}},"\u4f01\u4e1a\u7ea7\u6846\u67b6-Egg.js"))),a.a.createElement(c.MDXTag,{name:"h3",components:t},"\ud83d\udcda \u4e66\u7c4d"),a.a.createElement(c.MDXTag,{name:"ul",components:t},a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"\u300a\u6df1\u5165\u6d45\u51faNode\u300b"),a.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"\u300aNodeJs\u5b9e\u6218\u300b")))}}}]);
//# sourceMappingURL=10.9786b84a.chunk.js.map