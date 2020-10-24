Ahoy Mate, welcome aboard Captain Dread's ReadMe's, todays booty is: 
Lightboxify.js

Step one when using this file is to call it on your html.
Makesure to call it before your main js script file.
On your main.js type out the following:

lightboxify(`put your selector here`, {})

your selector can be anything, .className #idName or an element tag.
A simple set up for this is to make the selector `.lightboxify` then give the images you want to have lightboxes for the class of lightboxify.

If you're interested in tweaking the set up at all, you can use the following selectors. 

overlayOpacity: `%` 	//This controls background opacity when the light box is active. Default is 0.75%.

borderColor: `hex value`  // This controls the color of the border around the lightbox image. Default is white.

borderRadius: `px`	//This controls how sharp the corners of the border and image are. Default is 5px.

exButtImg: `image location` // This changes the image used for the lightbox exit button. Default location is "dist/img/close-button.png"

buttSize: `px` 		// This controls how big the exit button image is. Default is 30px.

tranTime: insert number, no quotations required.		//desired transition timeout duration default is 20. 

example: 
lightboxify(`.classname`, {
	overlayOpacity: 0.5,   // Controls background opacity
	borderColor: `hexValue`,  //Changes lightbox border color to hex value.
	borderRadius: `30px`,  // sharpens or urves the image and border radius.
	buttSize: `30px`, // controls how big the close button is.
	exButtImg: `dist/img/image-name.filetype`,
	tranTime: 30,
})

More tweaks to come in the future, but as for now, enjoy what you got!
~~ Captain Dread