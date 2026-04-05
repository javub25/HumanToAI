import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-button-text',
  templateUrl: './button.text.html',
  styleUrl: './button.text.css'
})

export class ButtonText 
{
 @Input() buttonText = this.getButtonText();

  getButtonText() 
  {
      const buttonText: string = "";
      return buttonText;
  }
}