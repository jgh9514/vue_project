webpackJsonp([0],{"83FH":function(t,e){},k3Lc:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mvHQ"),l=o.n(n),a=o("Dd8w"),r=o.n(a),i={props:["modalForm","modalFile"],data:function(){return{}},created:function(){console.log("this.modalForm = ",this.modalForm)}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n              "+t._s(t.modalForm.subj)+"\n              "),o("hr")])],2),t._v(" "),o("div",{staticClass:"modal-body"},[t._t("body",[o("span",{staticClass:"contsProps"}),t._v(" "),o("img",{staticClass:"popupImg",attrs:{src:t.modalFile,alt:""}}),o("br")])],2),t._v(" "),o("div",{staticClass:"modal-footer"},[t._t("footer",[o("div",[o("el-checkbox")],1),t._v(" "),o("p"),t._v(" "),o("p")])],2),t._v(" "),o("el-button",{staticClass:"popupBtn",attrs:{type:"primary"},on:{click:function(e){return t.$emit("close")}}},[t._v("닫기")])],1)])])])},staticRenderFns:[]};var c=o("VU/8")(i,s,!1,function(t){o("83FH")},"data-v-6682da4d",null).exports,u=o("mtWM"),m=o.n(u),f=o("NYxO"),p={components:{PopupModal:c},computed:r()({},Object(f.d)({showModal:function(t){return t.modal.showModal}})),data:function(){return{form:{subj:"",tp:"기본",conts:"",cnnt_url_yn:"",cnnt_url:""},fileList:[],modifyYn:!1,fileUrl:"",imgFile:"",tpOptions:[{value:"10",label:"기본"},{value:"20",label:"이용동의"},{value:"30",label:"이벤트"}]}},methods:r()({},Object(f.c)(["SET_MODAL"]),{onSubmit:function(){var t=new FormData;t.append("form",l()(this.form)),this.imgFile&&t.append("image",this.imgFile.raw),console.log("formData===",t),m.a.post("http://localhost:3000/popup",t).then(function(t){console.log("res.data===",t.data)}).catch(function(t){console.log("err===",t)})},onUpdate:function(){},onCancel:function(){},onImgRemove:function(t,e){this.imgFile=""},onImgChange:function(t,e){console.log("file = ",t),this.fileUrl=t.url;var o=t.name,n=o.lastIndexOf("."),l=o.substring(n).toLowerCase();console.log(l),".jpg"!==l&&".png"!==l&&".jpeg"!==l?(alert("jpg png 만 업로드가능합니다."),this.fileList=[]):this.imgFile=t},onKeyup:function(t){},classChk:function(){return!0}})},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"detail"},[o("el-form",{attrs:{"label-width":"180px"}},[o("el-form-item",{attrs:{label:"제목"},nativeOn:{keyup:function(e){return t.onKeyup(e)}}},[o("el-input",{model:{value:t.form.subj,callback:function(e){t.$set(t.form,"subj",e)},expression:"form.subj"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"파업구분"}},[o("el-select",{model:{value:t.form.tp,callback:function(e){t.$set(t.form,"tp",e)},expression:"form.tp"}},t._l(t.tpOptions,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),"이용동의"===t.form.tp?o("el-form-item",{attrs:{label:"대체텍스트"}},[o("el-input",{model:{value:t.form.conts,callback:function(e){t.$set(t.form,"conts",e)},expression:"form.conts"}})],1):t._e(),t._v(" "),o("el-form-item",{attrs:{label:"바로가기"}},[o("el-radio-group",{model:{value:t.form.cnnt_url_yn,callback:function(e){t.$set(t.form,"cnnt_url_yn",e)},expression:"form.cnnt_url_yn"}},[o("el-radio",{attrs:{label:"사용"}}),t._v(" "),o("el-radio",{attrs:{label:"미사용"}})],1),t._v(" "),o("el-input",{attrs:{placeholder:"팝업 이미지 클릭시 이동할 URL을 입력하세요."},model:{value:t.form.cnnt_url,callback:function(e){t.$set(t.form,"cnnt_url",e)},expression:"form.cnnt_url"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"이미지등록"}},[o("el-upload",{staticClass:"upload-demo",attrs:{disabled:"20"===t.form.tp,action:"",name:"file",multiple:!1,"on-remove":t.onImgRemove,"on-change":t.onImgChange,"auto-upload":!1,limit:1,"file-list":t.fileList,"list-type":"picture"}},[o("el-button",{attrs:{size:"small",type:"info"}},[t._v("파일업로드")]),t._v(" "),o("div",{class:["ex-1",{"ex-2":t.classChk()}],attrs:{slot:"tip"},slot:"tip"},[t._v("※ JPG,PNG 파일만 업로드 가능합니다. 해상도는 400 X 600에 최적화 되어있습니다.")])],1)],1)],1),t._v(" "),o("div",{staticClass:"bottomBtns"},[t.modifyYn?t._e():o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("등록")]),t._v(" "),t.modifyYn?o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onUpdate("form")}}},[t._v("수정")]):t._e(),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.onCancel}},[t._v("취소")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.SET_MODAL(!0)}}},[t._v("미리보기")])],1),t._v(" "),t.showModal?o("popup-modal",{attrs:{modalForm:t.form,modalFile:t.fileUrl},on:{close:function(e){return t.SET_MODAL(!1)}}}):t._e()],1)},staticRenderFns:[]};var v=o("VU/8")(p,d,!1,function(t){o("yk7h")},"data-v-55f808fa",null);e.default=v.exports},mvHQ:function(t,e,o){t.exports={default:o("qkKv"),__esModule:!0}},qkKv:function(t,e,o){var n=o("FeBl"),l=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return l.stringify.apply(l,arguments)}},yk7h:function(t,e){}});
//# sourceMappingURL=0.8fbd648e947a3ab1b084.js.map