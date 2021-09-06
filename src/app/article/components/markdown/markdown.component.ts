import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MarkdownData } from '../../interface';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {

  markdownData?: MarkdownData;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.console.log({ markdownData: this.activatedRoute.snapshot.data.markdownData });
  }

}
