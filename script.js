const bar=document.querySelector(".progress span");
const reveals=[...document.querySelectorAll(".event-card,.comp-list div,.about-content,.experience-copy,.zone-head,.map-art,.cta h2")];

window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  bar.style.width=(max?scrollY/max*100:0)+"%";
},{passive:true});

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")});
},{threshold:.12});
reveals.forEach(el=>io.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const target=document.querySelector(a.getAttribute("href"));
    if(!target)return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth"});
  });
});
