document.addEventListener("DOMContentLoaded", function () {
    const cursorElement = document.createElement("div");
	cursorElement.classList.add("custom-cursor");
	// cursorElement.classList.add("custom-cursor-circle");
	cursorElement.id = "cursor"
    const cursorContainer = document.createElement("div");
    cursorContainer.classList.add("custom-cursor-active");
    cursorContainer.appendChild(cursorElement);
    document.body.appendChild(cursorContainer);

    document.addEventListener("mousemove", (e) => {
        cursorContainer.setAttribute(
            "style",
            "left: " + e.pageX + "px; top:" + e.pageY + "px;"
        );
    });
    const customEventElements = document.querySelectorAll(
        '[data-cursor-event="hover"]'
    );

    customEventElements.forEach(function (customElement) {
        let currentCustomElement = customElement;
        customElement.addEventListener("mouseenter", (e) => {
            cursorElement.classList.add(
                currentCustomElement.getAttribute("data-event-class")
            );
        });
        customElement.addEventListener("mouseout", (e) => {
            cursorElement.classList.remove(
                currentCustomElement.getAttribute("data-event-class")
            );
        });
    });

    document.addEventListener("click", () => {
        cursorElement.classList.add("custom-cursor-click");

        setTimeout(() => {
            cursorElement.classList.remove("custom-cursor-click");
        }, 500);
	});
	
    const dragElements = document.querySelectorAll(".drag-items");

    // Add event listener for mouseover
    dragElements.forEach((dragElement) => {
        // console.log(button.classList);
        var button = this.documentElement.querySelector("#"+dragElement.getAttribute("data-event-off"))
        dragElement.addEventListener("mouseover", () => {
            if (button) {
                button.classList.add("d-none")
            }
            document
                .getElementById("cursor")
                .classList.add("custom-cursor-drag");
        });
    });
    dragElements.forEach((dragElement) => {
        var button = this.documentElement.querySelector("#"+dragElement.getAttribute("data-event-off"))
        dragElement.addEventListener("mouseout", () => {
            if (button) {
                button.classList.remove("d-none")
            }
            document
                .getElementById("cursor")
                .classList.remove("custom-cursor-drag");
        });
	});
	// Get the draggable elements
	const viewDetailfills = document.querySelectorAll(".view-details-fill");

    // Add event listener for mouseover
    viewDetailfills.forEach((viewDetailfill) => {
        viewDetailfill.addEventListener("mouseover", () => {
            document
                .getElementById("cursor")
                .classList.add("custom-cursor-circle-fill");
        });
    });

    // Add event listener for mouseout
    viewDetailfills.forEach((viewDetailfill) => {
        viewDetailfill.addEventListener("mouseout", () => {
            document
                .getElementById("cursor")
                .classList.remove("custom-cursor-circle-fill");
        });
	});
	
    const viewDetails = document.querySelectorAll(".view-details");

    // Add event listener for mouseover
    viewDetails.forEach((viewDetail) => {
        viewDetail.addEventListener("mouseover", () => {
			try {
                viewDetail.querySelector('#button').classList.add("d-none")
                console.log(viewDetail.querySelector('#button').classList);
            }catch{
                
            }
            document
                .getElementById("cursor")
                .classList.add("custom-cursor-circle");
        });
    });

    // Add event listener for mouseout
    viewDetails.forEach((viewDetail) => {
        viewDetail.addEventListener("mouseout", () => {
			try {
                viewDetail.querySelector('#button').classList.remove("d-none")
                console.log(viewDetail.querySelector('#button').classList);

            }catch{
                
            }
            document
                .getElementById("cursor")
                .classList.remove("custom-cursor-circle");
        });
	});
});
