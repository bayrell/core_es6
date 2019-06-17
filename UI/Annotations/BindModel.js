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
if (typeof Core.UI.Annotations == 'undefined') Core.UI.Annotations = {};
Core.UI.Annotations.BindModel = class extends Core.UI.Annotations.AnnotationEvent{
	/**
	 * OnEvent
	 */
	events(){
		return (new Runtime.Vector()).push("Core.UI.Events.ModelChange").push("Core.UI.Events.UserEvent.ChangeEvent");
	}
	/**
	 * OnEvent
	 */
	static onEvent(manager, e){
		if (e.event instanceof Core.UI.Events.UserEvent.ChangeEvent){
			var map = new Runtime.Map();
			map.set(e.annotation.model, e.event.value);
			manager.updateModel(map);
		}
		if (e.event instanceof Core.UI.Events.ModelChange){
			var map = new Runtime.Map();
			map.set(e.annotation.model, e.event.model);
			manager.updateModel(map);
		}
	}
	/**
	 * Add Emitter
	 */
	static addEmitter(manager, emitter, ui, annotation){
		emitter.addMethod(this.onEventFactory(manager, ui, annotation), (new Runtime.Vector()).push("Core.UI.Events.ModelChange").push("Core.UI.Events.UserEvent.ChangeEvent"));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Annotations.BindModel";}
	static getCurrentNamespace(){return "Core.UI.Annotations";}
	static getCurrentClassName(){return "Core.UI.Annotations.BindModel";}
	static getParentClassName(){return "Core.UI.Annotations.AnnotationEvent";}
	_init(){
		super._init();
		var names = Object.getOwnPropertyNames(this);
		this.__model = "";
		if (names.indexOf("model") == -1)Object.defineProperty(this, "model", { get: function() { return this.__model; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("model") }});
	}
	assignObject(obj){
		if (obj instanceof Core.UI.Annotations.BindModel){
			this.__model = obj.__model;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "model")this.__model = Runtime.rtl.convert(value,"string","","");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "model") return this.__model;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("model");
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