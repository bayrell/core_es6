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
if (typeof Core.FileSystem == 'undefined') Core.FileSystem = {};
if (typeof Core.FileSystem.Provider == 'undefined') Core.FileSystem.Provider = {};
Core.FileSystem.Provider.ModuleDescription = class{
	/**
	 * Returns module name
	 * @return string
	 */
	static getModuleName(){
		return "Core.FileSystem.Provider";
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
	 * @return Map<string, string>
	 */
	static requiredModules(){
		return (new Runtime.Map()).set("Runtime", ">=0.2 <1.0").set("Core.FileSystem", "*");
	}
	/**
	 * Returns module files load order
	 * @return Collection<string>
	 */
	static getModuleFiles(){
		return (new Runtime.Vector()).push("Core.FileSystem.Provider.FileSystemProvider").push("Core.FileSystem.Provider.FileSystemProviderFactory").push("Core.FileSystem.Provider.ModuleDescription");
	}
	/**
	 * Returns enities
	 */
	static entities(){
		return (new Runtime.Vector()).push(new Runtime.Provider((new Runtime.Map()).set("name", "default.fs").set("value", "Core.FileSystem.Provider.FileSystemProvider")));
	}
	/**
	 * Called then module registed in context
	 * @param ContextInterface context
	 */
	static onRegister(context){
	}
	/**
	 * Init context
	 * @param ContextInterface context
	 */
	static onInitContext(context){
	}
	/**
	 * Called then context read config
	 * @param Map<mixed> config
	 */
	static onReadConfig(context, config){
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.FileSystem.Provider.ModuleDescription";}
	static getCurrentNamespace(){return "Core.FileSystem.Provider";}
	static getCurrentClassName(){return "Core.FileSystem.Provider.ModuleDescription";}
	static getParentClassName(){return "";}
	_init(){
		if (this.__implements__ == undefined){this.__implements__ = [];}
		this.__implements__.push(Runtime.Interfaces.ModuleDescriptionInterface);
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
Core.FileSystem.Provider.ModuleDescription.__static_implements__ = [];
Core.FileSystem.Provider.ModuleDescription.__static_implements__.push(Runtime.Interfaces.ModuleDescriptionInterface)