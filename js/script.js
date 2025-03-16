{
    const onChangeBackgroundClick = () => {
        document.body.classList.toggle("dark-mode");
     
     
        if (document.body.classList.contains("dark-mode")) {
            button.textContent = "Wyłącz ciemny motyw";
        } else {
            button.textContent = "Włącz ciemny motyw";
        }
     };
    

    const button = document.querySelector(".button");
    
    button.addEventListener("click", onChangeBackgroundClick);
}
