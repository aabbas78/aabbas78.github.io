let products = {
    data: [
      {
        productName: "box1",
        category: "boxes",
        image: "images/boxes/b1.jpeg",
      },
      {
        productName: "box2",
        category: "boxes",
        image: "images/boxes/b2.jpeg",
      },
      {
        productName: "box3",
        category: "boxes",
        image: "images/boxes/b3.jpeg",
      },
      {
        productName: "box4",
        category: "boxes",
        image: "images/boxes/b4.jpeg",
      },
      {
        productName: "box5",
        category: "boxes",
        image: "images/boxes/b4.jpeg",
      },
      {
        productName: "box6",
        category: "boxes",
        image: "images/boxes/b6.jpeg",
      },

      {
        productName: "box4",
        category: "boxes",
        image: "images/n4.jpg",
      },
      {
        productName: "seal1",
        category: "seals",
        image: "images/n5.jpg",
      },
      {
        productName: "seal2",
        category: "seals",
        image: "images/n6.jpg",
      },
      {
        productName: "seal3",
        category: "seals",
        image: "images/n7.jpg",
      },
      {
        productName: "seal4",
        category: "seals",
        image: "images/n8.jpg",
      },
    ],
  };

    let cont = document.createElement("div");
    cont.classList.add("container");
    let row = document.createElement("div");
    row.classList.add("row");
    cont.appendChild(row);

    for (let i of products.data){
     
        //row.innerText=i.category;
        let col=document.createElement("div");
        col.classList.add("col-lg-4", "col-12" , "col-md-6","p-2");
        row.appendChild(col);

        let card = document.createElement("div");
        card.classList.add("card", i.category, "hide");
        col.appendChild(card);
        
        let img = document.createElement("img");
        img.classList.add("card-img-top","w-100");
        img.setAttribute("src", i.image);
        img.style.height="300px";
        card.appendChild(img);
 
        let name = document.createElement("h5");
        name.classList.add("card-title","p-3","text-center");
        name.innerText = i.productName.toUpperCase();
        card.appendChild(name);
        
        document.getElementById("products").appendChild(cont);
    }

      //Initially display all products
      window.onload = () => {
        filterProduct("all");
      };

    function filterProduct(value) {
    
      //select all cards
      let elements = document.querySelectorAll(".card");
      //loop through all cards
      elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
          element.classList.remove("hide");
        } else {
          //Check if element contains category class
          if (element.classList.contains(value)) {
            //display element based on category
            element.classList.remove("hide");
          } else {
            //hide other elements
            element.classList.add("hide");
          }
        }
      });
    }


    
    //Search button click
    document.getElementById("search").addEventListener("click", () => {
      //initializations
      let searchInput = document.getElementById("search-input").value;
      let elements = document.querySelectorAll(".card-title");
      let cards = document.querySelectorAll(".card");

      elements.forEach((element, index) => {
        if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {

          cards[index].classList.remove("hide");
        } else {

          cards[index].classList.add("hide");
        }
      });
    });
    
  
  
    
  
  
