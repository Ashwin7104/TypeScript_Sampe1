var App;
(function (App) {
    var Config = (function () {
        function Config() {
        }
        Config.manageQueryStringParameter = function (paramToRetrieve) {
            var params = document.URL.split("?")[1].split("&");
            var strParams = "";
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == paramToRetrieve)
                    return singleParam[1];
            }
        };
        Config.loadConfig = function () {
            Config.appWebUrl = decodeURIComponent(this.manageQueryStringParameter("SPAppWebUrl"));
            Config.hostUrl = decodeURIComponent(this.manageQueryStringParameter("SPHostUrl"));
        };
        Config.$inject = ["$stateProvider", "$urlRouterProvider"];
        return Config;
    }());
    App.Config = Config;
    var main = angular.module('projectApp', ['ui.router']);
    App.Config.loadConfig();
    main.controller('ProjectCtrl', App.Controller.ProjectCtrl);
    main.service('ProjectService', ['$http', '$q', App.Service.ProjectService]);
})(App || (App = {}));
//# sourceMappingURL=App.js.map