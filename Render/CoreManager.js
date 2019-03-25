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
if (typeof RuntimeUI.Render == 'undefined') RuntimeUI.Render = {};
RuntimeUI.Render.CoreManager = class extends Runtime.CoreObject{
	/**
	 * Constructor
	 */
	constructor(){
		super();
		/* Analyze controllers annotaions */
		var introspection = Runtime.RuntimeUtils.getIntrospection(this.getClassName());
		introspection.each((info) => {
			var annotations = (Runtime.rtl.method(info.getClassName(), "filterAnnotations"))("RuntimeUI.Annotations.ControllerAnnotation", info);
			annotations.each((annotation) => {
				this.initAnnotation(info, annotation);
			});
		});
	}
	/**
	 * Set parent manager
	 */
	setParentManager(parent_manager, parent_controller_name){
		if (this.parent_controller_name != "" && this.parent_manager != null){
			var controller = this.parent_manager.takeValue(this.parent_controller_name, null);
			if (controller != null){
				controller.signal_in.removeEmitter(this.signal_in);
				this.signal_out.removeEmitter(controller.signal_out);
			}
		}
		this.parent_controller_name = parent_controller_name;
		this.parent_manager = parent_manager;
		if (parent_manager != null && parent_controller_name != ""){
			var parent_controller = parent_manager.takeValue(parent_controller_name, null);
			if (parent_controller != null){
				parent_controller.signal_in.addEmitter(this.signal_in);
				this.signal_out.addEmitter(parent_controller.signal_out);
			}
		}
	}
	/**
	 * Init Annotation
	 */
	initAnnotation(info, annotation){
		if (info.kind != Runtime.IntrospectionInfo.ITEM_FIELD){
			return ;
		}
		var field_name = info.name;
		var controller = this.takeValue(field_name);
		controller.manager = this;
		(Runtime.rtl.method(annotation.getClassName(), "initController"))(this, annotation, controller);
	}
	/**
	 * Update current model
	 * @param Dict map
	 */
	updateModel(map){
		this.model = this.model.copy(map);
		this.signal_out.dispatch(new RuntimeUI.Events.ModelChange((new Runtime.Map()).set("model", this.model)));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Render.CoreManager";}
	static getCurrentClassName(){return "RuntimeUI.Render.CoreManager";}
	static getParentClassName(){return "Runtime.CoreObject";}
	_init(){
		super._init();
		this.signal_in = new Runtime.Emitter();
		this.signal_out = new Runtime.Emitter();
		this.parent_controller_name = "";
		this.parent_manager = null;
	}
}