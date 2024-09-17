function toggleImgSpoiler() {
    toggleImgSpoiler1()
    toggleImgSpoiler2()
    toggleImgSpoiler3()
}

function toggleImgSpoiler1() {
    const image = document.querySelector('.ImgPortraitSpoiler');
    const isExpanded = image.classList.toggle('expanded');
    const images = document.querySelectorAll('.ImgPortraitSpoiler');

    images.forEach(image => {
        image.removeEventListener('mouseover', handleMouseOver);
        image.removeEventListener('mouseout', handleMouseOut);

        if (isExpanded) {
            image.style.width = '15%';
            image.style.backgroundImage = 'none';
            image.style.padding = '0px 0px';
        } else {
                // Original Values
                image.style.width = '0';
                image.style.backgroundImage = 'url(../chimg/3_Question.png)';
                image.style.padding = '35.1px 35.1px';
                ///////////////////////////
                image.addEventListener('mouseover', handleMouseOver);
                image.addEventListener('mouseout', handleMouseOut);

            }
    });
}
function toggleImgSpoiler2() {

    const image2 = document.querySelector('.ImgEventSpoiler');

    const isExpanded = image2.classList.toggle('expanded');
    const images = document.querySelectorAll('.ImgEventSpoiler');

    images.forEach(image2 => {
        image2.removeEventListener('mouseover', handleMouseOver2);
        image2.removeEventListener('mouseout', handleMouseOut2);
        if (isExpanded) {
            image2.style.width = '45%';
            image2.style.backgroundImage = 'none';
            image2.style.padding = '0px 0px';

        } else {
                // Original Values

                image2.style.width = '0';
                image2.style.backgroundImage = 'url(../chimg/2_Question.png)';
                image2.style.padding = '56px 106px';

                image2.addEventListener('mouseover', handleMouseOver2);
                image2.addEventListener('mouseout', handleMouseOut2);

            }
    });
}
function toggleImgSpoiler3() {

    const image3 = document.querySelector('.ImgChapterSpoiler');

    const isExpanded = image3.classList.toggle('expanded');
    const images = document.querySelectorAll('.ImgChapterSpoiler');

    images.forEach(image3 => {
        image3.removeEventListener('mouseover', handleMouseOver3);
        image3.removeEventListener('mouseout', handleMouseOut3);
        if (isExpanded) {
            image3.style.width = '45%';
            image3.style.backgroundImage = 'none';
            image3.style.padding = '0px 0px';

        } else {
                // Original Values

                image3.style.width = '0';
                image3.style.backgroundImage = 'url(../chimg/1_Question.png)';
                image3.style.padding = '36px 106.4px';

                image3.addEventListener('mouseover', handleMouseOver3);
                image3.addEventListener('mouseout', handleMouseOut3);

            }
    });
}



///////////////////////////////
function handleMouseOver() {
    this.style.backgroundImage = 'none';
    this.style.padding = '0px 0px';
    this.style.width = '15%';
  }
  function handleMouseOut() {
    this.style.width = '0';
    this.style.backgroundImage = 'url(../chimg/3_Question.png)';
    this.style.padding = '35.1px 35.1px';
  }
///////////////////////////////
  function handleMouseOver2() {
    this.style.backgroundImage = 'none';
    this.style.padding = '0px 0px';
    this.style.width = '45%';
  }
  function handleMouseOut2() {
    this.style.width = '0';
    this.style.backgroundImage = 'url(../chimg/2_Question.png)';
    this.style.padding = '56px 106px';
  }
///////////////////////////////
function handleMouseOver3() {
    this.style.backgroundImage = 'none';
    this.style.padding = '0px 0px';
    this.style.width = '45%';
  }
  function handleMouseOut3() {
    this.style.width = '0';
    this.style.backgroundImage = 'url(../chimg/1_Question.png)';
    this.style.padding = '36px 106.4px';
  }