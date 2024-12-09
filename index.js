const photos = document.querySelectorAll('.photos');
const bg = document.querySelector('body');

photos.forEach(photo => {
    photo.addEventListener('click', e => {
        document.addEventListener('click', e=> {
            if(!photo.contains(e.target)) {
                photo.classList.remove('zoom');
            }
        });
        photo.classList.toggle('zoom');
    })
});