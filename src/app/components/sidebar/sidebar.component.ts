import { Component, OnInit } from "@angular/core";
import { TestData } from "./../../test-data";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  ngOnInit() {
    this.getMovies;
    console.log("vvvv", this.getMovies);
  }
  getMovies() {
    return TestData;
  }
}
