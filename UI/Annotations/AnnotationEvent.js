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
Core.UI.Annotations.AnnotationEvent = class extends Runtime.CoreStruct{
	/**
	 * OnEvent
	 */
	events(){
		return (new Runtime.Vector());
	}
	/**
	 * OnEvent
	 */
	static onEvent(manager, e){
	}
	/**
	 * Factory onEvent
	 */
	static onEventFactory(manager, ui, annotation){
		return (event) => {
			var ui_event = new Core.UI.UIEvent((new Runtime.Map()).set("annotation", annotation).set("event", event).set("ui", ui));
			this.onEvent(manager, ui_event);
		}
	}
	/**
	 * Add Emitter
	 */
	static addEmitter(manager, emitter, ui, annotation){
	}
	/**
	 * Dispatch Event
	 */
	static dispatch(manager, ui, annotation, event, ref){
		if (ref == undefined) ref=null;
		var ui_event = new Core.UI.UIEvent((new Runtime.Map()).set("annotation", annotation).set("event", event).set("ref", ref).set("ui", ui));
		this.onEvent(manager, ui_event);
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Annotations.AnnotationEvent";}
	static getCurrentNamespace(){return "Core.UI.Annotations";}
	static getCurrentClassName(){return "Core.UI.Annotations.AnnotationEvent";}
	static getParentClassName(){return "Runtime.CoreStruct";}
	assignObject(obj){
		if (obj instanceof Core.UI.Annotations.AnnotationEvent){
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
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