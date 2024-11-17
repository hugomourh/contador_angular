import { Component } from '@angular/core';

@Component({
  selector: 'app-coontador',
  standalone: true,
  imports: [],
  templateUrl: './coontador.component.html',
  styleUrl: './coontador.component.css',
})
export class CoontadorComponent {
  public numero = 0;

contador(): void {

  this.numero++;
}

}
