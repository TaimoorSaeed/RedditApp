// import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template:`
  <form class="ui large from segment">
    <h3 class="ui header"> Add a Link </h3>
    
    <div class="feild">
      <label for="title">Title: </label>
      <input name="title">
      </div>
      
      <div class="feild">
        <label for="link">Link: </label>
        <input name="link">
        </div>
     </form>
  `  
})
export class RedditApp {
  
  constructor(){
    
  }
 
 }
//  bootstrap(RedditApp);
