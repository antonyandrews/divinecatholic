import {
  Component,
  HostListener
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuOpen = false;

  isScrolled = false;

  toggleMenu(): void {

    this.menuOpen = !this.menuOpen;

  }

  @HostListener('window:scroll')
  onScroll(): void {

    this.isScrolled =
      window.scrollY > 40;

  }
}