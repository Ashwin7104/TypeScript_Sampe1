var App;
(function (App) {
    var Service;
    (function (Service) {
        var ProjectService = (function () {
            function ProjectService($http) {
                this.$http = $http;
            }
            ProjectService.prototype.getProjects = function () {
                var url = App.Config.appWebUrl + "/_api/SP.AppContextSite(@target)" +
                    "/web/lists/getbytitle('Projects')/items?$select=Title,ID,Client&" +
                    "@target='" + App.Config.hostUrl + "'";
                console.log(url);
                return this.$http({
                    method: 'GET',
                    url: url,
                    headers: { "Accept": "application/json; odata=verbose" }
                });
            };
            ProjectService.prototype.addProject = function (project) {
                console.log($("#__REQUESTDIGEST").val());
                var data = {
                    __metadata: { 'type': 'SP.Data.ProjectsListItem' },
                    Title: project.Title,
                    Client: project.Client
                };
                var url = App.Config.appWebUrl + "/_api/SP.AppContextSite(@target)" +
                    "/web/lists/getbytitle('Projects')/items?" + "@target='" + App.Config.hostUrl + "'";
                return this.$http({
                    url: url,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;odata=verbose",
                        "Accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    },
                    data: data
                });
            };
            ProjectService.$inject = ['$http'];
            return ProjectService;
        }());
        Service.ProjectService = ProjectService;
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
//# sourceMappingURL=ProjectService.js.map