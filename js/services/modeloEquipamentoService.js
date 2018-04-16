angular.module("i18n").service("modeloEquipamentoService", function ($http, localeService, baseUrl) {
    return {
        findAll : function(){
            return $http.get(baseUrl + "/modeloEquipamentos", { headers : { 'locale' : localeService.getLocale() } })
        }
        , findById : function(id){
            return $http.get(baseUrl + "/modeloEquipamentos/" + id, { headers : { 'locale' : localeService.getLocale() } })
        }
        , save : function(entity){
            return $http.post(baseUrl + "/modeloEquipamentos", entity, { headers : { 'locale' : localeService.getLocale() } })
        }
        , delete : function(id) {
            return $http.delete(baseUrl + "/modeloEquipamentos/" + id, { headers : { 'locale' : localeService.getLocale() } })
        }
    }
});