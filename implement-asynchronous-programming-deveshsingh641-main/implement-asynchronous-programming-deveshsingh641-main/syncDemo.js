function login() {
  console.log("Devesh Singh logged in");
}

function getData() {
  console.log("Data retrieved");
  return "2300320130088";
}

function displayData(data) {
  console.log("Displaying Data:", data);
}

function conductTest() {
  console.log("Test conducted");
}

function logout() {
  console.log("Devesh Singh logged out");
}


function main() {
  login();
  const data = getData();
  displayData(data);
  conductTest();
  logout();
}

main();
