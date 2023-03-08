import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-search-entity-widget',
  templateUrl: './search-entity-widget.component.html',
  styleUrls: ['./search-entity-widget.component.less']
})

export class SearchEntityWidgetComponent implements OnInit {


	searchEntityForm!: FormGroup;

  selected = 'Character';
  constructor(
		private esi_service : EveEsiService,
    private formBuilder: FormBuilder,


  ) { 


    
  }
  ngOnInit(): void {
		console.log('hello from autocomplete', this);

		this.searchEntityForm = this.formBuilder.group({
		  	name: '',
        something : "Character"
		});

    
		this.onChanges();
  	}


  onSubmit(param : FormGroup)
  {

    console.warn(param , "onsumbit");

  }

  updater()
  {
    console.log('updater', this.searchEntityForm.value.name, this.searchEntityForm.value.entityType);
    this.esi_service.getIdFromNameAndEntityType(this.searchEntityForm.value.name ,this.selected )
  }

	onChanges(): void {
 

  		this.searchEntityForm.statusChanges.subscribe(
        data => {
          console.log("EVENT HAPPENED")
        }
      )
	}





}
