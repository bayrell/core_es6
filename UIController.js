"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
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
RuntimeUI.UIController = class extends Runtime.CoreObject{
	/**
	 * Add supported events to controller
	 * @param Collection<string> events
	 */
	addEvents(events){
		if (this.events == null){
			this.events = new Runtime.Vector();
		}
		for (var i = 0; i < events.count(); i++){
			var event = events.item(i);
			if (this.events.indexOf(event) == -1){
				this.events.push(event);
			}
		}
	}
	/**
	 * Add output signals
	 * @param fun f
	 * @param Collection<string> events
	 */
	addSignalOut(f, events){
		if (this.signal_out == null){
			this.signal_out = new Runtime.Emitter();
		}
		this.signal_out.addMethod(f, events);
		this.addEvents(events);
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.UIController";}
	static getCurrentClassName(){return "RuntimeUI.UIController";}
	static getParentClassName(){return "Runtime.CoreObject";}
	_init(){
		super._init();
		this.ref = null;
		this.signal_in = new Runtime.Emitter();
		this.signal_out = new Runtime.Emitter();
		this.events = new Runtime.Vector();
		this.manager = null;
	}
}