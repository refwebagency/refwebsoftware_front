import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { Project } from '../../models/project';
import { ProjectType } from '../../models/projectType';
import { QuotePdf } from '../../models/quotePdf';
import { Specialization } from '../../models/specialization';
import { TodoTemplate } from '../../models/todoTemplate';
import { QuotePdfService } from '../quote-pdf.service';

@Component({
  selector: 'app-quote-pdf-writing',
  templateUrl: './quote-pdf-writing.component.html',
  styleUrls: ['./quote-pdf-writing.component.scss']
})
export class QuotePdfWritingComponent implements OnInit {

  newQuotePdf!: FormGroup
  test!: FormGroup
  test2!: FormGroup
  test3!: FormGroup
  test4!: FormGroup
  test5!: FormGroup
  clients: Client[] = []
  specializations: Specialization[] = []
  projectTypes: ProjectType[] = []
  todoTemplates: TodoTemplate[] = []

  constructor(

    private myService: QuotePdfService,
    @Inject(FormBuilder) fb: FormBuilder

  ) { 

    this.newQuotePdf = fb.group({
      
      project: fb.group({
          name: new FormControl("",[Validators.required]),
          startDate: new FormControl("",[Validators.required]),
          endtDate: new FormControl("",[Validators.required]),
          projectTypeId: new FormControl("",[Validators.required]),
          clientId: new FormControl("",[Validators.required])
      }),
      todoTemplates: fb.array([
        this.test = fb.group({
          id: new FormControl("", [Validators.required]),
          name:  "string",
          description: "string",
        }),
        this.test2 = fb.group({
          id: new FormControl("", [Validators.required]),
          name:  "string",
          description: "string",
        }),
        this.test3 = fb.group({
          id: new FormControl("", [Validators.required]),
          name:  "string",
          description: "string",
        }),
        this.test4 = fb.group({
          id: new FormControl("", [Validators.required]),
          name:  "string",
          description: "string",
        }),
        this.test5 = fb.group({
          id: new FormControl("", [Validators.required]),
          name:  "string",
          description: "string",
        })

      ])
        
    })


  }

  // get todoTemplateList()
  // {
  //   return this.newQuotePdf.controls["todoTemplates"] as FormArray;
  // }

  ngOnInit(): void {

    this.myService.getTodoTemplates().subscribe(td => this.todoTemplates = td);
    this.myService.getClients().subscribe(c => this.clients = c);
    this.myService.getProjectTypes().subscribe(pt => this.projectTypes = pt);
    

  }

  

  /**
   * Au clic du bouton submit dans le formulaire, récupere les valeurs
   * de newQuotePdf
   */
   post(){ 
    
    this.myService.addQuotePdf(this.newQuotePdf.value).subscribe();
    //this.route.navigateByUrl("/quotepdf");
    
  }

}
