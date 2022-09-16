import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {

  constructor(	) {console.log('autocomplete construction'); }

  ngOnInit(): void {
    console.log('hello from autocomplete');


  }

}
