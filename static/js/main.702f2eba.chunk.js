(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(2),i=t.n(n),s=(t(15),t(3)),l=t(4),o=t(5),m=t(8),d=t(6),g=t(9);var u=function(e){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-light bg-warning"},c.a.createElement("a",{className:"navbar-brand",href:"https://rcviets.github.io/clicky-game/"},"The Next Generation Clicky Game"),c.a.createElement("span",{className:"navbar-text"},c.a.createElement("p",null,"Score: ",e.score," || Top Score: ",e.topScore))))},h=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-danger"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4 text-center"},"Click Each Picture For A Point"),c.a.createElement("p",{className:"lead text-center"},e.headerText))))},f=(t(16),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),p=(t(17),function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"image-container pt-4"},c.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}})))}),k=[{id:1,name:"Jean-Luc Picard",image:"../images/picard.jpg",clicked:!1},{id:2,name:"William Riker",image:"../images/riker.jpg",clicked:!1},{id:3,name:"Commander Data",image:"../images/data.jpg",clicked:!1},{id:4,name:"Deanna Troi",image:"../images/troi.jpg",clicked:!1},{id:5,name:"Worf",image:"../images/worf.jpg",clicked:!1},{id:6,name:"Geordi La Forge",image:"../images/geordi.jpg",clicked:!1},{id:7,name:"Dr. Beverly Crusher",image:"../images/crusher.jpg",clicked:!1},{id:8,name:"Tasha Yar",image:"../images/tasha.jpg",clicked:!1},{id:9,name:"Wesley Crusher",image:"../images/wesley.jpg",clicked:!1},{id:10,name:"Guinan",image:"../images/guinan.jpg",clicked:!1},{id:11,name:"Q",image:"../images/theQ.jpg",clicked:!1},{id:12,name:"Lore",image:"../images/lore.jpg",clicked:!1}],v=t(7),E=t.n(v),j=(t(19),function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={topScore:0,score:0,headerText:"Don't Click A Picture Twice! ENGAGE!",officers:k},t.handleClick=function(e){console.log(e);for(var a=t.state.officers,r=0;r<a.length;r++)e===a[r].id&&(!1===a[r].clicked?t.setState({score:t.state.score+1,officers:E()(t.state.officers,Object(s.a)({},r,{clicked:{$set:!0}})),headerText:"Make It So!"}):(t.state.score>t.state.topScore&&t.setState({topScore:t.state.score,score:0,headerText:"The Line Must Be Drawn Here!",officers:k}),t.state.score<=t.state.topScore&&t.setState({score:0,headerText:"The Line Must Be Drawn Here!",officers:k})))},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=e[a];e[a]=e[t],e[t]=r}return e},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.score,r=a.topScore,n=a.headerText,i=this.state.officers.map((function(a){return c.a.createElement(p,{name:a.name,image:a.image,key:a.id,id:a.id,handleClick:e.handleClick})})),s=this.shuffleArray(i);return c.a.createElement("div",null,c.a.createElement(u,{score:t,topScore:r}),c.a.createElement(h,{headerText:n}),c.a.createElement(f,null,s))}}]),a}(c.a.Component));i.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.702f2eba.chunk.js.map