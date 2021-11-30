import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-schoolyear',
  templateUrl: './manage-schoolyear.component.html',
  styleUrls: ['./manage-schoolyear.component.scss']
})
export class ManageSchoolyearComponent implements OnInit {

  // properties
  search:any
  sy:any;
  syear1:any;
  syear2:any;
  i=1
  
  constructor(private api:ApiService) {
    this.getSchoolYear()
   }

  ngOnInit(): void {
    
    
  }
  getSchoolYear(){
    this.api.getSY().subscribe(res=>{
      console.log(res)
      this.sy=res
    },
    err=>{
      console.log(err)
    })

  }

  addSchoolYear(){
    const sy=this.syear1+"-"+this.syear2;

    let data={
      sy:sy
    }
    this.api.addSY(data).subscribe((res: any)=>{
      console.log(res)
      this.getSchoolYear()
    },
      (    err: any)=>{
      console.log(err)
    })
  }


  setActive(id: any,status:any){
    let data={
      
      status:status
      
    }
    this.api.setActiveSY(id,data).subscribe((res: any)=>{
      console.log(res)
      this.getSchoolYear()
    },
      (    err: any)=>{
      console.log(err)
    })
  }

}
