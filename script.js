// Script to manage quantity and total price
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: "Ice Tea Lemon Klasik", price: 35000 },
        { name: "Ice Tea Peach", price: 40000 },
        { name: "Mojito Teh Hijau", price: 45000 },
        { name: "Berry Ice Tea", price: 50000 },
        { name: "Matcha Ice Tea", price: 55000 },
        { name: "Tropical Ice Tea", price: 45000 },
    ];

    let quantities = [0, 0, 0];

    const updateTotal = () => {
        const totalContainer = document.getElementById('total-container');
        let total = quantities.reduce((sum, qty, idx) => sum + qty * menuItems[idx].price, 0);
        totalContainer.textContent = `Total: Rp${total.toLocaleString('id-ID')}`;
    };

    const setupButtons = () => {
        const buttonsMinus = document.querySelectorAll('.btn-minus');
        const buttonsPlus = document.querySelectorAll('.btn-plus');
        const quantityDisplays = document.querySelectorAll('.quantity');

        buttonsMinus.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                if (quantities[idx] > 0) {
                    quantities[idx]--;
                    quantityDisplays[idx].textContent = quantities[idx];
                    updateTotal();
                }
            });
        });

        buttonsPlus.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                quantities[idx]++;
                quantityDisplays[idx].textContent = quantities[idx];
                updateTotal();
            });
        });
    };

    const setupCheckout = () => {
        const checkoutButton = document.querySelector('.btn-checkout');
        checkoutButton.addEventListener('click', () => {
            alert("Terima kasih telah memesan! Total pesanan Anda adalah Rp" + 
                quantities.reduce((sum, qty, idx) => sum + qty * menuItems[idx].price, 0).toLocaleString('id-ID'));
        });
    };

    setupButtons();
    setupCheckout();
    updateTotal();
});
