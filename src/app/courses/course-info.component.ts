import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activatedRoute: ActivatedRoute,
        private _courseService: CourseService) {

    }

    ngOnInit(): void {

        this._courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({

            next: course => this.course = course,

            error: err => console.log('Error', err),
        });
    }

    public save(): void {

        this._courseService.save(this.course).subscribe({

            next: course => console.log('Saved with sucess', course),

            error: err => console.log('Error', err),
        });
    }

}