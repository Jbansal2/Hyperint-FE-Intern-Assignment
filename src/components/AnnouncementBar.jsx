import React from 'react'

const AnnouncementBar = () => {
    const message = [
        "Payday offer: 50% off sitewide ends in 72 hrs.",
        "7 days easy return.",
        "Cash On Delivery Available.",
        "Free Shipping.",
        "Additional Discount on Online Payment. Check Coupon Codes on Checkout Page."
    ];

    return (
        <div>
            <marquee
                className="bg-black text-white py-6 text-lg font-bold "
                scrollamount="15"
                onMouseOver={(e) => e.target.stop()}
                onMouseOut={(e) => e.target.start()}
            >
                {message.join("           │           ")} 
            </marquee>
        </div>
    );
};

export default AnnouncementBar;
