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
    const alpha = await apiAlphaClient().catch(e => {
      throw new Error("API Alpha is failed", { cause: e });
    });

    const bravo = await apiBravoClient(alpha).catch(e => {
      throw new Error("API Bravo is failed", { cause: e });
    });

    return bravo;
  } catch (e) {
    console.error(e);
  }
}

console.log(await app());
