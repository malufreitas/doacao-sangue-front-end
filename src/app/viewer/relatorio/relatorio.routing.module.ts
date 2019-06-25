import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { RelatorioComponent } from './relatorio.component';
import { Relatorio1Component } from './relatorio1/relatorio1.component';
import { Relatorio2Component } from './relatorio2/relatorio2.component';
import { Relatorio3Component } from './relatorio3/relatorio3.component';
import { Relatorio4Component } from './relatorio4/relatorio4.component';

const relatorioRoutes = [
    {path: 'relatorio', component: RelatorioComponent, children: [
        {path: '1', component: Relatorio1Component},
        {path: '2', component: Relatorio2Component},
        {path: '3', component: Relatorio3Component},
        {path: '4', component: Relatorio4Component}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(relatorioRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class RelatorioRoutingModule {

}