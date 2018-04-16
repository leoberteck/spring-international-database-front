angular.module('i18n').service('i18nService', function($http, baseUrl, localeService) {
    var I18nService = function(){
        this.findById = function(id){
            return $http.get(baseUrl + "/i18n/" + id, { headers : { 'locale' : localeService.getLocale() } })
        }
        this.create = function(entity){
            return $http.post(baseUrl + "/i18n", entity)
        }
        this.save = function(entity){
            return $http.post(baseUrl + "/i18n", entity)
        }
    }
    return new I18nService()
})