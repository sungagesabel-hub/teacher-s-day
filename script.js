const card = document.getElementById("teacherCard");
const teacherName = document.getElementById("teacherName");

// Customize the teacher's name here
teacherName.textContent = "Respected Mentor";

card.addEventListener("click", () => {
    card.classList.toggle("open");
});
