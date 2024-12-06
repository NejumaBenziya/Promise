
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}


async function testFetchData() {
  try {
    const data = await fetchData();
    console.log(data); 
  } catch (error) {
    console.error(error); 
  }
}


testFetchData();
