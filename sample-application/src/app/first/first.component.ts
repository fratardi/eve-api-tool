import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})

export class FirstComponent implements OnInit {
  	Swagger : any = null;
  	scopes: string[] = [];
	scopeForm = new FormControl('', );
	scopeList: string[] = [] ;

	constructor(private http: HttpClient,){
	}
	
	selectAllScopesNRedirect()
	{	
		let scopes = ""
		this.scopeList.forEach( e => {
			console.log(e) 
			scopes	+= e + " " ; 
		})
		let  url  = 'https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4200/esi_callback&client_id=7f45c8124b2640beba3a6902df6832a2&scope='+ scopes 
		window.location.href = url;
	}

	printForm() {
		console.log("tprintform", this.scopeForm.getRawValue())
	}

	ngOnInit() {
		this.getSwagger();
	}

	goToLogin() {	
		let truc 	:	any	=	this.scopeForm.value as string[]|string;
		let scopes	:	any	=	"";
		for (const field in truc) {
			scopes += truc[field] + " ";
		}
		let  url  = 'https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4200/esi_callback&client_id=7f45c8124b2640beba3a6902df6832a2&scope='+ scopes 
		window.location.href = url;
	}

	printSwagger() {
		this.scopes = this.Swagger.securityDefinitions.evesso.scopes;
		let tmp =  this.scopes
		// tmp.lastIndexOf
		// console.log(tmp)
	}

	getSwagger() {
		let swaggerUrl = "https://esi.evetech.net/latest/swagger.json?datasource=tranquility"
		this.http.get<any>(swaggerUrl )
			.subscribe((data : any ) => {
				this.Swagger = data
				var result = [];
				for(var i in data.securityDefinitions.evesso.scopes)
   	 				result.push([i, data.securityDefinitions.evesso.scopes[i]]);
				result.forEach( element => {
					this.scopes.push(element[0])
				})
				this.scopeList = this.scopes
		})
	}
}