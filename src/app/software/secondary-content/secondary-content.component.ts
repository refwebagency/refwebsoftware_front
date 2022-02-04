import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs/operators';
import { User } from '../models/user';
import { SoftwareService } from '../software.service';

@Component({
  selector: 'app-secondary-content',
  templateUrl: './secondary-content.component.html',
  styleUrls: ['./secondary-content.component.scss']
})
export class SecondaryContentComponent implements OnInit {

  //represente ma liste de Users
  users: User[] = []
  user: User = {} as User

  constructor(
    private myService: SoftwareService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var idInUrl = this.route.params.pipe(
      pluck("id"),
      switchMap((id))
    )
    
    
    // this.myService.getUser(idInUrl).subscribe((u => this.user = u));
  
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   var idInUrl = this.route.snapshot.url[1].path;
  //   this.myService.getUser(idInUrl).subscribe((u => this.user = u));
    
  // }

  // ngDoCheck(): void {
      

  //   var idInUrl = this.route.snapshot.url[1].path;
  //   this.myService.getUser(idInUrl).subscribe((u => this.user = u));
  // }

  // getUserById(id: number)
  // {
  //   this.myService.getUser(id).subscribe(res => console.log(res));
  // }

}
