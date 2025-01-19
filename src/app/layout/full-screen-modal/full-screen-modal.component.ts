import { Component, Input, OnInit } from '@angular/core';
declare var bootstrap: any;

interface Project {
  project: string,
  company: string;
  description: string;
  involvement: string;
  imagenes: any
}

@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.css']
})
export class FullScreenModalComponent implements OnInit {
  @Input() projectId!: number;

  projects: Project[] = [
    { project: 'TIA', company: 'Klaere', description: '540,000 SF; 1,650-ton logistics warehouse.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/01_Tia/01.jpg', 'assets/experience/01_Tia/02.jpg', 'assets/experience/01_Tia/03.jpg', 'assets/experience/01_Tia/04.jpg'] },
    { project: '100 Business Plaza', company: 'Klaere', description: '1,100-ton structural steel office building. Two basement levels 27,000 SF each, 14 floors above ground.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/02_100_Business/01.jpg', 'assets/experience/02_100_Business/02.jpg', 'assets/experience/02_100_Business/03.jpg', 'assets/experience/02_100_Business/04.jpg'] },
    { project: 'Jardines de la Esperanza ', company: 'Klaere', description: '2,200 tons; 9-floor cemetery vault building.', involvement: 'Staff experience as project manager.', imagenes: [ 'assets/experience/03_Jardines_de_la_Esperanza/01.jpg', 'assets/experience/03_Jardines_de_la_Esperanza/02.jpg', 'assets/experience/03_Jardines_de_la_Esperanza/03.jpg'] },
    { project: 'Biomar', company: 'Klaere', description: '600 tons; 10-floor industrial building.', involvement: 'Staff experience as project manager.', imagenes: [ 'assets/experience/04_Biomar/01.jpg', 'assets/experience/04_Biomar/02.jpg', 'assets/experience/04_Biomar/03.jpg', 'assets/experience/04_Biomar/04.jpg', 'assets/experience/04_Biomar/05.jpg'] },
    { project: 'Cardiocorp', company: 'Klaere', description: '400 tons; 8-floor hospital.', involvement: 'Staff experience as project manager.', imagenes: [ 'assets/experience/05_CardioCorp/01.jpg', 'assets/experience/05_CardioCorp/02.jpg', 'assets/experience/05_CardioCorp/03.jpg'] },
    { project: 'Terminal de Ambato', company: 'Klaere', description: '800-ton bus station.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/06_Terminal_de_Ambato/01.jpg', 'assets/experience/06_Terminal_de_Ambato/02.jpg', 'assets/experience/06_Terminal_de_Ambato/03.jpg'] },
    { project: 'Fundametz', company: 'Klaere', description: '350-ton industrial warehouse.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/07_Fundametz/01.jpg', 'assets/experience/07_Fundametz/02.jpg', 'assets/experience/07_Fundametz/03.jpg'] },
    { project: 'Mercado Central', company: 'Klaere', description: '300-ton market.', involvement: 'Staff experience as project manager.', imagenes: [ 'assets/experience/08_Mercado_Central/01.jpg', 'assets/experience/08_Mercado_Central/02.jpg' ] },
    { project: 'San Miguel', company: 'Klaere', description: '450-ton industrial warehouse.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/09_San_Miguel/01.jpg'] },
    { project: 'Portrans', company: 'Klaere', description: '700-ton logistics warehouse.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/10_Portrans/01.jpg', 'assets/experience/10_Portrans/02.jpg'] },
    { project: 'Cine Village', company: 'Klaere', description: '250-ton cinema theater.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/11_Village/01.jpg'] },
    { project: 'Aerovía', company: 'Geoforce', description: '275-ton gondola lift stations.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/12_Aerovia/01.jpeg', 'assets/experience/12_Aerovia/02.jpg', 'assets/experience/12_Aerovia/03.jpg', 'assets/experience/12_Aerovia/04.jpeg', 'assets/experience/12_Aerovia/05.jpg','assets/experience/12_Aerovia/06.jpeg', 'assets/experience/12_Aerovia/07.jpg'] },
    { project: 'Puentes Yahuana Alejandría', company: 'Geoforce', description: 'Two bridges of 120 tons and 140 LF span each.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/13_Puentes_Yahuana/01.jpg', 'assets/experience/13_Puentes_Yahuana/02.jpg', 'assets/experience/13_Puentes_Yahuana/03.jpg', 'assets/experience/13_Puentes_Yahuana/04.jpg', 'assets/experience/13_Puentes_Yahuana/05.jpg', 'assets/experience/13_Puentes_Yahuana/06.jpg'] },
    { project: 'Puente Gye - Daule', company: 'Geoforce', description: '475-ton bridge.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/14_Puente_la_Joya/01.jpg', 'assets/experience/14_Puente_la_Joya/02.jpg', 'assets/experience/14_Puente_la_Joya/03.jpg', 'assets/experience/14_Puente_la_Joya/04.jpg', 'assets/experience/14_Puente_la_Joya/05.jpg', 'assets/experience/14_Puente_la_Joya/06.jpg'] },
    { project: 'Songa', company: 'Geoforce', description: '450-ton cold storage warehouse.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/15_Songa/01.jpg', 'assets/experience/15_Songa/02.jpg', 'assets/experience/15_Songa/03.jpg', 'assets/experience/15_Songa/04.jpg', 'assets/experience/15_Songa/05.jpg', 'assets/experience/15_Songa/06.jpg'] },
    { project: 'Omarsa', company: 'Geoforce', description: '675-ton cold storage warehouse.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/17_Omarsa/01.jpg','assets/experience/17_Omarsa/02.jpg','assets/experience/17_Omarsa/03.jpg','assets/experience/17_Omarsa/04.jpg','assets/experience/17_Omarsa/05.jpg','assets/experience/17_Omarsa/06.jpg','assets/experience/17_Omarsa/07.jpg','assets/experience/17_Omarsa/08.jpg'] },
    { project: 'Berkley Landing', company: 'Roxata', description: 'Apartment building.', involvement: 'Miscellaneous metals shop drawings.', imagenes: ['assets/experience/18_Berkeley_Landing/01.png'] },
    { project: 'Moxy Wynwood', company: 'Roxata', description: '10-floor hotel building.', involvement: 'Miscellaneous metals and structural steel shop drawings.', imagenes: ['assets/experience/20_Moxy/01.png']  },
    { project: 'Custom Residence', company: 'Roxata', description: 'Residence.', involvement: 'Miscellaneous metals and structural steel shop drawings.', imagenes: ['assets/experience/21_Custom_Residence/01.png']  },
    { project: 'Canvas Office', company: 'Roxata', description: 'Office building.', involvement: 'Miscellaneous metals and structural steel shop drawings.', imagenes: ['assets/experience/23_Canvas_Office/01.png'] },
    { project: 'Advanced Cardiovascular Surgery Center', company: 'Roxata', description: 'Medical facility.', involvement: 'Miscellaneous metals and structural steel shop drawings.', imagenes: ['assets/experience/24_Advanced_Cardiovascular/01.png'] },
    { project: 'Ocean Reef Housing', company: 'Roxata', description: '10-floor hotel building.', involvement: 'Waterproofing estimate.', imagenes: ['assets/experience/25_Ocean_Reef_Housing/01.png'] },
    { project: 'Bal Harbour Shops Notch Infill', company: 'Roxata', description: '6-floor parking garage building.', involvement: 'Waterproofing estimate.', imagenes: ['assets/experience/26_Bal_Harbour_Notch/01.png', 'assets/experience/26_Bal_Harbour_Notch/02.png'] },
    { project: 'DPW Logistcal Center', company: 'Geoforce', description: '200-ton logistics warehouse.', involvement: 'Staff experience as project manager.', imagenes: ['assets/experience/27_DPW/01.jpg', 'assets/experience/27_DPW/02.jpg', 'assets/experience/27_DPW/03.jpg', 'assets/experience/27_DPW/04.jpg', 'assets/experience/27_DPW/05.jpg'] },
  ];

  project: Project | undefined;
  currentImage: string | undefined;
  currentIndex: number = 0;

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

  openImageViewer(index: number): void {
    this.currentIndex = index;
    this.currentImage = this.project?.imagenes[this.currentIndex];
    const modalElement = document.getElementById('imageViewer');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  nextImage(): void {
    if (this.project) {
      this.currentIndex = (this.currentIndex + 1) % this.project.imagenes.length;
      this.currentImage = this.project.imagenes[this.currentIndex];
    }
  }

  prevImage(): void {
    if (this.project) {
      this.currentIndex = (this.currentIndex - 1 + this.project.imagenes.length) % this.project.imagenes.length;
      this.currentImage = this.project.imagenes[this.currentIndex];
    }
  }
}
