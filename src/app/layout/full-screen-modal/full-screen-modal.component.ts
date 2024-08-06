import { Component, Input, OnInit } from '@angular/core';
declare var bootstrap: any;

interface Project {
  project: string,
  company: string;
  description: string;
  involvement: string;
}

@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.css']
})
export class FullScreenModalComponent implements OnInit {
  @Input() projectId!: number;

  projects: Project[] = [
    {project: 'TIA', company: 'Klaere', description: '540,000 SF; 1,650-ton logistics warehouse.', involvement: 'Staff experience as project manager.'},
    {project: '100 Business Plaza', company: 'Klaere', description: '1,100-ton structural steel office building. Two basement levels 27,000 SF each, 14 floors above ground.', involvement: 'Staff experience as project manager.'},
    {project: 'Jardines de la Esperanza ', company: 'Klaere', description: '2,200 tons; 9-floor cemetery vault building.', involvement: 'Staff experience as project manager.'},
    {project: 'Biomar', company: 'Klaere', description: '600 tons; 10-floor industrial building.', involvement: 'Staff experience as project manager.'},
    {project: 'Cardiocorp', company: 'Klaere', description: '400 tons; 8-floor hospital.', involvement: 'Staff experience as project manager.'},
    {project: 'Terminal de Ambato', company: 'Klaere', description: '800-ton bus station.', involvement: 'Staff experience as project manager.'},
    {project: 'Fundametz', company: 'Klaere', description: '350-ton industrial warehouse.', involvement: 'Staff experience as project manager.'},
    {project: 'Mercado Central', company: 'Klaere', description: '300-ton market.', involvement: 'Staff experience as project manager.'},
    {project: 'San Miguel', company: 'Klaere', description: '450-ton industrial warehouse.', involvement: 'Staff experience as project manager.'},
    {project: 'Portrans', company: 'Klaere', description: '700-ton logistics warehouse.', involvement: 'Staff experience as project manager.'},
    {project: 'Cine Village', company: 'Klaere', description: '250-ton cinema theater.', involvement: 'Staff experience as project manager.'},
    {project: 'Aerovía', company: 'Geoforce', description: '275-ton gondola lift stations.', involvement: 'Staff experience as project manager.'},
    {project: 'Puentes Yahuana Alejandría', company: 'Geoforce', description: 'Two bridges of 120 tons and 140 LF span each.', involvement: 'Staff experience as project manager.'},
    {project: 'Puente Gye - Daule', company: 'Geoforce', description: '475-ton bridge.', involvement: 'Staff experience as project manager.'},
    {project: 'Songa', company: 'Geoforce', description: '450-ton cold storage warehouse.', involvement: 'Staff experience as project manager.'},
    {project: 'Indurama', company: 'Geoforce', description: '1,350-ton logistics warehouse.', involvement: 'Staff experience as project manager.'},
    {project: 'Omarsa', company: 'Geoforce', description: '675-ton cold storage warehouse.', involvement: 'Staff experience as project manager.'},
    {project: 'Berkley Landing', company: 'Roxata', description: 'Apartment building.', involvement: 'Miscellaneous metals shop drawings.'},
    {project: '98 NW 5th Av Renovation', company: 'Roxata', description: 'Apartment building renovation.', involvement: 'Miscellaneous metals shop drawings.'},
    {project: 'Moxy Wynwood', company: 'Roxata', description: '10-floor hotel building.', involvement: 'Miscellaneous metals and structural steel shop drawings.'},
    {project: 'Custom Residence', company: 'Roxata', description: 'Residence.', involvement: 'Miscellaneous metals and structural steel shop drawings.'},
    {project: 'The Houston Residence', company: 'Roxata', description: 'Residence.', involvement: 'Miscellaneous metals and structural steel shop drawings.'},
    {project: 'Canvas Office', company: 'Roxata', description: 'Office building.', involvement: 'Miscellaneous metals and structural steel shop drawings.'},
    {project: 'Advanced Cardiovascular Surgery Center', company: 'Roxata', description: 'Medical facility.', involvement: 'Miscellaneous metals and structural steel shop drawings.'},
    {project: 'Ocean Reef Housing', company: 'Roxata', description: '10-floor hotel building.', involvement: 'Waterproofing estimate.'},
    {project: 'Bal Harbour Shops Notch Infill', company: 'Roxata', description: '6-floor parking garage building.', involvement: 'Waterproofing estimate.'},
  ];

  project: Project | undefined;

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject() {
    this.project = this.projects[this.projectId];
  }

  open() {
    const modalElement = document.getElementById('fullScreenModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
