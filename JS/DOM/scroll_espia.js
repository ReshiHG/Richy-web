const   d= document;

export function scrollSpy(){
    const $sections= d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries) => {
        // console.log("entries",entries);

        entries.forEach((entry) => {
            // console.log("entry",entry);
            const id = entry.target.getAttribute("id");
            // console.log(id);
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("menuElementActive");
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("menuElementActive");
            }
        });
    };

    const observer = new IntersectionObserver(cb,{
        threshold: 0.4,
    });

    $sections.forEach((el) => observer.observe(el));
}
