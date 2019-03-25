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
RuntimeUI.Events.MountEvent = class extends Runtime.CoreEvent{
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Events.MountEvent";}
	static getCurrentClassName(){return "RuntimeUI.Events.MountEvent";}
	static getParentClassName(){return "Runtime.CoreEvent";}
	_init(){
		super._init();
		this.__elem = null;
		Object.defineProperty(this, "elem", { get: function() { return this.__elem; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("elem") }});
		this.__ui = null;
		Object.defineProperty(this, "ui", { get: function() { return this.__ui; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("ui") }});
	}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Events.MountEvent){
			this.__elem = obj.__elem;
			this.__ui = obj.__ui;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "elem")this.__elem = Runtime.rtl.convert(value,"mixed",null,"");
		else if (variable_name == "ui")this.__ui = Runtime.rtl.convert(value,"Runtime.UIStruct",null,"");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "elem") return this.__elem;
		else if (variable_name == "ui") return this.__ui;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("elem");
			names.push("ui");
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
}