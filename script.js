const socialIcons = document.querySelectorAll('.social-icons');

socialIcons.forEach(icon => {
  const originalSrc = icon.src;

  icon.addEventListener('mouseover', function() {
    const srcArray = originalSrc.split('.');
    const extension = srcArray.pop();
    const baseName = srcArray.join('.');
    icon.src = `${baseName}_1.${extension}`;
  });

  icon.addEventListener('mouseout', function() {
    icon.src = originalSrc;
  });
});