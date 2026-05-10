const orderOverlay = document.querySelector("[data-order-overlay]");
const openOrderButton = document.querySelector("[data-open-order-form]");
const closeOrderButtons = document.querySelectorAll("[data-close-order-form]");

if (orderOverlay && openOrderButton) {
    const closeOrderForm = () => {
        orderOverlay.hidden = true;
        document.body.classList.remove("cart-page--modal-open");
    };

    openOrderButton.addEventListener("click", () => {
        orderOverlay.hidden = false;
        document.body.classList.add("cart-page--modal-open");
    });

    closeOrderButtons.forEach((button) => {
        button.addEventListener("click", closeOrderForm);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !orderOverlay.hidden) {
            closeOrderForm();
        }
    });
}
