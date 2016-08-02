"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { bootstrap } from '@angular/platform-browser-dynamic';
var core_1 = require('@angular/core');
var app_articlecomponent_1 = require('./app.articlecomponent');
var RedditApp = (function () {
    function RedditApp() {
        this.articles = [
            new app_articlecomponent_1.Article('Angular2', 'http://angular.io', 3),
            new app_articlecomponent_1.Article('FullStack', 'http://fullstack.io', 2),
            new app_articlecomponent_1.Article('Angular HomePage', 'http://angular.io', 1),
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        console.log("Adding article title: " + title.value + " and link: " + link.value);
        this.articles.push(new app_articlecomponent_1.Article(title.value, link.value, 0));
        title.value = '';
        title.value = '';
    };
    RedditApp.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditApp = __decorate([
        core_1.Component({
            selector: 'reddit',
            directives: [app_articlecomponent_1.ArticleComponent],
            template: "\n  \n  <h1 class=\"heading\"> Angular 2 Simple Reddit App </h1>\n  <form class=\"ui large from segment\">\n    <h3 class=\"ui header\"> Add a Link </h3>\n  \n    <div class=\"feild\">\n      <label for=\"title\">Title: </label>\n      <input name=\"title\" #newtitle>\n    </div>\n  \n    <div class=\"padding10 feild\">\n      <label for=\"link\">Link: </label>\n      <input name=\"link\" #newlink>\n    </div>\n  \n    <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">\n      Submit Link\n    </button>\n  </form>\n  \n  <div class=\"ui grid posts\">\n    <reddit-article *ngFor=\"let foobar of articles\" [article]=\"foobar\">\n    </reddit-article>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
}());
exports.RedditApp = RedditApp;
//  bootstrap(RedditApp);
//# sourceMappingURL=app.component.js.map