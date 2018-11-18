import { Component, OnInit } from '@angular/core';
import { ICategoriesStatistic, CategoriesService } from '../../+categories/services/categories.service';
import { RenameDialogComponent } from '../../dialogs/rename/rename-dialog.component';
import { filter } from 'rxjs/internal/operators/filter';
import { mergeMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-a-categories',
    templateUrl: './A-categories.component.html',
    // styleUrls: ['./profile.component.css'],
})

export class ACategoriesComponent implements OnInit {
    statistics: ICategoriesStatistic[]; // #TODO: replace interface some where else
    constructor(private categoriesService: CategoriesService, public dialog: MatDialog) { }
    ngOnInit() {
        this.categoriesService.getCategoriesStatistic().subscribe(result => {
            this.statistics = result;
        });
    }
    onRename(catId: string) {
        const renameDialogRef = this.dialog.open(RenameDialogComponent, {
            hasBackdrop: true,
            data: {
                name: this.statistics.filter( el => el.id === catId)[0].name,
            },
        });
        renameDialogRef.afterClosed().pipe(
            filter(name => name),
            mergeMap(name => this.categoriesService.updateCategory(catId, { name })),
            mergeMap( () => this.categoriesService.getCategoriesStatistic()),
        ).subscribe( statistics => {
            this.statistics = statistics;
        });
    }
    onDelete(catId: string) {
        const current = this.statistics.filter( el => el.id === catId)[0];
        if (current.open) {
            console.error('Opps, category has open tasks');

            return;
        }
        this.categoriesService.deleteCategory(catId).pipe(
            mergeMap( () => this.categoriesService.getCategoriesStatistic()),
        ).subscribe( statistics => {
            this.statistics = statistics;
        });
    }
}
