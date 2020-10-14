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



let lightboxify = function(selector, userOptions = {}){


    let defaults = {
        overlayOpacity: 0.75,
        // escapeClosesLightBox: true
    }
    
    optOb = {...defaults, ...userOptions}
    
    // if (!optOb.hasOwnProperty('overlayOpacity'))    optOb.overlayOpacity = 0.75}
    // if (!optOb.hasOwnProperty('escapeClosesLightBox'))  optOb.escapeClosesLightBox = true

    
    
    let lightboxLinks = document.querySelectorAll(selector);
    //# sourceMappingURL=main.js.map
    for (let z = 0; z < lightboxLinks.length; z++){
        lightboxLinks[z].addEventListener('click', function(e){
            e.preventDefault();
            let bkgd = document.createElement('div');
            bkgd.style.position = 'fixed'
            bkgd.style.top = 0
            bkgd.style.left= 0
            bkgd.style.backgroundColor = `rgba (0, 0, 0, ${optOb.overlayOpacity})`
            bkgd.style.width = '100vw'
            bkgd.style.height = '100vh'
            document.body.appendChild(bkgd);

            let litebx = document.createElement('div');
            litebx.setAttribute('class', 'lightbox')
            // litebx.style.position = 'fixed'
            // litebx.style.top = '50%'
            // litebx.style.left = '50%'
            // litebx.style.msTransform = 'translate(-50%'
            // litebx.style
            // litebx.style
            // litebx.style
            // litebx.style
            bkgd.appendChild(litebx);

            let exButt = document.createElement('button');
            exButt.setAttribute('class', 'lightbox-close');
            litebx.appendChild(exButt);

            let bigimg = document.createElement('img');
            bigimg.setAttribute('alt', lightboxLinks[z].alt);
            bigimg.setAttribute('src', lightboxLinks[z].href);
            litebx.appendChild(bigimg);
            
        });
    }
}