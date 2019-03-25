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
RuntimeUI.Events.ComponentEvent = class extends RuntimeUI.Events.CommandEvent{
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Events.ComponentEvent";}
	static getCurrentClassName(){return "RuntimeUI.Events.ComponentEvent";}
	static getParentClassName(){return "RuntimeUI.Events.CommandEvent";}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Events.ComponentEvent){
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
}
RuntimeUI.Events.ComponentEvent.START_EVENT = "start";
RuntimeUI.Events.ComponentEvent.STOP_EVENT = "stop";
RuntimeUI.Events.ComponentEvent.MOUNT_EVENT = "mount";
RuntimeUI.Events.ComponentEvent.UNMOUNT_EVENT = "unmount";
RuntimeUI.Events.ComponentEvent.UPDATE_EVENT = "update";
RuntimeUI.Events.ComponentEvent.REPAINT_EVENT = "repaint";