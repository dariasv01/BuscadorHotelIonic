import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Hotel } from '../core/model/hotel';
import { Habitacion } from '../core/model/habitacion';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  private _arrayHoteles: Hotel[];




  constructor(public router: Router) {

    this._arrayHoteles = this.router.getCurrentNavigation().extras.state.hoteles;
  }
  private mostrarHabitacion(habitacionMostrar, hotelMostrar) {
    let navigationExtras: NavigationExtras = {
      state: {
        habitacion: habitacionMostrar,
        hotel: hotelMostrar
      }
    }
    this.router.navigate(['habitacion'], navigationExtras);
    console.log(hotelMostrar)
  }


  ngOnInit() {
  }
  public get arrayHoteles() {
    return this._arrayHoteles;
  }
}
