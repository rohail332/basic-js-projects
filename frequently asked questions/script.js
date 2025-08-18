const ALL = document.querySelectorAll('.main > div');

ALL.forEach(item => {
  const plus = item.querySelector('.pl');
  const minus = item.querySelector('.cl');
  const answer = item.querySelector('.ans');

  plus.addEventListener('click', () => {
    answer.style.display = 'block';
    plus.style.display = 'none';
    minus.style.display = 'inline';
  });

  minus.addEventListener('click', () => {
    answer.style.display = 'none';
    plus.style.display = 'inline';
    minus.style.display = 'none';
  });
});
