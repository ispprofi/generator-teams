module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.w={},o(o.s=15)}([function(t,e){t.exports=require("path")},function(t,e){t.exports=require("guid")},function(t,e){t.exports=require("yosay")},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let r=o(0);const i="package.json";e.Yotilities=class{static validateUrl(t){return/(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t)}static fixFileNames(t,e){if(void 0!==t){var o=r.basename(t);if("_"===o[0]){t="."+o.substr(1);var i=r.dirname(t);t=r.join(i,t)}for(var s in e)e.hasOwnProperty(s)&&"string"==typeof e[s]&&(t=t.replace(new RegExp("{"+s+"}","g"),e[s]))}return t}static addAdditionalDeps(t,e){var o=e.readJSON(i);t.forEach(t=>{o.dependencies[t[0]]=t[1]}),e.writeJSON(i,o)}}},function(t,e){t.exports=require("lodash")},function(t,e){t.exports=require("yeoman-generator")},,,,,,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=o(5),i=o(4),s=o(3);o(2),o(0),o(1);e.CustomBotGenerator=class extends r{constructor(t,e){super(t,e),e.force=!0,this.options=e.options,this.desc("Adds an outgoing webhook to a Teams project.")}prompting(){if(this.options.customBot)return this.prompt([{type:"input",name:"title",message:"Name of your outgoing webhook?",default:this.options.title+" Outgoing Webhook"}]).then(t=>{this.options.customBotTitle=t.title,this.options.customBotName=i.camelCase(t.title)})}writing(){if(this.options.customBot){let t=["README-{customBotName}.md","src/app/{customBotName}.ts"];this.sourceRoot(),t.forEach(t=>{this.fs.copyTpl(this.templatePath(t),s.Yotilities.fixFileNames(t,this.options),this.options)})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=o(13);t.exports=r.CustomBotGenerator},function(t,e,o){t.exports=o(14)}]);