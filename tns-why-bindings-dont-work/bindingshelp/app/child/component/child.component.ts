import { Component } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
        <StackLayout>
            <Label text="My Child Component"></Label>
            <ListView [items]="myItems">
                <ng-template let-item="item">
                    <Label [text]="item.title" col="1"></Label>
                </ng-template>
            </ListView>
        </StackLayout>
    `
})

export class ChildComponent {

    public myItems = [
        {
            title: 'item1'
        },
        {
            title: 'item2'
        },
    ];

    constructor() { }

}