const button = document.querySelector("#create_btn");

button.addEventListener("click", () => {
    let title = document.querySelector("#title_input").value;
    let html = document.querySelector("#html_input").value;
    let styles = document.querySelector("#styles_input").value;
    let componentsArray = JSON.parse(localStorage.getItem("components")) || [];
    for(let item of componentsArray){
        if(title == item.title){
            return alert(`Компонент с таким названием уже есть!`)
        }
    }
    let component = {
        title,
        html,
        styles,
    }
    componentsArray.push(component);
    localStorage.setItem("components", JSON.stringify(componentsArray));
    title = "";
    html = "";
    styles = "";
    alert("Компонент успешно создан!");
});