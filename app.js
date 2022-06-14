const tagInput=document.getElementById("new-tag");
const addButton=document.getElementsByTagName("button")[0];
const listTags=document.getElementById("list-tags");
const tag = document.getElementsByClassName('section__tag-list');


const createNewTagElement=function(tagString){
  const listItem=document.createElement("li");
  const newTag=document.createElement("p");
  const deleteButton=document.createElement("button");
  const deleteButtonImg=document.createElement("img");

  newTag.innerText=tagString;
  newTag.className='section__newTag';
  deleteButton.className="section__btn-delete";
  deleteButtonImg.className="section__btn-img"
  deleteButtonImg.src='./remove.svg';
  deleteButton.appendChild(deleteButtonImg);

  listItem.className="section__tag-list"
  listItem.appendChild(newTag);
  listItem.appendChild(deleteButton);
  return listItem;
}

const addTag=function(){
  if (!tagInput.value) return;
  const listItem=createNewTagElement(tagInput.value);
  listTags.appendChild(listItem);
  bindTagEvents(listItem);
  tagInput.value="";

  const arr = [];
  for (var i = 0; i < tag.length; i++){
    arr[i] = tag[i].textContent;
  }
  localStorage.setItem('user', arr)
  console.log(localStorage.getItem('user')); 
}

const deleteTag=function(){
  const listItem=this.parentNode;
  const ul=listItem.parentNode;
  ul.removeChild(listItem);
}

const bindTagEvents=function(tagListItem){
  const deleteButton=tagListItem.querySelector("button.section__btn-delete");
  deleteButton.onclick=deleteTag;
}

addButton.onclick=addTag;
addButton.addEventListener("click",addTag);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('checkbox__input').onchange = toggleReadonly;
}, false);

function toggleReadonly() {
  const container = document.querySelector('#container-tags');
  const disabledBtn = container.querySelectorAll('#list-tags button.section__btn-delete');
  const readonlyInput = container.querySelectorAll('input.section__input-new');
  
  for (let i = 0; i < readonlyInput.length; i++){
    readonlyInput[i].readOnly = !readonlyInput[i].readOnly;
    for (let j = 0; j < disabledBtn.length; j++) {
      disabledBtn[j].disabled = !disabledBtn[j].disabled;
    }
  }
}
