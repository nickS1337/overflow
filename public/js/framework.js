	var
			window_width = $(window).width(),
			window_height = $(window).height(),
			unique_name,
			parallax_name_list = [],
			parallax_positions = [],
			framework_developer = 1; // change this value if you want to enable developer messages

		if (framework_developer == 1){
			console.debug("Please contact http://steamcommunity.com/profiles/76561198135367911/ if you encounter any problems!");
		}

//======================================================================================//

	var vtg = {

		pos: function(obj){
			var posType = "offset";
			determineObject(obj, posType, window_width, window_height);
		},

		parallax: {

						top: function(name, speed){
								if (empty(name)){
									error("You cannot use the parallax function without an id.");
								} else {

									var speed_new = checkSpeed(speed);

										if ($("#" + name).length == 0){
											error("The requested object in the parallax function could not be found");
										} else if ($("." + name).length == 1) {
											error("This framework version does not support classnames.");
										} else {

								var pos_parallax = "{" + $("#" + name).position().top + "px," + $("#" + name).position().left + "px}";

								parallax_positions.push(pos_parallax);
								parallax_name_list.push(name);

						if (framework_developer == 1){
								console.log(parallax_positions);
								console.log(parallax_name_list);
						}

											window.addEventListener("scroll", function(){

															var
																offset = window.pageYOffset,
																content = document.getElementById(name);
																content.style.top = offset * speed_new + "px";
														});
										}
								}
						},

						left: function(name, speed){

									var speed_new = checkSpeed(speed);

										if ($("#" + name).length == 0){
											error("The requested object '" + name + "' could not be found, the parallax function cannot continue.");
										} else if ($("." + name).length == 1) {
											error("This framework version does not support classnames.");
										} else {
														window.addEventListener("scroll", function(){

															var
																offset = window.pageYOffset,
																content = document.getElementById(name);
																content.style.left = offset * speed_new + "px";
														});
										}
						},
		},

		resize: function(id){

			var obj = checkType();
		},

		XMLHttpREQ: function(method, file_name){

					if ( (method !== "") && (file_name !== "") ){
					}

		},

		csl: function(msg){

			console.log("%c" + msg,"color: green;");

		},

		percentage: function(name, type){

		var obj = checkType(name);

					if (obj !== false){

						var pos = $(obj).offset(),
							top1 = pos.top/$(window).height() * 100,
							left1 = pos.left/$(window).width() * 100;

								if (type == "left"){
									vtg.csl(left1);
									return left1;
								} else if (type == ""){

									var pos_list = [];

										pos_list.push(top1);
										pos_list.push(left1);

										console.log(obj);

										return pos_list;

								} else {
									vtg.csl(top1);
									return top1;
								}

					} else {
						error("Object could not be found.");
					}
		},
}
//======================================================================================//
// Drag  and drop scripts
//======================================================================================//
function determineObject(obj, posType, window_width, window_height){
			if (($("#"+obj).length == 0)&&($("."+obj).length == 0)){
				throw new Error("VTG_SCRIPT_ERROR: Could not find element '"+obj+"'");
				return;
			} else if (($("#"+obj).length == 1)&&($("."+obj).length == 1)){
				throw new Error("VTG_SCRIPT_ERROR: Classnames and IDs cannot not have the same name.");
				return;
			} else {
					detectObjectType(obj, posType, window_width, window_height);
			}
}
function detectObjectType(obj, posType, window_width, window_height){

	var object_type;

	if ($("#"+obj).length == 1){
		var object_type = "id";
		positionObject(obj, object_type, posType, window_width, window_height);
	} else {
		var object_type = "classname";
		positionObject(obj, object_type, posType, window_width, window_height);
	}
}
function positionObject(obj, type, posType, window_width, window_height){

	var
		draggable,
		pos = posType,
		idclass,
		type,
		dot = ".",
		name;

	if (type == "id"){
		draggable = $("#"+obj).draggable();
		idclass = "#";
		name = idclass + obj;
		unique_name = name;
	} else {
		draggable = $("."+obj).draggable();
		idclass = ".";
		name = idclass + obj;
		unique_name = name;
	}
	var
		elem = $(name).position(),
		elem_top = elem.top/$(window).height() * 100,
		elem_left = elem.left/$(window).width() * 100;

			if ((isNaN(elem_top))&&(isNaN(elem_left))){
				console.log("%cCould not calculate the position of the requested object!","font-weight: bold; color: #CC181E;");
				return;
			} else {
				console.debug("$('"+name+"').css({ position: 'absolute', top: '"+elem_top+"%', left: '"+elem_left+"%'});");
			}
}
function detectObjectCoords( ){

		var
			elm = $(unique_name).position(),
			coords_top = elm.top/$(window).height() * 100,
			coords_left = elm.left/$(window).width() * 100;

				console.clear();
				console.log("%cUpdating console","color: #34A953;");
				console.debug("$('"+unique_name+"').css({ position: 'absolute', top: '"+coords_top+"%', left: '"+coords_left+"%'});");

		return;
}
function error(msg){
	throw new Error ("VTG_SCRIPT_ERROR: " + msg);
}
//======================================================================================//
function checkType(name){
	var new_name
			if ($("#" + name).length == 1){
				new_name = "#" + name;
				return new_name;
			}
			else if ($("." + name).length == 1){
				new_name = "." + name;
				return new_name;
			} else {
				error("The element could not be found.");
				return false;
			}
}
function empty(word){
		if (word == ""){
			return true;
		} else {
			return false;
		}
}
function developer(msg){

		if (framework_developer == 1){
			console.log("[vtg.framework.js] " + msg);
		} else {
			return;
		}

}
//======================================================================================//
// Parallax Functions
//======================================================================================//
function checkSpeed(speed){

var new_speed = 0;

	if (empty(speed)){
		new_speed = .4;
		return new_speed;
	} else {
		return speed;
	}
}

function unique_divID(){

					var

						alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

							alpha1 = Math.floor(Math.random() * alphabet.length),
							alpha2 = Math.floor(Math.random() * alphabet.length),
							alpha3 = Math.floor(Math.random() * alphabet.length),
							alpha4 = Math.floor(Math.random() * alphabet.length),

						divid = alphabet[alpha3] + Math.floor(Math.random() * 100000) + alphabet[alpha1] + Math.floor(Math.random() * 1000000) + alphabet[alpha2] + alphabet[alpha4];

						return divid;

}

