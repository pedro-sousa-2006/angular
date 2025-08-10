import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rodape',
  imports: [RouterModule],
  templateUrl: './rodape.html',
  styleUrl: './rodape.css'
})
export class Rodape {
dataatual = new Date();
}
