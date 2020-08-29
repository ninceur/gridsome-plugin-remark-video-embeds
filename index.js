const visit = require('unist-util-visit');

module.exports = (options) => {

  const debug = options.debug ? console.log : () => {};

	return async tree => {
		// TODO: implement options
		visit(tree, 'image', node => {
			const { alt = '', url = '' } = node;
			if (alt === 'youtube') {
				node.type = 'html';
				node.value = `<div class="embed video-player" style="--aspect-ratio: 9 / 16;" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
					<iframe
						src="https://youtube.com/embed/${url}"
						class="video-youtube" type="text/html"
						width="640" height="385"
						allowfullscreen
						frameborder="0"
						>
					</iframe>
    			</div>`;
			}
		else if (alt === 'vimeo') {
			node.type = 'html';
			node.value = `<div class="embed video-player" style="--aspect-ratio: 9 / 16;" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
				<iframe  
				src="https://player.vimeo.com/video/${url}"
				class="video-vimeo"
				width="640" height="385" 
				frameborder="0" 
				webkitAllowFullScreen mozallowfullscreen allowFullScreen
				>
				</iframe>
			</div>`;
		}
		});
  };
};
