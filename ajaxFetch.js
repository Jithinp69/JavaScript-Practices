fetch("https://api.covid19api.com/summary")
  .then((fetchRespo) => {
    // console.log(fetchRespo);
    return fetchRespo.json();
    console.log(fetchRespo);
  })
  .then((fetchData) => {
    console.log(fetchData);
    // console.log(fetchData.Countries[0].TotalDeaths);
  })
  .catch((err) => {
    console.log("Failed to load Data");
  });
