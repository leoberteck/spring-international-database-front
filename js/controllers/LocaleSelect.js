angular.module("i18n").controller("LocaleSelect", function ($scope, languageService, localeService, localeChangeEvent) {
    let _this = this || {}
    
    $scope.options = {
        locale : {
            lcid : localeService.getLocale()
        }
    }

    _this.updateLocales = function() {
        localeService.findAll().then(function(data){
            $scope.locales = data.data
        })
    }

    $scope.onLocaleChange =function(){
        if($scope.options.locale){
            localeService.setLocale($scope.options.locale.lcid)
        }
    }

    $scope.$on(localeChangeEvent, function(locale) {
        _this.updateLocales()
        //$scope.$apply();    
    })

    _this.updateLocales()
});