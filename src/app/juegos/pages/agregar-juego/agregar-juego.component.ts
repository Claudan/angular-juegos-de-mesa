import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.component.html',
  styleUrls: ['./agregar-juego.component.css'],
})
export class AgregarJuegoComponent implements OnInit {
  imagen: File = new File([], '');
  tokenRecaptcha: string = '';

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(50)]],
    desarrollador: ['', [Validators.required, Validators.maxLength(50)]],
    descripcion: ['', [Validators.required, Validators.maxLength(2000)]],
    edad_minima: [4, [Validators.required, Validators.min(1)]],
    duracion: [15, [Validators.required, Validators.min(1)]],
    cantidad_jugadores_minima: [2, [Validators.required, Validators.min(1)]],
    cantidad_jugadores_maxima: [4, [Validators.required, Validators.min(1)]],
    imagenes: [
      ,
      [
        Validators.required,
        this.extensionValida(['jpg', 'jpeg', 'png', 'webp']),
      ],
    ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public onFileChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.imagen = file;
  }

  campoNoValido(campo: string) {
    return (
      this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched
    );
  }

  extensionValida(formatosAceptados: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return { sinImagen: true };
      }
      const nombreSeparado = value.split('.');
      const extension = nombreSeparado[nombreSeparado.length - 1];
      const extensionValida = formatosAceptados.includes(extension);

      return !extensionValida ? { extensionNoValida: true } : null;
    };
  }

  pesoValido(): boolean {
    if (this.imagen.size > 0) {
      const pesoMaxEnBytes = 5000000; //5000000 = 5MB
      const pesoValido = this.imagen!.size <= pesoMaxEnBytes;
      return pesoValido;
    }
    return true;
  }

  resolved(TokenRecaptcha: string) {
    this.tokenRecaptcha = TokenRecaptcha;
  }

  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    if (!this.pesoValido()) {
      return;
    }
    console.log('enviando el post');
    console.log(this.formulario.value);
  }

  get nombreErrorMsg(): string {
    const errors = this.formulario.get('nombre')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['maxlength']) {
      return 'Debe tener máximo 50 caracteres';
    }
    return '';
  }
  get desarrolladorErrorMsg(): string {
    const errors = this.formulario.get('desarrollador')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['maxlength']) {
      return 'Debe tener máximo 50 caracteres';
    }
    return '';
  }
  get descripcionErrorMsg(): string {
    const errors = this.formulario.get('descripcion')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['maxlength']) {
      return 'Debe tener máximo 2000 caracteres';
    }
    return '';
  }
  get edadMinimaErrorMsg(): string {
    const errors = this.formulario.get('edad_minima')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['min']) {
      return 'Debe ser mayor o igual a 1';
    }
    return '';
  }
  get duracionErrorMsg(): string {
    const errors = this.formulario.get('duracion')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['min']) {
      return 'Debe ser mayor o igual a 1';
    }
    return '';
  }
  get cantidadJugadoresMinimaErrorMsg(): string {
    const errors = this.formulario.get('cantidad_jugadores_minima')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['min']) {
      return 'Debe ser mayor o igual a 1';
    }
    return '';
  }
  get cantidadJugadoresMaximaErrorMsg(): string {
    const errors = this.formulario.get('cantidad_jugadores_maxima')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['min']) {
      return 'Debe ser mayor o igual a 1';
    }
    return '';
  }
  get imagenesErrorMsg(): string {
    const errors = this.formulario.get('imagenes')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['extensionNoValida']) {
      return 'Extensión incorrecta. Debe ser jpg, jpeg, png o webp';
    }
    return '';
  }
  get emailErrorMsg(): string {
    const errors = this.formulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    if (errors?.['pattern']) {
      return 'El correo no tiene un formato válido';
    }
    return '';
  }
  get passwordErrorMsg(): string {
    const errors = this.formulario.get('password')?.errors;
    if (errors?.['required']) {
      return 'Requerido';
    }
    return '';
  }
}
