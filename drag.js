
var empties = document.querySelectorAll('.container');
var filled = document.querySelector('.draggable');
filled.addEventListener('dragstart', dragStart);
filled.addEventListener('dragend', dragEnd);
empties.forEach(empty => {
    empty.addEventListener('dragend',save)
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', drapDrop)
})

function save(){
    for (let i = 0; i < empties.length; i++) {
        const element = empties[i];
        if(element.children.length>0){
            localStorage.clear()
            localStorage.setItem(`div${i}`,element.innerHTML)
            element.innerHTML='';
            window.location.reload()
            draw()
        }
    }
}
window.onload=function(){
    var data = {...localStorage}
    if(localStorage.length > 0){
        for (let i = 0; i < empties.length; i++) {
            var div  = document.getElementById(`div${i}`)
            div.innerHTML=""
            var activeDiv =document.getElementById(Object.keys(data)[0])
            var Line = Object.entries(data)[0][1];
            if(Line)
            activeDiv.innerHTML=Line;
        }
        var chart = document.querySelector('canvas')
        chart.style='width:100%;height:auto;'
    }
   draw()
 
}

function dragStart() {
    empties.forEach(empty=>{
        empty.classList.add('placeholderImg')
    })
    
}

function dragEnd() {
    empties.forEach(empty=>{
        empty.classList.remove('placeholderImg')
    })
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('enter')
    this.classList.remove('placeholderImg')
}

function dragLeave() {
    this.classList.remove('enter')
}

function drapDrop(e) {
    e.preventDefault();
    this.append(filled);
    this.classList.remove('enter')
}
function show_list() {
    var courses = document.getElementById("courses_id");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropdown_button')) {
        document.getElementById('courses_id')
            .style.display = "none";
    }
}    
function edit() {
    swal("Please enter a title:", {
        content: "input",
      })
      .then((value) => {
           if (value != '') {
            document.getElementById("title").innerText = value ;
            }
      });
  }
var finish = document.getElementsByClassName('finish')[0]
finish.onclick = function(){
    swal(
        'Done!',
        'You are finished!',
        'success'
      )
}
var back = document.getElementsByClassName('backBtn')[0]
back.onclick=function(){
    swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Done!", {
            icon: "success",
          });
        } else {
          swal("Your data is safe!");
        }
      });
}
var btn = document.getElementsByClassName('btn')[0]
btn.onclick=function(){
    swal({
        title: "Done!",
        icon: "success",
        button: "ok!",
      });
}

