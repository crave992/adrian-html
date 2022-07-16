import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Subject } from "rxjs";
import { AuthData } from "../models/auth-data.model";
import { UIService } from "./ui.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor (
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UIService,
    private snackbar: MatSnackBar
  ) {

  }
  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.authChange.next(false);
        this.router.navigate(['/admin']);
        this.isAuthenticated = false;
      }
    })
  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(false);
  }
}
