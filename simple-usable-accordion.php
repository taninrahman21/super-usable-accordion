<?php
/**
 * Plugin Name: Simple Usable Accordion
 * Description: Description of the Hello Block.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: simple-usable-accordion
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'SUA_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'SUA_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'SUA_DIR_PATH', plugin_dir_path( __FILE__ ) );



require_once SUA_DIR_PATH . 'inc/block.php';