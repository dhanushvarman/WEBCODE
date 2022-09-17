var div=document.createElement("div");
div.setAttribute("id","align");
div.style.marginTop="30px";
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","number");
input.placeholder="Enter only book number...";
input.setAttribute("id","book");
input.style.width="250px";
input.style.marginRight="10px";

var button=document.createElement("button");
button.setAttribute("type","number");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.height="31px";
button.style.paddingBottom="30px";
button.addEventListener("click",book)

var card=document.createElement("div");
card.setAttribute("id","display");
card.style.marginLeft="500px";
card.style.marginTop="60px";


div.append(input,button,card);
document.body.append(div);
document.body.style.backgroundColor="lightgrey";


async function book(){
    let value=document.getElementById("book").value;
    let url=`https://anapioficeandfire.com/api/books/${value}`;
    let res=await fetch(url);
    let res1=await res.json();
    console.log(res1);
    card.innerHTML=`
    <div class="card" style="width: 30rem;">
        <div class="card-body">
            <h5 class="card-title">${res1.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted"><b>ISBN:</b> ${res1.isbn}</h6>
            <div><b>Number of Pages:</b> ${res1.numberOfPages}</div>
            <div><b>Authors:</b> ${res1.authors}</div>
            <div><b>Publisher:</b> ${res1.publisher}</div>
            <div><b>Released Date & Time:</b> ${res1.released}</div>
            <div><b>Character_1:</b> ${res1.characters[0]}</div>
            <div><b>Character_2:</b> ${res1.characters[1]}</div>
            <div><b>Character_3:</b> ${res1.characters[2]}</div>
            <div><b>Character_4:</b> ${res1.characters[3]}</div>
            <div><b>Character_5:</b> ${res1.characters[4]}</div>
        </div>
    </div>`;
}




//PAGINATION FORMAT

// async function book(x){
//     b=2;
//     for(var i=(x-1)*2;i<(b*x);i++){
//         if(i%2!=0){
//             for(var j=i;j<=(b*x);j++){
//                 // let value=document.getElementById("book").value;
//                 let url=`https://anapioficeandfire.com/api/books/${j}`;
//                 let res=await fetch(url);
//                 let res1=await res.json();
//                 console.log(res1);
//                 div.innerHTML+=`
//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body">
//                     <h5 class="card-title">${res1.name}</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">${res1.isbn}</h6>
//                     <div>Number of Pages: ${res1.numberOfPages}</div>
//                     <div>Authors: ${res1.authors}</div>
//                     <div>Publisher: ${res1.publisher}</div>
//                     <div>Released Date & Time: ${res1.released}</div>
//                     </div>
//                 </div>`;
//             }
//         }
//     }
// }
