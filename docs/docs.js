var docs = {
	dev: function() {
		var height,
			devBar        = document.createElement( 'div' ),
			savedBaseline = localStorage.getItem( 'baseline' ),
			savedDebug    = localStorage.getItem( 'debug' );

		devBar.setAttribute( 'class', 'devbar' );
		devBar.innerHTML += '<span class="devbar__option toggle-baseline">Baseline</span><span class="devbar__option toggle-debug">Debug</span>';
		document.body.appendChild( devBar );

		function setBodyHeight() {
			height = Math.max(
				document.body.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight
			);
			document.body.setAttribute( 'style', 'height:' + height + 'px' );
		}

		if ( savedBaseline ) {
			setBodyHeight();
			document.body.classList.add( 'baseline' );
			document.body.classList.add( savedBaseline );
		}
		if ( savedDebug ) {
			document.body.classList.add( savedDebug );
		}

		document.querySelector( '.toggle-baseline' ).addEventListener( 'click', function() {
			setBodyHeight();
			if ( document.body.classList.contains( 'baseline--full' ) ) {
				document.body.classList.remove( 'baseline--full' );
				document.body.classList.add( 'baseline--half' );
				localStorage.setItem( 'baseline', 'baseline--half' );
			} else if ( document.body.classList.contains( 'baseline--half' ) ) {
				document.body.classList.remove( 'baseline' );
				document.body.classList.remove( 'baseline--half' );
				localStorage.removeItem( 'baseline' );
			} else {
				document.body.classList.add( 'baseline' );
				document.body.classList.add( 'baseline--full' );
				localStorage.setItem( 'baseline', 'baseline--full' );
			}
		});
		document.querySelector( '.toggle-debug' ).addEventListener( 'click', function() {
			document.body.classList.toggle( 'debug' );
			if ( document.body.classList.contains( 'debug' ) ) {
				localStorage.setItem( 'debug', 'debug' );
			} else {
				localStorage.removeItem( 'debug' );
			}
		});
	}
}

document.addEventListener( 'DOMContentLoaded', function() {
	docs.dev();
});
