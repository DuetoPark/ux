const collapseList = document.querySelectorAll('.collapse');

const REQUIRED_COUNT = document.querySelector(
  '.is-required .collapse-content'
).childElementCount;
const OPTION_COUNT = document.querySelector(
  '.is-option .collapse-content'
).childElementCount;

let isActiveInRequired = 0;
let isActiveInOption = 0;

function toggleCollapse(event) {
  if (!event.target.matches('.icon-button')) return;

  this.classList.toggle('is-open');
}

function toggleAllCheckbox(event) {
  const header = this.querySelector('.collapse-header');
  if (!header.contains(event.target)) return;

  const checkboxListInContent = this.querySelectorAll(
    '.collapse-content input'
  );
  checkboxListInContent.forEach((checkbox) => {
    checkbox.checked = event.target.checked ? true : false;
  });

  if (this.matches('.is-required')) {
    isActiveInRequired = REQUIRED_COUNT;
  } else {
    isActiveInOption = OPTION_COUNT;
  }
}

function toggleHeaderCheckbox(event) {
  const content = this.querySelector('.collapse-content');
  if (!content.contains(event.target)) return;

  const checkbox = event.target;
  const checkboxInHeader = this.querySelector('.collapse-header input');

  const requiredCollapse = this.matches('.is-required');
  const optionCollapse = this.matches('.is-option');

  if (checkbox.checked) {
    requiredCollapse ? isActiveInRequired++ : isActiveInOption++;

    if (
      (requiredCollapse && isActiveInRequired === REQUIRED_COUNT) ||
      (optionCollapse && isActiveInOption === OPTION_COUNT)
    ) {
      checkboxInHeader.checked = true;
    }
  } else {
    requiredCollapse ? isActiveInRequired-- : isActiveInOption--;
    checkboxInHeader.checked = false;
  }
}

collapseList.forEach((collapse) => {
  collapse.addEventListener('click', toggleCollapse);
  collapse.addEventListener('change', toggleAllCheckbox);
  collapse.addEventListener('change', toggleHeaderCheckbox);
});
