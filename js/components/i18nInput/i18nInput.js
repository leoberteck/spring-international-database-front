angular.module('i18n').component('i18nInput', {
        templateUrl: 'js/components/i18nInput/i18nInput.html',
        controller: function($scope) {
            let _this = this
            $scope.selectedIndex = 0
            $scope.onLocaleClick = function(locale) {
                _this.ngLocales.forEach(element => {
                    element.selected = false
                });
                locale.selected = true;
                var index = _this.ngLocales.indexOf(locale)
                _this.ngI18nObj.traducaoList[index] = _this.ngI18nObj.traducaoList[index] || { }
                _this.ngI18nObj.traducaoList[index].cdLocale = { lcid : locale.lcid }
                $scope.selectedIndex = index
            }
        },
        controllerAs: '$ctrl',
        bindings: {
            ngId: '@'
            , ngI18nObj : '='
            , ngPlaceholder: '@'
            , ngLocales: '<'        
        }
    })