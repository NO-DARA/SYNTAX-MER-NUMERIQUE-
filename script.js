function runCode() {
  const code = document.getElementById('code').value;
  const output = document.getElementById('output');

  try {
    const result = eval(code);
    output.textContent = result !== undefined ? result : '✅ Code exécuté';
  } catch (err) {
    output.textContent = '❌ Erreur : ' + err.message;
  }
}