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
RuntimeUI.Render.RenderHelper = class{
	/**
	 * Render class with data
	 */
	static render(class_name, data){
		var st = null;
		if (data instanceof Runtime.CoreStruct){
			var st = new Runtime.UIStruct((new Runtime.Map()).set("name", class_name).set("kind", Runtime.UIStruct.TYPE_COMPONENT).set("model", data));
		}
		else {
			var st = new Runtime.UIStruct((new Runtime.Map()).set("name", class_name).set("kind", Runtime.UIStruct.TYPE_COMPONENT).set("props", data));
		}
		return RuntimeUI.Render.RenderHelper.getUIString(st);
	}
	/**
	 * Returns if tag name is double token
	 */
	static isDoubleToken(tag_name){
		var __memorize_value = Runtime.rtl._memorizeValue("RuntimeUI.Render.RenderHelper::isDoubleToken", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var tokens = (new Runtime.Vector()).push("img").push("meta").push("input").push("link").push("br");
		if (tokens.indexOf(tag_name) == -1){
			var __memorize_value = true;
			Runtime.rtl._memorizeSave("RuntimeUI.Render.RenderHelper::isDoubleToken", arguments, __memorize_value);
			return __memorize_value;
		}
		var __memorize_value = false;
		Runtime.rtl._memorizeSave("RuntimeUI.Render.RenderHelper::isDoubleToken", arguments, __memorize_value);
		return __memorize_value;
	}
	/**
	 * Retuns css hash 
	 * @param string component class name
	 * @return string hash
	 */
	static getCssHash(s){
		var __memorize_value = Runtime.rtl._memorizeValue("RuntimeUI.Render.RenderHelper::getCssHash", arguments);
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
		Runtime.rtl._memorizeSave("RuntimeUI.Render.RenderHelper::getCssHash", arguments, __memorize_value);
		return __memorize_value;
	}
	/**
	 * Returns attrs
	 */
	static getUIAttrs(st){
		var attrs = new Runtime.Map();
		if (st == null){
			return attrs.toDict();
		}
		if (st.props == null){
			return attrs.toDict();
		}
		var props = Runtime.UIStruct.getAttrs(st);
		var keys = props.keys();
		for (var ki = 0; ki < keys.count(); ki++){
			var key = keys.item(ki);
			var item = props.item(key);
			var value = "";
			if (Runtime.rs.strlen(key) == 0){
				continue;
			}
			if (key == "style" && item instanceof Runtime.Map){
				value = item.reduce((res, key, value) => {
					return Runtime.rtl.toString(res)+Runtime.rtl.toString(key)+":"+Runtime.rtl.toString(value)+";";
				}, "");
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
					return Runtime.rtl.toString(item)+"-"+Runtime.rtl.toString(st.space);
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
					value = Runtime.rtl.toString(attrs.item(key))+" "+Runtime.rtl.toString(value);
				}
				attrs.set(key, value);
			}
		}
		return attrs;
	}
	/**
	 * Returns attrs
	 */
	static getUIStringAttrs(st){
		var attrs = this.getUIAttrs(st);
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
	static getUIString(st){
		if (st == null){
			return "";
		}
		if (Runtime.UIStruct.isString(st)){
			return st.content;
		}
		if (Runtime.UIStruct.isComponent(st)){
			var render = Runtime.rtl.method(st.name, "render");
			var res = render(Runtime.UIStruct.getModel(st));
			if (!(res instanceof Runtime.Collection)){
				res = Runtime.rtl.normalizeUIVector(res);
			}
			return this.getUIStringVector(res, st.name);
		}
		var attrs = this.getUIStringAttrs(st);
		var content = "";
		if (this.isDoubleToken(st.name)){
			content = "<"+Runtime.rtl.toString(st.name)+Runtime.rtl.toString((attrs != "") ? (" "+Runtime.rtl.toString(attrs)) : (""))+">";
			content += this.getUIStringVector(st.children);
			content += "</"+Runtime.rtl.toString(st.name)+">";
		}
		else {
			content = "<"+Runtime.rtl.toString(st.name)+Runtime.rtl.toString((attrs != "") ? (" "+Runtime.rtl.toString(attrs)) : (""))+"/>";
		}
		return content;
	}
	/**
	 * Add unique items to collection
	 * @param Collection<string> res
	 * @param Collection<string> items
	 * @return Collection<string>
	 */
	static addUniqueItems(res, items){
		var r = new Runtime.Vector();
		for (var i = 0; i < items.count(); i++){
			var item_name = items.item(i);
			if (res.indexOf(item_name) == -1){
				r.push(item_name);
			}
		}
		return res.appendCollectionIm(r);
	}
	/**
	 * Returns all components
	 * @param Collection<string> views
	 * @return Collection<string>
	 */
	static getAllComponents(views){
		/* Add components from views */
		var res = new Runtime.Collection(views);
		/* Add require components */
		var w = null;
		while (w != res){
			w = res;
			for (var i = 0; i < w.count(); i++){
				var class_name = w.item(i);
				var components = Runtime.rtl.method(class_name, "components")();
				res = this.addUniqueItems(res, components);
			}
		}
		return res;
	}
	/**
	 * Returns assets by views
	 * @param Collection<string> views
	 * @return Collection<string>
	 */
	static loadAssetsFromComponents(components, container){
		if (container == undefined) container=null;
		/* Add assets from components */
		var res = new Runtime.Collection();
		if (components == null){
			return res;
		}
		for (var i = 0; i < components.count(); i++){
			var class_name = components.item(i);
			var assets = Runtime.rtl.method(class_name, "assets")();
			res = this.addUniqueItems(res, assets);
		}
		/* Add require assets */
		var w = null;
		while (w != res){
			w = res;
			for (var i = 0; i < w.count(); i++){
				var class_name = w.item(i);
				var assets = Runtime.rtl.method(class_name, "getRequiredAssets")(container);
				res = this.addUniqueItems(res, assets);
			}
		}
		return res;
	}
	/**
	 * Returns assets
	 * @param Collection<string> assets
	 * @return Collection<string>
	 */
	static loadAsyncResources(assets){
		var __memorize_value = Runtime.rtl._memorizeValue("RuntimeUI.Render.RenderHelper::loadAsyncResources", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var res = new Runtime.Collection();
		if (assets == null){
			var __memorize_value = res;
			Runtime.rtl._memorizeSave("RuntimeUI.Render.RenderHelper::loadAsyncResources", arguments, __memorize_value);
			return __memorize_value;
		}
		for (var i = 0; i < assets.count(); i++){
			var assets_name = assets.item(i);
			var r = Runtime.rtl.method(assets_name, "assetsAsyncLoad")(null);
			for (var j = 0; j < r.count(); j++){
				var arr = r.item(j);
				res = this.addUniqueItems(res, arr);
			}
		}
		var __memorize_value = res;
		Runtime.rtl._memorizeSave("RuntimeUI.Render.RenderHelper::loadAsyncResources", arguments, __memorize_value);
		return __memorize_value;
	}
	/**
	 * Returns css string
	 * @param Collection<string> components
	 * @param Dict<string> css_vars
	 * @return string
	 */
	static getCSSFromComponents(components, css_vars){
		var __memorize_value = Runtime.rtl._memorizeValue("RuntimeUI.Render.RenderHelper::getCSSFromComponents", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var res = new Runtime.Vector();
		for (var i = 0; i < components.count(); i++){
			var component_name = components.item(i);
			var css = Runtime.rtl.method(component_name, "css")(css_vars);
			res.push(css);
		}
		var s = res.reduce((res, s) => {
			return Runtime.rtl.toString(res)+Runtime.rtl.toString(s);
		}, "");
		var __memorize_value = s;
		Runtime.rtl._memorizeSave("RuntimeUI.Render.RenderHelper::getCSSFromComponents", arguments, __memorize_value);
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
	getClassName(){return "RuntimeUI.Render.RenderHelper";}
	static getCurrentClassName(){return "RuntimeUI.Render.RenderHelper";}
	static getParentClassName(){return "";}
}