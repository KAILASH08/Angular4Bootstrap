import { NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/map'
import { Router } from "@angular/router";
export type Item = { id: number, name: string };


@Component({
  selector: 'app-new-packageschedule',
  templateUrl: './new-packageschedule.component.html',
  styleUrls: ['./new-packageschedule.component.css']
})
export class NewPackagescheduleComponent implements OnInit {
  

  items: Array<Item>;
  title = 'app';
  name: string;
  
  constructor(private http: Http,private router: Router) {
  }
  static tube:Array<string> = [
		"Atlanta Region",
		"Boston Region",
		"BWR Region",
		"Chicago Region",
		"Wembley Central",
		"Florida Region",
		"Great Southern Region",
		"Greater Southwest Region",
		"Hawai Region",
		"Heartland Region",
		"Huston Region",
		"Maida Vale"
  ];
  message;
	source = NewPackagescheduleComponent.tube;
 // source = [ 'Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King' ];
  target = [];
  compare(a:any, b:any) {
		const arr = NewPackagescheduleComponent.tube;
		return arr.indexOf(a._id) - arr.indexOf(b._id);
	}

	showMessage(e:any) {
		this.message = { selectChange: e };
	}
  public treeData: any[] = [{
    name: "US Country Office",
    isOpen:true,
    iconSelector:"computer",
    nameSelector:"warning",
    nodes: [{
        name: 'Atlanta Region'
    }]
},{
    name: 'Asia Region',
    nodes:[{
        name: 'India'
    }]
}];

public treeConfig : any = {
    dataMap:{
        children:"nodes"
    }
}

  ngOnInit() {
    this.http
      .get("/assets/test.json")
      .map(data => data.json() as Array<Item>)
      .subscribe(data => {
        this.items = data;
        console.log(data);
      });
  }

  private _values1 = [ 
    { id: 1, val: "North America" },
    { id: 2, val: "South America" },
    { id: 3, val: "Europe" },
    { id: 4, val: "Asia & Oceania" }
  ];
  private _values2 = [];
  isValid: boolean = true;
  //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  searchbtn() {
    document.getElementById("tablediv").style.visibility = "visible";
       }
       newpckgmod()
       {
         alert("Testing");
         this.router.navigateByUrl("new-packageschedule.component.html");
         alert("Testing2");
       }
  test() {

    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn btn-success");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("btn btn-success");
        current[0].className = current[0].className.replace("btn btn-success", "");
        this.className += " btn btn-default";
      });
    }
  }
  test_c() {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn btn-default");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("btn btn-default");
        current[0].className = current[0].className.replace("btn btn-default", "btn btn-success");
        this.className += "btn btn-success";
      });
    }

  }

  firstDropDownChanged(val: any) {
    const obj = this._values1[val];
    console.log(val, obj);

    if (!obj) return;

    if (obj.id == 1) {
      this._values2 = ["Canada", "Costa Rica", "Maxico", "United States"];
    }
    else if (obj.id == 2) {
      this._values2 = ["Argentina", "Brazil", "Chile", "Peru"];
    }
    else if (obj.id == 3) {
      this._values2 = ["Austria", "Azerbaijan", "Bulgaria", "United Kingdom"];
    }
    else if (obj.id == 4) {
      this._values2 = ["Australia", "Bahrain", "China", "India"];
    }
    else {
      this._values2 = [];
    }
  }
}
