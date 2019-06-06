import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component ({
    selector: 'confirmar',
    templateUrl:'./confirmar.component.html',
    StyleUrls: ['./confirmar.component.scss']
})

export class ConfirmarComponent implements OnInit {

    @Input() title: string;
    @Input() msg: string;
    @Input() cancelTxt = 'Cancelar';
    @Input() okTxt = 'Sim';
    
    constructor(public bsModalRed: BsModalRef) {}

    ngOnInit() {}

    onClose(){
        this.bsModalRed.hide();
    }

    onConfirm(){
        this.bsModalRed.hide();
    }

}
    