import { Component, OnInit } from '@angular/core';
import { CategoriesService, ICategoriesStatistic } from '../../+categories/services/categories.service';
import { ITask } from '../../+tasks/models/task';
import { TasksService } from '../../+tasks/servises/tasks.service';
import { MatDialog } from '@angular/material';
import { RenameDialogComponent } from '../../dialogs/rename/rename-dialog.component';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
    selector: 'app-categories-list',
    templateUrl: './A-categories-list.component.html',
    styleUrls: ['./A-categories-list.component.css'],
})

export class ACategoryListComponent implements OnInit {
    statistics: ICategoriesStatistic[];
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService, public dialog: MatDialog) { }
    ngOnInit() {
        this.categoriesService.getCategoriesStatistic().subscribe(result => {
            this.statistics = result;
        });
    }
    public onDelete(categoryName: string) {
        const currentCategory = this.currentCategory(categoryName);
        if (currentCategory.open) {
            console.error('opps this is impossible'); // #TODO: add real alert toaster

            return;
        } else {
            this.categoriesService.deleteCategory(currentCategory.id).subscribe();
        }
    }
    public onEdit(categoryName: string) {
        const currentCategory = this.currentCategory(categoryName);
        // this.categoriesService.updateCategory(currentCategory.categoryId, newName).subscribe();
        const renameDialogRef = this.dialog.open(RenameDialogComponent, {
            hasBackdrop: false,
            data: {
                currnetName: categoryName,
            },
        });
        renameDialogRef.afterClosed().pipe( filter(name => name))
        .subscribe( name => this.categoriesService.updateCategory(currentCategory.id, { name }).subscribe());
    }
    private currentCategory(categoryName: string): ICategoriesStatistic {
        return this.statistics.filter(el => categoryName === el.name)[0];
    }
}
