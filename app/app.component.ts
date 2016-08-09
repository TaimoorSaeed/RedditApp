// import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { ArticleComponent , Article} from './app.articlecomponent';



@Component({
  selector: 'reddit',
  directives: [ArticleComponent],
  template:`
  
  <h1 class="heading"> Angular 2 Simple Reddit App </h1>
  <form class="ui large from segment">
    <h3 class="ui header"> Add a Link </h3>
  
    <div class="feild">
      <label for="title">Title: </label>
      <input name="title" #newtitle>
    </div>
  
    <div class="padding10 feild">
      <label for="link">Link: </label>
      <input name="link" #newlink>
    </div>
  
    <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
      Submit Link
    </button>
  </form>
  
  <div class="ui grid posts">
    <reddit-article *ngFor="let article of sortedArticles()" [article]="article">
    </reddit-article>
  </div>
  `  ,
  
})
export class RedditApp {
  
  articles: Article[]; 
  
  constructor(){
    this.articles= [
      new Article('Angular2' , 'http://www.angular.iohttps://redditapp-ea995.firebaseapp.com/',3),
      new Article('FullStack' , 'http://fullstack.io',2),
      new Article('Angular HomePage' , 'http://angular.io',1),
    ];
  }
 
  addArticle(title: HTMLInputElement,  link: HTMLInputElement) : void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value , 0));
    title.value='';
    title.value='';
  }
  
  sortedArticles(): Article[]{
    return this.articles.sort((a: Article , b: Article) => b.votes - a.votes); 
  }
  
 }
//  bootstrap(RedditApp);
