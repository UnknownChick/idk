<?php 
	if (!defined('ABSPATH')) {
		exit; // Exit if accessed directly
	}

	function enqueue_theme_styles() {
		wp_enqueue_style( 'theme-styles', get_template_directory_uri() . '/dist/assets/main.css', [], '1.0', 'all' );
	}
	add_action( 'wp_enqueue_scripts', 'enqueue_theme_styles' );
	// Ajouter la prise en charge des images mises en avant
	add_theme_support( 'post-thumbnails' );

	// Ajouter automatiquement le titre du site dans l'en-tête du site
	add_theme_support( 'title-tag' );