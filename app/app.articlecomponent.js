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
var core_1 = require('@angular/core');
var Article = (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    Article.prototype.domain = function () {
        try {
            var link = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    Article.prototype.voteUp = function () {
        this.votes += 1;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
    };
    return Article;
}());
exports.Article = Article;
var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'reddit-article',
            inputs: ['article'],
            host: {
                class: 'row'
            },
            template: "\n\t<div class=\"four wide column center aligned votes\">\n\t<div class=\"ui statistic\">\n\t\t<div class=\"value\">\n\t\t\t{{article.votes}}\n\t\t</div>\n\t\t<div class=\"label\">\n\t\t\tPoints\n\t\t</div>\n\t</div>\n</div>\n<div class=\"tweleve wide column\">\n\t<a class=\"ui large header\" href=\"{{ article.link }}\">\n\t\t{{ article.title }}\n\t\t</a>\n\t<div class=\"meta\">({{ article.domain() }})</div>\n\t<ul>\n\t\t<li>\n\t\t\t<a href (click)=\"voteUp()\">\n\t\t\t<i class=\"zmdi zmdi-long-arrow-up\"></i>\n\t\t\t\tupvote\n\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href (click)=\"voteDown()\">\n\t\t\t\t<i class=\"zmdi zmdi-long-arrow-down\"></i>\n\t\t\t\t\tdownvote\n\t\t\t\t</a>\n\t\t\t</li>\n\t</ul>\n</div>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=app.articlecomponent.js.map