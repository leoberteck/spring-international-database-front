angular.module("i18n").service("languageService", function () {
 	var translations = {
        _1033 : { 
            id              : "Code"
            , espacamento   : "Spacing"
            , icone         : "Icon"
            , largura       : "Width"
            , comprimento   : "Length"
            , capacidade    : "Capacity"
            , descricao     : "Description"
            , selecione     : "Select one:"
        }
        , _1046 : {
            id              : "Código"
            , espacamento   : "Espaçamento"
            , icone         : "Ícone"
            , largura       : "Largura"
            , comprimento   : "Comprimento"
            , capacidade    : "Capacidade"
            , descricao     : "Descrição"
            , selecione     : "Selecione um:"
         }
        , _58378 : {
            id              : "Código"
            , espacamento   : "Separación"
            , icone         : "Icono"
            , largura       : "Ancho"
            , comprimento   : "Largo"
            , capacidade    : "Capacidad"
            , descricao     : "Descripción"
            , selecione     : "Seleccione uno:"
         }
    }

	return {
		getWord : function(locale, word, def) {
            def = def || word
            return (translations["_" + locale] || { })[word] || def
        }
	};
});