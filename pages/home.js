function mostrarInput() {
    let inputCollapse = document.getElementById('input-collapse')
    inputCollapse.classList.toggle('d-none')
}


document.addEventListener('DOMContentLoaded', function() {
  // 1. Botão de fechar o modal
  const btnFecharModal = document.getElementById('btn-fechar-modal');
  if (btnFecharModal) {
    btnFecharModal.addEventListener('click', function() {
      // Método 1: Usando jQuery (se estiver disponível)
      if (typeof $ !== 'undefined') {
        $('#navbarNav').collapse('hide');
      } 
      // Método 2: Usando DOM puro
      else {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
          navbarToggler.click();
        }
      }
    });
  }

//   // 2. Função para mostrar/esconder input de pesquisa
//   window.mostrarInput = function() {
//     const inputCollapse = document.getElementById('input-collapse');
//     if (inputCollapse) {
//       if (inputCollapse.classList.contains('d-none')) {
//         inputCollapse.classList.remove('d-none');
//         inputCollapse.classList.add('d-flex');
//       } else {
//         inputCollapse.classList.add('d-none');
//         inputCollapse.classList.remove('d-flex');
//       }
//     }
//   };

  // 3. Fechar o menu ao clicar em qualquer item de navegação
  const navItems = document.querySelectorAll('.navbar-nav .nav-item a');
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Método 1: Usando jQuery
      if (typeof $ !== 'undefined') {
        $('#navbarNav').collapse('hide');
      } 
      // Método 2: Usando DOM puro
      else {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
          navbarToggler.click();
        }
      }
    });
  });
});

// Adicione este código ao seu script existente

// Remover foco do botão imediatamente após o clique
// const btnFecharModal = document.getElementById('btn-fechar-modal');
// if (btnFecharModal) {
//   btnFecharModal.addEventListener('click', function() {
//     // Código existente para fechar o modal...
    
//     // Adicione estas linhas para remover foco
//     this.blur();  // Remove o foco do botão
//     document.activeElement.blur(); // Remove o foco de qualquer elemento ativo
    
//   });
// }

