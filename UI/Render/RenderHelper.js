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
Core.UI.Render.RenderHelper = class{
	/**
	 * Render class with data
	 */
	static render(class_name, data){
		var ui = null;
		if (data instanceof Runtime.CoreStruct){
			var ui = new Runtime.UIStruct((new Runtime.Map()).set("name", class_name).set("kind", Runtime.UIStruct.TYPE_COMPONENT).set("model", data));
		}
		else {
			var ui = new Runtime.UIStruct((new Runtime.Map()).set("name", class_name).set("kind", Runtime.UIStruct.TYPE_COMPONENT).set("props", data));
		}
		return Core.UI.Render.RenderHelper.getUIString(ui);
	}
	/**
	 * Returns if tag name is double token
	 */
	static isDoubleToken(tag_name){
		var __memorize_value = Runtime.rtl._memorizeValue("Core.UI.Render.RenderHelper::isDoubleToken", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var tokens = (new Runtime.Vector()).push("img").push("meta").push("input").push("link").push("br");
		if (tokens.indexOf(tag_name) == -1){
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("Core.UI.Render.RenderHelper::isDoubleToken", arguments, __memorize_value);
			return __memorize_value;
		}
		var __memorize_value = false;
		Runtime.rtl._memorizeSave("Core.UI.Render.RenderHelper::isDoubleToken", arguments, __memorize_value);
		return __memorize_value;
	}
	/**
	 * Retuns css hash 
	 * @param string component class name
	 * @return string hash
	 */
	static getCssHash(s){
		var __memorize_value = Runtime.rtl._memorizeValue("Core.UI.Render.RenderHelper::getCssHash", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var sz = Runtime.rs.strlen(s);
		var h = 0;
		for (var i = 0; i < sz; i++){
			var ch = Runtime.rs.ord(s[i]);
			h = (h << 2) + (h >> 14) + ch & 65535;
		}
		var arr = "1234567890abcdef";
		var res = "";
		while (h != 0){
			var c = h & 15;
			h = h >> 4;
			res += arr[c];
		}
		var __memorize_value = res;
		Runtime.rtl._memorizeSave("Core.UI.Render.RenderHelper::getCssHash", arguments, __memorize_value);
		return __memorize_value;
	}
	/**
	 * Returns attrs
	 */
	static getUIAttrs(ui){
		var attrs = new Runtime.Map();
		if (ui == null){
			return attrs.toDict();
		}
		if (ui.props == null){
			return attrs.toDict();
		}
		var props = Runtime.UIStruct.getAttrs(ui);
		var keys = props.keys();
		for (var ki = 0; ki < keys.count(); ki++){
			var key = keys.item(ki);
			var item = props.item(key);
			var value = "";
			if (Runtime.rs.strlen(key) == 0){
				continue;
			}
			if (key == "@style"){
				if (item instanceof Runtime.Dict){
					key = "style";
					value = item.reduce((res, key, value) => {
						return Runtime.rtl.toString(res)+Runtime.rtl.toString(key)+":"+Runtime.rtl.toString(value)+";";
					}, "");
				}
				else {
					continue;
				}
			}
			else if (Runtime.rtl.implements(item, Runtime.Interfaces.StringInterface)){
				value = Runtime.rtl.toString(item);
			}
			else if (Runtime.rtl.isString(item)){
				value = Runtime.rtl.toString(item);
			}
			if (key == "@class"){
				var css_arr = Runtime.rs.explode(" ", value);
				css_arr = css_arr.map((item) => {
					return Runtime.rtl.toString(item)+"-"+Runtime.rtl.toString(ui.space);
				});
				key = "class";
				value = Runtime.rs.implode(" ", css_arr);
			}
			else if (key[0] == "@"){
				continue;
			}
			else if (key == "dangerouslySetInnerHTML"){
				continue;
			}
			else if (key == "defaultValue"){
				key = "value";
			}
			else if (key == "className"){
				key = "class";
			}
			else if (key == "selected"){
				if (item == true){
					value = "selected";
				}
				else if (item == false){
					return ;
				}
				value = "selected";
			}
			else if (key == "checked"){
				if (item == true){
					value = "checked";
				}
				else if (item == false){
					return ;
				}
				value = "checked";
			}
			if (value != ""){
				if (attrs.has(key)){
					if (key == "style"){
						value = Runtime.rtl.toString(attrs.item(key))+""+Runtime.rtl.toString(value);
					}
					else {
						value = Runtime.rtl.toString(attrs.item(key))+" "+Runtime.rtl.toString(value);
					}
				}
				attrs.set(key, value);
			}
		}
		return attrs;
	}
	/**
	 * Returns attrs
	 */
	static getUIStringAttrs(ui){
		var attrs = this.getUIAttrs(ui);
		attrs = attrs.map((key, value) => {
			return Runtime.rtl.toString(key)+"='"+Runtime.rtl.toString(value)+"'";
		});
		return Runtime.rs.implode(" ", attrs.values());
	}
	/**
	 * Convert UI to string
	 */
	static getUIStringVector(arr){
		if (arr == null){
			return "";
		}
		var content = "";
		for (var i = 0; i < arr.count(); i++){
			content += this.getUIString(arr.item(i));
		}
		return content;
	}
	/**
	 * Convert UI to string
	 */
	static getUIString(ui){
		if (ui == null){
			return "";
		}
		if (Runtime.UIStruct.isString(ui)){
			return ui.content;
		}
		if (Runtime.UIStruct.isComponent(ui)){
			var render = Runtime.rtl.method(ui.name, "render");
			var res = render(Runtime.UIStruct.getModel(ui), ui);
			if (!(res instanceof Runtime.Collection)){
				res = Runtime.rtl.normalizeUIVector(res);
			}
			return this.getUIStringVector(res, ui.name);
		}
		var attrs = this.getUIStringAttrs(ui);
		var content = "";
		if (this.isDoubleToken(ui.name)){
			content = "<"+Runtime.rtl.toString(ui.name)+Runtime.rtl.toString((attrs != "") ? (" "+Runtime.rtl.toString(attrs)) : (""))+">";
			content += this.getUIStringVector(ui.children);
			content += "</"+Runtime.rtl.toString(ui.name)+">";
		}
		else {
			content = "<"+Runtime.rtl.toString(ui.name)+Runtime.rtl.toString((attrs != "") ? (" "+Runtime.rtl.toString(attrs)) : (""))+"/>";
		}
		return content;
	}
	/**
	 * Add unique items to collection
	 * @param Collection<string> res
	 * @param Collection<string> items
	 * @return Collection<string>
	 */
	static addUniqueItems(res, items, insert_first){
		if (insert_first == undefined) insert_first=false;
		if (items == null){
			return res;
		}
		var r = new Runtime.Vector();
		for (var i = 0; i < items.count(); i++){
			var item_name = items.item(i);
			if (res.indexOf(item_name) == -1){
				if (insert_first){
					r.unshift(item_name);
				}
				else {
					r.push(item_name);
				}
			}
		}
		return res.appendCollectionIm(r);
	}
	/**
	 * Returns required modules
	 * @param string class_name
	 * @return Collection<string>
	 */
	static _getModules(res, cache, modules, container){
		if (modules == null){
			return ;
		}
		for (var i = 0; i < modules.count(); i++){
			var module_name = modules.item(i);
			var interfaces = Runtime.RuntimeUtils.getInterfaces(module_name);
			var is_assets = interfaces.indexOf("Core.Interfaces.AssetsInterface") != -1;
			var is_components = interfaces.indexOf("Core.Interfaces.ComponentInterface") != -1;
			var is_module = interfaces.indexOf("Runtime.Interfaces.ModuleDescriptionInterface") != -1;
			if (!(is_components || is_assets || is_module)){
				continue;
			}
			if (cache.get(module_name, false) == false){
				cache.set(module_name, true);
				if (is_module){
					var sub_modules = Runtime.rtl.method(module_name, "requiredModules")();
					if (sub_modules != null){
						var sub_modules = sub_modules.keys();
						sub_modules = sub_modules.map((module_name) => {
							return Runtime.rs.replace("/", ".", Runtime.rtl.toString(module_name)+".ModuleDescription");
						});
						this._getModules(res, cache, sub_modules, container);
					}
				}
				if (is_assets || is_components){
					var sub_assets = Runtime.rtl.method(module_name, "assets")(container);
					if (sub_assets != null){
						this._getModules(res, cache, sub_assets, container);
					}
				}
				res.push(module_name);
			}
		}
	}
	/**
	 * Returns all assets and modules
	 * @param Collection<string> modules
	 * @return Collection<string>
	 */
	static getModules(modules, container){
		/* Add modules */
		var res = new Runtime.Vector();
		var cache = new Runtime.Map();
		this._getModules(res, cache, modules, container);
		res = res.removeDublicatesIm();
		return res.toCollection();
	}
	/**
	 * Returns assets
	 * @param Collection<string> assets
	 * @return Collection<string>
	 */
	static loadResources(assets){
		var __memorize_value = Runtime.rtl._memorizeValue("Core.UI.Render.RenderHelper::loadResources", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var res = new Runtime.Collection();
		if (assets == null){
			var __memorize_value = res;
			Runtime.rtl._memorizeSave("Core.UI.Render.RenderHelper::loadResources", arguments, __memorize_value);
			return __memorize_value;
		}
		for (var i = 0; i < assets.count(); i++){
			var class_name = assets.item(i);
			var interfaces = Runtime.RuntimeUtils.getInterfaces(class_name);
			var is_assets = interfaces.indexOf("Core.Interfaces.AssetsInterface") != -1;
			var is_components = interfaces.indexOf("Core.Interfaces.ComponentInterface") != -1;
			var is_module = interfaces.indexOf("Runtime.Interfaces.ModuleDescriptionInterface") != -1;
			if (!(is_components || is_assets || is_module)){
				continue;
			}
			var r = Runtime.rtl.method(class_name, "getModuleFiles")(null);
			if (r != null){
				var module_name = Runtime.rtl.method(class_name, "getModuleName")();
				var pos = Runtime.rs.strpos(module_name, "/");
				var parent_module_name = module_name;
				if (pos >= 0){
					parent_module_name = Runtime.rs.substr(module_name, 0, pos);
				}
				r = r.map((item) => {
					if (Runtime.rs.strpos(item, parent_module_name) == 0){
						item = Runtime.rs.substr(item, Runtime.rs.strlen(parent_module_name));
						item = Runtime.rs.replace(".", "/", item);
					}
					return "@"+Runtime.rtl.toString(parent_module_name)+"/es6"+Runtime.rtl.toString(item)+".js";
				});
				res = this.addUniqueItems(res, r);
			}
			if (is_assets || is_components){
				var r = Runtime.rtl.method(class_name, "resources")(null);
				if (r != null){
					res = this.addUniqueItems(res, r);
				}
			}
		}
		var __memorize_value = res;
		Runtime.rtl._memorizeSave("Core.UI.Render.RenderHelper::loadResources", arguments, __memorize_value);
		return __memorize_value;
	}
	/**
	 * Returns css string
	 * @param Collection<string> components
	 * @param Dict<string> css_vars
	 * @return string
	 */
	static getCSSFromComponents(components, css_vars){
		var __memorize_value = Runtime.rtl._memorizeValue("Core.UI.Render.RenderHelper::getCSSFromComponents", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var res = new Runtime.Vector();
		for (var i = 0; i < components.count(); i++){
			var component_name = components.item(i);
			var view_name = Runtime.rtl.method(component_name, "componentViewName")(css_vars);
			var css = Runtime.rtl.method(view_name, "css")(css_vars);
			res.push(css);
		}
		var s = res.reduce((res, s) => {
			return Runtime.rtl.toString(res)+Runtime.rtl.toString(s);
		}, "");
		var __memorize_value = s;
		Runtime.rtl._memorizeSave("Core.UI.Render.RenderHelper::getCSSFromComponents", arguments, __memorize_value);
		return __memorize_value;
	}
	/**
	 * Init render container
	 * @param RenderContainer container
	 * @return RenderContainer
	 */
	static initRenderContainer(container){
		return container;
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Render.RenderHelper";}
	static getCurrentNamespace(){return "Core.UI.Render";}
	static getCurrentClassName(){return "Core.UI.Render.RenderHelper";}
	static getParentClassName(){return "";}
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