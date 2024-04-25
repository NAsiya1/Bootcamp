// Define the information
const name = "Nombulelo Asiya";
const bio = "Nombulelo Asiya, publically known as Lelo, is a chairwoman, entrepreneur, and social justice warrior from the Northern Cape, who is seeking a Sexology degree to change the culture of sex through clinical educational approaches. As a survivor of abuse, she believes that knowledge empowers people to make informed decisions.";
const imageUrl = "./Screenshot_20240406-152045.jpg";
const contactInfo = {
  cell: "081 509 5448",
  email: "nombuleloasiyana@gmail.com"
};
const address = {
  street: "32 Dalham Rd",
  city: "Klisserville",
  province: "Kimberley",
  postalCode: "8301"
};

// Include the information in HTML
const homeContent = document.querySelector(".home-content");
homeContent.innerHTML = `
  <p><b>${name}</b>
  <br>
  <b>Bio</b> ${bio}</p>
  <img class="home-img" src="${imageUrl}" height="100" width="100"></img>
`;

const contact = document.querySelector(".contact-info");
contact.innerHTML = `
  <h5>Contact Info</h5>
  <p>
    Cell: ${contactInfo.cell}
    Email: ${contactInfo.email}
  </p>
`;

const homeAddress = document.querySelector(".home-address-content");
homeAddress.innerHTML = `
  <h5>Address</h5>
  <p>
    ${address.street}
    ${address.city}
    ${address.province}
    ${address.postalCode}
  </p>
`;

// Display the information
console.log(name);
console.log(bio);
console.log(imageUrl);
console.log(contactInfo);
console.log(address);
