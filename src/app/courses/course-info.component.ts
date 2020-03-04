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

        this.course = this._courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    public save() : void{

        this._courseService.save(this.course);
    }

}