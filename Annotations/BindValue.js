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
if (typeof RuntimeUI.Annotations == 'undefined') RuntimeUI.Annotations = {};
RuntimeUI.Annotations.BindValue = class extends RuntimeUI.Annotations.ControllerAnnotation{
	/**
	 * Init controller
	 */
	static initController(manager, annotation, controller){
		controller.addSignalOut(this.onChangeModel(manager, annotation, controller), (new Runtime.Vector()).push("RuntimeUI.Events.ModelChange"));
		controller.addSignalOut(this.onChangeValue(manager, annotation, controller), (new Runtime.Vector()).push("RuntimeUI.Events.UserEvent.ChangeEvent"));
	}
	/**
	 * On change
	 */
	static onChangeValue(manager, annotation, controller){
		return (event) => {
			var map = new Runtime.Map();
			map.set(annotation.model, event.value);
			/* Set new value */
			manager.updateModel(map);
		}
	}
	/**
	 * On change
	 */
	static onChangeModel(manager, annotation, controller){
		return (event) => {
			var map = new Runtime.Map();
			map.set(annotation.model, event.model.takeValue("value", null));
			/* Set new value */
			manager.updateModel(map);
		}
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Annotations.BindValue";}
	static getCurrentClassName(){return "RuntimeUI.Annotations.BindValue";}
	static getParentClassName(){return "RuntimeUI.Annotations.ControllerAnnotation";}
	_init(){
		super._init();
		this.__model = "";
		Object.defineProperty(this, "model", { get: function() { return this.__model; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("model") }});
	}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Annotations.BindValue){
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
}