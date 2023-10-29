async function apiAlphaClient() {
  if (Math.random() < 0.5) {
    throw new Error("Authorized");
  }

  return 1;
}

async function apiBravoClient(input) {
  if (Math.random() < 0.5) {
    throw new Error("Authorized");
  }

  return input + 1;
}

async function app() {
  try {
    const alpha = await apiAlphaClient();
    const bravo = await apiBravoClient(alpha);
    return bravo;
  } catch (e) {
    console.error(e);
  }
}

console.log(await app());
