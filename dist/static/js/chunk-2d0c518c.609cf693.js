(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c518c"],{"3e48":function(e,s,t){"use strict";t.r(s);var l=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm font-semibold",attrs:{model:e.ruleForm,"status-icon":"","label-position":"left",rules:e.rules,"label-width":"200px"}},[t("el-form-item",{attrs:{label:"1 Project TOE",prop:"pass"}},[t("el-input",{attrs:{placeholder:"Please Input"},model:{value:e.ruleForm.pass,callback:function(s){e.$set(e.ruleForm,"pass",s)},expression:"ruleForm.pass"}})],1),t("el-form-item",{attrs:{label:"2 TOE Level",prop:"pass1"}},[t("el-select",{staticClass:"w100",attrs:{placeholder:"Please Select"},model:{value:e.ruleForm.pass1,callback:function(s){e.$set(e.ruleForm,"pass1",s)},expression:"ruleForm.pass1"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"3 Document Version",prop:"pass2"}},[t("el-input",{model:{value:e.ruleForm.pass2,callback:function(s){e.$set(e.ruleForm,"pass2",s)},expression:"ruleForm.pass2"}})],1),t("el-form-item",{attrs:{label:"4 Status",prop:"pass3"}},[t("el-input",{model:{value:e.ruleForm.pass3,callback:function(s){e.$set(e.ruleForm,"pass3",s)},expression:"ruleForm.pass3"}})],1),t("el-form-item",{attrs:{label:"5 Reviewer(s)",prop:"pass4"}},[t("el-input",{model:{value:e.ruleForm.pass4,callback:function(s){e.$set(e.ruleForm,"pass4",s)},expression:"ruleForm.pass4"}})],1),t("el-form-item",{attrs:{label:"6 Author(s)",prop:"pass5"}},[t("el-input",{model:{value:e.ruleForm.pass5,callback:function(s){e.$set(e.ruleForm,"pass5",s)},expression:"ruleForm.pass5"}})],1),t("el-form-item",{attrs:{label:"7 Author Department",prop:"pass6"}},[t("el-input",{model:{value:e.ruleForm.pass6,callback:function(s){e.$set(e.ruleForm,"pass6",s)},expression:"ruleForm.pass6"}})],1),t("el-form-item",{attrs:{label:"8 Author company",prop:"pass7"}},[t("el-input",{model:{value:e.ruleForm.pass7,callback:function(s){e.$set(e.ruleForm,"pass7",s)},expression:"ruleForm.pass7"}})],1),t("el-form-item",{attrs:{label:"9 Author phone num",prop:"pass8"}},[t("el-input",{model:{value:e.ruleForm.pass8,callback:function(s){e.$set(e.ruleForm,"pass8",s)},expression:"ruleForm.pass8"}})],1),t("el-form-item",{attrs:{label:"10 Doucment Secrecy Level",prop:"pass9"}},[t("el-input",{model:{value:e.ruleForm.pass9,callback:function(s){e.$set(e.ruleForm,"pass9",s)},expression:"ruleForm.pass9"}})],1),t("el-form-item",{attrs:{prop:"pass10"}},[t("template",{slot:"label"},[t("span",[e._v("11 Objects")]),t("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("目标")])]),t("el-input",{model:{value:e.ruleForm.pass10,callback:function(s){e.$set(e.ruleForm,"pass10",e._n(s))},expression:"ruleForm.pass10"}})],2),t("el-form-item",{attrs:{prop:"pass11"}},[t("template",{slot:"label"},[t("span",[e._v("12 Inputs")]),t("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("输入信息")])]),t("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass11,callback:function(s){e.$set(e.ruleForm,"pass11",e._n(s))},expression:"ruleForm.pass11"}})],2),t("el-form-item",[t("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),t("el-form-item",{attrs:{prop:"pass12"}},[t("template",{slot:"label"},[t("span",[e._v("14 Outputs")]),t("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("工作输出")])]),t("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass12,callback:function(s){e.$set(e.ruleForm,"pass12",e._n(s))},expression:"ruleForm.pass12"}})],2),t("el-form-item",{attrs:{prop:"pass13"}},[t("template",{slot:"label"},[t("span",[e._v("15 Document History")]),t("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("文件历史")])]),t("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass13,callback:function(s){e.$set(e.ruleForm,"pass13",e._n(s))},expression:"ruleForm.pass13"}})],2),t("el-form-item",{attrs:{prop:"pass14"}},[t("template",{slot:"label"},[t("span",[e._v("16 Todo List")]),t("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("任务清单")])]),t("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass14,callback:function(s){e.$set(e.ruleForm,"pass14",e._n(s))},expression:"ruleForm.pass14"}})],2),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(s){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)},a=[],r={name:"ProjectInformation",data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{required:!0,message:"请输入",trigger:"change"}],checkPass:[{required:!0,message:"请输入",trigger:"change"}],age:[{required:!0,message:"请输入",trigger:"change"}]},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""}},methods:{submitForm:function(e){var s=this;this.$refs[e].validate((function(e){return!!e&&(console.log(s.ruleForm),"222")}))},resetForm:function(e){this.$refs[e].resetFields()},handleRemove:function(e,s){console.log(e,s)},handlePreview:function(e){console.log(e)}}},o=r,p=t("2877"),u=Object(p["a"])(o,l,a,!1,null,"16a9b45d",null);s["default"]=u.exports}}]);