const toggleDark = document.querySelector('.darkmode');


//eventlistener
toggleDark.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    console.log(document.documentElement);
    document.documentElement.classList.remove('dark');
    toggleDark.src = `./images/toggle-left.svg`;
    return;
  }
  document.documentElement.classList.add('dark');
  toggleDark.src = `./images/toggle-right.svg`;
});

