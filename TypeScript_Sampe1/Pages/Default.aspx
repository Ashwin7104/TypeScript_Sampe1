<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-3.1.1.min.js"></script>
     <script src="../Scripts/angular.js"></script>
    <script src="../Scripts/AngularUI/ui-router.js"></script>
   
     <script src="../App/Project/Project.js"></script>
     <script src="../App/Project/ProjectService.js"></script>
     <script src="../App/Project/ProjectCtrl.js"></script>
     <script src="../App/App.js"></script>
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App_1.js"></script>
    <script type="text/javascript">

    $('form').keypress(function (evt) { return !(evt.which == 13 && evt.target.type != 'textarea'); }); $('form input[type="submit"]').attr('tabIndex', -1); // this prevents submit also by spacebar (keyCode==32) 
</script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
 
     <h1>Project </h1>
    <div ng-app="projectApp">
        <div ng-controller="ProjectCtrl as vm">
            <div style="float: left; border: 1px solid gray;">
                <table ng-init="vm.getProjects()">
                    <tr>
                        <td>SNO</td>
                        <td>Project</td>
                        <td>Client</td>
                    </tr>
                    <tr ng-repeat="project in vm.projects">
                        <td>{{$index+1}}</td>
                        <td>{{project.Title}}</td>
                        <td>{{project.Client}}</td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Project</td>
                        <td>
                            <input type="text" ng-model="vm.project.Title" /></td>
                    </tr>
                    <tr>
                        <td>Client</td>
                        <td>
                            <input type="text" ng-model="vm.project.Client" /></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button ng-click="vm.addProject()" type="button">Add Project</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</asp:Content>
