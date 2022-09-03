
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
        const div = document.createElement('div')
        div.innerHTML = `<p onclick="loadDetails('${category.category_id}')">${category.category_name}</p>`
        displayCategory.appendChild(div)
    })
}

const loadDetails = (data) => {
    // spinner start
    const spinner = document.getElementById('spinner')
    spinner.classList.remove('d-none')

    const url = ` https://openapi.programming-hero.com/api/news/category/${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
        .catch(error => console.log(error))
}

const displayDetails = (datas) => {
    // console.log(datas)
    const itemsFound = document.getElementById('items-found')
    itemsFound.innerHTML = `${datas.length} items found for this category`
    const spinner = document.getElementById('spinner')
    spinner.classList.add('d-none')


    const dDetails = document.getElementById('display-details')
    dDetails.textContent = ''
    datas.forEach(kkk => {
        // console.log(kkk)
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
                <div class= "d-flex mt-5">
                <img src="${kkk.author.img}" class="rounded-circle author-img"  alt="...">
                <p class="ms-3">${kkk.author.name ? kkk.author.name : 'data unavailable'}</p>
                <p class="ms-3"><i class="fa-solid fa-eye"></i> ${kkk.total_view ? kkk.total_view : 'data unavailable'}</p>
                <button onclick="showModal('${kkk._id}')" type="button" class="btn btn-dark ms-5" 
                data-bs-toggle="modal" data-bs-target="#exampleModal">Details <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        </div>
     `
        dDetails.appendChild(div)
        // spinner stop
        const spinner = document.getElementById('spinner')
        spinner.classList.add('d-none')
    })
}

const showModal = (data) => {
    const url = ` https://openapi.programming-hero.com/api/news/${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayModal(data.data[0]))
        .catch(error => console.log(error))
}

const displayModal = (data) => {
    // console.log(data)
    const title = document.getElementById('exampleModalLabel')
    title.innerText = data.title
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <img src="${data.image_url}" class="img-fluid rounded-start" alt="...">
    <p>${data.details}</p>
    <p>Published Date: ${data.author.published_date}</p>
    <p>Rating: ${data.rating.number}</p>
    `
}




