import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-advisories',
  templateUrl: './advisories.component.html',
  styleUrls: ['./advisories.component.scss']
})
export class AdvisoriesComponent implements OnInit {

  search:any
  advisories:any
  message:any
  constructor(private api:ApiService) { 
    this.getAdvisories()
  }

  ngOnInit(): void {
  }

  getAdvisories(){
    this.api.getAdvisories().subscribe(
      (      data: any)=>{
        console.log(data)
        this.advisories=data
      },
      (      error: any)=>{
        console.log(error)
      }
    )
  }

  addAdvisories(){
    let data={
      messages:this.message,
      studid:'1'
    }
    this.api.addAdvisories(data).subscribe(
      (      data: any)=>{
        console.log(data)
        this.getAdvisories()
      },
      (      error: any)=>{
        console.log(error)
      }
    )

  }
  deleteAdvisories(id: any){
    this.api.deleteAdvisories(id).subscribe(
      (      data: any)=>{
        console.log(data)
        this.getAdvisories()
      },
      (      error: any)=>{
        console.log(error)
      }
    )
  }

}
