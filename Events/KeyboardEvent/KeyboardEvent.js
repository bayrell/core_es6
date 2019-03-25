"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof RuntimeUI == 'undefined') RuntimeUI = {};
if (typeof RuntimeUI.Events == 'undefined') RuntimeUI.Events = {};
if (typeof RuntimeUI.Events.KeyboardEvent == 'undefined') RuntimeUI.Events.KeyboardEvent = {};
RuntimeUI.Events.KeyboardEvent.KeyboardEvent = class extends RuntimeUI.Events.UserEvent.UserEvent{
	
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
		}));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Events.KeyboardEvent.KeyboardEvent";}
	static getCurrentClassName(){return "RuntimeUI.Events.KeyboardEvent.KeyboardEvent";}
	static getParentClassName(){return "RuntimeUI.Events.UserEvent.UserEvent";}
	_init(){
		super._init();
		this.altKey = false;
		this.charCode = 0;
		this.code = "";
		this.ctrlKey = false;
		this.key = false;
		this.keyCode = 0;
		this.locale = "";
		this.location = 0;
		this.repeat = false;
		this.shiftKey = false;
		this.which = 0;
		if (this.__implements__ == undefined){this.__implements__ = [];}
		this.__implements__.push(Runtime.Interfaces.CloneableInterface);
		this.__implements__.push(Runtime.Interfaces.SerializeInterface);
	}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Events.KeyboardEvent.KeyboardEvent){
			this.altKey = Runtime.rtl._clone(obj.altKey);
			this.charCode = Runtime.rtl._clone(obj.charCode);
			this.code = Runtime.rtl._clone(obj.code);
			this.ctrlKey = Runtime.rtl._clone(obj.ctrlKey);
			this.key = Runtime.rtl._clone(obj.key);
			this.keyCode = Runtime.rtl._clone(obj.keyCode);
			this.locale = Runtime.rtl._clone(obj.locale);
			this.location = Runtime.rtl._clone(obj.location);
			this.repeat = Runtime.rtl._clone(obj.repeat);
			this.shiftKey = Runtime.rtl._clone(obj.shiftKey);
			this.which = Runtime.rtl._clone(obj.which);
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "altKey")this.altKey = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "charCode")this.charCode = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "code")this.code = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "ctrlKey")this.ctrlKey = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "key")this.key = Runtime.rtl.convert(value,"string",false,"");
		else if (variable_name == "keyCode")this.keyCode = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "locale")this.locale = Runtime.rtl.convert(value,"string","","");
		else if (variable_name == "location")this.location = Runtime.rtl.convert(value,"int",0,"");
		else if (variable_name == "repeat")this.repeat = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "shiftKey")this.shiftKey = Runtime.rtl.convert(value,"bool",false,"");
		else if (variable_name == "which")this.which = Runtime.rtl.convert(value,"int",0,"");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "altKey") return this.altKey;
		else if (variable_name == "charCode") return this.charCode;
		else if (variable_name == "code") return this.code;
		else if (variable_name == "ctrlKey") return this.ctrlKey;
		else if (variable_name == "key") return this.key;
		else if (variable_name == "keyCode") return this.keyCode;
		else if (variable_name == "locale") return this.locale;
		else if (variable_name == "location") return this.location;
		else if (variable_name == "repeat") return this.repeat;
		else if (variable_name == "shiftKey") return this.shiftKey;
		else if (variable_name == "which") return this.which;
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
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
}
RuntimeUI.Events.KeyboardEvent.KeyboardEvent.__static_implements__ = [];
RuntimeUI.Events.KeyboardEvent.KeyboardEvent.__static_implements__.push(Runtime.Interfaces.CloneableInterface)
RuntimeUI.Events.KeyboardEvent.KeyboardEvent.__static_implements__.push(Runtime.Interfaces.SerializeInterface)