import { Component, Injectable, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';

interface User {
  name: string,
  age: number
}
interface Employee {
  [key: string]: string
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private service: UserService) {

  }
  private user: User = {
    name: 'rahaf',
    age: 34
  }

  private emp: Employee = {
    name: "rahaf",
    age: "34"
  }


  printData() {
    console.log(this.user.name);

  }
  printName(name: string) {
    switch (name) {
      case 'tala':
        console.log(30)
        break;

      default:
        console.log(30)
        break;
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

}
