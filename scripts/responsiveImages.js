

//make an array that getrs all the images

const IMAGES = document.querySelectorAll('img');

const SIZES = {
    programs: '(max-width:450px) 400px',
    carousel: '100vw',
    animals: '(max-width:768px) 400px, 200px'
}

function createSrcSet(imgSrc) {
    let markup = [];
    let width = 200;

    for (let i = 0; i < 3; i++) {
        markup[i] = imgSrc + '-' + width + '.jpg ' + width + 'w';
        width += width;
    }
    return markup.join();
}


for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute('src');

    // strip off last 8 chars of image named
    imgSrc = imgSrc.slice(0, -8);
    //

    // get the data Type

    let srcset = createSrcSet(imgSrc); // core url to the image
    console.log(srcset);
    console.log(imgSrc);

    // IMAGES[i].setAttribute('srcset', srcset);

    let type = IMAGES[i].getAttribute('data-type');
    let sizes = SIZES[type];
    // IMAGES[i].setAttribute('sizes', sizes);

    console.log(sizes);
    console.log(type);




}
