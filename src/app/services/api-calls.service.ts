import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(
    private http: HttpClient
  ) { }

  sideBarOptions(){
    return this.http.get(`${environment.API_URL}`)
  }

  allFilmsCall(){
    const FILMS = this.http.get(`${environment.API_URL}/films`)
    console.log("Films!", FILMS)
    return FILMS
  }

  allPlanetsCall(){
    const PLANETS = this.http.get(`${environment.API_URL}/planets`)
    // console.log("Films!", PLANETS)
    return PLANETS
  }

  allPeopleCall(page:any){

    const PEOPLE = this.http.get(`${environment.API_URL}/people/?page=${page+1}`)
    console.log("PEOPLE ", PEOPLE)
    return PEOPLE
  }

  allPeopleCallTest(){
    const PEOPLE = this.http.get(`${environment.API_URL}/people`)
    console.log("PEOPLE ", PEOPLE)
    return PEOPLE
  }

  characterCall(char:string){
    const CHARACTER = this.http.get(`${environment.API_URL}/people/${char}`)
    // console.log("CHARACTERS", CHARACTERS)
    return CHARACTER
  }

  planetCall(planet: string){
    const PLANET = this.http.get(`${environment.API_URL}/planets/${planet}`)
    // console.log("PLANET", PLANETS)
    return PLANET
  }

  vehicleCall(vehicle: string){
    const VEHICLE = this.http.get(`${environment.API_URL}/vehicles/${vehicle}`)
    console.log("VEHICLE", VEHICLE)
    return VEHICLE
  }
}
