export const getContainer = () => {
  const id = '_rk_site_coolMode';
  const existingContainer = document.getElementById(id);

  if (existingContainer) return existingContainer;

  const container = document.createElement('div');
  container.setAttribute('id', id);
  container.setAttribute(
    'style',
    ['overflow:hidden', 'position:fixed', 'height:100%', 'top:0', 'left:0', 'right:0', 'bottom:0', 'pointer-events:none', 'z-index:777777777'].join(
      ';'
    )
  );

  document.body.appendChild(container);

  return container;
};
