const baseline = {
	removFocusOutline: function() {

		// Removes CSS outlines in an accessible manner.

		const styleElement = document.createElement( 'style' );

		document.getElementsByTagName( 'head' )[0].appendChild( styleElement );

		// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
		document.addEventListener( 'mousedown', function() {
			styleElement.innerHTML = ':focus{outline:none!important}';
		});

		document.addEventListener( 'keydown', function( event ) {
			if ( 9 === event.keyCode ) {
				styleElement.innerHTML = '';
			}
		});
	},
	components: function() {
		document.querySelectorAll( '.textfield' ).forEach( function( textfield ) {
			textfield.querySelector( '.textfield__input' ).addEventListener( 'focusout', function( event ) {
				if ( event.target.value ) {
					textfield.classList.add( 'textfield--with-value' );
				} else {
					textfield.classList.remove( 'textfield--with-value' );
				}
			});
			if ( textfield.querySelector( '.textfield__icon--password-visibility-toggle' ) ) {
				textfield.querySelector( '.textfield__icon--password-visibility-toggle' ).addEventListener( 'click', function( event ) {
					if ( 'password' === textfield.querySelector( '.textfield__input' ).type ) {
						textfield.querySelector( '.textfield__input' ).type = 'text';
						event.target.innerHTML = 'visibility';
					} else {
						textfield.querySelector( '.textfield__input' ).type = 'password';
						event.target.innerHTML = 'visibility_off';
					}
				});
			}
		});
		document.querySelectorAll( '.textfield-filled' ).forEach( function( textfield ) {
			textfield.querySelector( '.textfield-filled__input' ).addEventListener( 'focusout', function( event ) {
				if ( event.target.value ) {
					textfield.classList.add( 'textfield-filled--with-value' );
				} else {
					textfield.classList.remove( 'textfield-filled--with-value' );
				}
			});
			if ( textfield.querySelector( '.textfield-filled__icon--password-visibility-toggle' ) ) {
				textfield.querySelector( '.textfield-filled__icon--password-visibility-toggle' ).addEventListener( 'click', function( event ) {
					if ( 'password' === textfield.querySelector( '.textfield-filled__input' ).type ) {
						textfield.querySelector( '.textfield-filled__input' ).type = 'text';
						event.target.innerHTML = 'visibility';
					} else {
						textfield.querySelector( '.textfield-filled__input' ).type = 'password';
						event.target.innerHTML = 'visibility_off';
					}
				});
			}
		});
		document.querySelectorAll( '.textfield-outlined' ).forEach( function( textfield ) {
			textfield.querySelector( '.textfield-outlined__input' ).addEventListener( 'focusout', function( event ) {
				if ( event.target.value ) {
					textfield.classList.add( 'textfield-outlined--with-value' );
				} else {
					textfield.classList.remove( 'textfield-outlined--with-value' );
				}
			});
			if ( textfield.querySelector( '.textfield-outlined__icon--password-visibility-toggle' ) ) {
				textfield.querySelector( '.textfield-outlined__icon--password-visibility-toggle' ).addEventListener( 'click', function( event ) {
					if ( 'password' === textfield.querySelector( '.textfield-outlined__input' ).type ) {
						textfield.querySelector( '.textfield-outlined__input' ).type = 'text';
						event.target.innerHTML = 'visibility';
					} else {
						textfield.querySelector( '.textfield-outlined__input' ).type = 'password';
						event.target.innerHTML = 'visibility_off';
					}
				});
			}
		});
	},
};

document.addEventListener( 'DOMContentLoaded', function() {
	baseline.removFocusOutline();
	baseline.components();
});

// window.addEventListener( 'load', function() {});
