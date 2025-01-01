// Add event listeners for navigation boxes dynamically
let boxes = document.querySelectorAll('[id^="box"]');
if (boxes.length > 0) {
    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            window.location.href = `af${index + 1}.html`;
        });
    });
}

// Add event listeners for cart and user buttons
['cart', 'user'].forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', () => {
            window.location.href = `${id === 'cart' ? 'ca' : 'us'}.html`;
        });
    }
});

// Navigation using data attributes (optional alternative approach)
document.querySelectorAll('.box[data-link]').forEach(box => {
    box.addEventListener('click', () => {
        window.location.href = box.dataset.link;
    });
});



document.getElementById('box1').addEventListener('click', function() {
    window.location.href = "afpizza.html";
});

document.getElementById('box2').addEventListener('click', function() {
    window.location.href = "afcrepe.html";
});

document.getElementById('box3').addEventListener('click', function() {
    window.location.href = "afmeals.html";
});

document.getElementById('box4').addEventListener('click', function() {
    window.location.href = "afmacaroni.html";
});

document.getElementById('box5').addEventListener('click', function() {
    window.location.href = "afburger.html";
});

document.getElementById('box6').addEventListener('click', function() {
    window.location.href = "afsandwich.html";
});

document.getElementById('box7').addEventListener('click', function() {
    window.location.href = "afrizzo.html";
});

document.getElementById('box8').addEventListener('click', function() {
    window.location.href = "afadditional items.html";
});

document.getElementById('cart').addEventListener('click', function() {
    window.location.href = "cart.html";
});

document.getElementById('user').addEventListener('click', function() {
    window.location.href = "us.html";
});