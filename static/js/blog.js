(function () {
    "use strict";

    var fn = function() {
        var eles = document.querySelectorAll(".menu-button[href='#'], .nav-cover, .nav-close")
        eles.forEach(function(ele){
            ele.addEventListener("click", function(e){
                e.preventDefault();
                var body = document.querySelector("body")
                var className = "nav-opened"
                if (body.classList){
                    body.classList.toggle("nav-opened");
                    body.classList.toggle("nav-closed");
                }else{
                    var classes = body.className.split(' ');
                    var existingIndex = classes.indexOf(className);
    
                    if (existingIndex >= 0)
                        classes.splice(existingIndex, 1);
                    else
                        classes.push(className);
                    body.className = classes.join(' ');
                }
            })
        })
    }

    function ready(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
          fn();
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
    }
    ready(fn);

    let e = document.querySelectorAll('.obfus');
    e.forEach(element => {
        element.href = atob("bWFpbHRvOldpbmNlckNoYW5AZ21haWwuY29t")
    })
    var element = document.querySelector("#aplayer1");
    async function syncHand() {
        new APlayer({
            element: element,
            narrow: false,
            autoplay: false,
            showlrc: 3,
            mutex: true,
            theme: "#ad7a86",
            mode: "random",
            listmaxheight: '263px',
            music: [{
                title: element.getAttribute('title'),
                author: element.getAttribute('author'),
                url: await parse(element.getAttribute('url')),
                pic: element.getAttribute('pic'),
                lrc: element.getAttribute('lrc')
            }]
        })
    }
    if (element !== null) { 
        syncHand(); }

setTimeout(function() {
    lazyload();
}, 160);

if(document.querySelector('.disqus_click_btn')){
var disqus_config = function () {
    this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = window.location.href; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
     axios({ 
        url: 'https://disqus.com/next/config.json', 
        timeout: 300})
        .then(function(){
            let d = document;
            let s = d.createElement('script');
            s.src = '//wincer.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            let b = document.querySelector('.disqus_click_btn');
            b.style.display = 'none';
        })
        .catch(function(){
            let b = document.querySelector('.disqus_click_btn');
            b.style.display = 'block';
        })
    
        document.querySelector('.disqus_click_btn').onclick = function() {
            (function() {
                let d = document;
                let s = d.createElement('script');
                s.src = '//wincer.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
            let b = document.querySelector('.disqus_click_btn');
            b.style.display = 'none';
    }
}

})()