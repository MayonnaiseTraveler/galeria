/**
 * This function is updates the position of the data-pos attribute and scrolls to the next image.
 * @param {object} carrousel //the carrousel id
 * @param {number} dir //the direction to move the image
 * @param {number} maxpos // the maximum position of the carrosel 
 * @param {number} increment // the amount to move the image
 */
function changeImage(carrousel, dir, maxpos, increment) {
    //
    //this function updates the position of the html attribute and of the scroll bar
    pos = parseInt(carrousel.getAttribute("data-pos"));
    nextpos = pos + increment * dir; //calculate next position

    if (pos = nextpos < maxpos && nextpos >= 0) {
        pos = nextpos;
        carrousel.scrollTo(pos, 0);
        carrousel.setAttribute("data-pos", pos);

    } else if (nextpos < 0) {
        pos = (maxpos - increment);
        carrousel.setAttribute("data-pos", pos);
        carrousel.scrollTo(pos, 0);

    } else if (nextpos >= maxpos) {
        pos = 0;
        carrousel.setAttribute("data-pos", pos);
        carrousel.scrollTo(pos, 0);
    }

}

//this function just waits for the documet to load properly and then sets the carrosel position to 0 to avoid any weird stuff.
function forceStartPosition(carrousel, dir) {
    carrousel.scrollTo(0, 0);
    var interval = setInterval(function() {
        if (document.readyState === 'complete') {
            if (dir == 0) {
                //dir==0 initializes the carrousel
                carrousel.scrollTo(0, 0);
                carrousel.setAttribute("data-pos", 0);
            }
            clearInterval(interval);
        }
    }, 100);

}

/**
 * This function Moves the carrosel towards an direction, either once , or automatically on an set interval
 * @param {object} cid //id of the carrosel container
 * @param {object} imagecontainer //class of the images that are children of the carrosel
 * @param {bool} autoswitch // if the images should switch automatically or no.
 * @param {number} dir // direction of the movement to be performed: -1 left, 1 right, 0 nothing;
 * @param {number} timer // timee in ms between the autoswitch movements.
 */
function move(cid, imagecontainer, autoswitch, dir, timer) {

    var carrousel = document.querySelector(cid);
    var container = document.getElementsByClassName(imagecontainer); //gets a HTML collection with all the images
    var imagewidth = container[0].offsetWidth; // Gets the width of the images.
    var maxpos = imagewidth * container.length; //mutiply the imagewidth by the amount of images to get the total size of the carrosel
    //container.lenght is the amount of itens int the html collection

    forceStartPosition(carrousel, dir);

    carrousel.addEventListener("wheel", event => {
        if (event.deltaY > 0) {
            pos += 300;
            event.target.scrollBy(pos, 0);
        } else {
            pos -= 300;
            event.target.scrollBy(-pos, 0);
        }
    });

    if (autoswitch) window.setInterval(changeImage, timer, carrousel, dir, maxpos, imagewidth); //if the script is called with the autoswitch on , the run this function on an interval.
    else {
        changeImage(carrousel, dir, maxpos, imagewidth); //else only run it once5
    }

}
