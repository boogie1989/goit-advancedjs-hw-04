import{a as g,s as y,i as L}from"./assets/vendor-E1y4wwGd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function c(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=c(s);fetch(s.href,a)}})();const v="3632143-ebeee10190d206f1a5cb99fa1",w="https://pixabay.com/api/";let m=1;const h=15;function p(e){const t=new URLSearchParams({key:v,q:e.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:m});return m+=1,g.get(`${w}?${t}`)}function S(){m=1}function b(){return h}const q=new y(".images-list a",{captions:!0,captionsData:"alt",captionDelay:250});function f(e){const t=document.querySelector(".images-list");t.classList.remove("hidden");const c=e.data.hits.map(i=>`
      <li class="images-item">
        <a class="images-link" href="${i.largeImageURL}" onclick="return false">
          <img
            class="image"
            src="${i.webformatURL}"
            alt="${i.tags}"
          />
        </a>
        <div class="image-statistics">
          <ul class="stat-list stat-titles-list">
            <li class="stat-titles-item">
              <span class="stat-title">Likes</span>
              <span class="stat-value">${i.likes}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Views</span>
              <span class="stat-value">${i.views}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Comments</span>
              <span class="stat-value">${i.comments}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Downloads</span>
              <span class="stat-value">${i.downloads}</span>
            </li>
          </ul>
        </div>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",c),q.refresh()}const P=document.querySelector("form"),r=document.querySelector(".btn-load-mode"),o=document.querySelector(".loader"),u=document.querySelector(".end-line");let n="";const l=e=>{L.error({class:"error-alert",message:e,messageColor:"white",position:"topRight",maxWidth:432})},$=async()=>{const e=document.querySelector(".images-list");e.classList.add("hidden"),e.innerHTML="",o.classList.remove("hidden"),u.classList.add("hidden"),r.classList.add("hidden"),S();const t=await p(n);o.classList.add("hidden"),t.data.hits.length?(f(t),r.classList.remove("hidden")):l("Sorry, there are no images matching your search query. Please try again!")};P.addEventListener("submit",async e=>{e.preventDefault(),n=e.target.elements.query.value.trim(),n?await $():l("Search query is empty")});r.addEventListener("click",async()=>{if(n){o.classList.remove("hidden"),u.classList.add("hidden"),r.classList.add("hidden");const e=await p(n);if(o.classList.add("hidden"),!e.data.hits.length)l("Sorry, there are no images any more!");else{f(e),e.data.hits.length<b()?(r.classList.add("hidden"),u.classList.remove("hidden")):r.classList.remove("hidden");const t=document.querySelector(".images-item").getBoundingClientRect().height;window.scrollBy({top:2*t,left:0,behavior:"smooth"})}}else l("Search query is empty")});
//# sourceMappingURL=index.js.map
