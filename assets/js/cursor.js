const ClassMap = {
    "drag-items": "custom-cursor-drag",
    "view-details-fill": "custom-cursor-circle-fill",
    "view-details": "custom-cursor-circle",
    
}

const Cursor = (classname) => {
    const elements = document.querySelectorAll("." + classname)
    elements.forEach((element) => {
        var button = document.querySelector("#" + element.getAttribute("data-event-off"))
        var cursorKey = document.getElementById("cursor")
        element.addEventListener("mouseover", () => {
            if (button) {
                button.classList.add("d-none")
            }
            cursorKey.classList.add(ClassMap[classname]);
        })
        element.addEventListener("mouseout", () => {
            if (button) {
                button.classList.remove("d-none")
            }
            cursorKey.classList.remove(ClassMap[classname]);
        })
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const cursorElement = document.createElement("div");
	cursorElement.classList.add("custom-cursor");
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
    document.addEventListener("click", () => {
        cursorElement.classList.add("custom-cursor-click");

        setTimeout(() => {
            cursorElement.classList.remove("custom-cursor-click");
        }, 500);
    });
    Object.keys(ClassMap).forEach((classname) => {
        Cursor(classname)
    })
});
