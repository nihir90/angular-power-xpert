import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common/common.service';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(
        private readonly fb: FormBuilder,
        private readonly router: Router,
        private readonly commonService: CommonService,
    ) {}

    ngOnInit(): void {
       this.commonService.logout();
       this.commonService.disableSidebar(true);
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
            password: ['', Validators.compose([Validators.required])],
            remember: [true],
        });
    }

    password(): void {
        this.router.navigateByUrl('forgot');
    }

    signUp(): void {
        this.router.navigateByUrl('registration');
    }

    login(): void {
        this.commonService
            .login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .subscribe((matched) => {
                if (matched) {
                    this.router.navigateByUrl('devices');
                    this.commonService.enableSidebar(true);
                } else {
                    // alert('Enter valid Details');
                }
            });
    }
}
