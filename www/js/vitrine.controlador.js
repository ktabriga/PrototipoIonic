(function () {
  angular
    .module('starter')
    .controller('vitrine', Controlador);

  Controlador.$inject = ['$http'];

  function Controlador($http) {
    var vm = this;

    buscarProdutos();
    function buscarProdutos() {
      $http.get('./json/produtos.json')
        .then(function (resultado) {
          vm.produtos = resultado.data;
          console.log(vm.produtos.length);
        });
    }
  }
})();