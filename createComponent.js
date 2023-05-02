let button = document.querySelector(`button`)
button.addEventListener(`click`, () => {
    let title = document.querySelector(`#title_input`).value
    let html = document.querySelector(`#html_input`).value
    let styles = document.querySelector(`#styles_input`).value
    let component = {
        title,
        html,
        styles
    }
    let componentArray = JSON.parse(localStorage.getItem(`components`)) || []
    componentArray.push(component)
    localStorage.setItem(`components`, JSON.stringify(componentArray))

    title = ``
    html = ``
    styles = ``
    alert(`Компонент успешно создан!`)
})