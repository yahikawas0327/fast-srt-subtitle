webpackJsonp([0],{"2gVm":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("raD+"),n=i("tLQV"),r=(i("feh1"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("vk-navbar",[e("vk-navbar-nav",[e("vk-navbar-nav-item",{attrs:{title:"Fast SRT Subtitle Toolkit",active:"active"}})],1),e("vk-navbar-nav",{attrs:{slot:"right"},slot:"right"},[e("vk-navbar-nav-dropdown",{attrs:{title:"Language"}},[e("vk-navbar-nav-dropdown-nav",[e("vk-nav-item",{attrs:{title:"English"}}),e("vk-nav-item",{attrs:{title:"繁體中文"}}),e("vk-nav-item",{attrs:{title:"简体中文"}})],1)],1),e("vk-navbar-nav-item",{attrs:{icon:"github",title:"GitHub",href:"https://github.com/dsh0416/fast-srt-subtitle"}})],1)],1)},staticRenderFns:[]});var l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vk-card",{staticClass:"shortcuts"},[i("vk-card-title",[t._v("Shortcuts")]),i("p",[i("vk-label",{staticClass:"shortcut-label"},[t._v("K")]),i("span",{staticClass:"shortcut-text"},[t._v("Switch to Next Line")])],1),i("p",[i("vk-label",{staticClass:"shortcut-label"},[t._v("L")]),i("span",{staticClass:"shortcut-text"},[t._v("Stop Current Line")])],1),i("p",[i("vk-label",{staticClass:"shortcut-label"},[t._v("U")]),i("span",{staticClass:"shortcut-text"},[t._v("Prev 3 Secs")])],1),i("p",[i("vk-label",{staticClass:"shortcut-label"},[t._v("P")]),i("span",{staticClass:"shortcut-text"},[t._v("Skip 3 Secs")])],1),i("p",[i("vk-label",{staticClass:"shortcut-label"},[t._v("I")]),i("span",{staticClass:"shortcut-text"},[t._v("Prev Line")])],1),i("p",[i("vk-label",{staticClass:"shortcut-label"},[t._v("O")]),i("span",{staticClass:"shortcut-text"},[t._v("Skip Line")])],1)],1)},staticRenderFns:[]};var o={name:"App",components:{Navbar:i("VU/8")({name:"Navbar"},r,!1,function(t){i("2gVm")},null,null).exports,Shortcut:i("VU/8")({name:"Shortcut"},l,!1,function(t){i("yoZf")},"data-v-70338089",null).exports},data:function(){return{modalShow:!1,modalText:"",stage:"prepare",subtitleText:"",subtitles:[],subtitleStarts:[],subtitleEnds:[],currentLine:null,nextLine:0,previousTiming:0,reactTime:.3,subtitleReview:""}},computed:{nextLines:function(){return this.subtitles.slice(this.nextLine,this.nextLine+4)}},beforeDestroy:function(){window.removeEventListener("keypress",this.keyHandler)},methods:{loadText:function(){this.$refs.textLoader.click()},loadVideo:function(){this.$refs.videoLoader.click()},readText:function(t){var e=this,i=t.target.files[0];this.subtitleText="";var s=new FileReader;s.onload=function(){e.subtitleText=s.result},s.readAsText(i)},readVideo:function(t){var e=t.target.files[0],i=URL.createObjectURL(e);this.$refs.video.src=i,this.$refs.video.load()},startEdit:function(){0===this.subtitleText.length?(this.modalShow=!0,this.modalText="Please import the subtitle text first."):(this.subtitles=this.subtitleText.split("\n"),this.subtitleStarts=new Array(this.subtitles.length).fill(null),this.subtitleEnds=new Array(this.subtitles.length).fill(null),this.stage="edit",window.addEventListener("keypress",this.keyHandler))},startReview:function(){window.removeEventListener("keypress",this.keyHandler),this.stage="review",this.generateSubtitle()},keyHandler:function(t){switch(String.fromCharCode(t.keyCode).toLowerCase()){case"k":null!==this.currentLine&&(this.subtitleEnds[this.currentLine]=this.$refs.video.currentTime-.01),this.currentLine=this.nextLine,this.nextLine+=1,this.currentLine<this.subtitles.length?this.subtitleStarts[this.currentLine]=this.$refs.video.currentTime:this.currentLine=null;break;case"l":null!==this.currentLine&&(this.subtitleEnds[this.currentLine]=this.$refs.video.currentTime-.01),this.currentLine=null;break;case"u":this.$refs.video.currentTime-=3;break;case"p":this.$refs.video.currentTime+=3;break;case"i":this.nextLine>0&&(this.currentLine=this.nextLine-2,this.nextLine=this.nextLine-1),-1===this.currentLine&&(this.currentLine=null);break;case"o":this.nextLine<this.subtitles.length&&(this.currentLine=this.nextLine,this.nextLine=this.nextLine+1)}},timeFormat:function(t){return null===t?"0:0:0,0":Math.floor(t/60/60)+":"+Math.floor(t/60%60)+":"+Math.floor(t%60)+","+Math.floor(1e3*t%1e3)},generateSubtitle:function(){this.subtitleReview="";for(var t=0;t<this.subtitles.length;t+=1)this.subtitleReview+=t+1+"\n",this.subtitleReview+=this.timeFormat(this.subtitleStarts[t])+" --\x3e "+this.timeFormat(this.subtitleEnds[t])+"\n",this.subtitleReview+=this.subtitles[t]+"\n\n"},saveFile:function(){var t=this.$refs.download,e=new Blob([this.subtitleReview],{type:"text/plain"});t.href=URL.createObjectURL(e),t.download="result.srt",t.click()}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("navbar"),i("vk-modal",{attrs:{show:t.modalShow},on:{"update:show":function(e){t.modalShow=e}}},[i("vk-modal-title",[t._v("Error")]),i("p",[t._v(t._s(t.modalText))]),i("p",{staticClass:"uk-text-right"},[i("vk-button",{staticClass:"uk-margin-small-right",on:{click:function(e){t.modalShow=!1}}},[t._v("Close")])],1)],1),i("div",{staticClass:"container"},[i("div",{staticClass:"panel"},["prepare"===t.stage?i("div",[i("input",{ref:"textLoader",staticClass:"hidden",attrs:{type:"file",accept:"text/plain"},on:{change:t.readText}}),i("vk-button",{on:{click:t.loadText}},[t._v("Load Text File")]),i("div",{staticClass:"uk-margin"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.subtitleText,expression:"subtitleText"}],staticClass:"uk-textarea",attrs:{rows:"20",placeholder:"Subtitle Preview"},domProps:{value:t.subtitleText},on:{input:function(e){e.target.composing||(t.subtitleText=e.target.value)}}})]),i("p",{staticClass:"uk-margin"},[t._v("Lines of Subtitle: "+t._s(t.subtitleText.split("\n").length)+" line(s)")]),i("vk-button",{staticClass:"uk-margin",attrs:{type:"primary"},on:{click:t.startEdit}},[t._v("Start Editing")])],1):t._e(),"edit"===t.stage?i("div",[i("h4",[t._v("React Time: "+t._s(t.reactTime))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.reactTime,expression:"reactTime"}],staticClass:"uk-range",attrs:{type:"range",min:"0.0",max:"1.0",step:"0.01"},domProps:{value:t.reactTime},on:{__r:function(e){t.reactTime=e.target.value}}}),i("h2",[t._v("Current Line")]),null===t.currentLine?i("h4",{staticClass:"alt-text"},[t._v("[Empty]")]):i("h4",[t._v(t._s(t.subtitles[t.currentLine]))]),i("h2",[t._v("Coming Lines")]),t._l(t.nextLines,function(e){return i("h4",{staticClass:"alt-text"},[t._v(t._s(e))])}),t.nextLines.length<4?i("h4",{staticClass:"alt-text"},[t._v("[End of File]")]):t._e(),i("vk-button",{staticClass:"uk-margin",attrs:{type:"primary"},on:{click:t.startReview}},[t._v("Start Reviewing")])],2):t._e(),"review"===t.stage?i("div",[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.subtitleReview,expression:"subtitleReview"}],staticClass:"uk-textarea",attrs:{rows:"20",placeholder:"Subtitle Preview"},domProps:{value:t.subtitleReview},on:{input:function(e){e.target.composing||(t.subtitleReview=e.target.value)}}}),i("vk-button",{staticClass:"uk-margin",attrs:{type:"primary"},on:{click:t.saveFile}},[t._v("Save File")]),i("a",{ref:"download",staticClass:"hidden",attrs:{href:""}})],1):t._e()]),i("div",{staticClass:"panel"},[i("input",{ref:"videoLoader",staticClass:"hidden",attrs:{type:"file",accept:"audio/mp4, video/mp4"},on:{change:t.readVideo}}),"prepare"===t.stage?i("vk-button",{on:{click:t.loadVideo}},[t._v("Load Video")]):t._e(),i("video",{ref:"video",staticClass:"video uk-margin",attrs:{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",controls:"controls"}}),i("shortcut",{directives:[{name:"show",rawName:"v-show",value:"edit"===t.stage,expression:"stage === 'edit'"}]})],1)])],1)},staticRenderFns:[]};var c=i("VU/8")(o,u,!1,function(t){i("rEvY")},"data-v-a2ab8cc6",null).exports;s.a.use(a.a),s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:c},template:"<App/>"})},feh1:function(t,e){},rEvY:function(t,e){},yoZf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0bbd737f7fc2c87735a5.js.map