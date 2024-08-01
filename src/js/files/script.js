// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose, _slideUp, _slideToggle, bodyLock, bodyUnlock } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

//<HEADER>========================================================================================================================================================

const closeMenu = document.querySelector('.mobile-menu__close')
if (closeMenu) {
   closeMenu.addEventListener('click', function () {
      menuClose()
   })
}

//=======================================================================


if (isMobile.any()) {   
   const buttonCatalog = document.querySelector('.header-catalog__button');
   if (buttonCatalog) {
      let catalogList = document.querySelector('.header-catalog__list');
      buttonCatalog.addEventListener('click', function (e) {
         e.stopPropagation();
         buttonCatalog.classList.toggle('_active');
         catalogList.classList.toggle('_show');
      });

      document.addEventListener('click', function (e) {
         if (catalogList.classList.contains('_show')) {
            if (!catalogList.contains(e.target)) {
               catalogList.classList.remove('_show');
               buttonCatalog.classList.remove('_active');
            }
         }
      });
   }
}

//=======================================================================
if (isMobile.any()) {
   const buttonBrands = document.querySelector('.brands-header__button');
   if (buttonBrands) {
      console.log('434');
      let brandsList = document.querySelector('.brands-header__items');
      buttonBrands.addEventListener('click', function (e) {
         e.stopPropagation();
         buttonBrands.classList.toggle('_active');
         brandsList.classList.toggle('_show');
      });

      document.addEventListener('click', function (e) {
         if (brandsList.classList.contains('_show')) {
            if (!brandsList.contains(e.target)) {
               brandsList.classList.remove('_show');
               buttonBrands.classList.remove('_active');
            }
         }
      });
   }
}


//=======================================================================

const lang = document.querySelector('.lang');

if (lang) {
   const langSelected = lang.querySelector('span');
   const langItems = lang.querySelectorAll('.lang__dropdown li a');
   langItems.forEach(langItem => {
      langItem.addEventListener('click', function (e) {
         e.preventDefault();
         langItems.forEach(item => item.classList.remove('_active'));
         langItem.classList.add('_active');
         langSelected.textContent = langItem.textContent;
      });
   });
}

//======================================================================

const headerSearch = document.querySelector('.bottom-header__search');
if (headerSearch) {
   const searchInput = document.querySelector('.search-header__form input');
   const searchResult = document.querySelector('.search-header__result');
   const searchForm = document.querySelector('.search-header__form');

   searchInput.addEventListener('input', function () {
      if (searchInput.value.trim() !== '') {
         searchResult.classList.add('_show');
         searchForm.classList.add('_active');
      } else {
         searchResult.classList.remove('_show');
         searchForm.classList.remove('_active');
      }
   });
}


//======================================================================


const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');
const fixedClass = '_fixed';

const headerBottomHeight = headerBottom.offsetHeight;

window.addEventListener('scroll', function () {
   const scrollPosition = window.scrollY;
   const headerBottomTop = headerBottom.getBoundingClientRect().top + scrollPosition;

   if (scrollPosition >= headerBottomTop) {
      headerBottom.classList.add(fixedClass);
      headerTop.style.marginBottom = headerBottomHeight + 'px';

      let catalogList = document.querySelector('.header-catalog__list');
      catalogList.classList.remove('_show');

      const buttonCatalog = document.querySelector('.header-catalog__button');
      buttonCatalog.classList.remove('_active');
   } else {
      headerBottom.classList.remove(fixedClass);
      headerTop.style.marginBottom = "0";
   }

   const headerTopBottom = headerTop.getBoundingClientRect().bottom + scrollPosition;

   if (scrollPosition < headerTopBottom) {
      headerBottom.classList.remove(fixedClass);
      headerTop.style.marginBottom = "0";
   }
});

//=======================================================================

const searchHeader = document.querySelector('.bottom-header__search');

if (searchHeader) {
   const openSearch = document.querySelector('.top-header__search');
   const searchForm = document.querySelector('.search-header__form');
   const documentClickHandler = function (e) {
      if (e.target !== searchForm && !searchForm.contains(e.target)) {
         searchHeader.classList.remove("_show");
         bodyUnlock();
      }
   };

   openSearch.addEventListener('click', function (e) {
      e.stopPropagation();
      searchHeader.classList.add("_show");
      bodyLock();
      document.addEventListener('click', documentClickHandler);
   });
}


//<PRODUCT SLIDER>========================================================================================================================================================


const cartProduct = document.querySelectorAll('.product-cart');

