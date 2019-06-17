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
if (typeof Core.UI == 'undefined') Core.UI = {};
if (typeof Core.UI.Events == 'undefined') Core.UI.Events = {};
if (typeof Core.UI.Events.KeyboardEvent == 'undefined') Core.UI.Events.KeyboardEvent = {};
Core.UI.Events.KeyboardEvent.KeyboardEvent = class extends Core.UI.Events.UserEvent.UserEvent{
	
	assignEvent(e){
		super.assignEvent(e);
		this.setMap(new Runtime.Dict({
			"altKey": e.altKey,
			"charCode": e.charCode,
			"code": e.code,
			"ctrlKey": e.ctrlKey,
			"key": e.key,
			"keyCode": e.keyCode,
			"locale": e.locale,
			"location": e.location,
			"repeat": e.repeat,
			"shiftKey": e.shiftKey,
			"which": e.which,
			"value": e.currentTarget.value,
		}));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Events.KeyboardEvent.KeyboardEvent";}
	static getCurrentNamespace(){return "Core.UI.Events.KeyboardEvent";}
	static getCurrentClassName(){return "Core.UI.Events.KeyboardEvent.KeyboardEvent";}
	static getParentClassName(){return "Core.UI.Events.UserEvent.UserEvent";}
	_init(){
		super._init();
		var names = Object.getOwnPropertyNames(this);
		this.__altKey = false;
		if (names.indexOf("altKey") == -1)Object.defineProperty(this, "altKey", { get: function() { return this.__altKey; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("altKey") }});
		this.__charCode = 0;
		if (names.indexOf("charCode") == -1)Object.defineProperty(this, "charCode", { get: function() { return this.__charCode; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("charCode") }});
		this.__code = "";
		if (names.indexOf("code") == -1)Object.defineProperty(this, "code", { get: function() { return this.__code; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("code") }});
		this.__ctrlKey = false;
		if (names.indexOf("ctrlKey") == -1)Object.defineProperty(this, "ctrlKey", { get: function() { return this.__ctrlKey; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("ctrlKey") }});
		this.__key = false;
		if (names.indexOf("key") == -1)Object.defineProperty(this, "key", { get: function() { return this.__key; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("key") }});
		this.__keyCode = 0;
		if (names.indexOf("keyCode") == -1)Object.defineProperty(this, "keyCode", { get: function() { return this.__keyCode; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("keyCode") }});
		this.__locale = "";
		if (names.indexOf("locale") == -1)Object.defineProperty(this, "locale", { get: function() { return this.__locale; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("locale") }});
		this.__location = 0;
		if (names.indexOf("location") == -1)Object.defineProperty(this, "location", { get: function() { return this.__location; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("location") }});
		this.__repeat = false;
		if (names.indexOf("repeat") == -1)Object.defineProperty(this, "repeat", { get: function() { return this.__repeat; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("repeat") }});
		this.__shiftKey = false;
		if (names.indexOf("shiftKey") == -1)Object.defineProperty(this, "shiftKey", { get: function() { return this.__shiftKey; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("shiftKey") }});
		this.__which = 0;
		if (names.indexOf("which") == -1)Object.defineProperty(this, "which", { get: function() { return this.__which; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("which") }});
		this.__value = "";
		if (names.indexOf("value") == -1)Object.defineProperty(this, "value", { get: function() { return this.__value; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("value") }});
	}
	assignObject(obj){
		if (obj instanceof Core.UI.Events.KeyboardEvent.KeyboardEvent){
			this.__altKey = obj.__altKey;
			this.__charCode = obj.__charCode;
			this.__code = obj.__code;
			this.__ctrlKey = obj.__ctrlKey;
			this.__key = obj.__key;
			this.__keyCode = obj.__keyCode;
			this.__locale = obj.__locale;
			this.__location = obj.__location;
			this.__repeat = obj.__repeat;
			this.__shiftKey = obj.__shiftKey;
			this.__which = obj.__which;
			this.__value = obj.__value;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "altKey")this.__altKey = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "charCode")this.__charCode = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "code")this.__code = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "ctrlKey")this.__ctrlKey = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "key")this.__key = Runtime.rtl.convert(value,"string",false,"");
		else if (variable_name == "keyCode")this.__keyCode = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "locale")this.__locale = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "location")this.__location = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "repeat")this.__repeat = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "shiftKey")this.__shiftKey = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "which")this.__which = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "value")this.__value = Runtime.rtl.convert(value,"string","","");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "altKey") return this.__altKey;
		else if (variable_name == "charCode") return this.__charCode;
		else if (variable_name == "code") return this.__code;
		else if (variable_name == "ctrlKey") return this.__ctrlKey;
		else if (variable_name == "key") return this.__key;
		else if (variable_name == "keyCode") return this.__keyCode;
		else if (variable_name == "locale") return this.__locale;
		else if (variable_name == "location") return this.__location;
		else if (variable_name == "repeat") return this.__repeat;
		else if (variable_name == "shiftKey") return this.__shiftKey;
		else if (variable_name == "which") return this.__which;
		else if (variable_name == "value") return this.__value;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("altKey");
			names.push("charCode");
			names.push("code");
			names.push("ctrlKey");
			names.push("key");
			names.push("keyCode");
			names.push("locale");
			names.push("location");
			names.push("repeat");
			names.push("shiftKey");
			names.push("which");
			names.push("value");
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