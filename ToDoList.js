const item= document.querySelector("#item");
const btn= document.getElementById("btn");
const todobox= document.querySelector("#todobox");

btn.onclick=()=>{
    addToDo(item.value);
    item.value="";
}
item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addToDo(item.value);
            item.value="";
        }
    }
)
const addToDo =(item)=>{
    const listItem = document.createElement("li")
    listItem.innerHTML=`${item}
    <i class="fas fa-times"></i>`
    todobox.appendChild(listItem);

    listItem.addEventListener(
        "click",
        function(){
            listItem.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )

}