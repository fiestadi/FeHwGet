function getCompanyInfo() {
   const companyName = document.getElementById('companyNameInput').value;
   const companyContainer = document.getElementById('companyInfo');
//otchishaem predidushij rezultat
   companyContainer.innerHTML = '';
   if (!companyName) {
    companyContainer.textContent = 'Invalid data';
    return;
}



   // Формируем URL с query параметром
   const Url = `https://jsonplaceholder.typicode.com/users?company.name=${encodeURIComponent(companyName)}`;

  // yapros get na server
   fetch(Url)
       .then(response => response.json())
       .then(data => {
         // proverka dannich
           if (data.length === 0) {
            companyContainer.textContent =  ('Invalid data');
           } else {
            //info o kompanii
               const companyData = data[0];
               const companyName = companyData.company.name;
            //otobrazhat   "catchPhrase"       
               const companyCatchPhrase = companyData.company.catchPhrase;
               // otobrazhat"bs": 
                        const companyBs = companyData.company.bs;

                        companyContainer.innerHTML = `
                            <h2>${companyName}</h2>
                            <br>

                            <h4> ${companyCatchPhrase}</h4>
                            <h4>${companyBs}</h4>
                        `;
           }
       })
      
}