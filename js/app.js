// variables
const notications = document.querySelectorAll(".notication")
const readAllBtn = document.querySelector("#readall-btn")
const readCounter = document.querySelector("#unread-counter")
// unread notification counter
let counter = 0
// DOM load event
window.addEventListener("DOMContentLoaded", function () {
  notications.forEach(function (notif) {
    if (notif.dataset.id === "unread") {
      counter++
      notif.classList.add("bg-cl_Verylightgrayishblue")
      readCounter.textContent = counter
    } else {
      notif.classList.remove("bg-cl_Verylightgrayishblue")
      const unreadDot = notif.querySelector(".unread-dot")
      unreadDot.style.display = "none"
    }
  })
})
// readAll button event
readAllBtn.addEventListener("click", function () {
  counter = 0
  readCounter.textContent = counter
  notications.forEach(function (notif) {
    if (notif.dataset.id === "unread") {
      notif.dataset.id = "read"
      notif.classList.remove("bg-cl_Verylightgrayishblue")
      const unreadDot = notif.querySelector(".unread-dot")
      unreadDot.style.display = "none"
    }
  })
})
