let inputValue = document.getElementById("input-field");
let discountContainer = document.getElementById("discount-container");
let discountPriceContainer = document.getElementById("discount-price-container");
let discountText = document.createElement('p');
let discountPrice = document.createElement('p');
discountText = 'Discount Given';

function applyCode(){
    if(inputValue.value === 'NEW15'){
        addAttribute('input-field', 'hidden');
        addAttribute('apply-btn', 'hidden');
        let discountTicketPrice = ticketPrice-(ticketPrice * 0.15);
        getElementById('grand-total', discountTicketPrice);
        discountContainer.append(discountText)
        discountPriceContainer.append(`BDT ${ticketPrice * 0.15}`)
}
    else if(inputValue.value === 'Couple 20'){
        addAttribute('input-field', 'hidden');
        addAttribute('apply-btn', 'hidden');
        let discountTicketPrice = ticketPrice-(ticketPrice * 0.20);
        getElementById('grand-total', discountTicketPrice);
        discountContainer.append(discountText)
        discountPriceContainer.append(`BDT ${ticketPrice * 0.20}`)
    }
    else{
        alert('Please provide a valid Coupon Code. Coupon Codes are NEW15 and Couple 20')
    }
}
