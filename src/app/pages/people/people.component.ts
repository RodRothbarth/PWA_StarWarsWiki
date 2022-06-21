import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApiCallsService} from "../../services/api-calls.service";
import {Character} from "../../shared/character";
import {MatPaginator} from "@angular/material/paginator";
import {
  catchError,
  merge,
  startWith,
  switchMap,
  of as observableOf,
  map} from "rxjs";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements AfterViewInit {

  people: Character[] = [];
  resultsLength = 0;
  peopleSelect: boolean = false;
  displayedColumns: string[] = ['name', 'gender', 'birth', 'height'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private http: ApiCallsService
  ) { }

  ngAfterViewInit(): void {
    //paginator with direct from paged API.
    merge(this.paginator!.page)
      .pipe(
        startWith({}),
        switchMap(()=>{
          return this.http.allPeopleCall(this.paginator?.pageIndex)
            .pipe(catchError(() => observableOf(null)))
        }),
        map((data: any)=> {
          //length of total results
          this.resultsLength = data.count;
          return data.results;
        })
      ).subscribe((data)=> {
        this.people = data
    })
  }

}



