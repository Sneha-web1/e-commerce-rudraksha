const serviceData = [
    {
      id: 1,
      url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/older-ral.jpg",
      title: "Elder Relationships",
      price: "11,000",
      description:
        "Respect your elders always; that is what we learnt from our childhood, but there are many more factors to help you in your relationship.",
      btn: "Book Now",
    },
    {
      id: 2,
      url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/health.jpg",
      title: "Health Consultancy",
      price: "11,000",
      description:
        "Health is the real wealth !! Save yourself from Diseases, Accidents and take solutions from Acharya Ji.",
      btn: "Book Now",
    },
    {
      id: 3,
      url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/ExtraMaritalsAffair.jpg",
      title: "Extra Marital Affair",
      price: "11,000",
      description:
        "This situation could come in any one’s life with or without any reason, How you react and handle these situation is the most important thing to guide your relation’s future.",
      btn: "Book Now",
    },
    {
      id: 4,
      url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/marriage.jpg",
      title: "Marriage Compatibility Report",
      price: "11,000",
      description:
        "The fear of unknown is the biggest fear and when it comes to your life partner whom you don’t know is the biggest challenge. Take informed decisions for your marriage and get answer to questions like, When will you get married? Who will be your life partner? Will it be love or arrange?",
      btn: "Book Now",
    },
    {
        id: 5,
        url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/lifetime.jpg",
        title: "Life Time Guideline Report",
        price: "11,000",
        description:
          "Life is made of so many small steps you take, Get Life time guideline report to measure your step results and go to gain maximum happiness in your life by achieving your Life Goals.",
        btn: "Book Now",
      },
      {
        id: 6,
        url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/love-ana.jpg",
        title: "Love Analysis",
        price: "11,000",
        description:
          "Compatibility with your Lover gives you strength and make this world a happiest place to live, Get analysis of your relationship and intensity of HIS/HER Love.",
        btn: "Book Now",
      },
      {
        id: 7,
        url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/tantra.jpg",
        title: "Tantra Analysis Report",
        price: "11,000",
        description:
          "How to manages those out of world powers and to keep your near and dear ones safe. Know more about the solutions for difficulties you are facing in your life.",
        btn: "Book Now",
      },
      {
        id: 8,
        url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/vaastu.jpg",
        title: "Vastu Consultancy",
        price: "11,000",
        description:
          "Vastu Consultancy of commercial and residential building architecture, Vastu Shastra creates an ideal home for our living which generates positive vibrations providing us peaceful and ideal living so that we can achieve everything in our life. Are they suiting you? Are they the reason of your losses?",
        btn: "Book Now",
      },
      {
        id: 9,
        url: "https://www.lovewithastrology.com/wp-content/uploads/2021/08/career1.jpg",
        title: "Business And Professional Report",
        price: "11,000",
        description:
          "What business to do? How much your investment should be to gain maximum profits? Get answers for all of these questions.",
        btn: "Book Now",
      },
  ];
  
  const data = serviceData.map((item) => {
    return `
      <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
        <div class="card h-100">
          <img src="${item.url}" class=" img-fluid" alt="${item.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text mt-auto"><strong>Price:</strong> ${item.price}</p>
            <a href="#url" class="btnBookNow mt-3">${item.btn}</a>
          </div>
        </div>
      </div>
    `;
  });
  
  document.getElementById("servicesId").innerHTML = `<div class="row">${data.join("")}</div>`;