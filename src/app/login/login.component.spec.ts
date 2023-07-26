import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import Swal, { SweetAlertResult } from 'sweetalert2';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule], // Add the FormsModule to handle [(ngModel)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty username and selectedIcons array', () => {
    expect(component.username).toBe('');
    expect(component.selectedIcons).toEqual([]);
  });

  it('should add an icon to selectedIcons when onIconClick is called with a non-selected icon', () => {
    const icon = 'hippo';
    component.onIconClick(icon);
    expect(component.selectedIcons).toContain(icon);
  });

  it('should remove an icon from selectedIcons when onIconClick is called with a selected icon', () => {
    const icon = 'hippo';
    component.onIconClick(icon);
    component.onIconClick(icon);
    expect(component.selectedIcons).not.toContain(icon);
  });

  it('should return correct message based on selectedIcons length', () => {
    component.selectedIcons = [];
    expect(component.getIconMessage()).toBe('Selecciona 3 íconos de la lista');

    component.selectedIcons = ['cat'];
    expect(component.getIconMessage()).toBe('Falta seleccionar 2 íconos más');

    component.selectedIcons = ['cat', 'dog'];
    expect(component.getIconMessage()).toBe('Falta seleccionar 1 ícono más');

    component.selectedIcons = ['cat', 'dog', 'fish'];
    expect(component.getIconMessage()).toBe('¡Has seleccionado los 3 íconos!');
  });

  it('should show success message when onSubmit is called with valid user', async () => {
    const fireSpy = spyOn(Swal, 'fire').and.resolveTo({
      isConfirmed: true,
      isDenied: false,
      isDismissed: false,
    } as SweetAlertResult<any>);
    component.username = 'juan';
    component.selectedIcons = ['cat', 'dog', 'fish'];
    component.onSubmit();
    expect(fireSpy).toHaveBeenCalledWith(Object({ icon: 'success', title: 'Inicio de sesión exitoso', text: '¡Bienvenido!', timer: 2000, showConfirmButton: false }));
  });

  it('should show error message when onSubmit is called with invalid user', async () => {
    const fireSpy = spyOn(Swal, 'fire').and.resolveTo({
      isConfirmed: true,
      isDenied: false,
      isDismissed: false,
    } as SweetAlertResult<any>);
    component.username = 'invalid-user';
    component.selectedIcons = ['cat', 'dog', 'fish'];
    component.onSubmit();
    expect(fireSpy).toHaveBeenCalledWith(Object({ icon: 'error', title: 'Error en el inicio de sesión', text: 'Nombre de usuario o íconos incorrectos.' }));
  });
});
