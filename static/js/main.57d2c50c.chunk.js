(this.webpackJsonpguessthemall=this.webpackJsonpguessthemall||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),c=t.n(s),i=t(2),l=t(3),h=t(5),o=t(4);t(15);var d=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Guess who!"),r.a.createElement("br",null),r.a.createElement("h3",null,"Instructions:"),r.a.createElement("h5",null,"Click on an image that has not been clicked. ",r.a.createElement("br",null),"If it has not been clicked you will get 1 point, otherwise your score will reset."))};t(16);var m=function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("ul",null,r.a.createElement("li",null,"Guess Them All!"),r.a.createElement("li",null,"Click an image to begin!"),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};t(17);function g(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function u(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function C(e){var a=e.size,t=e.children;return r.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}var p=t(6),k=(t(18),function(e){Object(h.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).handleClick=function(e,a,t){a(("card"===e.target.getAttribute("class")?e.target:e.target.parentElement).getAttribute("value"),t)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{onClick:function(a){return e.handleClick(a,e.props.handleChecked,e.props.scoreChange)},value:this.props.imageObj.src},r.a.createElement(p.a.Img,{variant:"top",src:this.props.imageObj.src}),r.a.createElement("p",null,this.props.imageObj.src),r.a.createElement("p",null,this.props.imageObj.checked.toString()))}}]),t}(n.Component)),E=function(e){Object(h.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={imageCards:[{src:"./images/dinosaur-1.png",checked:!1},{src:"./images/dinosaur-2.png",checked:!1},{src:"./images/dinosaur-3.png",checked:!1},{src:"./images/dinosaur-4.png",checked:!1},{src:"./images/dinosaur-5.png",checked:!1},{src:"./images/dinosaur-6.png",checked:!1},{src:"./images/dinosaur-7.png",checked:!1},{src:"./images/dinosaur-8.png",checked:!1},{src:"./images/dinosaur-9.png",checked:!1},{src:"./images/dinosaur-10.png",checked:!1},{src:"./images/dinosaur-11.png",checked:!1},{src:"./images/dinosaur-12.png",checked:!1}]},e.handleChecked=function(a,t){console.log("ID "+a);var n=e.state.imageCards.findIndex((function(e){return e.src===a}));if(e.state.imageCards[n].checked)console.log("Reset Array"),e.resetImages(),t(!0);else{console.log("Update Status");var r=e.state.imageCards;r[n].checked=!0,e.setState({imageCards:r}),e.randomizeImages(),t(!1)}},e.resetImages=function(){var a=e.state.imageCards;a.forEach((function(e){e.checked=!1})),e.setState({imageCards:a}),e.randomizeImages()},e.randomizeImages=function(){var a=e.state.imageCards.sort((function(){return Math.random()-.5}));e.setState({imageCards:a})},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(u,null,r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[0],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[1],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[2],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[3],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked}))),r.a.createElement(u,null,r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[4],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[5],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[6],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[7],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked}))),r.a.createElement(u,null,r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[8],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[9],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[10],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked})),r.a.createElement(C,{size:"md-12"},r.a.createElement(k,{imageObj:this.state.imageCards[11],scoreChange:this.props.scoreChange,handleChecked:this.handleChecked}))))}}]),t}(n.Component),b=function(e){Object(h.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={score:0,topScore:0},e.scoreChange=function(a){a?e.setState({score:0}):e.setState({score:e.state.score+1,topScore:e.state.score+1>e.state.topScore?e.state.score+1:e.state.topScore})},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(d,null),r.a.createElement(E,{scoreChange:this.scoreChange}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.57d2c50c.chunk.js.map