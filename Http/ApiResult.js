"use strict;"
/*!
 *  Bayrell Core Library
 *
 *  (c) Copyright 2018-2019 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Core == 'undefined') Core = {};
if (typeof Core.Http == 'undefined') Core.Http = {};
Core.Http.ApiResult = class extends Runtime.CoreStruct{
	/**
	 * Returns true if success
	 * @param ApiResult res
	 * @return bool
	 */
	static isSuccess(res){
		return res.success && res.code >= Runtime.RuntimeConstant.ERROR_OK;
	}
	/**
	 * Set error data
	 * @param int code
	 * @param string error
	 * @param ApiResult res
	 * @return ApiResult
	 */
	static setError(res, code, error){
		if (error == undefined) error="";
		var success = false;
		if (code >= Runtime.RuntimeConstant.ERROR_OK){
			success = true;
		}
		return res.copy((new Runtime.Map()).set("code", code).set("error", error).set("success", success));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.Http.ApiResult";}
	static getCurrentNamespace(){return "Core.Http";}
	static getCurrentClassName(){return "Core.Http.ApiResult";}
	static getParentClassName(){return "Runtime.CoreStruct";}
	_init(){
		super._init();
		var names = Object.getOwnPropertyNames(this);
		this.__success = false;
		if (names.indexOf("success") == -1)Object.defineProperty(this, "success", { get: function() { return this.__success; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("success") }});
		this.__code = -1;
		if (names.indexOf("code") == -1)Object.defineProperty(this, "code", { get: function() { return this.__code; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("code") }});
		this.__error = "";
		if (names.indexOf("error") == -1)Object.defineProperty(this, "error", { get: function() { return this.__error; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("error") }});
		this.__class_name = "";
		if (names.indexOf("class_name") == -1)Object.defineProperty(this, "class_name", { get: function() { return this.__class_name; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("class_name") }});
		this.__method_name = "";
		if (names.indexOf("method_name") == -1)Object.defineProperty(this, "method_name", { get: function() { return this.__method_name; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("method_name") }});
		this.__text = "";
		if (names.indexOf("text") == -1)Object.defineProperty(this, "text", { get: function() { return this.__text; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("text") }});
		this.__result = null;
		if (names.indexOf("result") == -1)Object.defineProperty(this, "result", { get: function() { return this.__result; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("result") }});
		this.__params = null;
		if (names.indexOf("params") == -1)Object.defineProperty(this, "params", { get: function() { return this.__params; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("params") }});
	}
	assignObject(obj){
		if (obj instanceof Core.Http.ApiResult){
			this.__success = obj.__success;
			this.__code = obj.__code;
			this.__error = obj.__error;
			this.__class_name = obj.__class_name;
			this.__method_name = obj.__method_name;
			this.__text = obj.__text;
			this.__result = obj.__result;
			this.__params = obj.__params;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "success")this.__success = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "code")this.__code = Runtime.rtl.convert(value,"int",-1,"");
		else if (variable_name == "error")this.__error = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "class_name")this.__class_name = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "method_name")this.__method_name = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "text")this.__text = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "result")this.__result = Runtime.rtl.convert(value,"primitive",null,"");
		else if (variable_name == "params")this.__params = Runtime.rtl.convert(value,"primitive",null,"");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "success") return this.__success;
		else if (variable_name == "code") return this.__code;
		else if (variable_name == "error") return this.__error;
		else if (variable_name == "class_name") return this.__class_name;
		else if (variable_name == "method_name") return this.__method_name;
		else if (variable_name == "text") return this.__text;
		else if (variable_name == "result") return this.__result;
		else if (variable_name == "params") return this.__params;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("success");
			names.push("code");
			names.push("error");
			names.push("class_name");
			names.push("method_name");
			names.push("text");
			names.push("result");
			names.push("params");
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
	static getMethodsList(names){
	}
	static getMethodInfoByName(method_name){
		return null;
	}
}