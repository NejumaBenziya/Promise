function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
                reject("Failed to fetch data");
            
        }, 2000);
    });
}

fetchData()
    .then((message) => {
        console.log(message);  
    })
    .catch((error) => {
        console.error(error);  
    });