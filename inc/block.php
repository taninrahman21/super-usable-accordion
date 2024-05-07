<?php
class SUAHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'sua-hello-style', SUA_DIR_URL . 'dist/style.css', [ ], SUA_VERSION ); // Style
		wp_register_style( 'sua-hello-editor-style', SUA_DIR_URL . 'dist/editor.css', [ 'sua-hello-style' ], SUA_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'sua-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'sua-hello-editor-script', 'simple-usable-accordion', SUA_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'sua-hello-style' );
		wp_enqueue_script( 'sua-hello-script', SUA_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], SUA_VERSION, true );
		wp_set_script_translations( 'sua-hello-script', 'simple-usable-accordion', SUA_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-sua-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='suaHelloBlock-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new SUAHelloBlock();
