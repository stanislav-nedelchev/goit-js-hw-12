import{i as n,S as p}from"./assets/vendor-f33cd494.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=t=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-img"
          src="${t.webformatURL}"
          alt="${t.tags}"
        />
      </a>
      <ul class="gallery-list">
        <li class="gallery-list-item">
          <p>Likes</p>
          <p>${t.likes}</p>
        </li>
        <li class="gallery-list-item">
          <p>Views</p>
          <p>${t.views}</p>
        </li>
        <li class="gallery-list-item">
          <p>Comments</p>
          <p>${t.comments}</p>
        </li>
        <li class="gallery-list-item">
          <p>Downloads</p>
          <p>${t.downloads}</p>
        </li>
      </ul>
    </li>
`,d="https://pixabay.com/api/",y=t=>{const a=new URLSearchParams({key:"45532331-2e8214dd605ab1a3b6ca882fa",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),h=t=>{t.preventDefault();const a=i.elements.user_query.value.trim();if(!a){n.warning({message:"Please enter a search term to begin your search",position:"topRight"});return}y(a).then(s=>{if(u.classList.remove("is-hidden"),s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}const l=s.hits.map(e=>m(e)).join("");c.innerHTML=l,new p(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}),i.reset(),u.classList.add("is-hidden")}).catch(s=>{console.log(s)})};i.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
