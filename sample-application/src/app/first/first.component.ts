import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})




export class FirstComponent implements OnInit {
  Swagger : any;

    constructor(private http: HttpClient) { }



  logIn()
  {


    let url = "https://esi.evetech.net/latest/swagger.json?datasource=tranquility"
    this.http.get<any>(url
       
      // , { t// itle: 'Angular POST Request Example' }
      ).subscribe(data => {
          this.Swagger = data.id;
          console.log(this.Swagger, data.securityDefinitions
            );
      })
     // window.location.href = 'http://www.cnn.com/';



  }


    bloodline :any ; 
 //   https://esi.evetech.net/latest/universe/bloodlines/?datasource=tranquility&language=en
    ngOnInit() {      
    
      let url = 'https://esi.evetech.net/latest/universe/bloodlines/?datasource=tranquility&language=en'
      // SimpleGET  request with a JSON body and response type <any>
        this.http.get<any>(url
       
        // , { title: 'Angular POST Request Example' }
        
        ).subscribe(data => {
            this.bloodline = data.id;
        })


        console.log(this.bloodline);

    }

  

}
