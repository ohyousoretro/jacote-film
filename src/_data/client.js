module.exports = {
    name: "Jacote Film",
    email: "jacotefilm@gmail.com",
    phoneForTel: "586-569-5148",
    phoneFormatted: "(586) 569-6148",
    address: {
        lineOne: "260 Vinewood",
        lineTwo: "Ste B1635",
        city: "Detroit",
        state: "MI",
        zip: "48126",
        country: "US",
        mapLink: "https://maps.app.goo.gl/eQsey5JrGo7iCu2n6",
    },
    socials: {
        facebook: "https://www.facebook.com/Jacotefilm",
        instagram: "https://www.instagram.com/jacotefilm/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.jacotefilm.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
