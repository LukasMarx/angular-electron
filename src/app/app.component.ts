import { Component } from "@angular/core";
import { FileService } from "./file.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-electron";

  constructor(private fileService: FileService) {
    this.fileService.getFiles().then(console.log);
  }
}
