In order to use the lightboxify api to its full ability, You, the user, must add a class or element selector. if not the lightboxify api will not know what to add the light boxes to. 
example: lightboxify(`.classname`)
The lightboxify api can be modified and tweaked by the user in a number of ways. overlayOpacity, borderColor, borderRadius, and even close button size.
example: 
lightboxify(`.classname`, {
	overlayOpacity: 0.5,   // Controls background opacity
	borderColor: `hexValue`,  //Changes lightbox border color to hex value.
	borderRadius: `30px`,  // sharpens or urves the image and border radius.
	buttSize: `30px`, // controls how big the close button is.
})

More tweaks to come in the future, but as for now, enjoy what you got!
~~ Captain Dread