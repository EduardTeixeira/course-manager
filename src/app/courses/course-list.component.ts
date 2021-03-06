import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: `./course-list.component.html`,
})
export class CourseListComponent implements OnInit {

    _courses: Course[] = [];

    _filterBy: string;

    filteredCourses: Course[] = [];

    constructor(private _courseService: CourseService) {

    }

    ngOnInit(): void {

        this.retrievelAll();
    }

    retrievelAll(): void {

        this._courseService.retrieveAll().subscribe({

            next: courses => {

                this._courses = courses;

                this.filteredCourses = this._courses;
            },

            error: err => console.log('Error', err)

        });

    }

    deleteById(coruseId: number) {

        this._courseService.deleteById(coruseId).subscribe({

            next: () => {

                console.log('Deleted with sucess')

                this.retrievelAll();
            },

            error: err => console.log('Error', err)

        });
    }

    set filter(value: string) {

        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

}