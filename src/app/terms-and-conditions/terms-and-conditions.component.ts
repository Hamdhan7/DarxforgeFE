import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
    imports: [
        FooterComponent
    ],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
