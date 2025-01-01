// الكود لإضافة العناصر إلى العربة عند الضغط
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", function () {
        let product = this;
        let title = product.querySelector(".menu-title").innerHTML;
        let price = product.querySelector(".menu-price").innerHTML;
        let imgSrc = product.querySelector(".menu-img").src;

        let newToAdd = {
            title: title,
            price: price,
            imgSrc: imgSrc
        };

        // الحصول على العربة من localStorage، إذا كانت فارغة نبدأ بمصفوفة فارغة
        let storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // إضافة المنتج إذا لم يكن مضافًا بالفعل
        if (storedItems.find(item => item.title === newToAdd.title)) {
            alert("This item is already in the cart!");
        } else {
            storedItems.push(newToAdd);
            localStorage.setItem("cartItems", JSON.stringify(storedItems));
        }
    });
});
