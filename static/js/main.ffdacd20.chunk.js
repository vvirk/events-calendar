(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),o=n(3),l=n(5),u=n(6),i=n(8),v=n(7),p=n(9),d=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props.today,n=this.props.currentMonth,a=this.props.currentYear,c=new Date(a,n),s=new Date(a,n+1,0).getDate(),o=[],l=[],u=1;u<v(c);u++)l.push("");for(var i=1;i<=s;i++)o.push(new Date(a,n,i));function v(e){var t=e.getDay();return 0===t&&(t=7),t}return r.a.createElement("div",{id:"calendar"},r.a.createElement("div",{className:"weekDay"},"\u043f\u043d"),r.a.createElement("div",{className:"weekDay"},"\u0432\u0442"),r.a.createElement("div",{className:"weekDay"},"\u0441\u0440"),r.a.createElement("div",{className:"weekDay"},"\u0447\u0442"),r.a.createElement("div",{className:"weekDay"},"\u043f\u0442"),r.a.createElement("div",{className:"weekDay"},"\u0441\u0431"),r.a.createElement("div",{className:"weekDay"},"\u0432\u0441"),l.map(function(e,t){return r.a.createElement("div",{className:"empty",key:t},e)}),o.map(function(n,a){return r.a.createElement("div",{key:a,className:n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()?"day currentDay":"day"},r.a.createElement("span",{className:n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()?"date currentDate":"date",onClick:function(){return e.props.openWindow()&&e.props.getSelectedDay(n)}},n.getDate(),e.props.events[n.getFullYear()]&&e.props.events[n.getFullYear()][n.getMonth()+1]&&e.props.events[n.getFullYear()][n.getMonth()+1][n.getDate()]?r.a.createElement("div",{className:"event-marker"}):null))}))}}]),t}(r.a.Component),h=function(){return{type:"NEXT_MONTH"}},m=function(){return{type:"PREV_MONTH"}},b=function(){return{type:"THIS_MONTH"}},O={getNextMonth:h,getPrevMonth:m,getThisMonth:b,openWindow:function(){return{type:"OPEN_WINDOW"}},getSelectedDay:function(e){return{type:"SELECTED_DAY",monthDay:e}}},y=Object(o.b)(function(e){return{today:e.today,currentMonth:e.currentMonth,currentYear:e.currentYear,events:e.events}},O)(d),D=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"calendar-nav"},r.a.createElement("button",{className:"calendar-nav-btn",onClick:function(){return e.props.getPrevMonth()}},"\u25c4 prev"),r.a.createElement("button",{className:"calendar-nav-btn",onClick:function(){return e.props.getThisMonth()}},"\u2022 current month \u2022"),r.a.createElement("button",{className:"calendar-nav-btn",onClick:function(){return e.props.getNextMonth()}},"next \u25ba"))}}]),t}(r.a.Component),E={getNextMonth:h,getPrevMonth:m,getThisMonth:b},j=Object(o.b)(function(e){return{}},E)(D),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={eventDesc:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=null!==this.props.selectedDay?this.props.selectedDay.getFullYear():null,n=null!==this.props.selectedDay?this.props.selectedDay.getMonth()+1:null,a=null!==this.props.selectedDay?this.props.selectedDay.getDate():null;return r.a.createElement("div",{className:"closed"===this.props.eventWindow?"calendar-event-wrap display-none":"calendar-event-wrap"},r.a.createElement("div",{className:"calendar-event"},r.a.createElement("input",{className:"calendar-event-input",type:"text",placeholder:"please enter an event description ...",value:this.state.eventDesc,onChange:function(t){return e.setState({eventDesc:t.target.value})}}),r.a.createElement("h2",{className:"subtitle calendar-event-subtitle"}," Events list"),r.a.createElement("ul",{className:"calendar-event-list"},void 0!==this.props.events[t]&&void 0!==this.props.events[t][n]&&void 0!==this.props.events[t][n][a]?this.props.events[t][n][a].map(function(e,t){return r.a.createElement("li",{className:"calendar-event-list-item",key:t},e)}):null),r.a.createElement("nav",{className:"calendar-nav"},r.a.createElement("button",{className:"calendar-nav-btn",onClick:function(){return e.props.closeWindow()}},"\xd7 cancel"),r.a.createElement("button",{className:"calendar-nav-btn",onClick:""!==this.state.eventDesc?function(){return e.props.saveEvent(e.state.eventDesc)&&e.props.closeWindow()&&void e.setState({eventDesc:""})}:null},"\u2713 save"))))}}]),t}(r.a.Component),N={closeWindow:function(){return{type:"CLOSE_WINDOW"}},saveEvent:function(e){return{type:"SAVE_EVENT",eventDesc:e}}},f=Object(o.b)(function(e){return{eventWindow:e.eventWindow,events:e.events,selectedDay:e.selectedDay}},N)(g),M=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=["January","February","March","April","May","June","July","August","September","October","Novembe","December"];return r.a.createElement("div",{className:"wrapper"},r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"inner"},r.a.createElement("h2",{className:"title"},this.props.today.toString().slice(0,16)),r.a.createElement(j,null),r.a.createElement("p",{className:"subtitle"},this.props.today.getFullYear()===this.props.currentYear?e[this.props.currentMonth]:e[this.props.currentMonth]+" "+this.props.currentYear),r.a.createElement(y,null))),r.a.createElement(f,null)))}}]),t}(r.a.Component),w=Object(o.b)(function(e){return{today:e.today,currentMonth:e.currentMonth,currentYear:e.currentYear,selectedDay:e.selectedDay}})(M),Y=n(12),k=n(19),W=n(2),T=n(1),C={today:new Date,currentMonth:(new Date).getMonth(),currentYear:(new Date).getFullYear(),eventWindow:"closed",selectedDay:null,events:{}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_MONTH":return 11===e.currentMonth?Object(T.a)({},e,{currentMonth:0,currentYear:e.currentYear+1}):Object(T.a)({},e,{currentMonth:e.currentMonth+1});case"PREV_MONTH":return 0===e.currentMonth?Object(T.a)({},e,{currentMonth:11,currentYear:e.currentYear-1}):Object(T.a)({},e,{currentMonth:e.currentMonth-1});case"THIS_MONTH":return Object(T.a)({},e,{currentMonth:e.today.getMonth(),currentYear:e.today.getFullYear()});case"OPEN_WINDOW":return Object(T.a)({},e,{eventWindow:"open"});case"CLOSE_WINDOW":return Object(T.a)({},e,{eventWindow:"closed"});case"SELECTED_DAY":return Object(T.a)({},e,{selectedDay:t.monthDay});case"SAVE_EVENT":var n=e.selectedDay.getFullYear(),a=e.selectedDay.getMonth()+1,r=e.selectedDay.getDate();return void 0===e.events[n]?Object(T.a)({},e,{events:Object(T.a)({},e.events,Object(W.a)({},n,Object(W.a)({},a,Object(W.a)({},r,[t.eventDesc]))))}):void 0===e.events[n][a]?Object(T.a)({},e,{events:Object(T.a)({},e.events,Object(W.a)({},n,Object(T.a)({},e.events[n],Object(W.a)({},a,Object(W.a)({},r,[t.eventDesc])))))}):void 0===e.events[n][a][r]?Object(T.a)({},e,{events:Object(T.a)({},e.events,Object(W.a)({},n,Object(T.a)({},e.events[n],Object(W.a)({},a,Object(T.a)({},e.events[n][a],Object(W.a)({},r,[t.eventDesc]))))))}):Object(T.a)({},e,{events:Object(T.a)({},e.events,Object(W.a)({},n,Object(T.a)({},e.events[n],Object(W.a)({},a,Object(T.a)({},e.events[n][a],Object(W.a)({},r,[].concat(Object(k.a)(e.events[n][a][r]),[t.eventDesc])))))))});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29),n(30),n(31);function _(){return Object(Y.b)(S,C)}n.d(t,"configureStore",function(){return _}),n.d(t,"store",function(){return F});var F=_();s.a.render(r.a.createElement(o.a,{store:F},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.ffdacd20.chunk.js.map