if (cartProduct) {
   cartProduct.forEach(cart => {
      const button = cart.querySelector('.product-cart__buy');
      const originalText = button.textContent;

      button.addEventListener('click', function () {
         if (button.classList.contains('to-cart')) {
            button.textContent = originalText;
         } else {
            button.textContent = 'Товар у корзині';
         }

         button.classList.toggle('to-cart');
      });
   });
}




// PRODUCT CARD ========================================================================================================================================================

const cardCurrent = document.querySelector('.info-card__current');
const cardDropdown = document.querySelector('.info-card__dropdown');

if (cardCurrent) {
   _slideUp(cardDropdown);

   cardCurrent.addEventListener('click', function () {
      _slideToggle(cardDropdown);
      cardCurrent.classList.toggle('_active');
   });

   document.addEventListener('click', function (event) {
      if (!cardDropdown.contains(event.target) && !cardCurrent.contains(event.target)) {
         _slideUp(cardDropdown);
         cardCurrent.classList.remove('_active');
      }
   });
}


//<SELECT2>========================================================================================================================================================

$(document).ready(function () {
   $('.select-department').select2();
});

//<CATEGORY PAGE>========================================================================================================================================================

const sortProducts = document.querySelectorAll('.sort-products');

for (let i = 0; i < sortProducts.length; i++) {
   const sort = sortProducts[i];
   const sortSelected = sort.querySelector('.sort-products__selected');
   const sortList = sort.querySelector('.sort-products__dropdown');
   _slideUp(sortList);

   sortSelected.addEventListener('click', function (event) {
      event.stopPropagation();
      _slideToggle(sortList);
      sortSelected.classList.toggle('_active')
   });

   document.addEventListener('click', function (event) {
      if (!sortList.contains(event.target) && !sortSelected.contains(event.target)) {
         _slideUp(sortList);
         sortSelected.classList.remove('_active')
      }
   });
}


//<FILTER>========================================================================================================================================================

const filterButton = document.querySelector('.products-category__filter')

if (filterButton) {
   const filter = document.querySelector('.filter')
   const closeFilter = document.querySelector('.filter__close')
   filterButton.addEventListener('click', function () {
      bodyLock()
      filter.classList.add('_show')
   })
   closeFilter.addEventListener('click', function () {
      bodyUnlock()
      filter.classList.remove('_show')
   })
}
//========================================================================================================================================================

const filterCheckbox = document.querySelectorAll('.filter-checkbox_button-checkbox')
filterCheckbox.forEach(item => {
   item.addEventListener('click', function () {
      if (!item.classList.contains('_disable')) {
         item.classList.toggle('_selected')
      }
   })
})
const filterSeries = document.querySelectorAll('.filter-checkbox_button')
filterSeries.forEach(item => {
   item.addEventListener('click', function () {
      if (!item.classList.contains('_disable')) {
         item.classList.toggle('_active')
      }
   })
})
//========================================================================================================================================================


const catalogHeaderOverlay = document.querySelectorAll('.header-catalog__overlay');

function updateSimplebarAttribute() {
   const isSmallScreen = window.innerWidth > 992;

   catalogHeaderOverlay.forEach(item => {
      if (isSmallScreen) {
         item.setAttribute('data-simplebar', true);
      } else {
         item.removeAttribute('data-simplebar');
      }
   });
}
updateSimplebarAttribute();
window.addEventListener('resize', updateSimplebarAttribute);
//========================================================================================================================================================

const showMoreElements = document.querySelectorAll('[data-showmore]');

showMoreElements.forEach(showMoreElement => {
   const contentElement = showMoreElement.querySelector('[data-showmore-content]');
   const buttonElement = showMoreElement.querySelector('[data-showmore-button]');

   const maxParagraphsToShow = 3;
   const paragraphs = contentElement.querySelectorAll('p');
   for (let i = maxParagraphsToShow; i < paragraphs.length; i++) {
      paragraphs[i].classList.add('hidden');
   }
   buttonElement.addEventListener('click', function () {
      const isContentHidden = paragraphs[maxParagraphsToShow].classList.contains('hidden');

      for (let i = maxParagraphsToShow; i < paragraphs.length; i++) {
         paragraphs[i].classList.toggle('hidden', !isContentHidden);
      }
      const buttonText = isContentHidden ? 'Показати менше' : 'Детальніше';
      buttonElement.querySelector('span').textContent = buttonText;
      if (!isContentHidden && paragraphs.length <= maxParagraphsToShow) {
         buttonElement.classList.toggle('_showmore-active')
      }
   });
});














