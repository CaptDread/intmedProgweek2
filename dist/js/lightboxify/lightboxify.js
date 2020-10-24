/*
    Encapsulation
        -so the code can be dropped into other projects.
        -wont mess with other stuff.
        -you wont have to know how it works internally.
    Reuseability
        -generic so it can be used on future projects
        -or used more than once on a single project
    Configuration

        -API -have a set of options for the future developer to use/
*/

///This is our actual plugin code.
/// nobody will understand or read this.
/// nor even care about this code.



let lightboxify = function (selector, optOb = {
}){


    // let defaults = {
    //     overlayOpacity: 0.75,
    // }
    
    // optOb = {...defaults, ...userOptions}
    
    if (!optOb.hasOwnProperty('overlayOpacity'))    optOb.overlayOpacity = 0.75
    if (!optOb.hasOwnProperty(`borderColor`))       optOb.borderColor = `#fff`
    if (!optOb.hasOwnProperty('borderRadius'))      optOb.borderRadius = `5px`
    if (!optOb.hasOwnProperty(`buttSize`))          optOb.buttSize = `30px`
    if (!optOb.hasOwnProperty(`exButtImg`))         optOb.exButtImg = 'dist/img/close-button.png'
    if (!optOb.hasOwnProperty(`tranTime`))           optOb.tranTime = 20
    
    
    let lightboxLinks = document.querySelectorAll(selector);
    //# sourceMappingURL=main.js.map
    for (let z = 0; z < lightboxLinks.length; z++){
        lightboxLinks[z].addEventListener('click', function(e){
            e.preventDefault();

            let bkgd = document.createElement('div');
            bkgd.style.position = 'fixed'
            bkgd.style.top = 0
            bkgd.style.left= 0
            bkgd.style.backgroundColor = `rgba(0, 0, 0, ${optOb.overlayOpacity})`
            bkgd.style.width = '100vw'
            bkgd.style.height = '100vh'
            document.body.appendChild(bkgd);

            // animation
            bkgd.style.opacity = 0
            bkgd.style.transition = 'opacity 0.55s'
            setTimeout(() => {
                bkgd.style.opacity = 1
            }, `${optOb.tranTime}`);

            let litebx = document.createElement('div');
            // litebx.setAttribute('class', 'lightbox')
            litebx.style.position = 'fixed'
            litebx.style.top = '25%'
            litebx.style.left = '25%'
            litebx.style.backgroundColor = optOb.borderColor
            litebx.style.padding = `30px`
            litebx.style.borderRadius = `${optOb.borderRadius}`
            bkgd.appendChild(litebx);
            
            let exButt = document.createElement('button');
            // exButt.setAttribute('class', 'lightbox-close');
            exButt.style.position = `absolute`
            exButt.style.top = `2.5%`
            exButt.style.right = `2.5%`
            exButt.style.width = `${optOb.buttSize}`
            exButt.style.height = `${optOb.buttSize}`
            exButt.style.border = 0
            exButt.style.outline = `none`
            exButt.style.background = `none`
            exButt.style.backgroundSize = `contain`
            exButt.style.backgroundImage = `URL(${optOb.exButtImg})`

            litebx.appendChild(exButt);
            
            let bigimg = document.createElement('img');
            bigimg.style.display = `block`
            bigimg.style.maxWidth = '90vw'
            bigimg.style.maxHeight = `80vh`
            bigimg.style.borderRadius = `${optOb.borderRadius}`
            bigimg.setAttribute('alt', lightboxLinks[z].alt);
            bigimg.setAttribute('src', lightboxLinks[z].href);
            litebx.appendChild(bigimg);
            
            let closeLightBox = function(){
                bkgd.remove()
                litebx.remove()
            }
            
            
            document.addEventListener('keyup', function(event) {
                if (event.key === `Escape`) {
                    closeLightBox()
                }
            })
            
            
            exButt.addEventListener('click', closeLightBox)
            bkgd.addEventListener('click', closeLightBox)
        });
    }
}