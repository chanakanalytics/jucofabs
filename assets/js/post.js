const classList = [ ".product-list-section" ]

const postMargin = (classname) => {
    const windowWidth = window.innerWidth
    var postSection = document.querySelector(classname)
    console.log(postSection.children);
    Array.from(postSection.children).forEach((element, index) => {
        if (windowWidth >= 1200) {
            if (index % 2 == 1) {
                element.classList.add("mt-0");
            }
        }
        else if (windowWidth >= 992 && windowWidth < 1200) {
            if ((index + 2) % 3 == 0) {
                element.classList.add("mt-0");
            }
        }
        else if (windowWidth >= 786 && windowWidth < 992) {
            if (index % 2 == 1) {
                element.classList.add("mt-0");
            }
        }
        else {
            element.classList.add("mt-0")
        }
    });
}
classList.forEach((classname) => {
    postMargin(classname)
})