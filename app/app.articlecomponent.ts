import { Component } from '@angular/core'

export class Article {
	title: string;
	link: string;
	votes: number;
	
	constructor(title: string, link: string, votes?: number){
		this.title= title;
		this.link= link;
		this.votes= votes || 0;
	}
	
	domain(): string {
		try {
			const link: string = this.link.split('//')[1];
			return link.split('/')[0];
		} catch(err){
			return null;
		}
	}
		
	voteUp(): void{
		this.votes += 1;
	}
	
	voteDown(): void {
		this.votes -= 1;
	}
}

@Component({
	selector: 'reddit-article',
	inputs: ['article'],
	host:{
		class: 'row'
	},
	template:`
	<div class="four wide column center aligned votes">
	<div class="ui statistic">
		<div class="value">
			{{article.votes}}
		</div>
		<div class="label">
			Points
		</div>
	</div>
</div>
<div class="tweleve wide column">
	<a class="ui large header" href="{{ article.link }}">
		{{ article.title }}
		</a>
	<div class="meta">({{ article.domain() }})</div>
	<ul>
		<li>
			<a href (click)="voteUp()">
			<i class="zmdi zmdi-long-arrow-up"></i>
				upvote
			</a>
			</li>
			<li>
				<a href (click)="voteDown()">
				<i class="zmdi zmdi-long-arrow-down"></i>
					downvote
				</a>
			</li>
	</ul>
</div>
		`
})
export class ArticleComponent {
	article: Article;
	
	voteUp(): boolean { 
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;
	}
}
