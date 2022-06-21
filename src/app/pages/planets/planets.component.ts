import { Component, OnInit } from '@angular/core';
import {ApiCallsService} from "../../services/api-calls.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: any;
  planetSelect: boolean = false;
  planetInfo: any;
  characters: Array<string> = [];

  constructor(
    private http: ApiCallsService
  ) { }

  ngOnInit(): void {
    this.http.allPlanetsCall().subscribe((resp:any) => {
      console.log(resp.results);
      this.planets = resp.results;
    })
  }

  openPlanetInfo(tile: any){
    this.planetInfo = tile
    this.planetSelect = true;
    this.characters = []
    this.sortCharacters(tile)
  }

  sortCharacters(row: any){
    let char: string= "";
    row.residents.forEach(async (character: string) => {
      char = character.slice(34)
      await this.getCharacters(char)
    })
  }

  async getCharacters(char: string) {
    await this.http.characterCall(char).subscribe((resp: any) => {
      this.characters.push(`${resp.name} `)
    })
  }

}
