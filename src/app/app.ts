import { Component, signal } from "@angular/core";
import {Header} from "@/app/layouts/header/header";
import { Section } from "./layouts/section/section";
import { Footer } from "./layouts/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Section, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('humanAI');
}
