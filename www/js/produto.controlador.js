(function () {
  angular
    .module('starter')
    .controller('produto', Controlador);

  Controlador.$inject = ['$http', '$cordovaToast'];

  function Controlador($http, $cordovaToast) {
    var vm = this;
    vm.adicionarAoCarrinho = adicionarAoCarrinho;

    apresentarProduto();

    function apresentarProduto() {
      try {
        $http.get("./json/produtos.json")
          .then(function (resultado) {
            vm.produto = resultado.data[0];
          });
      } catch (e) {
        alert(e.message);
      }

    }

    function adicionarAoCarrinho() {
      $cordovaToast.show('Adicionado ao carrinho', 'short', 'center');
    }
  }

})();