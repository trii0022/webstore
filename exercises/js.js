const newsArticle = {
  header: "JS is awesome",
  description: "At least I think so (you will too)",
};

for (let i = 0; i < 100; i++) {
  //1 grab the template content
  const myTemplate = document.querySelector("template").content;

  //2 create a copy
  const myCopy = myTemplate.cloneNode(true);

  //3 change some content
  myCopy.querySelector("h2").textContent = newsArticle.header;
  myCopy.querySelector("p").textContent = newsArticle.description;

  //4 select the parent
  document.querySelector("main").appendChild(myCopy);
}
