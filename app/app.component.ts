// import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { ArticleComponent } from './app.articlecomponent';


@Component({
  selector: 'reddit',
  template:`
  <form class="ui large from segment">
    <h3 class="ui header"> Add a Link </h3>
    
    <div class="feild">
      <label for="title">Title: </label>
      <input name="title" #newtitle>
      </div>
      
      <div class="feild">
        <label for="link">Link: </label>
        <input name="link" #newlink>
        </div>
        
        <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
          Submit Link
          </button>
     </form>

     <div class= "ui grid posts">
      <reddit-article></reddit-article>
      </div>
  `  ,
  directives: [ArticleComponent]
})
export class RedditApp {
  constructor(){
  }
 
  addArticle(title: HTMLInputElement,  link: HTMLInputElement) : void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  }
  
 }
//  bootstrap(RedditApp);
