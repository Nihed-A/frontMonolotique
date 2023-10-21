import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumService } from './_services/forum.service';
import { ForumMainPageComponent } from './forum-main-page/forum-main-page.component';
import { ForumDiscussionComponent } from './forum-discussion/forum-discussion.component';
import { ForumContentComponent } from './forum-content/forum-content.component';
import { ForumAddQuestionComponent } from './forum-add-question/forum-add-question.component';
import { ForumStatsComponent } from './forum-stats/forum-stats.component';
import { ForumStatsRespondsComponent } from './forum-stats-responds/forum-stats-responds.component';
import { ForumTableComponent } from './forum-table/forum-table.component';
import { PaginationModule } from '../pagination/pagination.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForumMainPageComponent,
    ForumTableComponent,
    ForumContentComponent,
    ForumAddQuestionComponent,
    ForumDiscussionComponent,
    ForumStatsComponent,
    ForumStatsRespondsComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    PaginationModule
  ],
  providers: [
    ForumService
  ]
})
export class ForumModule { }

