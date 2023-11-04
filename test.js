require("dotenv/config");

function test(expectedSecret) {
  const secretMatches = process.env.API_URL == expectedSecret;
  console.log(`The meaning of life is ${process.env.API_URL}`);
  console.log(`The secret does${secretMatches ? "" : " not"} match!`);
  return secretMatches;
}

test("")