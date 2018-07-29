var fetchedData = [];

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(function(json) {

    for (var i = 0; i < 20; i++) {
      fetchedData.push(json[i]);

      var source   = document.getElementById("entry-template").innerHTML,
          template = Handlebars.compile(source),
          data = {
            "imgUrl" : fetchedData[i].url,
            "title" : fetchedData[i].title,
            "body" : fetchedData[i].title,
            "link": fetchedData[i].url
          },
          result = template(data);

      document.getElementById("content").innerHTML += result;
    }

  })
