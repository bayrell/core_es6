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
if (typeof Core.UI.Render == 'undefined') Core.UI.Render = {};
Core.UI.Render.CoreView = class extends Runtime.CoreStruct{
	/**
	 * Returns module name
	 */
	static moduleName(){
		return this.getCurrentNamespace();
	}
	/**
	 * Returns module description
	 */
	static moduleDescription(){
		return Runtime.rtl.toString(this.moduleName())+".ModuleDescription";
	}
	/**
	 * Returns manager name
	 */
	static managerName(){
		/*rtl::dump( static::getCurrentClassName() );*/
		return Runtime.rtl.method(this.moduleDescription(), "componentManagerName")();
	}
	/**
	 * Returns model name
	 */
	static modelName(){
		/*rtl::dump( static::getCurrentClassName() );*/
		return Runtime.rtl.method(this.moduleDescription(), "componentModelName")();
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Render.CoreView";}
	static getCurrentNamespace(){return "Core.UI.Render";}
	static getCurrentClassName(){return "Core.UI.Render.CoreView";}
	static getParentClassName(){return "Runtime.CoreStruct";}
	assignObject(obj){
		if (obj instanceof Core.UI.Render.CoreView){
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