const ClassMap = {
    "drag-items": "custom-cursor-drag",
    "view-details-fill": "custom-cursor-circle-fill",
    "view-details": "custom-cursor-circle",
    "menu-icon": "custom-cursor-menu",
    "menu-item": "custom-cursor-menu",
    "right-menu": "custom-cursor-menu-close",
    "video-slider-items-thumbnail": "custom-cursor-video-play",
    "view-img" : "custom-cursor-img-view"
}

const Cursor = (classname) => {
    const windowWidth = window.innerWidth
    const elements = document.querySelectorAll("." + classname)
    if (windowWidth > 480) {
        elements.forEach((element) => {
            var button = document.querySelector("#" + element.getAttribute("data-event-off"))
            var cursorKey = document.getElementById("cursor")
            var img = document.createElement("img")
            var imgurl = element.getAttribute("data-event-view")
            var viewType = element.getAttribute("data-event-view-type")
            element.addEventListener("mouseover", () => {
                if (imgurl!="" && viewType=="image") {
                    img.src = imgurl
                    document.getElementById("cursor").appendChild(img)
                }
                if (button) {
                    button.classList.add("d-none")
                }
                cursorKey.classList.add(ClassMap[classname]);
            })
            element.addEventListener("mouseout", () => {
                if (button) {
                    button.classList.remove("d-none")
                }
                cursorKey.classList.remove(ClassMap[ classname ]);
                if (imgurl!="" && viewType=="image") {
                    document.getElementById("cursor").removeChild(img)
                }
            })
        })
    }
}
const viewModal = () => {
    const elements = document.querySelectorAll(".open-shadow-modal")
    const modalElement = document.getElementById("viewModal")
    const modal = new bootstrap.Modal(modalElement)
    elements.forEach((element) => {
        element.addEventListener("click", () => {
            var viewType = element.getAttribute("data-event-view-type")
            var viewUrl = element.getAttribute("data-event-view")
            // modal._dialog.querySelector(".modal-title").innerHTML = viewType
            if (viewType == "image") {
                var img = document.createElement("img")
                img.src = viewUrl
                // modal._dialog.querySelector(".modal-body").innerHTML = ""
                modal._dialog.querySelector(".modal-body").appendChild(img)
                element.pop
            } else {
                var video = document.createElement("iframe")
                video.src = viewUrl
                video.setAttribute("frameborder", "0")
                video.setAttribute("allowfullscreen", "1")
                // modal._dialog.querySelector(".modal-body").innerHTML = ""
                modal._dialog.querySelector(".modal-body").appendChild(video)
            }
            modal.show()
            modalElement.addEventListener('hidden.bs.modal', (event) => {
                modal._dialog.querySelector(".modal-body").innerHTML = ""
            })
        })
    })
}
document.addEventListener("DOMContentLoaded", function () {
    const windowWidth = window.innerWidth
    if (windowWidth > 480) {
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
    }
    viewModal()
});
