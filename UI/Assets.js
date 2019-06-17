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
Core.UI.Assets = class{
	/**
	 * Returns required assets
	 * @return Collection<string>
	 */
	static assets(){
		return null;
	}
	/**
	 * Required components
	 */
	static components(){
		return null;
	}
	/**
	 * Returns sync loaded files
	 */
	static assetsSyncLoad(context){
		return (new Runtime.Vector());
	}
	/**
	 * Returns async loaded files
	 */
	static assetsAsyncLoad(context){
		return (new Runtime.Vector()).push((new Runtime.Vector()).push("@Runtime/rs.js").push("@Runtime/re.js").push("@Runtime/rtl.js").push("@Runtime/Collection.js").push("@Runtime/Container.js").push("@Runtime/CoreObject.js").push("@Runtime/Dict.js").push("@Runtime/Emitter.js").push("@Runtime/RuntimeConstant.js").push("@Runtime/RuntimeUtils.js").push("@Runtime/Exceptions/RuntimeException.js").push("@Runtime/Interfaces/CloneableInterface.js").push("@Runtime/Interfaces/ContextInterface.js").push("@Runtime/Interfaces/FactoryInterface.js").push("@Runtime/Interfaces/ModuleDescriptionInterface.js").push("@Runtime/Interfaces/SerializeInterface.js").push("@Runtime/Interfaces/StringInterface.js").push("@Runtime/Interfaces/SubscribeInterface.js")).push((new Runtime.Vector()).push("@Runtime/AsyncTask.js").push("@Runtime/AsyncThread.js").push("@Runtime/Context.js").push("@Runtime/ContextObject.js").push("@Runtime/CoreStruct.js").push("@Runtime/CoreEvent.js").push("@Runtime/Map.js").push("@Runtime/Maybe.js").push("@Runtime/ModuleDescription.js").push("@Runtime/Reference.js").push("@Runtime/Vector.js").push("@Runtime/Exceptions/IndexOutOfRange.js").push("@Runtime/Exceptions/KeyNotFound.js").push("@Runtime/Exceptions/UnknownError.js")).push((new Runtime.Vector()).push("@Runtime/DateTime.js").push("@Runtime/IntrospectionInfo.js").push("@Runtime/UIStruct.js")).push((new Runtime.Vector()).push("@Core/Http/ApiRequest.js").push("@Core/Http/ApiResult.js").push("@Core/Http/Cookie.js").push("@Core/Http/Request.js").push("@Core/Http/Response.js").push("@Core/UI/UIController.js").push("@Core/UI/Annotations/ControllerAnnotation.js").push("@Core/UI/Annotations/RouteInfo.js").push("@Core/UI/Events/CommandEvent.js").push("@Core/UI/Events/ComponentEvent.js").push("@Core/UI/Events/ModelChange.js").push("@Core/UI/Events/MountEvent.js").push("@Core/UI/Events/UpdateStateEvent.js").push("@Core/UI/Events/UserEvent/UserEvent.js").push("@Core/UI/Interfaces/ApiDeclaringInterface.js").push("@Core/UI/Interfaces/AssetsInterface.js").push("@Core/UI/Interfaces/FrontendInterface.js").push("@Core/UI/Interfaces/RoutesDeclaringInterface.js").push("@Core/UI/Interfaces/RoutesInterface.js").push("@Core/UI/Render/CoreManager.js").push("@Core/UI/Render/CoreRoute.js").push("@Core/UI/Render/CoreView.js").push("@Core/UI/Render/RenderContainer.js").push("@Core/UI/Render/RenderHelper.js").push("@Core/UI/Render/WebContainer.js")).push((new Runtime.Vector()).push("@Core/Http/JsonResponse.js").push("@Core/UI/Assets.js").push("@Core/UI/Animations/FadeIn.js").push("@Core/UI/Animations/FadeOut.js").push("@Core/UI/Annotations/BindModel.js").push("@Core/UI/Annotations/BindValue.js").push("@Core/UI/Annotations/Event.js").push("@Core/UI/Annotations/EventAsync.js").push("@Core/UI/Annotations/SignalOut.js").push("@Core/UI/Events/KeyboardEvent/KeyboardEvent.js").push("@Core/UI/Events/MouseEvent/MouseEvent.js").push("@Core/UI/Events/UserEvent/BlurEvent.js").push("@Core/UI/Events/UserEvent/ChangeEvent.js").push("@Core/UI/Events/UserEvent/FocusEvent.js").push("@Core/UI/Render/CoreLayout.js")).push((new Runtime.Vector()).push("@Core/UI/Events/KeyboardEvent/KeyDownEvent.js").push("@Core/UI/Events/KeyboardEvent/KeyPressEvent.js").push("@Core/UI/Events/KeyboardEvent/KeyUpEvent.js").push("@Core/UI/Events/MouseEvent/MouseClickEvent.js").push("@Core/UI/Events/MouseEvent/MouseContextMenuEvent.js").push("@Core/UI/Events/MouseEvent/MouseDoubleClickEvent.js").push("@Core/UI/Events/MouseEvent/MouseDownEvent.js").push("@Core/UI/Events/MouseEvent/MouseEnterEvent.js").push("@Core/UI/Events/MouseEvent/MouseLeaveEvent.js").push("@Core/UI/Events/MouseEvent/MouseMoveEvent.js").push("@Core/UI/Events/MouseEvent/MouseOutEvent.js").push("@Core/UI/Events/MouseEvent/MouseOverEvent.js").push("@Core/UI/Events/MouseEvent/MouseUpEvent.js"));
	}
	/**
	 * Init render container
	 */
	static initContainer(container){
		return container;
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Assets";}
	static getCurrentNamespace(){return "Core.UI";}
	static getCurrentClassName(){return "Core.UI.Assets";}
	static getParentClassName(){return "";}
	_init(){
		if (this.__implements__ == undefined){this.__implements__ = [];}
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
Core.UI.Assets.__static_implements__ = [];
Core.UI.Assets.__static_implements__.push(Core.Interfaces.AssetsInterface)