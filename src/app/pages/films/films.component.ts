import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiCallsService} from "../../services/api-calls.service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: any;
  filmInfo: any;
  characters: Array<string> = []
  vehicles: Array<string> = []
  planets: Array<string> = []
  filmSelect: boolean = false;
  displayedColumns: string[] = ['episode', 'title', 'director', 'release'];

  constructor(
    private http: ApiCallsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.filmList()
  }

  openTable(row: any){
    this.filmInfo = row
    this.filmSelect = true;
    this.sortCharacters(row)
    this.sortPlanets(row)
    this.sortVehicles(row)
  }

  filmList(){
    this.http.allFilmsCall().subscribe((resp: any)=>{
      console.log(resp.results);
      this.films = resp.results.sort((a: any,b: any)=> a.episode_id - b.episode_id);
      this.filmSelect = false;
    })
  }

  sortCharacters(row: any){
    let char: string= "";
    row.characters.forEach(async (character: string) => {
      char = character.slice(34)
      await this.getCharacters(char)
    })
  }

  sortPlanets(row:any){
    let planets: string = ""
    row.planets.forEach(async (world: string)=> {
      planets = world.slice(35)
      await this.getPlanets(planets)
    })
  }

  sortVehicles(row:any){
    let vehicles: string = ""
    row.vehicles.forEach(async (car: string)=> {
      vehicles = car.slice(35)
      await this.getVehicles(vehicles)
    })
  }

  async getVehicles(car: string) {
    await this.http.vehicleCall(car).subscribe((resp: any) => {
      this.vehicles.push(`${resp.name} `)
      // this.filmInfo.characters.shift()
    })
  }

  async getCharacters(char: string) {
    await this.http.characterCall(char).subscribe((resp: any) => {
      this.characters.push(`${resp.name} `)
      // this.filmInfo.characters.shift()
    })
  }

  async getPlanets(planet: string){
    await this.http.planetCall(planet).subscribe((resp: any) => {
      this.planets.push(`${resp.name}`)
    })
  }

  back(){
    this.filmSelect = false
  }

}
