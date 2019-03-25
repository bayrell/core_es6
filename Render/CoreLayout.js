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
RuntimeUI.Render.CoreLayout = class extends RuntimeUI.Render.CoreView{
	/**
	 * Required Assets
	 */
	static assets(){
		return (new Runtime.Vector()).push("RuntimeUI.Assets");
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
		return "";
	}
	/**
	 * Render head
	 */
	static head(data){
		return Runtime.rtl.normalizeUIVector((new Runtime.Vector())
		.push(new Runtime.UIStruct(new Runtime.Map({
		"space":"8f09",
		"class_name":this.getCurrentClassName(),
		"name":"meta",
		"props": (new Runtime.Map())
			.set("name", "Content-Type")
			.set("content", "text/html; charset=utf-8")
		,
		})))
		.push(new Runtime.UIStruct(new Runtime.Map({
		"space":"8f09",
		"class_name":this.getCurrentClassName(),
		"name":"title",
		"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
			Runtime.rs.htmlEscape(data.title)
		))
		}))));
	}
	/**
	 * Render assets in header
	 */
	static assetsHeader(data){
		var css = RuntimeUI.Render.RenderHelper.getCSSFromComponents(data.components, data.css_vars);
		return new Runtime.UIStruct((new Runtime.Map()).set("kind", Runtime.UIStruct.TYPE_ELEMENT).set("name", "style").set("props", (new Runtime.Map()).set("type", "text/css")).set("children", (new Runtime.Vector()).push(Runtime.rtl.normalizeUI(css))));
	}
	/**
	 * Render assets in body
	 */
	static assetsBody(data){
		var js = RuntimeUI.Render.RenderHelper.loadAsyncResources(data.assets);
		var res = new Runtime.Vector();
		for (var i = 0; i < js.count(); i++){
			res.push(new Runtime.UIStruct((new Runtime.Map()).set("kind", Runtime.UIStruct.TYPE_ELEMENT).set("name", "script").set("props", (new Runtime.Map()).set("src", js.item(i)))));
		}
		res.push(new Runtime.UIStruct((new Runtime.Map()).set("kind", Runtime.UIStruct.TYPE_ELEMENT).set("name", "script").set("props", (new Runtime.Map()).set("src", "/assets/bayrell-runtime-ui-es6/Drivers/RenderDriver.js"))));
		return res.toCollection();
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
		"space":"8f09",
		"class_name":this.getCurrentClassName(),
		"name":"html",
		"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
			new Runtime.UIStruct(new Runtime.Map({
			"space":"8f09",
			"class_name":this.getCurrentClassName(),
			"name":"head",
			"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
				Runtime.rs.htmlEscape(this.head(data)),
				Runtime.rs.htmlEscape(this.assetsHeader(data))
			))
			})),
			new Runtime.UIStruct(new Runtime.Map({
			"space":"8f09",
			"class_name":this.getCurrentClassName(),
			"name":"body",
			"children": Runtime.rtl.normalizeUIVector(new Runtime.Vector(
				new Runtime.UIStruct(new Runtime.Map({
				"space":"8f09",
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
				"space":"8f09",
				"class_name":this.getCurrentClassName(),
				"name":"input",
				"props": (new Runtime.Map())
					.set("id", "view")
					.set("value", data.view)
					.set("style", "display: none;")
				,
				})),
				new Runtime.UIStruct(new Runtime.Map({
				"space":"8f09",
				"class_name":this.getCurrentClassName(),
				"name":"input",
				"props": (new Runtime.Map())
					.set("id", "model")
					.set("value", Runtime.rtl.json_encode(data.model))
					.set("style", "display: none;")
				,
				})),
				new Runtime.UIStruct(new Runtime.Map({
				"space":"8f09",
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
	getClassName(){return "RuntimeUI.Render.CoreLayout";}
	static getCurrentClassName(){return "RuntimeUI.Render.CoreLayout";}
	static getParentClassName(){return "RuntimeUI.Render.CoreView";}
	assignObject(obj){
		if (obj instanceof RuntimeUI.Render.CoreLayout){
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