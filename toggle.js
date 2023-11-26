document.addEventListener("DOMContentLoaded", function () {
    try {
        let toggleAll = document.querySelectorAll(".toggle");

        if (toggleAll.length > 0) {

            toggleAll.forEach((toggle) => {
                let wrappers = document.querySelectorAll(
                    toggle.dataset.toggleWrapper
                );
                let toggleType = toggle.dataset.toggleType;
                let toggleText = toggle.querySelector(".toggle__text");
                let openedText = toggle.dataset.toggleOpenedText;
                let closedText = toggle.dataset.toggleClosedText;

                toggleText.textContent = closedText;

                wrappers.forEach((wr) => {
                    toggleBtnText(wr)
                });

                toggle.addEventListener("click", function (e) {

                    toggle.classList.toggle('_opened');

                    if (wrappers.length > 0) {
                        wrappers.forEach((wr) => {
                            if (toggleType==='text') {
                                wr.classList.toggle('toggle__half');
                            }
                            else {
                                wr.classList.toggle('toggle__0');
                            }
                            
                            toggleBtnText(wr);
                        });
                    }
                });

                function toggleBtnText(wr) {
                    if (wr.classList.contains('toggle__half') || wr.classList.contains('toggle__0')) {
                        toggleText.textContent = closedText;
                    }
                    else {
                        toggleText.textContent = openedText;
                    }
                }

            });

        }
    } catch (err) {
        console.error("TRY-CATCH ERROR: ", err);
    } finally {
    }
});
