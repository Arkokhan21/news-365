
const loadCategory = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
        .catch(error => console.log(error))
}
loadCategory()

const displayCategory = (data) => {
    const displayCategory = document.getElementById('display-category')
    data.forEach(category => {
        console.log(category)
        const div = document.createElement('div')
        div.innerHTML = `<p>${category.category_name}</p>`
        displayCategory.appendChild(div)
    })
}

