const taskinput = document.querySelector("#taskinput"),
addbtn = document.querySelector("#addbtn"),
tasklist = document.querySelector(".taskList")

addbtn.addEventListener('click',()=>{
    let input = taskinput.value
    tasklist.innerHTML = `<div class = 'task

    <div class="task">
   <p>${input}</p>
      <div class="task">
        <button id="bnt" class="complete">✔</button>
        <button id="btn" class="edit">✏</button>
        <button id="btn" class="delete">🗑</button>
      </div>
    </div>
    `
    taskinput
})

