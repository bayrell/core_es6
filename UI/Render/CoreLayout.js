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
Core.UI.Render.CoreLayout = class extends Core.UI.Render.CoreView{
	/**
	 * Returns module name
	 */
	static moduleName(){
		return "Core.UI";
	}
	/**
	 * Required Assets
	 */
	static assets(){
		return (new Runtime.Vector()).push("Core.UI.Assets");
	}
	/**
	 * Required components
	 */
	static components(){
		return (new Runtime.Vector());
	}
	/**
	 * Component css
	 */
	static css(vars){
		return "*{box-sizing: border-box;}body{margin:0;padding:0;}";
	}
	/**
	 * Render head
	 */
	static head(data){
		return Runtime.rtl.normalizeUIVector((new Runtime.Vector())
		.push(new Runtime.UIStruct(new Runtime.Map({
		"space":"bdb8",
		"class_name":this.getCurrentClassName(),
		"name":"meta",
		"props": (new Runtime.Map())
			.set("name", "Content-Type")
			.set("content", "text/html; charset=utf-8")
		,
		})))
		.push(new Runtime.UIStruct(new Runtime.Map({
		"space":"bdb8",
		"class_name":this.getCurrentClassName(),
		"name":"title",
		"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
			Runtime.rs.htmlEscape(data.title)
		))
		}))));
	}
	/**
	 * Patch modules
	 */
	static patchAssets(data, arr){
		arr = arr.map((name) => {
			if (name[0] == "@"){
				var pos = Runtime.rs.strpos(name, "/");
				var module_name = Runtime.rs.substr(name, 1, pos - 1);
				var path = Runtime.rs.substr(name, pos);
				name = "/assets/"+Runtime.rtl.toString(module_name)+Runtime.rtl.toString(path);
			}
			return name;
		});
		return arr;
	}
	/**
	 * Render assets in header
	 */
	static assetsHeader(data){
		var resources = Core.UI.Render.RenderHelper.loadResources(data.assets);
		var css_arr = resources.filter((name) => {
			return Runtime.rs.extname(name) == "css";
		});
		css_arr = this.patchAssets(data, css_arr);
		css_arr = css_arr.map((css) => {
			return Runtime.rtl.normalizeUIVector((new Runtime.Vector())
			.push(new Runtime.UIStruct(new Runtime.Map({
			"space":"bdb8",
			"class_name":this.getCurrentClassName(),
			"name":"link",
			"props": (new Runtime.Map())
				.set("rel", "stylesheet")
				.set("href", css)
			,
			}))));
		});
		var css = this.css(data.css_vars);
		css += Core.UI.Render.RenderHelper.getCSSFromComponents(data.components, data.css_vars);
		return Runtime.rtl.normalizeUIVector((new Runtime.Vector())
		.push(Runtime.rtl.normalizeUIVector((new Runtime.Vector())
		.push(Runtime.rs.htmlEscape(css_arr))
		.push(new Runtime.UIStruct(new Runtime.Map({
		"space":"bdb8",
		"class_name":this.getCurrentClassName(),
		"name":"style",
		"props": (new Runtime.Map())
			.set("type", "text/css")
		,
		"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
			css
		))
		})))
		)));
	}
	/**
	 * Render assets in body
	 */
	static assetsBody(data){
		var resources = Core.UI.Render.RenderHelper.loadResources(data.assets);
		var js_arr = resources.filter((name) => {
			return Runtime.rs.extname(name) == "js";
		});
		js_arr = js_arr.pushIm("@Core.UI/es6/Drivers/RenderDriver.js");
		js_arr = js_arr.pushIm("@Core.UI/es6/Drivers/ApiBusDriver.js");
		js_arr = this.patchAssets(data, js_arr);
		js_arr = js_arr.map((js) => {
			return Runtime.rtl.normalizeUIVector((new Runtime.Vector())
			.push(new Runtime.UIStruct(new Runtime.Map({
			"space":"bdb8",
			"class_name":this.getCurrentClassName(),
			"name":"script",
			"props": (new Runtime.Map())
				.set("src", js)
			,
			}))));
		});
		return js_arr;
	}
	/**
	 * Content render
	 */
	static content(data){
		return data.content;
	}
	/**
	 * Component render
	 */
	static render(data){
		return Runtime.rtl.normalizeUIVector((new Runtime.Vector())
		.push("<!DOCTYPE html>")
		.push(new Runtime.UIStruct(new Runtime.Map({
		"space":"bdb8",
		"class_name":this.getCurrentClassName(),
		"name":"html",
		"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
			new Runtime.UIStruct(new Runtime.Map({
			"space":"bdb8",
			"class_name":this.getCurrentClassName(),
			"name":"head",
			"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
				Runtime.rs.htmlEscape(this.head(data)),
				Runtime.rs.htmlEscape(this.assetsHeader(data))
			))
			})),
			new Runtime.UIStruct(new Runtime.Map({
			"space":"bdb8",
			"class_name":this.getCurrentClassName(),
			"name":"body",
			"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
				new Runtime.UIStruct(new Runtime.Map({
				"space":"bdb8",
				"class_name":this.getCurrentClassName(),
				"name":"div",
				"props": (new Runtime.Map())
					.set("id", "root")
				,
				"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
					this.content(data)
				))
				})),
				new Runtime.UIStruct(new Runtime.Map({
				"space":"bdb8",
				"class_name":this.getCurrentClassName(),
				"name":"input",
				"props": (new Runtime.Map())
					.set("id", "view")
					.set("value", data.view)
					.set("style", "display: none;")
				,
				})),
				new Runtime.UIStruct(new Runtime.Map({
				"space":"bdb8",
				"class_name":this.getCurrentClassName(),
				"name":"input",
				"props": (new Runtime.Map())
					.set("id", "model")
					.set("value", Runtime.RuntimeUtils.base64_encode(Runtime.rtl.json_encode(data.model)))
					.set("style", "display: none;")
				,
				})),
				new Runtime.UIStruct(new Runtime.Map({
				"space":"bdb8",
				"class_name":this.getCurrentClassName(),
				"name":"div",
				"props": (new Runtime.Map())
					.set("id", "scripts")
				,
				"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
					Runtime.rs.htmlEscape(this.assetsBody(data))
				))
				}))
			))
			}))
		))
		}))));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Render.CoreLayout";}
	static getCurrentNamespace(){return "Core.UI.Render";}
	static getCurrentClassName(){return "Core.UI.Render.CoreLayout";}
	static getParentClassName(){return "Core.UI.Render.CoreView";}
	assignObject(obj){
		if (obj instanceof Core.UI.Render.CoreLayout){
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