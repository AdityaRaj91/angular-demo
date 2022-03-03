import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Search Demo';
  searchText;
  heroes: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      //.get('https://jsonplaceholder.typicode.com/users')
      .get(
        'https://alpha-functionalapp.azurewebsites.net/api/httptriggergetmetadata'
      )
      .subscribe((users) => {
        this.heroes = users;
        this.heroes = [...this.heroes];
        console.log(JSON.stringify(users));
      });
  }
}
