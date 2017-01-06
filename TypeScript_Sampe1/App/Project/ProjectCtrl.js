var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var ProjectCtrl = (function () {
            function ProjectCtrl(projectService) {
                this.projectService = projectService;
                this.project = new App.Model.Project();
            }
            ProjectCtrl.prototype.getProjects = function () {
                var _this = this;
                this.projectService.getProjects().then(function (data) {
                    _this.projects = data.data.d.results;
                    console.log(_this.projects);
                }).catch(function (e) {
                    console.log(e);
                });
            };
            ProjectCtrl.prototype.addProject = function () {
                var _this = this;
                this.projectService.addProject(this.project).then(function (data) {
                    alert('Added');
                    _this.getProjects();
                    _this.project = new App.Model.Project();
                }).catch(function (e) {
                    console.log(e);
                });
            };
            ProjectCtrl.$inject = ['ProjectService'];
            return ProjectCtrl;
        }());
        Controller.ProjectCtrl = ProjectCtrl;
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
//# sourceMappingURL=ProjectCtrl.js.map