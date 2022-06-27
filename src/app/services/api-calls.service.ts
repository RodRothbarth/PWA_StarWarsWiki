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

  async sideBarOptions(){
    try{
      return this.http.get(`${environment.API_URL}`);
    }catch (err: any){
      return console.log('The data from side bar could not be retrieved', err.message)
    }

  }

  async allFilmsCall(){
    try{
      const FILMS = await this.http.get(`${environment.API_URL}/films`)
      // console.log("Films!", FILMS)
      return FILMS
    } catch (err: any){
      return console.log('The data from films could not be retrieved', err.message)
    }
  }

  async allPlanetsCall(){
    try {
      const PLANETS = await this.http.get(`${environment.API_URL}/planets`)
      // console.log("Films!", PLANETS)
      return PLANETS
    } catch (err: any){
      return console.log('The data from planets could not be retrieved', err.message)
    }
  }

  async allPeopleCall(page:any){
    try {
      const PEOPLE = await this.http.get(`${environment.API_URL}/people/?page=${page + 1}`)
      console.log("PEOPLE ", PEOPLE)
      return PEOPLE
    } catch (err: any){
      return console.log('The data from people could not be retrieved', err.message)
    }
  }

  async characterCall(char:string){
    try {
      const CHARACTER = await this.http.get(`${environment.API_URL}/people/${char}`)
      // console.log("CHARACTERS", CHARACTERS)
      return CHARACTER
    } catch (err: any){
      return console.log('The data from the character could not be retrieved', err.message)
    }
  }

  async planetCall(planet: string){
    try {
      const PLANET = await this.http.get(`${environment.API_URL}/planets/${planet}`)
      // console.log("PLANET", PLANETS)
      return PLANET
    } catch (err:any){
      return console.log('The data from the planet could not be retrieved', err.message)
    }
  }

  async vehicleCall(vehicle: string){
    try {
      const VEHICLE = await this.http.get(`${environment.API_URL}/vehicles/${vehicle}`)
      console.log("VEHICLE", VEHICLE)
      return VEHICLE
    } catch (err:any){
      return console.log('The data from vehicles could not be retrieved', err.message)
    }
  }
}
