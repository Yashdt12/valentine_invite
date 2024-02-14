const buttons = document.querySelectorAll('button');
const heading = document.querySelector('h1');

for (let button of buttons) {
  button.addEventListener('click', () => {
    const text = button.textContent;
    if (text === 'No') button.textContent = 'Yes😤';
    else {
      for (let btn of buttons) {
        btn.classList.add('invisible');
      }
      heading.textContent = 'Yayy 🎉🎊';
    }
  });
}