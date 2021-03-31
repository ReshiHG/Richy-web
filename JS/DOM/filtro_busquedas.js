const   d = document,
        n = navigator;

export function buscar(input,selector){
    d.addEventListener("keyup",(e)=>{
        if (e.target.matches(input)) {
            // console.log(e.target.value);

            if (e.key === "Escape") e.target.value="";

            d.querySelectorAll(selector).forEach(el =>
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove("filter")
                    : el.classList.add("filter")
            );
        }
    })
}
