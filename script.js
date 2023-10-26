document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.one');
    const progressBar = document.querySelector('.Progress-bar');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        progressBar.style.animation = 'emptyProgressBar 30s linear forwards';
      } else {
        progressBar.style.animation = 'rainbowAnimation 3s linear infinite';
      }
    });
  
    progressBar.addEventListener('animationend', function () {
      if (progressBar.style.animationName === 'emptyProgressBar') {
        checkbox.checked = true; 
      }
    });
  })