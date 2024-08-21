import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { UserInputData } from './user-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Input({ required: false }) initialInvestment: number = 0;
  @Input({ required: false }) annualInvestment: number = 0;
  @Input({ required: false }) expectedReturn: number = 5;
  @Input({ required: false }) duration: number = 10;

  @Output() clickedOnCalculate = new EventEmitter<UserInputData>();

  constructor( private investmentService: InvestmentService){}

  onSubmit() {
    console.log('submitted');
    this.investmentService.calculateInvestmentResults({
        initialInvestment: this.initialInvestment,
        annualInvestment : this.annualInvestment,
        expectedReturn: this.expectedReturn,
        duration: this.duration
      });

    // this.clickedOnCalculate.emit();
  }
}
