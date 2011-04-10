<?php

/**
 * @package sinhalisation
 * @version 1.0.5
 */

/*
Plugin Name: Sinha-lisa-lion (Sinhala Transliterator)
Plugin URI: http://projectsinhalisation.wordpress.com
Description: Converts to Sinahala unicode from Sinahala phenoic
Author: Darshana Gunawardana
Version: 1.0.1
Author URI: http://projectsinhalisation.wordpress.com
License: GPLv2
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

///////////////////////////////////////////////////////////////////////////////
/*
This file contains wordpress pluging definition and the communication function
which connects the wordpress with the sinhalisation handler. 
*/
///////////////////////////////////////////////////////////////////////////////




define('SINHALA_TRANSLITERATOR_PLUGIN_URL', plugin_dir_url( __FILE__ ));

function sinhalisation_script_init() {
    
    ////////// Registering the handler and the transliteration core //////////////////////////////////
	wp_register_script('handler', SINHALA_TRANSLITERATOR_PLUGIN_URL . 'handler.js');
	wp_print_scripts('handler');
	wp_register_script('transliteratorcore', SINHALA_TRANSLITERATOR_PLUGIN_URL . 'transliteratorcore.js');
	wp_print_scripts('transliteratorcore');
    //////////////////////////////////////////////////////////////////////////////////////////////////
}

// Registering scripts to the wordpress non-admin pages
add_action('wp_head', 'sinhalisation_script_init');
// Registering scripts to the wordpress nadmin pages
add_action('admin_head', 'sinhalisation_script_init', 1);





// Adding the transliteration capabilities to the required objects
function sinhalisation_set_parameters(){
?>
<script type="text/javascript">

	///////////////////// Checks all available 'textarea's //////////////////////////////////////////
	var textareas = document.getElementsByTagName('textarea');
	var singlishCnvtrTextArea = new Array();

	for (var index = 0; index < textareas.length; index++) {
		singlishCnvtrTextArea[index] = new singlishconverter(textareas[index]);
		//showDetails('' , 'Check textares s', 'Text Area : '+ textareas[index].name+ ' @php');

		textareas[index].onkeydown  = (function(value) {
    							return function() {return keyDown(value)};
						}(singlishCnvtrTextArea[index]));
		textareas[index].onkeypress = (function(value) {
    							return function() {return keyPess(value)};
						}(singlishCnvtrTextArea[index]));
	}
	/////////////////////////////////////////////////////////////////////////////////////////////


	/////////////////// Checks all available 'text' 'input's //////////////////////////////////////
	var inputs = document.getElementsByTagName('input');
	var singlishCnvtrInput = new Array();
	for (var index = 0; index < inputs.length; index++) {
		if (inputs[index].type == 'text') {
			singlishCnvtrInput[index] = new singlishconverter(inputs[index]);
			//showDetails('' , 'Check input s', 'Text Input : ' +inputs[index].name+ ' @php');

			inputs[index].onkeydown  = (function(value) {
    								return function() {return keyDown(value)};
							}(singlishCnvtrInput[index]));
			inputs[index].onkeypress = (function(value) {
    								return function() {return keyPess(value)};
							}(singlishCnvtrInput[index]));
		}
	}
	///////////////////////////////////////////////////////////////////////////////////////////

</script>
<?php
}

// Connecting listeners to the wordpress non-admin pages
add_action('wp_footer', 'sinhalisation_set_parameters');
// Connecting listeners to the wordpress admin pages
add_action('admin_footer', 'sinhalisation_set_parameters');
?>