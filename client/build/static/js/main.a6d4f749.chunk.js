(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/bodychart.e358f18d.png"},38:function(e,t,a){},43:function(e,t,a){e.exports=a(91)},50:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),c=a.n(l),o=a(8),s=a(1),m=(a(50),a(6)),i=a(4),u=a.n(i);a(73);function E(){E=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(C){s=function(e,t,a){return e[t]=a}}function m(e,t,a,r){var l=t&&t.prototype instanceof d?t:d,c=Object.create(l.prototype),o=new T(r||[]);return n(c,"_invoke",{value:y(e,a,o)}),c}function i(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=m;var u={};function d(){}function N(){}function h(){}var v={};s(v,l,function(){return this});var f=Object.getPrototypeOf,p=f&&f(f(S([])));p&&p!==t&&a.call(p,l)&&(v=p);var g=h.prototype=d.prototype=Object.create(v);function b(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;n(this,"_invoke",{value:function(n,l){function c(){return new t(function(r,c){!function n(r,l,c,o){var s=i(e[r],e,l);if("throw"!==s.type){var m=s.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,c,o)},function(e){n("throw",e,c,o)}):t.resolve(u).then(function(e){m.value=e,c(m)},function(e){return n("throw",e,c,o)})}o(s.arg)}(n,l,r,c)})}return r=r?r.then(c,c):c()}})}function y(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return w()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var o=O(c,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=i(e,t,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}function O(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=i(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:w}}function w(){return{value:void 0,done:!0}}return N.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:N,configurable:!0}),N.displayName=s(h,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===N||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(x.prototype),s(x.prototype,c,function(){return this}),e.AsyncIterator=x,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new x(m(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(g),s(g,o,"Generator"),s(g,l,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),s=a.call(l,"finallyLoc");if(o&&s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),F(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;F(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var d=function(){var e=Object(s.m)();return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"NavTitle"},r.a.createElement(o.b,{className:"NavTitle",to:"/dashboard"},r.a.createElement("h1",{className:"Titletext"},"PhysioNB"))),r.a.createElement("div",{className:"NavRouters"},r.a.createElement(o.b,{className:"NavRouters routes",to:"/dashboard"},r.a.createElement("span",{className:"routes"},"Dashboard"))),r.a.createElement("div",{className:"NavBtns"},r.a.createElement("button",{className:"CreatePatientBtn CreateNote",onClick:function(){e("/newpatient")}},"Add New Patient"),r.a.createElement("button",{className:"CreateNote",onClick:function(){var t=localStorage.getItem("token");u()({url:"".concat("http://127.0.0.1:8081","/users/logout"),method:"POST",headers:{Authorization:"Bearer ".concat(t)}}).then(Object(m.a)(E().mark(function t(){return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("token");case 2:t.sent&&(localStorage.removeItem("token"),e("/"));case 4:case"end":return t.stop()}},t)})))}},"Sign Out"),r.a.createElement("button",{className:"CreateNote DelAccountBtn",onClick:function(){e("/deleteaccount")}},"Delete Account")))},N=a(40),h=a(2),v=(a(38),a(22)),f=a.n(v),p=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),m=o[0],i=o[1],E=Object(n.useState)(""),d=Object(h.a)(E,2),v=d[0],p=d[1],g=Object(n.useState)(""),b=Object(h.a)(g,2),x=b[0],y=b[1],O=Object(n.useState)(""),j=Object(h.a)(O,2),F=j[0],T=j[1],S=Object(n.useState)(""),w=Object(h.a)(S,2),C=w[0],H=w[1],L=Object(n.useState)(""),B=Object(h.a)(L,2),k=B[0],I=B[1],P=Object(n.useState)(""),D=Object(h.a)(P,2),A=D[0],_=D[1],q=Object(n.useState)(""),R=Object(h.a)(q,2),z=R[0],G=R[1],Y=Object(n.useState)(""),U=Object(h.a)(Y,2),M=U[0],Q=U[1],J=Object(n.useState)(""),V=Object(h.a)(J,2),W=V[0],K=V[1],X=Object(n.useState)(""),Z=Object(h.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ae=Object(h.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(""),ce=Object(h.a)(le,2),oe=ce[0],se=ce[1],me=Object(n.useState)(""),ie=Object(h.a)(me,2),ue=ie[0],Ee=ie[1],de=Object(n.useState)(""),Ne=Object(h.a)(de,2),he=Ne[0],ve=Ne[1],fe=Object(n.useState)(""),pe=Object(h.a)(fe,2),ge=pe[0],be=pe[1],xe=Object(n.useState)(""),ye=Object(h.a)(xe,2),Oe=ye[0],je=ye[1],Fe=Object(n.useState)(""),Te=Object(h.a)(Fe,2),Se=Te[0],we=Te[1],Ce=Object(n.useState)(""),He=Object(h.a)(Ce,2),Le=He[0],Be=He[1],ke=Object(n.useState)(""),Ie=Object(h.a)(ke,2),Pe=Ie[0],De=Ie[1],Ae=Object(s.m)(),_e=Object(s.o)().id,qe=localStorage.getItem("token"),Re=new Date,ze=Re.getDate()+"-"+(Re.getMonth()+1)+"-"+Re.getFullYear();u()({method:"GET",url:"".concat("http://127.0.0.1:8081","/patients/").concat(_e),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(qe)}}).then(function(e){De("NHI: ".concat(e.data.patientId,"    Name: ").concat(e.data.firstname," ").concat(e.data.lastname))});var Ge=function(e){e.preventDefault();var t={hpc:a,symptoms:m,pain:v,nature:x,severity:F,irritability:C,aggravatingfactors:k,easingfactors:A,dailypattern:z,pmh:M,sochx:W,work:$,stress:ne,hobbies:oe,exercise:ue,redflags:he,yellowflags:ge,investigations:Oe,treatment:Se,specialquestions:Le};u()({method:"POST",url:"".concat("http://127.0.0.1:8081","/notes"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(qe)},data:Object(N.a)({},t,{patient:_e})}).then(function(){console.log("New Note Added"),Ae("/dashboard")})};return r.a.createElement("div",{className:"FormContent"},r.a.createElement("h1",{className:"assessmentHead"},Pe," ",r.a.createElement("span",{className:"dateSpan"},ze)),r.a.createElement("form",{onSubmit:Ge},r.a.createElement("div",{className:"BigContainer"},r.a.createElement("div",{className:"LeftColumn"},r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"History of Presenting Complaint"),r.a.createElement("textarea",{className:"NoteText",value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Symptoms"),r.a.createElement("textarea",{className:"NoteText",value:m,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Pain"),r.a.createElement("textarea",{className:"NoteText",value:v,onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Nature"),r.a.createElement("textarea",{className:"NoteText",value:x,onChange:function(e){return y(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Severity"),r.a.createElement("textarea",{className:"NoteText",value:F,onChange:function(e){return T(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Irritability"),r.a.createElement("textarea",{className:"NoteText",value:C,onChange:function(e){return H(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Aggravating Factors"),r.a.createElement("textarea",{className:"NoteText",value:k,onChange:function(e){return I(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Easing Factors"),r.a.createElement("textarea",{className:"NoteText",value:A,onChange:function(e){return _(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Daily Pattern"),r.a.createElement("textarea",{className:"NoteText",value:z,onChange:function(e){return G(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Past Medical History"),r.a.createElement("textarea",{className:"NoteText",value:M,onChange:function(e){return Q(e.target.value)}}))),r.a.createElement("div",{className:"RightColumn"},r.a.createElement("img",{src:f.a,alt:"bodychart",className:"bodychart"}),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Social History"),r.a.createElement("textarea",{className:"NoteText",value:W,onChange:function(e){return K(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Work"),r.a.createElement("textarea",{className:"NoteText",value:$,onChange:function(e){return ee(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Stress"),r.a.createElement("textarea",{className:"NoteText",value:ne,onChange:function(e){return re(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Hobbies"),r.a.createElement("textarea",{className:"NoteText",value:oe,onChange:function(e){return se(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Exercise"),r.a.createElement("textarea",{className:"NoteText",value:ue,onChange:function(e){return Ee(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Red Flags"),r.a.createElement("textarea",{className:"NoteText",value:he,onChange:function(e){return ve(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Yellow Flags"),r.a.createElement("textarea",{className:"NoteText",value:ge,onChange:function(e){return be(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Investigations"),r.a.createElement("textarea",{className:"NoteText",value:Oe,onChange:function(e){return je(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Treatment"),r.a.createElement("textarea",{className:"NoteText",value:Se,onChange:function(e){return we(e.target.value)}})),r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Notes"),r.a.createElement("textarea",{className:"NoteText",value:Le,onChange:function(e){return Be(e.target.value)}})),r.a.createElement("button",{className:"CreateNoteBtn Btns CreateNewPatientBtn",onClick:Ge},"Create Assessment")))))},g=(a(74),function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("h2",{className:"FooterTitle"},"PhysioNB"),r.a.createElement("div",{className:"Router"},r.a.createElement("span",{className:"Routes"},"About"),r.a.createElement("span",{className:"Routes"},"Contact"),r.a.createElement(o.b,{to:"/mydetails"}," ",r.a.createElement("span",{className:"Routes"},"My Details"))))});var b=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(g,null))},x=(a(75),a(23)),y=a.n(x),O=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1],c=function(){var e=localStorage.getItem("token");u.a.get("".concat("http://127.0.0.1:8081","/patients"),{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){console.log(e),l(e.data)}).catch(function(e){console.log(e.message)})};return Object(n.useEffect)(function(){c()},[]),Object(n.useEffect)(function(){c()},[l]),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"patientColumn"},r.a.createElement("h1",{className:"HomePatients"},"Patients List"),!a||0===a.length&&r.a.createElement("h2",{className:"NoPatientsFound"},"No Patients Found"),r.a.createElement("div",{className:"PatientList"},a&&r.a.createElement("div",null," ",r.a.createElement("table",{className:"patientsTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"NHI"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Create Note"),r.a.createElement("th",null,"View Notes"),r.a.createElement("th",null,"Delete Patient"))),r.a.createElement("tbody",null,a.map(function(e){return r.a.createElement("tr",{className:"Patient"},r.a.createElement("td",null,r.a.createElement(o.b,{className:"routes",to:"/getpatient/".concat(e._id)},e.patientId)),r.a.createElement("td",null,e.firstname),r.a.createElement("td",null,e.lastname),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/createassessment/".concat(e._id)},r.a.createElement("div",null,r.a.createElement("button",{className:"AddBtn"},"+")))),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/getnote/".concat(e._id,"/").concat(e.firstname,"/").concat(e.lastname)},r.a.createElement("button",{className:"GetNoteButton"},"View Notes"))),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/deletepatient/".concat(e._id)},r.a.createElement("span",{className:"DelIcon"},r.a.createElement(y.a,null)))))})))," "))))};var j=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(O,null),r.a.createElement(g,null))},F=(a(82),function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(s.o)().id,o=Object(s.m)(),m=localStorage.getItem("token");u()({url:"".concat("http://127.0.0.1:8081","/notes/").concat(c),method:"GET",headers:{Authorization:"Bearer ".concat(m)}}).then(function(e){l(e.data.content)}).catch(function(e){console.log(e.message)});return r.a.createElement("div",{className:"DeleteTask"},r.a.createElement("h2",{className:"DelQuestion"},"Are you sure you want to delete this note?"),r.a.createElement("div",{className:"DelNoteContent"},a),r.a.createElement("div",{className:"DeleteBtns"},r.a.createElement("button",{onClick:function(){o("/dashboard")},className:"NoDeleteButton DeleteButton"},"No"),r.a.createElement("button",{onClick:function(){u()({url:"".concat("http://127.0.0.1:8081","/notes/").concat(c),method:"DELETE",headers:{Authorization:"Bearer ".concat(m)}}).then(o("/dashboard"))},className:"YesDeleteButton DeleteButton"},"Yes")))});var T=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(F,null),r.a.createElement(g,null))},S=(a(83),function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),m=o[0],i=o[1],E=Object(s.m)();return r.a.createElement("div",{className:"Signin"},r.a.createElement("h1",{className:"SigninHead"},"PhysioNB"),r.a.createElement("div",{className:"SigninForm"},r.a.createElement("form",null,r.a.createElement("div",{className:"FormUsername"},r.a.createElement("span",{className:"FormLabel"},"Username"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:a,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:"FormPassword"},r.a.createElement("span",{className:"FormLabel"},"Password"),r.a.createElement("input",{type:"password",className:"FormInput",required:!0,value:m,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",{className:"FormBtns"},r.a.createElement("button",{className:"Btns signinBtn",onClick:function(e){e.preventDefault();var t={username:a,password:m};u()({method:"POST",url:"".concat("http://127.0.0.1:8081","/users/login"),headers:{"Content-Type":"application/json"},data:t}).then(function(e){console.log("User logged in");var t=e.data.token;localStorage.setItem("token",t),E("/dashboard")}).catch(function(e){alert("Authentication failed"),l(""),i("")})}},"Sign In"),r.a.createElement("p",null,"No account? Sign up here..."),r.a.createElement("button",{className:"Btns registerBtn",onClick:function(){E("/signup")}}," ","Sign up"," ")))))});var w=function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(g,null))};a(84);var C=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),m=o[0],i=o[1],E=Object(n.useState)(""),d=Object(h.a)(E,2),N=d[0],v=d[1],f=Object(n.useState)(""),p=Object(h.a)(f,2),g=p[0],b=p[1],x=Object(n.useState)(""),y=Object(h.a)(x,2),O=y[0],j=y[1],F=Object(n.useState)(""),T=Object(h.a)(F,2),S=T[0],w=T[1],C=Object(s.m)();return r.a.createElement("div",{className:"Signup"},r.a.createElement("h1",{className:"SignupHead"},"PhysioNB"),r.a.createElement("div",{className:"SignupForm"},r.a.createElement("form",null,r.a.createElement("div",{className:"Form"},r.a.createElement("div",{className:"SignupFormUsername FormRow"},r.a.createElement("span",{className:"FormLabel"},"Username"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:a,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:"FormPassword FormRow"},r.a.createElement("span",{className:"FormLabel"},"Password"),r.a.createElement("input",{type:"password",className:"FormInput",required:!0,value:m,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",{className:"SignupFormFirstName FormRow"},r.a.createElement("span",{className:"FormLabel"},"First Name"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:N,onChange:function(e){v(e.target.value)}})),r.a.createElement("div",{className:"SignupFormLastName FormRow"},r.a.createElement("span",{className:"FormLabel"},"Last Name"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:g,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{className:"SignupFormEmail FormRow"},r.a.createElement("span",{className:"FormLabel"},"Email"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:O,onChange:function(e){j(e.target.value)}})),r.a.createElement("div",{className:"SignupFormDesignation FormRow"},r.a.createElement("span",{className:"FormLabel"},"Designation"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:S,onChange:function(e){w(e.target.value)}}))),r.a.createElement("div",{className:"signupBtn"},r.a.createElement("button",{className:"Btns signupBtn1",type:"button",onClick:function(e){e.preventDefault();var t={username:a,password:m,firstname:N,lastname:g,email:O,designation:S};u()({method:"POST",url:"".concat("http://127.0.0.1:8081","/users/"),headers:{"Content-Type":"application/json"},data:t}).then(function(e){console.log("New User created"),localStorage.setItem("token",e.data.token),C("/dashboard")}).catch(function(e){alert(e),l(""),i(""),w("")})}}," ","Sign up"," ")))))};var H=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(g,null))};a(85);var L=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),m=o[0],i=o[1],E=Object(n.useState)(""),d=Object(h.a)(E,2),N=d[0],v=d[1],f=Object(n.useState)(""),p=Object(h.a)(f,2),g=p[0],b=p[1],x=Object(n.useState)(""),y=Object(h.a)(x,2),O=y[0],j=y[1],F=Object(n.useState)(""),T=Object(h.a)(F,2),S=T[0],w=T[1],C=Object(n.useState)(""),H=Object(h.a)(C,2),L=H[0],B=H[1],k=Object(s.m)(),I=localStorage.getItem("token");return r.a.createElement("div",{className:"NewPatient"},r.a.createElement("div",{className:"NewPatientForm"},r.a.createElement("form",null,r.a.createElement("h1",{className:"NewPatientHead"},"Create New Patient"),r.a.createElement("div",{className:"CreateNewPatient"},r.a.createElement("span",{className:"FormLabel"},"NHI"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:a,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:"FirstName"},r.a.createElement("span",{className:"FormLabel"},"First Name"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:m,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",{className:"LastName"},r.a.createElement("span",{className:"FormLabel"},"Last Name"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:N,onChange:function(e){v(e.target.value)}})),r.a.createElement("div",{className:"dateofbirth"},r.a.createElement("span",{className:"FormLabel"},"Date of Birth"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:g,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{className:"Email"},r.a.createElement("span",{className:"FormLabel"},"Email"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:S,onChange:function(e){w(e.target.value)}})),r.a.createElement("div",{className:"Telephone"},r.a.createElement("span",{className:"FormLabel"},"Telephone No.:"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:O,onChange:function(e){j(e.target.value)}})),r.a.createElement("div",{className:"Address"},r.a.createElement("span",{className:"FormLabel"},"Address:"),r.a.createElement("input",{type:"text",className:"FormInput",required:!0,value:L,onChange:function(e){B(e.target.value)}})),r.a.createElement("div",{className:"FormBtns"},r.a.createElement("button",{className:"Btns CreateNewPatientBtn",type:"button",onClick:function(e){e.preventDefault();var t={patientId:a,firstname:m,lastname:N,dateofbirth:g,tel:O,email:S,address:L};u()({method:"POST",url:"".concat("http://127.0.0.1:8081","/patients"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(I)},data:t}).then(function(){console.log("New Patient Created"),k("/dashboard")})}},"Create Patient")))))};var B=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(L,null),r.a.createElement(g,null))},k=(a(86),function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(s.o)().id,o=Object(s.m)(),m=localStorage.getItem("token");u()({url:"".concat("http://127.0.0.1:8081","/patients/").concat(c),method:"GET",headers:{Authorization:"Bearer ".concat(m)}}).then(function(e){l(e.data.content)}).catch(function(e){console.log(e.message)});return r.a.createElement("div",{className:"DeletePatient"},r.a.createElement("h2",{className:"DelQuestion"},"Are you sure you want to delete this patient?"),r.a.createElement("div",{className:"DelPatientContent"},a),r.a.createElement("div",{className:"DeleteBtns"},r.a.createElement("button",{onClick:function(){o("/dashboard")},className:"NoDeleteButton DeleteButton"},"No"),r.a.createElement("button",{onClick:function(){u()({url:"".concat("http://127.0.0.1:8081","/patients/").concat(c),method:"DELETE",headers:{Authorization:"Bearer ".concat(m)}}).then(o("/dashboard"))},className:"YesDeleteButton DeleteButton"},"Yes")))});var I=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(k,null),r.a.createElement(g,null))};var P=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(g,null))};a(87);var D=function(){var e=Object(s.m)(),t=localStorage.getItem("token");return r.a.createElement("div",{className:"DeleteAccount"},r.a.createElement("h2",{className:"DelAccountQuestion"},"Are you sure you want to delete this account?"),r.a.createElement("div",{className:"DeleteAccountBtns"},r.a.createElement("button",{onClick:function(){e("/dashboard")},className:"NoDeleteButton DeleteButton"},"No"),r.a.createElement("button",{onClick:function(){u()({url:"".concat("http://127.0.0.1:8081","/users/delete"),method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then(function(){console.log("User Account deleted"),alert("Your account has been deleted"),localStorage.removeItem("token"),e("/")})},className:"YesDeleteButton DeleteButton"},"Yes")))};var A=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(D,null),r.a.createElement(g,null))};var _=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(s.o)(),m=c.id,i=c.firstname,E=c.lastname,d=(localStorage.getItem("token"),function(){var e=localStorage.getItem("token");u.a.get("".concat("http://127.0.0.1:8081","/notes/patient/").concat(m),{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){console.log(e),l(e.data)}).catch(function(e){console.log(e.message)})});return Object(n.useEffect)(function(){d()},[]),Object(n.useEffect)(function(){d()},[l]),r.a.createElement("div",{className:"FormContent"},a.map(function(e){return console.log(e.hpc),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BigContainer"},r.a.createElement("div",{className:"LeftColumn"},r.a.createElement("hr",null),r.a.createElement("h1",null,i," ",E," ",e.createdAt.slice(8,10),"-",e.createdAt.slice(5,7),"-",e.createdAt.slice(0,4)),e.hpc&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"History of Presenting Complaint"),r.a.createElement("textarea",{className:"NoteText",value:e.hpc})),e.symptoms&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Symptoms"),r.a.createElement("textarea",{className:"NoteText",value:e.symptoms})),e.pain&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Pain"),r.a.createElement("textarea",{className:"NoteText",value:e.pain})),e.nature&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Nature"),r.a.createElement("textarea",{className:"NoteText",value:e.nature})),e.severity&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Severity"),r.a.createElement("textarea",{className:"NoteText",value:e.severity})),e.irritability&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Irritability"),r.a.createElement("textarea",{className:"NoteText",value:e.irritability})),e.aggravatingfactors&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Aggravating Factors"),r.a.createElement("textarea",{className:"NoteText",value:e.aggravatingfactors})),e.easingfactors&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Easing Factors"),r.a.createElement("textarea",{className:"NoteText",value:e.easingfactors})),e.dailypattern&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Daily Pattern"),r.a.createElement("textarea",{className:"NoteText",value:e.dailypattern})),e.pmh&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Past Medical History"),r.a.createElement("textarea",{className:"NoteText",value:e.pmh}))),r.a.createElement("div",{className:"RightColumn"},r.a.createElement("img",{src:f.a,alt:"bodychart",className:"bodychart"}),e.sochx&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Social History"),r.a.createElement("textarea",{className:"NoteText",value:e.sochx})),e.work&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Work"),r.a.createElement("textarea",{className:"NoteText",value:e.work})),e.stress&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Stress"),r.a.createElement("textarea",{className:"NoteText",value:e.stress})),e.hobbies&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Hobbies"),r.a.createElement("textarea",{className:"NoteText",value:e.hobbies})),e.exercise&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Exercise"),r.a.createElement("textarea",{className:"NoteText",value:e.exercise})),e.redflags&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Red Flags"),r.a.createElement("textarea",{className:"NoteText",value:e.redflags})),e.yellowflags&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Yellow Flags"),r.a.createElement("textarea",{className:"NoteText",value:e.yellowflags})),e.investigations&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Investigations"),r.a.createElement("textarea",{className:"NoteText",value:e.investigations})),e.treatment&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Treatment"),r.a.createElement("textarea",{className:"NoteText",value:e.treatment})),e.specialquestions&&r.a.createElement("div",{className:"NoteForm"},r.a.createElement("h3",{className:"TextHead"},"Notes"),r.a.createElement("textarea",{className:"NoteText",value:e.specialquestions})))),r.a.createElement(o.b,{to:"/deletepatient"},r.a.createElement("span",{className:"DelIcon"},r.a.createElement(y.a,null))))}))};var q=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(_,null),r.a.createElement(g,null))};a(88);var R=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(s.o)().id,o=(localStorage.getItem("token"),function(){var e=localStorage.getItem("token");u.a.get("".concat("http://127.0.0.1:8081","/patients/").concat(c),{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){l(e.data)}).catch(function(e){console.log(e.message)})});return Object(n.useEffect)(function(){o()},[]),Object(n.useEffect)(function(){o()},[l]),r.a.createElement("div",{className:"patientPage"},r.a.createElement("h1",{className:"patientDetails"},"Patient Details"),r.a.createElement("table",{className:"patientTable1"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"NHI"),r.a.createElement("td",null,a.patientId)),r.a.createElement("tr",null,r.a.createElement("td",null,"First Name"),r.a.createElement("td",null,a.firstname)),r.a.createElement("tr",null,r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,a.lastname)),r.a.createElement("tr",null,r.a.createElement("td",null,"Date of Birth"),r.a.createElement("td",null,a.dateofbirth)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,a.email)),r.a.createElement("tr",null,r.a.createElement("td",null,"Telephone"),r.a.createElement("td",null,a.tel)),r.a.createElement("tr",null,r.a.createElement("td",null,"Address"),r.a.createElement("td",null,a.address)))))};var z=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(R,null),r.a.createElement(g,null))};a(89);var G=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1],c=(localStorage.getItem("token"),function(){var e=localStorage.getItem("token");u.a.get("".concat("http://127.0.0.1:8081","/users/me"),{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){l(e.data)}).catch(function(e){console.log(e.message)})});return Object(n.useEffect)(function(){c()},[]),Object(n.useEffect)(function(){c()},[l]),r.a.createElement("div",{className:"userPage"},r.a.createElement("h1",{className:"userDetails"},"Physiotherapist Details"),r.a.createElement("table",{className:"userTable1"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Username"),r.a.createElement("td",null,a.username)),r.a.createElement("tr",null,r.a.createElement("td",null,"First Name"),r.a.createElement("td",null,a.firstname)),r.a.createElement("tr",null,r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,a.lastname)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,a.email)),r.a.createElement("tr",null,r.a.createElement("td",null,"Designation"),r.a.createElement("td",null,a.designation)))))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(G,null),r.a.createElement(g,null))};var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",element:r.a.createElement(w,null)}),r.a.createElement(s.a,{path:"/signup",element:r.a.createElement(H,null)}),r.a.createElement(s.a,{path:"/dashboard",element:r.a.createElement(j,null)}),r.a.createElement(s.a,{path:"/create",element:r.a.createElement(b,null)}),r.a.createElement(s.a,{path:"/deletetask/:id",element:r.a.createElement(T,null)}),r.a.createElement(s.a,{path:"/newpatient",element:r.a.createElement(B,null)}),r.a.createElement(s.a,{path:"/deletepatient/:id",element:r.a.createElement(I,null)}),r.a.createElement(s.a,{path:"/createassessment/:id",element:r.a.createElement(P,null)}),r.a.createElement(s.a,{path:"/deleteaccount",element:r.a.createElement(A,null)}),r.a.createElement(s.a,{path:"/getnote/:id/:firstname/:lastname",element:r.a.createElement(q,null)}),r.a.createElement(s.a,{path:"/getpatient/:id",element:r.a.createElement(z,null)}),r.a.createElement(s.a,{path:"/mydetails",element:r.a.createElement(Y,null)}))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)))}},[[43,1,2]]]);
//# sourceMappingURL=main.a6d4f749.chunk.js.map