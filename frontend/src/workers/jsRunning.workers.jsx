self.onmessage = (e) => {
  const code = e.data;

  const logs = [];

  const fakeConsole = {
    log: (...args) => logs.push(args.join(" ")),
    error: (...args) => logs.push("Error: " + args.join(" "))
  };

  try {
    const fn = new Function("console", code);
    fn(fakeConsole);
    self.postMessage({ type: "success", logs });
  } catch (err) {
    self.postMessage({ type: "error", logs: [err.message] });
  }
};
