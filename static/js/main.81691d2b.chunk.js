(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),a=n.n(c),r=n(2),i=n.n(r),l=(n(13),n(3)),s=n(4),d=n(6),u=n(5),h=(n(14),n(15),document.querySelector("#modal-root")),j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(o.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(o.jsx)("div",{className:"Modal",children:this.props.children})}),h)}}]),n}(c.Component),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.showModal;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"Button",type:"button",onClick:this.toggleModal,children:"Open modal"}),e&&Object(o.jsxs)(j,{onClose:this.toggleModal,children:[Object(o.jsx)("button",{className:"Button",type:"button",onClick:this.toggleModal,children:"Close modal"}),Object(o.jsx)("h1",{children:"modal content"}),Object(o.jsx)("img",{src:"",alt:""})]})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.81691d2b.chunk.js.map