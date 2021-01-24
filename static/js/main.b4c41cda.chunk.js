(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),c=e.n(r),o=e(13),i=e.n(o),u=(e(23),e(17)),s=e(4),b=e(5),l=e(6),m=e(9),j=e(8),d=(e(24),e(29)),f=e(2),h=e(3);function p(){var n=Object(f.a)(["\n\tmargin: 10px 0;\n"]);return p=function(){return n},n}function O(){var n=Object(f.a)(["\n\tmargin-left: 10px;\n"]);return O=function(){return n},n}function v(){var n=Object(f.a)(["\n\tdisplay: block;\n"]);return v=function(){return n},n}function C(){var n=Object(f.a)(["\n\tdisplay: block;\n\tmargin-bottom: 10px;\n"]);return C=function(){return n},n}function g(){var n=Object(f.a)(["\n\tpadding: 10px;\n\twidth: 450px;\n\tborder: 1px solid black;\n"]);return g=function(){return n},n}function x(){var n=Object(f.a)(["\n\tmargin-left: 20px;\n"]);return x=function(){return n},n}var y=h.a.div(x()),S=h.a.form(g()),I=h.a.label(C()),k=h.a.input(v()),w=h.a.button(O()),D=h.a.li(p()),A=function(n){var t=n.name,e=n.number,r=n.onInputChange,c=n.onSubmit;return Object(a.jsxs)(S,{onSubmit:c,children:[Object(a.jsxs)(I,{children:["Name",Object(a.jsx)(k,{type:"text",name:"name",value:t,onChange:r})]}),Object(a.jsxs)(I,{children:["Number",Object(a.jsx)(k,{type:"tel",name:"number",value:e,onChange:r})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})},F=function(n){var t=n.id,e=n.name,r=n.number,c=n.onDeleteContact;return Object(a.jsxs)(D,{children:[e,": ",r,Object(a.jsx)(w,{type:"button",onClick:function(){return c(t)},children:"Delete"})]})},L=function(n){var t=n.contacts,e=n.filter,r=n.onDeleteContact,c=t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n){var t=n.name,e=n.number,c=n.id;return Object(a.jsx)(F,{id:c,name:t,number:e,onDeleteContact:r},c)}));return Object(a.jsx)("ul",{children:c})},B=function(n){var t=n.filter,e=n.onInputChange;return Object(a.jsxs)(I,{children:["Find contacts by name",Object(a.jsx)(k,{type:"text",name:"filter",value:t,onChange:e})]})},N=function(n){Object(m.a)(e,n);var t=Object(j.a)(e);function e(){var n;Object(b.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.onInputChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(s.a)({},a,r))},n.onSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number;n.props.addContact({name:a,number:r}),n.setState({name:"",number:""})},n}return Object(l.a)(e,[{key:"render",value:function(){var n=this.props,t=n.contacts,e=n.filter,r=n.onInputChange,c=n.onDeleteContact,o=this.state,i=o.name,u=o.number;return Object(a.jsxs)(y,{children:[Object(a.jsx)("h1",{children:"PhoneBook"}),Object(a.jsx)(A,{name:i,number:u,onSubmit:this.onSubmit,onInputChange:this.onInputChange}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(B,{filter:e,onInputChange:r}),t.length>0&&Object(a.jsx)(L,{contacts:t,filter:e,onDeleteContact:c})]})}}]),e}(r.Component),P=function(n){Object(m.a)(e,n);var t=Object(j.a)(e);function e(){var n;Object(b.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.onInputChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(s.a)({},a,r))},n.addContact=function(t){var e=t.name,a=t.number;if(void 0===n.state.contacts.find((function(n){return n.name===e}))){var r={id:Object(d.a)(),name:e,number:a};n.setState((function(n){return{contacts:[].concat(Object(u.a)(n.contacts),[r])}}))}else alert("".concat(e," is already in contacts."))},n.deleteContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n}return Object(l.a)(e,[{key:"render",value:function(){var n=this.state,t=n.contacts,e=n.name,r=n.number,c=n.filter;return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{name:e,number:r,addContact:this.addContact,onInputChange:this.onInputChange,contacts:t,filter:c,onDeleteContact:this.deleteContact})})}}]),e}(r.Component),E=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,30)).then((function(t){var e=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),a(n),r(n),c(n),o(n)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),E()}},[[27,1,2]]]);
//# sourceMappingURL=main.b4c41cda.chunk.js.map