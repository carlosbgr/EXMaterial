import { Component, OnInit } from '@angular/core';
import { ConceptService } from 'src/app/services/concept.service';
import { Concept } from 'src/app/models/concept.model';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss'],
})
export class ConceptComponent implements OnInit {

  concept: Concept;

  constructor(private conceptService: ConceptService) { }

  ngOnInit() {
    this.concept = {
      id: null,
      title: 'OCIO',
      description: 'Actividades de Ocio',
      isSubConcept: false,
    };

    this.conceptService.getConcepts().subscribe((snapshot) => {
      snapshot.forEach((data: any) => {
        console.log(data.payload.doc.data());
      });
    });
  }

}
