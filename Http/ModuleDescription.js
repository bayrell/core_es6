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
Core.Http.ModuleDescription = class{
	/**
	 * Returns module name
	 * @return string
	 */
	static getModuleName(){
		return "Core.Http";
	}
	/**
	 * Returns module name
	 * @return string
	 */
	static getModuleVersion(){
		return "0.7.3";
	}
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	static requiredModules(){
		return (new Runtime.Map()).set("Runtime", ">=0.3").set("Core.Interfaces", "*");
	}
	/**
	 * Returns module files load order
	 * @return Collection<string>
	 */
	static getModuleFiles(){
		return (new Runtime.Vector()).push("Core.Http.ApiRequest").push("Core.Http.ApiResult").push("Core.Http.Cookie").push("Core.Http.Request").push("Core.Http.Response").push("Core.Http.JsonResponse").push("Core.Http.ModuleDescription");
	}
	/**
	 * Returns enities
	 */
	static entities(){
		return null;
	}
	/**
	 * Returns required assets
	 * @return Collection<string>
	 */
	static assets(container){
		return null;
	}
	/**
	 * Returns sync loaded files
	 */
	static resources(container){
		return null;
	}
	/**
	 * Init render container
	 */
	static initContainer(container){
		return container;
	}
	/**
	 * Register lambda filters
	 */
	static lambdaFilters(){
		return null;
	}
	/**
	 * Called then module registed in context
	 * @param ContextInterface context
	 */
	static onRegister(context){
	}
	/**
	 * Called then context read config
	 * @param Map<mixed> config
	 */
	static onReadConfig(context, config){
	}
	/**
	 * Init context
	 * @param ContextInterface context
	 */
	static onInitContext(context){
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.Http.ModuleDescription";}
	static getCurrentNamespace(){return "Core.Http";}
	static getCurrentClassName(){return "Core.Http.ModuleDescription";}
	static getParentClassName(){return "";}
	_init(){
		if (this.__implements__ == undefined){this.__implements__ = [];}
		this.__implements__.push(Runtime.Interfaces.ModuleDescriptionInterface);
		this.__implements__.push(Core.Interfaces.AssetsInterface);
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
Core.Http.ModuleDescription.__static_implements__ = [];
Core.Http.ModuleDescription.__static_implements__.push(Runtime.Interfaces.ModuleDescriptionInterface)
Core.Http.ModuleDescription.__static_implements__.push(Core.Interfaces.AssetsInterface)