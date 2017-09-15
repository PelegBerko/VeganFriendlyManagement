import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-company-button',
    templateUrl: './company-button.component.html',
    styleUrls: ['./company-button.component.css']
})
export class CompanyButtonComponent {
    is_button_selected = false;
    @Input() company_button_name;
    constructor() {}

    onCompanyButtonClick() {
        this.is_button_selected = !this.is_button_selected;
    }
}
