module App.Controller {

    export class ProjectCtrl {
        public projects: Array<App.Model.Project>
        public project: App.Model.Project;

        static $inject = ['ProjectService'];
        constructor(private projectService: App.Service.ProjectService) {
            this.project = new App.Model.Project();
        }
        public getProjects(): void {
            this.projectService.getProjects().then(data => {
                this.projects = data.data.d.results;
                console.log(this.projects);
            }).catch(e => {
                console.log( e);
            });
        }

        public addProject(): void {
            this.projectService.addProject(this.project).then(data => {
                alert('Added');
                this.getProjects();
                this.project = new App.Model.Project();
            }).catch(e => {
                console.log(e);
            });
        }
    }
}