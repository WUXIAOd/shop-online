(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cate_Params"],{"3b0d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("参数列表")])],1),a("el-card",[a("el-alert",{attrs:{title:"注意：",type:"warning",description:"仅允许修改第三级分类的相关参数！","show-icon":""}}),a("el-row",{staticClass:"cate-row"},[a("el-col",[a("span",{staticClass:"span"},[t._v("选择商品分类:")]),a("el-cascader",{attrs:{"expand-trigger":"hover",options:t.paramsList,props:t.cascaderProps,clearable:""},on:{change:t.handleChange},model:{value:t.selectedParamsKeys,callback:function(e){t.selectedParamsKeys=e},expression:"selectedParamsKeys"}})],1)],1),a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtnDisabled},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加参数")]),a("el-table",{attrs:{data:t.manyTableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return t.handlerClose(n,e.row)}}},[t._v(t._s(r))])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.showEditDialog(e.row.attr_id)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.deleteParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtnDisabled},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加属性")]),a("el-table",{attrs:{data:t.onlyTableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return t.handlerClose(n,e.row)}}},[t._v(t._s(r))])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"属性名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.showEditDialog(e.row.attr_id)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.deleteParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1)],1)],1),a("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.closeResetDialog}},[a("el-form",{ref:"addParamsFormRef",attrs:{model:t.addParamsForm,rules:t.addParamsFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.addParamsForm.attr_name,callback:function(e){t.$set(t.addParamsForm,"attr_name",e)},expression:"addParamsForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addParams}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改"+t.titleText,visible:t.editDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editDialogVisible=e},close:t.editResetDialog}},[a("el-form",{ref:"editParamsFormRef",attrs:{model:t.editParamsForm,rules:t.editParamsFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.editParamsForm.attr_name,callback:function(e){t.$set(t.editParamsForm,"attr_name",e)},expression:"editParamsForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editParams}},[t._v("确 定")])],1)],1)],1)},n=[],s=(a("99af"),a("a15b"),a("a434"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("96cf"),a("1da1")),i={data:function(){return{paramsList:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children"},selectedParamsKeys:[],activeName:"many",manyTableData:[],onlyTableData:[],dialogVisible:!1,addParamsForm:{attr_name:""},addParamsFormRules:{attr_name:[{required:!0,message:"请输入参数名",trigger:"blur"}]},editDialogVisible:!1,editParamsForm:{},editParamsFormRules:{attr_name:[{required:!0,message:"请输入参数名",trigger:"blur"}]}}},created:function(){this.getParamsList()},methods:{getParamsList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories");case 2:if(e=t.sent,a=e.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("获取参数分类失败！"));case 6:this.paramsList=a.data;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleChange:function(){this.getParamsData()},handleTabClick:function(){this.getParamsData()},getParamsData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 3!==this.selectedParamsKeys.length&&(this.selectedParamsKeys=[],this.manyTableData=[],this.onlyTableData=[]),t.next=3,this.$http.get("categories/".concat(this.cateId,"/attributes"),{params:{sel:this.activeName}});case 3:if(e=t.sent,a=e.data,200===a.meta.status){t.next=7;break}return t.abrupt("return",this.$message.error("获取参数列表失败！"));case 7:a.data.forEach((function(t){t.attr_vals=t.attr_vals?(t.attr_vals||"").split(" "):[],t.inputVisible=!1,t.inputValue=""})),"many"===this.activeName?this.manyTableData=a.data:this.onlyTableData=a.data;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeResetDialog:function(){this.$refs.addParamsFormRef.resetFields()},addParams:function(){var t=this;this.$refs.addParamsFormRef.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("categories/".concat(t.cateId,"/attributes"),{attr_name:t.addParamsForm.attr_name,attr_sel:t.activeName});case 4:if(r=e.sent,n=r.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("添加参数失败！"));case 8:t.$message.success("添加参数成功！"),t.dialogVisible=!1,t.getParamsData();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},showEditDialog:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories/".concat(this.cateId,"/attributes/").concat(e),{params:{attr_sel:this.activeName}});case 2:if(a=t.sent,r=a.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("获取失败！"));case 6:this.editParamsForm=r.data,this.editDialogVisible=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editResetDialog:function(){this.$refs.editParamsFormRef.resetFields()},editParams:function(){var t=this;this.$refs.editParamsFormRef.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.put("categories/".concat(t.cateId,"/attributes/").concat(t.editParamsForm.attr_id),{attr_name:t.editParamsForm.attr_name,attr_sel:t.activeName});case 4:if(r=e.sent,n=r.data,200===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("修改信息失败！"));case 8:t.$message.success("修改成功！"),t.getParamsData(),t.editDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},deleteParams:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("将永久删除此项，是否继续操作？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(a=t.sent,"confirm"===a){t.next=5;break}return t.abrupt("return",this.$message.info("已取消删除！"));case 5:return t.next=7,this.$http.delete("categories/".concat(this.cateId,"/attributes/").concat(e));case 7:if(r=t.sent,n=r.data,200===n.meta.status){t.next=11;break}return t.abrupt("return",this.$message.error("删除失败！"));case 11:this.$message.success("删除成功！"),this.getParamsData();case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleInputConfirm:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.inputValue.trim().length){t.next=4;break}return e.inputValue="",e.inputVisible=!1,t.abrupt("return");case 4:e.attr_vals.push(e.inputValue.trim()),e.inputValue="",e.inputVisible=!1,this.saveAttribute(e);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},saveAttribute:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.put("categories/".concat(this.cateId,"/attributes/").concat(e.attr_id),{attr_name:e.attr_name,attr_sel:e.attr_sel,attr_vals:e.attr_vals.join(" ")});case 2:if(a=t.sent,r=a.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("修改参数项失败！"));case 6:this.$message.success("修改参数项成功！");case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handlerClose:function(t,e){e.attr_vals.splice(t,1),this.saveAttribute(e)}},computed:{isBtnDisabled:function(){return 3!==this.selectedParamsKeys.length},cateId:function(){return 3===this.selectedParamsKeys.length?this.selectedParamsKeys[2]:null},titleText:function(){return"many"===this.activeName?"动态参数":"静态属性"}}},o=i,l=(a("85c8"),a("2877")),c=Object(l["a"])(o,r,n,!1,null,"a7127066",null);e["default"]=c.exports},"498a":function(t,e,a){"use strict";var r=a("23e7"),n=a("58a8").trim,s=a("e070");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("5899"),s="["+n+"]",i=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),l=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},"7f6a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("商品分类")])],1),a("el-card",[a("el-row",[a("el-col",[a("el-button",{attrs:{type:"primary"},on:{click:t.showDialog}},[t._v("添加分类")])],1)],1)],1),a("tree-table",{staticClass:"table",attrs:{border:"","index-text":"#","show-index":"","expand-type":!1,"selection-type":!1,"show-row-hover":"",data:t.cateList,columns:t.columns},scopedSlots:t._u([{key:"istrue",fn:function(t){return[!1===t.row.cat_deleted?a("i",{staticClass:"el-icon-success",staticStyle:{color:"lightgreen"}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"red"}})]}},{key:"order",fn:function(e){return[0===e.row.cat_level?a("el-tag",{attrs:{size:"mini"}},[t._v("一级")]):1===e.row.cat_level?a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("二级")]):a("el-tag",{attrs:{size:"mini",type:"warning"}},[t._v("三级")])]}}])},[a("template",{slot:"options"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}},[t._v("编辑")]),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini"}},[t._v("删除")])],1)],2),a("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[3,5,10,15],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{title:"添加商品分类",visible:t.addCateDialogVisible,width:"50%"},on:{"update:visible":function(e){t.addCateDialogVisible=e},close:t.closeReset}},[a("el-form",{ref:"addCateRef",attrs:{model:t.addCate,rules:t.addCateRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品类名",prop:"cat_name"}},[a("el-input",{model:{value:t.addCate.cat_name,callback:function(e){t.$set(t.addCate,"cat_name",e)},expression:"addCate.cat_name"}})],1),a("el-form-item",{attrs:{label:"父级分类"}},[a("el-cascader",{attrs:{expandTrigger:"hover",options:t.parentCateList,props:t.cascaderProps,clearable:"","change-on-select":""},on:{change:t.parentCateChange},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addCateDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addCateSub}},[t._v("确 定")])],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),i={data:function(){return{queryInfo:{type:3,pagenum:1,pagesize:5},cateList:[],total:0,columns:[{label:"类名",prop:"cat_name"},{label:"是否有效",type:"template",template:"istrue"},{label:"排序",type:"template",template:"order"},{label:"操作",type:"template",template:"options"}],addCateDialogVisible:!1,addCate:{cat_name:"",cat_pid:0,cat_level:0},addCateRules:{cat_name:[{required:!0,message:"请输入商品类名",trigger:"blur"}]},parentCateList:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children"},selectedKeys:[]}},created:function(){this.getCateList()},methods:{getCateList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories",{params:this.queryInfo});case 2:if(e=t.sent,a=e.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("获取商品分类失败！"));case 6:this.cateList=a.data.result,this.total=a.data.total;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getCateList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getCateList()},showDialog:function(){this.getParentCate(),this.addCateDialogVisible=!0},getParentCate:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories",{params:{type:2}});case 2:e=t.sent,a=e.data,200!==a.meta.status&&this.$message.error("获取父级分类失败！"),this.parentCateList=a.data;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),parentCateChange:function(){this.selectedKeys.length>0?(this.addCate.cat_pid=this.selectedKeys[this.selectedKeys.length-1],this.addCate.cat_level=this.selectedKeys.length):(this.addCate.cat_pid=0,this.addCate.cat_level=0)},closeReset:function(){this.$refs.addCateRef.resetFields(),this.selectedKeys=[],this.addCate.cat_pid=0,this.addCate.cat_level=0},addCateSub:function(){var t=this;this.$refs.addCateRef.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("categories",t.addCate);case 4:r=e.sent,n=r.data,201!==n.meta.status&&t.$message.error("添加分类失败！"),t.$message.success("添加分类成功！"),t.addCateDialogVisible=!1,t.getCateList();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},o=i,l=(a("903c"),a("2877")),c=Object(l["a"])(o,r,n,!1,null,"83dc86f6",null);e["default"]=c.exports},"822a":function(t,e,a){},"85c8":function(t,e,a){"use strict";var r=a("822a"),n=a.n(r);n.a},"903c":function(t,e,a){"use strict";var r=a("ecf3"),n=a.n(r);n.a},e070:function(t,e,a){var r=a("d039"),n=a("5899"),s="​᠎";t.exports=function(t){return r((function(){return!!n[t]()||s[t]()!=s||n[t].name!==t}))}},ecf3:function(t,e,a){}}]);
//# sourceMappingURL=Cate_Params.3ae37549.js.map