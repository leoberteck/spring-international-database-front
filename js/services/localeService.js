angular.module("i18n").service("localeService", function ($http, $rootScope, localeChangeEvent, baseUrl) {
    
    var LocaleService = function(){
        var _this = this;
        var _locale = 1033;
        
        this.getLocale = function(){
            return _locale
        }   
        
        this.setLocale = function(locale){
            _locale = locale
            $rootScope.$broadcast(localeChangeEvent, _locale)
        }

        this.findAll = function(){
            return $http.get(baseUrl + "/locales", { headers : { 'locale' : _this.getLocale() } })
        }
    }
    return new LocaleService()
});