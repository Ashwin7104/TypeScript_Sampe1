module App {

    export class Config {
        private static manageQueryStringParameter(paramToRetrieve: string): any {
            var params =
                document.URL.split("?")[1].split("&");
            var strParams = "";
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == paramToRetrieve)
                    return singleParam[1];
            }
        }

        public static appWebUrl: string;
        public static hostUrl: string;

        static $inject = ["$stateProvider", "$urlRouterProvider"];

        public static loadConfig(): void {
            Config.appWebUrl = decodeURIComponent(this.manageQueryStringParameter("SPAppWebUrl"));
            Config.hostUrl = decodeURIComponent(this.manageQueryStringParameter("SPHostUrl"));
        }

    }

    var main = angular.module('projectApp', ['ui.router']);
    App.Config.loadConfig();
    main.controller('ProjectCtrl',App.Controller.ProjectCtrl);
    main.service('ProjectService', ['$http', '$q', App.Service.ProjectService]);
}