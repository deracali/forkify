import icons from 'url:../../../src/img/icons.svg'; //parcel 2
import View from './View.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHanderClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
      console.log(gotoPage);
    });
  }

  _generateMarkup() {
    const curPages = this._data.page;
    const numPages = Math.ceil(this._data.result.length / 10);
    console.log(numPages);

    //   page 1 and there are other pages

    if (curPages === 1 && numPages > 1) {
      return `<button data-goto="${
        curPages + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${curPages + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    //   last page
    if (curPages === numPages && numPages > 1) {
      return `
        <button  data-goto="${
          curPages - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPages - 1}</span>
          </button>
      `;
    }

    //   other page
    if (curPages < numPages) {
      return `
        <button  data-goto="${
          curPages - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPages - 1}</span>
          </button>

          <button  data-goto="${
            curPages + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${curPages + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    //   page 1 and there are no other pages
    return ``;
  }
}

export default new paginationView();
