(this["webpackJsonpyouchia-kuo-project-five"]=this["webpackJsonpyouchia-kuo-project-five"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/pokemonTitle.3a977fee.png"},20:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(18),r=a.n(s),l=(a(25),a(8)),i=a(2),c=a(3),m=a(5),u=a(4),p=(a(6),a(19)),h=a.n(p),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"startBox"},o.a.createElement("img",{className:"startImage",src:h.a,alt:"pokemon forest"}),o.a.createElement("h2",null,"Catch up to 151 Pokemon!"))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"pokemonBox"},o.a.createElement("div",{className:"pokemonFlexBox"},o.a.createElement("h1",null,this.props.name),o.a.createElement("img",{src:this.props.image,alt:"A ".concat(this.props.name," from the Pokemon series")})),o.a.createElement("div",{className:"pokemonControlBox"},o.a.createElement("div",{className:"pokemonMessageBox"},this.props.full?o.a.createElement("h2",null,"You can only carry 6 pokemon at a time! Release some pokemon to catch more!"):null,this.props.missed?o.a.createElement("h2",null,"You failed to catch ",this.props.name,"! Try again!"):null,this.props.caught?o.a.createElement("h2",null,"You caught a ",this.props.name,"!"):null,!0!==this.props.full&&!0!==this.props.caught&&!0!==this.props.missed?o.a.createElement("h2",null,"A wild ",this.props.name," appeared!"):null),o.a.createElement("div",{className:"pokemonButtonBox"},!0!==this.props.full&&!0!==this.props.caught?o.a.createElement("button",{onClick:this.props.catch},"Throw Pokeball"):null,this.props.caught?o.a.createElement("button",{onClick:this.props.more},"Find more Pokemon!"):null,!0!==this.props.full&&!0!==this.props.caught?o.a.createElement("button",{onClick:this.props.more},"Run Away"):null)))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"teamTitle"},o.a.createElement("img",{src:"https://i.imgur.com/khwfmOZ.png",border:"0",alt:"Your Team"})),o.a.createElement("div",{className:"teamBox"},this.props.team),o.a.createElement("div",{className:"returnButton"},o.a.createElement("button",{onClick:this.props.return},"Return")))}}]),a}(n.Component),b=a(7),E=a.n(b),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).catchPokemon=function(){var t=Math.floor(100*Math.random())+1;if(e.state.team.length>5)e.setState({full:!0,caught:!1,missed:!1});else if(t%2===0){var a=Object(l.a)(e.state.team),n={name:e.state.pokemon.name,image:e.state.pokemonPicture,flavor:e.state.pokemon.flavor_text_entries[0].flavor_text};a.push(n),e.setState({team:a,caught:!0,missed:!1})}else e.setState({missed:!0,caught:!1})},e.fetchPokemon=function(){var t=Math.floor(151*Math.random())+1;E()({url:"https://pokeapi.co/api/v2/pokemon/"+t,method:"GET",responseType:"JSON"}).then((function(a){var n=a.data.sprites.front_default;return e.setState({pokemonPicture:n}),E()({url:"https://pokeapi.co/api/v2/pokemon-species/"+t,method:"GET",responseType:"JSON"})})).then((function(t){var a=t.data;e.setState({pokemon:a})}))},e.morePokemon=function(){e.setState({caught:!1,missed:!1}),e.fetchPokemon()},e.returnPokemon=function(){e.setState({pokemonVisible:!0,teamVisible:!1})},e.handlePage=function(t){"start"===t?e.setState({startVisible:!1,pokemonVisible:!0}):"team"===t?e.setState({pokemonVisible:!1,teamVisible:!0}):"return"===t&&e.setState({pokemonVisible:!0,teamVisible:!1})},e.releasePokemon=function(t){var a=Object(l.a)(e.state.team).filter((function(e,a){return t!==a}));e.setState({team:a,full:!1})},e.state={pokemon:[],pokemonPicture:[],team:[],yourPc:[],startVisible:!0,teamVisible:!1,pokemonVisible:!1,full:!1,missed:!1,caught:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchPokemon()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},this.state.startVisible?o.a.createElement(f,null):null,this.state.pokemonVisible?o.a.createElement(k,{image:this.state.pokemonPicture,name:this.state.pokemon.name.charAt(0).toUpperCase()+this.state.pokemon.name.slice(1),catch:function(){return e.catchPokemon()},caught:this.state.caught,more:function(){return e.morePokemon()},missed:this.state.missed,full:this.state.full}):null,this.state.teamVisible?o.a.createElement(d,{team:this.state.team.map((function(t,a){return o.a.createElement("div",{className:"teamPokemon",key:a},o.a.createElement("img",{src:t.image,alt:"A ".concat(t.name," from the Pokemon series")}),o.a.createElement("div",{className:"textBox"},o.a.createElement("h2",null,t.name.charAt(0).toUpperCase()+t.name.slice(1)),o.a.createElement("p",null,t.flavor)),o.a.createElement("button",{className:"releaseButton",onClick:function(){return e.releasePokemon(a)}},"Release"))})),return:function(){e.handlePage("return")}}):null,o.a.createElement("div",{className:"startAndTeam"},this.state.startVisible?o.a.createElement("button",{onClick:function(){return e.handlePage("start")}},"Click here to start"):null,!0!==this.state.teamVisible&&this.state.pokemonVisible?o.a.createElement("button",{className:"teamButton",onClick:function(){return e.handlePage("team")}},"Team"):null),o.a.createElement("footer",null,o.a.createElement("p",null,"Created by Jason Kuo at",o.a.createElement("a",{href:"https://junocollege.com/"},"Juno College"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.54974b90.chunk.js.map