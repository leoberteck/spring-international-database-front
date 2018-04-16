angular.module("i18n").config(function ($routeProvider) {
	$routeProvider.when("/lista", {
		templateUrl: "views/listaModeloEquipamento.html",
		controller: "ListaModeloEquipamento",
		resolve: {
			modelos: function (modeloEquipamentoService) {
				return modeloEquipamentoService.findAll();
			},
			locales: function (localeService) {
				return localeService.findAll();
			}
		}
	});
	$routeProvider.otherwise({redirectTo: "/lista"});
});