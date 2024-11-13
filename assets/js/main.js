document.addEventListener("DOMContentLoaded", () => {
  const reviewsSlider = document.querySelector(".reviews__slider");
  if (reviewsSlider) {
    new Swiper(reviewsSlider, {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      pagination: {
        el: ".reviews__pagination",
      },
      navigation: {
        nextEl: ".reviews__button-next",
        prevEl: ".reviews__button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 70,
        },
      },
    });
  }

  const buttonReview = document.querySelectorAll(".reviews__item-btn");

  buttonReview.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.closest(".reviews__item-content");
      content.classList.toggle("reviews__item-content_active");
    });
  });

  const faqItemHeads = document.querySelectorAll(".faq__item-head");

  faqItemHeads.forEach((head) => {
    head.addEventListener("click", function () {
      const activeItem = document.querySelector(".faq__item.faq__item_active");
      if (activeItem && activeItem !== this.parentElement) {
        activeItem.classList.remove("faq__item_active");
      }
      this.parentElement.classList.toggle("faq__item_active");
    });
  });
});
