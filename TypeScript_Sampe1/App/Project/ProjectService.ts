module App.Service {
    export class ProjectService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {
        }

        public getProjects(): ng.IPromise<any> {
            var url = App.Config.appWebUrl + "/_api/SP.AppContextSite(@target)" +
                "/web/lists/getbytitle('Projects')/items?$select=Title,ID,Client&" +
                "@target='" + App.Config.hostUrl + "'";
            console.log(url);
            return this.$http({
                method: 'GET',
                url: url,
                headers: { "Accept": "application/json; odata=verbose" }
            });
        }

        public addProject(project: App.Model.Project): any {
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
        }
    }
}