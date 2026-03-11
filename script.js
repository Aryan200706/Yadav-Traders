function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{
link.addEventListener("click", ()=>{
document.getElementById("navLinks").classList.remove("active");
});
});
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
observer.unobserve(entry.target);
}
});
},{
threshold:0.15
});