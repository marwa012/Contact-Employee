import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  @Input() lesson: Contact;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
