let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let background1 = document.querySelector(".background1");
let background2 = document.querySelector(".background2");
let flash1 = document.querySelector(".flash1");
let flash2 = document.querySelector(".flash2");


main1.addEventListener('mouseenter', () => {
    background1.style.background = 'linear-gradient(145deg, rgba(31, 148, 142,1) 0%, rgb(23, 206, 197) 35%, rgb(4, 253, 245) 100%)'; 
    // background1.style.transform = 'translateX(100%) translateY(-100%)';
    // background1.style.transition = 'background 0.3s ease-in-out, transform 0.3s ease-in-out';
    flash1.style.opacity = 1;
});

main2.addEventListener('mouseenter', () => {
    // background2.style.transition = 'background 0.3s ease-in-out, transform 0.3s ease-in-out';
    background2.style.background = 'linear-gradient(145deg, rgba(31, 148, 142,1) 0%, rgb(23, 206, 197) 35%, rgb(4, 253, 245) 100%)'; 
    // background2.style.transform = 'translateX(100%) translateY(-100%)';
    flash2.style.opacity = 1;
});

main1.addEventListener('mouseleave', () => {
    background1.style.background = '';
    background1.style.transform = 'translateX(0) translateY(0)';
    flash1.style.opacity = 0;
});

main2.addEventListener('mouseleave', () => {
    background2.style.background = '';
    background2.style.transform = 'translateX(0) translateY(0)';
    flash2.style.opacity = 0;
});