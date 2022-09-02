
const loadCategory = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
    // .catch(error => console.log(error))
}
loadCategory()

const displayCategory = (data) => {
    const displayCategory = document.getElementById('display-category')
    data.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `<p onclick="loadDetails('${category.category_id}')">${category.category_name}</p>`
        displayCategory.appendChild(div)
    })
}

const loadDetails = (data) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
    // .catch(error => console.log(error))
}

const displayDetails = (datas) => {
    const dDetails = document.getElementById('display-details')
    dDetails.textContent = ''
    datas.forEach(kkk => {
        console.log(kkk)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="row g-0 mb-5">
        <div class="col-md-4">
            <img src="${kkk.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title my-3">${kkk.title}</h5>
                <p class="card-text my-3">${kkk.details.slice(0, 200)}</p>
            </div>
        </div>
        </div>
     `
        dDetails.appendChild(div)
    })
}


