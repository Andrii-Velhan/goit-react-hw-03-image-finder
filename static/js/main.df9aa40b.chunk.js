(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),c=n.n(o),r=n(6),s=n.n(r),i=(n(15),n(2)),l=n(3),h=n(5),u=n(4),m=n(7),d=(n(16),n(17),document.querySelector("#modal-root")),b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(a.jsx)("div",{className:"Modal",children:this.props.children})}),d)}}]),n}(o.Component),j=n(9),p=(n(18),n(19),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:""},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(j.a)({},a,o))},e.handleSubmit=function(t){t.preventDefault();var n=e.state.name;""===n.trim()?m.b.error("Enter data !!!"):(e.props.onSubmit(n),e.setState({name:""}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",name:"name",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.name,onChange:this.handleChange})]})})})}}]),n}(o.Component));p.defaultProps={};var f=p,g=(n(20),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:[]},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;e.name!==this.props.name&&(console.log("name was changed:)"),fetch("https://pixabay.com/api/?q=".concat(this.props.name,"&page=1&key=19199733-53a137615acbd00e25277177c&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return n.setState({name:e})})),console.log(this.state.name.hits))}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:"ImageGallery",children:this.state.name.hits&&this.state.name.hits.map((function(e){e.id;var t=e.webformatURL,n=e.tags;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image"})})}))})})}}]),n}(o.Component)),O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({name:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.showModal;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{onSubmit:this.handleFormSubmit}),Object(a.jsx)("button",{className:"Button",type:"button",onClick:this.toggleModal,children:"Open modal"}),Object(a.jsx)(g,{name:this.state.name}),e&&Object(a.jsxs)(b,{onClose:this.toggleModal,children:[Object(a.jsx)("button",{className:"Button",type:"button",onClick:this.toggleModal,children:"Close modal"}),Object(a.jsx)("h1",{children:"modal content"}),Object(a.jsx)("img",{src:"",alt:""})]}),Object(a.jsx)(m.a,{autoClose:2500})]})}}]),n}(o.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.df9aa40b.chunk.js.map