import { Habitacion } from './../core/model/habitacion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../core/model/hotel';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {
  private _habitacion: Habitacion;
  private _hotel: Hotel;

  constructor(public router: Router) {
    this._habitacion = this.router.getCurrentNavigation().extras.state.habitacion;
    this._hotel = this.router.getCurrentNavigation().extras.state.hotel;
    console.log(this.hotel)
  }

  ngOnInit() {
  }


  /**
   * Getter habitacion
   * @return {Habitacion}
   */
  public get habitacion(): Habitacion {
    return this._habitacion;
  }

  /**
   * Setter habitacion
   * @param {Habitacion} value
   */
  public set habitacion(value: Habitacion) {
    this._habitacion = value;
  }

    /**
     * Getter hotel
     * @return {Hotel}
     */
	public get hotel(): Hotel {
		return this._hotel;
	}




}
