webpackJsonp([1],{Ijb6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o=n("mvHQ"),i=n.n(o),a={props:{row:{type:Object,required:!0}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"name",style:{marginLeft:2*t.row.depthLevel+"%",width:40-2*t.row.depthLevel+"%"}},[t.row.depthLevel>0&&t.row.chief?n("span",[t._v("\n        +\n        ")]):t._e(),t._v("\n        "+t._s(t.row.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"telephone"},[t._v("\n        "+t._s(t.row.telephone)+"\n    ")])])},staticRenderFns:[]},l={props:["rows"],methods:{sortRows:function(){this.$emit("sortRows")}},components:{ListItem:n("VU/8")(a,r,!1,null,null,null).exports}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"name",attrs:{rows:t.rows},on:{click:t.sortRows}},[t._v("\n            Имя\n        ")]),t._v(" "),n("div",{staticClass:"telephone"},[t._v("\n            Телефон\n        ")])]),t._v(" "),t._l(t.rows,function(t){return n("ListItem",{attrs:{row:t}})})],2)},staticRenderFns:[]};var d=n("VU/8")(l,c,!1,function(t){n("Ijb6")},null,null).exports,u={data:function(){return{name:"",telephone:"",chief:""}},props:["rows"],methods:{addRow:function(t){if(this.name.trim()&&this.telephone.trim()){var e={id:Date.now(),name:this.name,telephone:this.telephone,chief:this.chief};this.$emit("addRow",e),this.name="",this.telephone="",this.chief=""}}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"form"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addRow(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"name"},[t._v("\n                Имя\n            ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"name"},[t._v("\n                Телефон\n            ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],attrs:{type:"text"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"name"},[t._v("\n                Начальник\n            ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.chief,expression:"chief"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.chief=e.target.multiple?n:n[0]}}},t._l(t.rows,function(e){return e.name?n("option",{domProps:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n                ")]):t._e()}),0)]),t._v(" "),n("button",{staticClass:"btnComplete"},[t._v("\n            Сохранить\n        ")])])])},staticRenderFns:[]};var p={name:"modal",data:function(){return{}},props:["rows"],components:{ModalSubmit:n("VU/8")(u,v,!1,function(t){n("Ouf1")},"data-v-2aaf1cd0",null).exports},methods:{closeModal:function(){this.$emit("closeModal")},addRow:function(t){this.$emit("addRow",t)}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"modal"}},[e("button",{staticClass:"close_modal",on:{click:this.closeModal}},[this._v("\n    ×\n    ")]),this._v(" "),e("h3",[this._v("\n        Добавление нового пользователя\n    ")]),this._v(" "),e("ModalSubmit",{attrs:{rows:this.rows},on:{addRow:this.addRow}})],1)},staticRenderFns:[]};var h={name:"app",data:function(){return{isModalVisible:!1,rows:[]}},methods:{openModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},addRow:function(t){var e=this.rows.find(function(e){return e.id===t.chief});if(t.chief){var n=0,s=void 0;this.rows.forEach(function(e){t.chief===e.id&&(s=n),n++}),this.rows.splice(s+1,0,t),e.depthLevel>=0&&(t.depthLevel=e.depthLevel+1)}else this.rows.push(t),t.depthLevel=0;var o=i()(this.rows);localStorage.setItem("rows",o)},sortRows:function(){this.rows.sort(function(t,e){return t.name<e.name?1:t.name>e.name?-1:0})}},components:{ListTemplate:d,ModalTemplate:n("VU/8")(p,m,!1,function(t){n("OG7x")},"data-v-81ff97ce",null).exports},mounted:function(){var t=JSON.parse(localStorage.rows);this.rows=t}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("button",{staticClass:"open_modal",on:{click:t.openModal}},[t._v("\n        Добавить\n      ")]),t._v(" "),n("ListTemplate",{attrs:{rows:t.rows},on:{sortRows:t.sortRows}})],1),t._v(" "),n("div",{staticClass:"column"},[t.isModalVisible?n("ModalTemplate",{attrs:{rows:t.rows},on:{closeModal:t.closeModal,addRow:t.addRow}}):t._e()],1)])])},staticRenderFns:[]};var w=n("VU/8")(h,f,!1,function(t){n("c5Kr")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:w},template:"<App/>"})},OG7x:function(t,e){},Ouf1:function(t,e){},c5Kr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.96178eaedca2b6c4ad06.js.map