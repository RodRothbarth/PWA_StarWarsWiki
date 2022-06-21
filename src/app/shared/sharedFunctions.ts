import {HttpClient} from "@angular/common/http";
import {ApiCallsService} from "../services/api-calls.service";


export class Shared {

  constructor(
    private http: ApiCallsService
  ) {
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
      return resp.name
      // this.vehicles.push(`${resp.name} `)
      // this.filmInfo.characters.shift()
    })
  }

  async getCharacters(char: string) {
    await this.http.characterCall(char).subscribe((resp: any) => {
      return resp.name
      // this.characters.push(`${resp.name} `)
      // this.filmInfo.characters.shift()
    })
  }

  async getPlanets(planet: string){
    await this.http.planetCall(planet).subscribe((resp: any) => {
      return resp.name
      // this.planets.push(`${resp.name}`)
    })
  }
}
