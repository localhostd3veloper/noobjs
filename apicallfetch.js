const API_URL = "https://api.gib.com/users/localhostd3voper";

async function getData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error.message);
  }
}
getData();

const displayData = (data) => {
  console.log(data);
};
