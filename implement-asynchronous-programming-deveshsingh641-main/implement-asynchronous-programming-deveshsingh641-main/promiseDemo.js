
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Devesh Singh logged in");
      resolve();
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data retrieved");
      resolve("2300320130088");
    }, 1500);
  });
}

function displayData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Displaying Data:", data);
      resolve();
    }, 800);
  });
}

function conductTest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Test conducted");
      resolve();
    }, 2000);
  });
}

function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Devesh Singh logged out");
      resolve();
    }, 1000);
  });
}

async function main() {
  await login();
  const data = await getData();
  await displayData(data);
  await conductTest();
  await logout();
}

main();