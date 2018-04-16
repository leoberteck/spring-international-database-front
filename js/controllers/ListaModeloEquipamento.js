angular.module("i18n").controller("ListaModeloEquipamento", function ($scope
    , localeService, languageService, modeloEquipamentoService
    , modelos, locales, localeChangeEvent, i18nService) {
    var _getWord = function(word){
        return languageService.getWord(localeService.getLocale(), word)
    }
    $scope.getWord = _getWord
    $scope.modelos = modelos.data
    $scope.locales = locales.data

    $scope.onModeloClick = function(modelo){
        $scope.modelos.forEach(element => {
            element.selected = false
        });
        modelo.selected = true
        $scope.selected = modelo
        var promisse
        if(modelo.traducao){
            promisse = new Promise(function(resolve, reject){ resolve({ data: modelo.traducao }) })
        }else if(modelo.cdDescModeloEquipamento){
            promisse = i18nService.findById(modelo.cdDescModeloEquipamento)
        } else {
            promisse = i18nService.create({ i18N : null, traducaoList : null })
        }
        promisse.then(function(data){
            modelo.traducao = data.data
            modelo.traducao.traducaoList = modelo.traducao.traducaoList || []
            modelo.cdDescModeloEquipamento = modelo.traducao.i18N
        })
    }

    $scope.onSaveClick = function(modelo){
        Promise.all([
            modeloEquipamentoService.save(modelo)
            , i18nService.save(modelo.traducao)
        ]).then(function(){
            modeloEquipamentoService.findAll().then(function(data){
                $scope.modelos = data.data
            })
        })
    }

    $scope.$on(localeChangeEvent, function(locale){
        console.log(localeChangeEvent + " happened")
        modeloEquipamentoService.findAll().then(function(data){
            $scope.modelos = data.data
        })
    })
});