const navIconOpen = document.querySelector( '.nav-icon--open' );
const navIconClose = document.querySelector( '.nav-icon--close' );
const navMenu = document.querySelector( '.nav__header--mobile' );
const heroTitle = document.querySelectorAll( '.hero--title' );
const header = document.querySelector( 'header .hero--img' );

navIconOpen.addEventListener( 'click', () => {
      navIconOpen.classList.toggle( 'active' );
      navIconClose.classList.toggle( 'active' );
      navMenu.classList.toggle( 'active' );
      heroTitle.forEach( title => title.classList.toggle( 'active' ) );
      header.classList.toggle( 'darken' );
});
navIconClose.addEventListener( 'click', () => {
      navIconOpen.classList.toggle( 'active' );
      navIconClose.classList.toggle( 'active' );
      navMenu.classList.toggle( 'active' );
      heroTitle.forEach( title => title.classList.toggle( 'active' ) );
      header.classList.toggle( 'darken' );
});

const listItems = document.querySelectorAll( '.nav li' );
listItems.forEach( item => {
      item.addEventListener( 'click', () => {
            listItems.forEach( itemCompare => {
                  itemCompare.classList.remove( 'selected' );
                  if ( itemCompare.firstChild.nextSibling.textContent === item.firstChild.nextSibling.textContent ) {
                        itemCompare.classList.add( 'selected' );
                  }
            });
      });
});