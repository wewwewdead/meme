
const photos = document.querySelectorAll('.photos');
const artWork = document.querySelector('.artwork');
const dropdown = document.querySelector('.dropdown');
const dropdownActivate = document.querySelector('.dropdown-activate');

artWork.addEventListener('click', e => {
    document.addEventListener('click', e => {
        if(!dropdown.contains(e.target) && !artWork.contains(e.target)) { 
            dropdown.classList.remove('dropdown-activate');
        }
    });
    dropdown.classList.toggle('dropdown-activate');
   
});
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


