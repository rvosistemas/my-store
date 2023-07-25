// login.component.ts
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  icons: string[] = ['hippo', 'dog', 'otter', 'fish', 'cat', 'frog', 'cow', 'horse', 'spider', 'dove'];
  shuffledIcons: string[];
  username: string = '';
  selectedIcons: string[] = [];

  constructor() {
    this.shuffledIcons = this.shuffle([...this.icons]);
  }

  onIconClick(icon: string) {
    console.log("icon: ", icon);
    if (this.selectedIcons.includes(icon)) {
      this.selectedIcons = this.selectedIcons.filter((selectedIcon) => selectedIcon !== icon);
    } else {
      if (this.selectedIcons.length < 3) {
        this.selectedIcons.push(icon);
      }
    }
  }

  onSubmit() {
    const isValidUser = this.validateUserMock(this.username, this.selectedIcons);
    if (isValidUser) {
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido!',
        timer: 2000, // The message will close automatically after 2 seconds
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error en el inicio de sesión',
        text: 'Nombre de usuario o íconos incorrectos.',
      });
    }
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  validateUserMock(username: string, selectedIcons: string[]): boolean {
    return (
      username === 'juan' &&
      this.arraysAreEqual(selectedIcons, ['cat', 'dog', 'fish'])
    );
  }

  arraysAreEqual(arr1: any[], arr2: any[]): boolean {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
}
