(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(13),n(3)),i=n(4),s=n(6),h=n(5),u=n(7),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots.map(function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})});return r.a.createElement("div",null,t)},b=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b-green bg-lightest-blue",type:"search",placeholder:"Serch Robots",onChange:t}))},f=(n(15),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"900px"}},e.children)}),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:t})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.dbd16bfb.chunk.js.map