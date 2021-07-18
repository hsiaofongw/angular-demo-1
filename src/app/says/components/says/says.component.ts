import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISay, ISayQueryResult } from '../../interface';
import { SayService } from '../../services/say.service';

@Component({
  selector: 'app-says',
  templateUrl: './says.component.html',
  styleUrls: ['./says.component.css'],
  animations: [
    trigger('overlayEnterExit', [
      transition(':enter', [
        style({ backgroundColor: 'rgba(0, 0, 0, 0%)' }),
        query('.dialog', style({ transform: 'translateY(36px) scale(0.7)' })),

        group([
          animate(
            '150ms ease-out',
            style({ backgroundColor: 'rgba(0, 0, 0, 36%)' })
          ),
          query(
            '.dialog',
            animate(
              '150ms ease-out',
              style({ transform: 'translateY(0px) scale(1)' })
            )
          ),
        ]),
      ]),
      transition(':leave', [
        animate(
          '80ms ease-in',
          style({ backgroundColor: 'rgba(0, 0, 0, 0%)' })
        ),
      ]),
    ]),
  ],
})
export class SaysComponent implements OnInit {
  /** 当前显示的说说列表 */
  says: ISay[] = [];

  /** 当前已经加载的最大页数，第 1 页用 1 表示（而不是 0） */
  currentMaxPageIndex = 0;

  /** 每页记录数 */
  pageSize = 20;

  isOverlayDisplay = false;

  saysInputForm = this.formBuilder.group({
    content: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private sayService: SayService
  ) {}

  ngOnInit(): void {
    this.fetchNextPage().subscribe((data: ISayQueryResult) => this.load(data));
  }

  /** 拉取下一页数据 */
  fetchNextPage() {
    const nextPageIndex = this.currentMaxPageIndex + 1;
    const offset = (nextPageIndex-1) * this.pageSize;
    const limit = this.pageSize;
    return this.sayService.getSays({ offset: offset.toString(), limit: limit.toString() });
  }

  /** 加载数据 */
  load(queryResult: ISayQueryResult) {
    let pageIndex = 0;
    if ((queryResult.offset+this.pageSize) % this.pageSize === 0) {
      pageIndex = Math.floor((queryResult.offset + this.pageSize) / this.pageSize);
    }

    if (pageIndex > this.currentMaxPageIndex) {
      this.says = [...this.says, ...queryResult.result];
      this.currentMaxPageIndex = pageIndex;
    }
  }

  handleOk(): void {
    this.isOverlayDisplay = false;
  }

  handleCancel(): void {
    this.isOverlayDisplay = false;
  }

  handleOpenOverlay(): void {
    this.isOverlayDisplay = true;
  }
}
