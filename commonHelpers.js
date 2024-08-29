import{a as y,i as p,S as L}from"./assets/vendor-d93b82f1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const h=r=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-img"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
      </a>
      <ul class="gallery-list">
        <li class="gallery-list-item">
          <p>Likes</p>
          <p>${r.likes}</p>
        </li>
        <li class="gallery-list-item">
          <p>Views</p>
          <p>${r.views}</p>
        </li>
        <li class="gallery-list-item">
          <p>Comments</p>
          <p>${r.comments}</p>
        </li>
        <li class="gallery-list-item">
          <p>Downloads</p>
          <p>${r.downloads}</p>
        </li>
      </ul>
    </li>
`;y.defaults.baseURL="https://pixabay.com/api/";const g=(r,t)=>{const a={params:{key:"45532331-2e8214dd605ab1a3b6ca882fa",q:r,image_type:"photo",orientation:"horizontal",per_page:15,page:t,safesearch:!0}};return y.get("",a)},u=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),m=document.querySelector(".load-more");let l=1,n="",f=0;const b=async r=>{try{if(r.preventDefault(),l=1,n=u.elements.user_query.value,!n){p.warning({message:"Please enter a search term to begin your search",position:"topRight"});return}const t=await g(n,l);if(t.data.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.classList.add("is-hidden"),i.innerHTML="";return}const a=t.data.hits.map(e=>h(e)).join("");i.innerHTML=a,f=i.querySelector("li").getBoundingClientRect().height,new L(".js-gallery a",{captionsData:"alt",captionDelay:250}),u.reset(),c.classList.add("is-hidden"),m.classList.remove("is-hidden")}catch(t){console.log(t)}},v=async r=>{try{l++,c.classList.remove("is-hidden");const t=await g(n,l),a=t.data.hits.map(o=>h(o)).join("");c.classList.add("is-hidden"),i.insertAdjacentHTML("beforeend",a),scrollBy({top:f*2,behavior:"smooth"}),l>=Math.ceil(t.data.totalHits/15)&&(m.classList.add("is-hidden"),p.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}};u.addEventListener("submit",b);m.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
