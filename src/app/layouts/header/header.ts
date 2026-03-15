import { Component } from "@angular/core";
import {HeaderVideo} from "@/app/layouts/header/header.video";
import {HeaderHero} from "@/app/layouts/header/header.hero";

@Component({
  selector: 'app-header',
  imports: [HeaderVideo, HeaderHero],
  templateUrl: './header.html',
})

export class Header {
}
