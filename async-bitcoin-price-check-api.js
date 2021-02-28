//simple async api calll in vanilla js, checks price of bitcoin using public api

async function asjs() {
  let url = `	https://api.coinbase.com/v2/prices/BTC-GBP/buy`;
  return (await fetch(url)).json();
}

async function start() {
  let users;

  try {
    users = await asjs();
  } catch (e) {
    console.log(e);
  }

  console.log(`WOW! Bitcoin costs ${Math.round(users.data.amount)} quid now`);
}

start();
