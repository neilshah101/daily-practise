const dispalynews = document.getElementById("dispalynews")
const sourceSelect = document.getElementById("sourceSelect")



let allnews = news.articles.map(function(news1) {
    return `
    <div id="newscontainer">
    <div id="sourcename">SOURCE: ${news1.source.name}</div><br>
    <div class="fonts" ><img  class="image" src="${news1.urlToImage}" alt="image ${news1.title}"></div><br>
    <div class="fonts">AUTHOR: ${news1.author}</div><br>
    <div class="fonts">TITLE: ${news1.title}</div><br>
    <div class="fonts">DESCRIPTION:${news1.description}</div><br>
    <a class="fonts"href="${news1.url}" target= "blank">link to the news page</a><br>
    <div>PUSHLISHED TIME AND DATE:${news1.publishedAt}</div><br>
    </div>
    `
})

dispalynews.innerHTML = allnews.join("")