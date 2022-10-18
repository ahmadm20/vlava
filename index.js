var services = document.getElementById("Services");
var Original_content = `          <div >
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">ahmad</a></h4>
<p class="description">description</p>
</div>`;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
        var content = Original_content;
        content = content.replace('ahmad',element.email)
        content = content.replace('description',element.phone)
        var service = document.createElement("div");
        service.innerHTML = content;
        service.className = "col-lg-4 col-md-6 icon-box";
        services.appendChild(service);
      });
    });

